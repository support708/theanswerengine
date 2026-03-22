import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';

const HEARTBEAT_PATH = join(process.cwd(), 'data', 'heartbeat.json');

export interface ProcessStatus {
  name: string;
  status: 'online' | 'stopped' | 'errored' | 'unknown';
  pid: number | null;
  cpu: string;
  memory: string;
  uptime: string;
  restarts: number;
}

export interface ScheduledTask {
  id: string;
  description: string;
  schedule: string;
  enabled: boolean;
  lastRun: string | null;
  lastResult: 'success' | 'failure' | null;
}

export interface HeartbeatData {
  lastUpdated: string | null;
  processes: ProcessStatus[];
  scheduledTasks: ScheduledTask[];
  systemHealth: 'healthy' | 'degraded' | 'critical' | 'unknown';
  dailyContext: string;
  machine: {
    hostname: string;
    platform: string;
    uptime: number;
    nodeVersion: string;
  } | null;
}

export interface DashboardData extends HeartbeatData {
  answerEngine: {
    totalLeads: number;
    activeLeads: number;
    closedWon: number;
    closedLost: number;
    huntEnabled: boolean;
  };
  projects: ProjectSummary[];
}

export interface ProjectSummary {
  name: string;
  path: string;
  status: 'active' | 'paused' | 'planned';
  description: string;
}

export async function readHeartbeat(): Promise<HeartbeatData> {
  try {
    const raw = await readFile(HEARTBEAT_PATH, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return {
      lastUpdated: null,
      processes: [],
      scheduledTasks: [],
      systemHealth: 'unknown',
      dailyContext: '',
      machine: null,
    };
  }
}

export async function writeHeartbeat(data: HeartbeatData): Promise<void> {
  await writeFile(HEARTBEAT_PATH, JSON.stringify(data, null, 2), 'utf-8');
}

export function getProjects(): ProjectSummary[] {
  return [
    {
      name: 'TC Bot',
      path: 'C:\\Users\\Justi\\Desktop\\TC Bot',
      status: 'active',
      description: 'Transaction management — Gmail, Slack, FUB, Sheets, DocuSign',
    },
    {
      name: 'Justin Clone (FUB Mastermind)',
      path: 'C:\\Users\\Justi\\FUB-Mastermind',
      status: 'planned',
      description: 'AI outreach bot — Twilio SMS, FUB, Claude API',
    },
    {
      name: 'The Answer Engine',
      path: 'C:\\Users\\Justi\\theanswerengine-nextjs',
      status: 'active',
      description: 'AEO business site — pipeline, lead hunter, blog engine',
    },
    {
      name: 'Palmer Plumbing',
      path: 'C:\\Users\\Justi\\palmer-plumbing',
      status: 'active',
      description: 'Prospect site — Next.js 15, 40 AEO articles',
    },
    {
      name: 'Davis Agency',
      path: 'N/A (Luxury Presence CMS)',
      status: 'active',
      description: 'Signed client — Austin TX luxury real estate AEO',
    },
    {
      name: 'Telegram Bot',
      path: 'PM2: telegram-bot',
      status: 'active',
      description: 'Remote Claude Code access via Telegram',
    },
  ];
}
