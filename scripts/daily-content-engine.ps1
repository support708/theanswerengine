# Daily Content Engine - Auto-generates 1 blog article via Claude Code
# Triggered by Windows Task Scheduler daily when PC is on
# Cost: $0 (runs through Claude Code subscription, no API calls)
#
# To install: Run this in PowerShell (Admin):
#   schtasks /create /tn "DailyContentEngine" /tr "powershell.exe -ExecutionPolicy Bypass -File 'C:\Users\Justi\theanswerengine-nextjs\scripts\daily-content-engine.ps1'" /sc daily /st 10:00 /rl HIGHEST /it
#
# To remove: schtasks /delete /tn "DailyContentEngine" /f
# To run now: schtasks /run /tn "DailyContentEngine"
# To check:   schtasks /query /tn "DailyContentEngine"

$ErrorActionPreference = "Stop"
$logDir = "C:\Users\Justi\theanswerengine-nextjs\logs"
$logFile = "$logDir\content-engine-$(Get-Date -Format 'yyyy-MM-dd').log"
$lockFile = "$logDir\content-engine.lock"
$projectDir = "C:\Users\Justi\theanswerengine-nextjs"

# Ensure log directory exists
if (-not (Test-Path $logDir)) { New-Item -ItemType Directory -Path $logDir -Force | Out-Null }

function Log($msg) {
    $ts = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    "$ts | $msg" | Tee-Object -FilePath $logFile -Append
}

# Prevent duplicate runs
if (Test-Path $lockFile) {
    $lockAge = (Get-Date) - (Get-Item $lockFile).LastWriteTime
    if ($lockAge.TotalHours -lt 2) {
        Log "SKIP: Content Engine already running (lock file age: $($lockAge.TotalMinutes.ToString('F0'))m)"
        exit 0
    }
    Log "WARN: Stale lock file found (age: $($lockAge.TotalHours.ToString('F1'))h), removing"
    Remove-Item $lockFile -Force
}

# Create lock file
New-Item -ItemType File -Path $lockFile -Force | Out-Null

try {
    Log "START: Daily Content Engine"

    # Check if claude CLI is available
    $claudePath = "C:\Users\Justi\AppData\Roaming\npm\claude.cmd"
    if (-not (Test-Path $claudePath)) {
        Log "ERROR: Claude CLI not found at $claudePath"
        exit 1
    }

    # Run Claude Code in non-interactive mode with the content engine skill
    # -p flag = non-interactive (pipe mode), sends prompt and exits
    # --dangerously-skip-permissions = allows file writes without prompts (needed for unattended)
    Log "Running: claude -p '/content-engine 1' in $projectDir"

    $process = Start-Process -FilePath $claudePath `
        -ArgumentList "-p", "/content-engine 1", "--dangerously-skip-permissions" `
        -WorkingDirectory $projectDir `
        -NoNewWindow `
        -Wait `
        -PassThru `
        -RedirectStandardOutput "$logDir\claude-stdout-$(Get-Date -Format 'yyyy-MM-dd').log" `
        -RedirectStandardError "$logDir\claude-stderr-$(Get-Date -Format 'yyyy-MM-dd').log"

    if ($process.ExitCode -eq 0) {
        Log "SUCCESS: Content Engine completed (exit code 0)"
    } else {
        Log "ERROR: Content Engine failed (exit code $($process.ExitCode))"
    }

} catch {
    Log "ERROR: $($_.Exception.Message)"
} finally {
    # Always clean up lock file
    if (Test-Path $lockFile) { Remove-Item $lockFile -Force }
    Log "END: Daily Content Engine"

    # Clean up logs older than 30 days
    Get-ChildItem "$logDir\*.log" | Where-Object { $_.LastWriteTime -lt (Get-Date).AddDays(-30) } | Remove-Item -Force
}
