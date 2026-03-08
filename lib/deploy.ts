/**
 * Auto-deploy reports to production via GitHub API.
 * Commits the report HTML file to the repo, triggering Vercel auto-deploy.
 *
 * Requires GITHUB_TOKEN env var with repo write permissions.
 * Generate one at: https://github.com/settings/tokens
 * Scope needed: "repo" (full control of private repositories)
 */

const GITHUB_API = 'https://api.github.com';
const REPO_OWNER = 'support708';
const REPO_NAME = 'theanswerengine';
const BRANCH = 'main';

interface GitHubFileResponse {
  content: { sha: string; html_url: string };
  commit: { sha: string; message: string };
}

/**
 * Deploy a report HTML file to the repo via GitHub API.
 * Creates or updates the file at public/blindspot/{slug}.html.
 */
export async function deployReport(slug: string, htmlContent: string): Promise<{
  success: boolean;
  commitSha?: string;
  error?: string;
}> {
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    return { success: false, error: 'GITHUB_TOKEN not configured' };
  }

  const filePath = `public/blindspot/${slug}.html`;
  const encodedContent = Buffer.from(htmlContent).toString('base64');

  try {
    // Check if file already exists (need SHA for updates)
    let existingSha: string | undefined;
    try {
      const getRes = await fetch(
        `${GITHUB_API}/repos/${REPO_OWNER}/${REPO_NAME}/contents/${filePath}?ref=${BRANCH}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/vnd.github.v3+json',
          },
        }
      );
      if (getRes.ok) {
        const existing = await getRes.json();
        existingSha = existing.sha;
      }
    } catch {
      // File doesn't exist yet — that's fine
    }

    // Create or update the file
    const body: Record<string, unknown> = {
      message: `Deploy report: ${slug}`,
      content: encodedContent,
      branch: BRANCH,
    };
    if (existingSha) {
      body.sha = existingSha;
    }

    const putRes = await fetch(
      `${GITHUB_API}/repos/${REPO_OWNER}/${REPO_NAME}/contents/${filePath}`,
      {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/vnd.github.v3+json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      }
    );

    if (!putRes.ok) {
      const errText = await putRes.text();
      return { success: false, error: `GitHub API error (${putRes.status}): ${errText}` };
    }

    const result = (await putRes.json()) as GitHubFileResponse;
    return {
      success: true,
      commitSha: result.commit.sha,
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : String(error),
    };
  }
}

/**
 * Check if auto-deploy is configured.
 */
export function isDeployConfigured(): boolean {
  return !!process.env.GITHUB_TOKEN;
}
