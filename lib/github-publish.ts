/**
 * GitHub API for reading/writing files from Vercel serverless.
 * Used by Blog Bot, Lead Hunter, and Follow-Up Engine for persistent state.
 * Creates atomic multi-file commits via the GitHub REST API (no git CLI needed).
 */

const GITHUB_API = 'https://api.github.com';
const REPO_OWNER = 'support708';
const REPO_NAME = 'theanswerengine-nextjs';
const BRANCH = 'main';

interface GitHubFile {
  path: string;
  content: string;
}

async function githubFetch(endpoint: string, options: RequestInit = {}): Promise<Response> {
  const token = process.env.GITHUB_TOKEN;
  if (!token) throw new Error('GITHUB_TOKEN not configured');

  return fetch(`${GITHUB_API}${endpoint}`, {
    ...options,
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/vnd.github.v3+json',
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });
}

/**
 * Get the current HEAD commit SHA for the branch.
 */
async function getHeadSha(): Promise<string> {
  const res = await githubFetch(`/repos/${REPO_OWNER}/${REPO_NAME}/git/ref/heads/${BRANCH}`);
  if (!res.ok) throw new Error(`Failed to get HEAD: ${res.status}`);
  const data = await res.json();
  return data.object.sha;
}

/**
 * Get the tree SHA for a commit.
 */
async function getTreeSha(commitSha: string): Promise<string> {
  const res = await githubFetch(`/repos/${REPO_OWNER}/${REPO_NAME}/git/commits/${commitSha}`);
  if (!res.ok) throw new Error(`Failed to get commit: ${res.status}`);
  const data = await res.json();
  return data.tree.sha;
}

/**
 * Create a blob for file content.
 */
async function createBlob(content: string): Promise<string> {
  const res = await githubFetch(`/repos/${REPO_OWNER}/${REPO_NAME}/git/blobs`, {
    method: 'POST',
    body: JSON.stringify({
      content: Buffer.from(content).toString('base64'),
      encoding: 'base64',
    }),
  });
  if (!res.ok) throw new Error(`Failed to create blob: ${res.status}`);
  const data = await res.json();
  return data.sha;
}

/**
 * Create a new tree with the given files.
 */
async function createTree(baseTreeSha: string, files: { path: string; blobSha: string }[]): Promise<string> {
  const tree = files.map(f => ({
    path: f.path,
    mode: '100644' as const,
    type: 'blob' as const,
    sha: f.blobSha,
  }));

  const res = await githubFetch(`/repos/${REPO_OWNER}/${REPO_NAME}/git/trees`, {
    method: 'POST',
    body: JSON.stringify({ base_tree: baseTreeSha, tree }),
  });
  if (!res.ok) throw new Error(`Failed to create tree: ${res.status}`);
  const data = await res.json();
  return data.sha;
}

/**
 * Create a commit.
 */
async function createCommit(treeSha: string, parentSha: string, message: string): Promise<string> {
  const res = await githubFetch(`/repos/${REPO_OWNER}/${REPO_NAME}/git/commits`, {
    method: 'POST',
    body: JSON.stringify({
      message,
      tree: treeSha,
      parents: [parentSha],
      author: {
        name: 'TAE Blog Bot',
        email: 'bot@theanswerengine.ai',
        date: new Date().toISOString(),
      },
    }),
  });
  if (!res.ok) throw new Error(`Failed to create commit: ${res.status}`);
  const data = await res.json();
  return data.sha;
}

/**
 * Update branch ref to point to new commit.
 */
async function updateRef(commitSha: string): Promise<void> {
  const res = await githubFetch(`/repos/${REPO_OWNER}/${REPO_NAME}/git/refs/heads/${BRANCH}`, {
    method: 'PATCH',
    body: JSON.stringify({ sha: commitSha }),
  });
  if (!res.ok) throw new Error(`Failed to update ref: ${res.status}`);
}

/**
 * Publish blog files to GitHub via API.
 * Creates a single commit with all provided files.
 */
export async function publishToGitHub(
  files: GitHubFile[],
  commitMessage: string,
): Promise<{ commitSha: string; url: string }> {
  // 1. Get current HEAD
  const headSha = await getHeadSha();
  const baseTreeSha = await getTreeSha(headSha);

  // 2. Create blobs for each file
  const blobRefs = await Promise.all(
    files.map(async (file) => ({
      path: file.path,
      blobSha: await createBlob(file.content),
    }))
  );

  // 3. Create new tree
  const newTreeSha = await createTree(baseTreeSha, blobRefs);

  // 4. Create commit
  const commitSha = await createCommit(newTreeSha, headSha, commitMessage);

  // 5. Update branch ref
  await updateRef(commitSha);

  return {
    commitSha,
    url: `https://github.com/${REPO_OWNER}/${REPO_NAME}/commit/${commitSha}`,
  };
}

/**
 * Get the current content of a file from GitHub.
 * Throws on failure (use getFileContentSafe for optional files).
 */
export async function getFileContent(filePath: string): Promise<string> {
  const res = await githubFetch(
    `/repos/${REPO_OWNER}/${REPO_NAME}/contents/${filePath}?ref=${BRANCH}`,
  );
  if (!res.ok) throw new Error(`Failed to get file ${filePath}: ${res.status}`);
  const data = await res.json();
  return Buffer.from(data.content, 'base64').toString('utf-8');
}

/**
 * Get file content from GitHub, returning null if file doesn't exist (404).
 * Used for state files that may not exist on first run.
 */
/**
 * List files in a GitHub directory.
 * Returns an array of filenames (not full paths).
 * Returns empty array if directory doesn't exist.
 */
export async function listDirectoryFiles(dirPath: string): Promise<string[]> {
  const token = process.env.GITHUB_TOKEN;
  if (!token) return [];

  const res = await githubFetch(
    `/repos/${REPO_OWNER}/${REPO_NAME}/contents/${dirPath}?ref=${BRANCH}`,
  );
  if (!res.ok) return [];
  const data = await res.json();
  if (!Array.isArray(data)) return [];
  return data
    .filter((item: { type: string }) => item.type === 'file')
    .map((item: { name: string }) => item.name);
}

export async function getFileContentSafe(filePath: string): Promise<string | null> {
  const token = process.env.GITHUB_TOKEN;
  if (!token) return null;

  const res = await githubFetch(
    `/repos/${REPO_OWNER}/${REPO_NAME}/contents/${filePath}?ref=${BRANCH}`,
  );
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`Failed to get file ${filePath}: ${res.status}`);
  const data = await res.json();
  return Buffer.from(data.content, 'base64').toString('utf-8');
}
