/**
 * Data I/O for Lead Hunter Bot.
 * Manages hunt-state.json, hunt-log.json, and prospect-backlog.json.
 *
 * On Vercel: reads from GitHub API, writes batched into a single commit.
 * Locally: reads/writes from filesystem as before.
 */

import { promises as fs } from 'fs';
import path from 'path';
import type { HuntState, HuntSession, RawProspect } from './hunter-types';
import { DEFAULT_HUNT_STATE } from './hunter-types';
import { getFileContentSafe, publishToGitHub } from './github-publish';

const IS_VERCEL = !!process.env.VERCEL;

const DATA_DIR = path.join(process.cwd(), 'data');
const STATE_PATH = path.join(DATA_DIR, 'hunt-state.json');
const LOG_PATH = path.join(DATA_DIR, 'hunt-log.json');
const BACKLOG_PATH = path.join(DATA_DIR, 'prospect-backlog.json');

// GitHub paths (relative to repo root)
const GH_STATE = 'data/hunt-state.json';
const GH_LOG = 'data/hunt-log.json';
const GH_BACKLOG = 'data/prospect-backlog.json';
const GH_LEADS = 'data/leads.json';

async function ensureDir(): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true });
}

// --- Hunt State ---

export async function readHuntState(): Promise<HuntState> {
  try {
    if (IS_VERCEL) {
      const data = await getFileContentSafe(GH_STATE);
      if (data) return JSON.parse(data) as HuntState;
      return { ...DEFAULT_HUNT_STATE };
    }
    const data = await fs.readFile(STATE_PATH, 'utf-8');
    return JSON.parse(data) as HuntState;
  } catch {
    return { ...DEFAULT_HUNT_STATE };
  }
}

export async function writeHuntState(state: HuntState): Promise<void> {
  if (IS_VERCEL) return; // Batched via flushHuntDataToGitHub
  await ensureDir();
  await fs.writeFile(STATE_PATH, JSON.stringify(state, null, 2), 'utf-8');
}

// --- Hunt Log ---

export async function readHuntLog(): Promise<HuntSession[]> {
  try {
    if (IS_VERCEL) {
      const data = await getFileContentSafe(GH_LOG);
      if (data) return JSON.parse(data) as HuntSession[];
      return [];
    }
    const data = await fs.readFile(LOG_PATH, 'utf-8');
    return JSON.parse(data) as HuntSession[];
  } catch {
    return [];
  }
}

export async function appendHuntLog(session: HuntSession): Promise<void> {
  if (IS_VERCEL) return; // Batched via flushHuntDataToGitHub
  await ensureDir();
  const log = await readHuntLog();
  log.push(session);
  const trimmed = log.slice(-100);
  await fs.writeFile(LOG_PATH, JSON.stringify(trimmed, null, 2), 'utf-8');
}

// --- Prospect Backlog (P3) ---

export async function readBacklog(): Promise<RawProspect[]> {
  try {
    if (IS_VERCEL) {
      const data = await getFileContentSafe(GH_BACKLOG);
      if (data) return JSON.parse(data) as RawProspect[];
      return [];
    }
    const data = await fs.readFile(BACKLOG_PATH, 'utf-8');
    return JSON.parse(data) as RawProspect[];
  } catch {
    return [];
  }
}

export async function writeBacklog(prospects: RawProspect[]): Promise<void> {
  if (IS_VERCEL) return; // Batched via flushHuntDataToGitHub
  await ensureDir();
  const trimmed = prospects.slice(-500);
  await fs.writeFile(BACKLOG_PATH, JSON.stringify(trimmed, null, 2), 'utf-8');
}

// --- Batch GitHub Commit (Vercel only) ---

/**
 * Flush all hunt data to GitHub in a single atomic commit.
 * Called at the end of each hunt session on Vercel.
 * Includes: hunt state, hunt log, backlog, and leads.
 */
export async function flushHuntDataToGitHub(data: {
  state: HuntState;
  log: HuntSession[];
  backlog: RawProspect[];
  leads: import('./types').Lead[];
  sessionSummary: string;
}): Promise<{ commitSha: string }> {
  const files = [
    { path: GH_STATE, content: JSON.stringify(data.state, null, 2) },
    { path: GH_LOG, content: JSON.stringify(data.log.slice(-100), null, 2) },
    { path: GH_BACKLOG, content: JSON.stringify(data.backlog.slice(-500), null, 2) },
    { path: GH_LEADS, content: JSON.stringify(data.leads, null, 2) },
  ];

  const { commitSha } = await publishToGitHub(files, `hunt: ${data.sessionSummary}`);
  return { commitSha };
}
