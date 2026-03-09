/**
 * Data I/O for the Learning Retrospective system.
 * Manages learning-log.json (weekly insights + hunt priorities).
 *
 * On Vercel: reads from GitHub API, writes via publishToGitHub.
 * Locally: reads/writes from filesystem.
 */

import { promises as fs } from 'fs';
import path from 'path';
import { getFileContentSafe, publishToGitHub } from './github-publish';
import type { WeeklyRetrospective, HuntPriority } from './learning';

const IS_VERCEL = !!process.env.VERCEL;
const DATA_DIR = path.join(process.cwd(), 'data');
const LEARNING_PATH = path.join(DATA_DIR, 'learning-log.json');
const GH_LEARNING = 'data/learning-log.json';

export interface LearningLog {
  retrospectives: WeeklyRetrospective[];
  currentPriorities: HuntPriority[];
  updatedAt: string | null;
}

const EMPTY_LOG: LearningLog = {
  retrospectives: [],
  currentPriorities: [],
  updatedAt: null,
};

export async function readLearningLog(): Promise<LearningLog> {
  try {
    if (IS_VERCEL) {
      const data = await getFileContentSafe(GH_LEARNING);
      if (data) return JSON.parse(data) as LearningLog;
      return { ...EMPTY_LOG };
    }
    const data = await fs.readFile(LEARNING_PATH, 'utf-8');
    return JSON.parse(data) as LearningLog;
  } catch {
    return { ...EMPTY_LOG };
  }
}

export async function writeLearningLog(log: LearningLog): Promise<void> {
  const content = JSON.stringify(log, null, 2);

  if (IS_VERCEL) {
    await publishToGitHub(
      [{ path: GH_LEARNING, content }],
      `retro: weekly learning update (${log.retrospectives.length} retrospectives)`,
    );
    return;
  }

  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(LEARNING_PATH, content, 'utf-8');
}

/**
 * Convenience: get just the current hunt priorities without loading full log.
 * Returns empty array if no retrospective has run yet.
 */
export async function getCurrentHuntPriorities(): Promise<HuntPriority[]> {
  const log = await readLearningLog();
  return log.currentPriorities;
}
