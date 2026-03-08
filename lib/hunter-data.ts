/**
 * Data I/O for Lead Hunter Bot.
 * Manages hunt-state.json, hunt-log.json, and prospect-backlog.json.
 * Mirrors the pattern in lib/leads.ts.
 */

import { promises as fs } from 'fs';
import path from 'path';
import type { HuntState, HuntSession, RawProspect } from './hunter-types';
import { DEFAULT_HUNT_STATE } from './hunter-types';

const DATA_DIR = path.join(process.cwd(), 'data');
const STATE_PATH = path.join(DATA_DIR, 'hunt-state.json');
const LOG_PATH = path.join(DATA_DIR, 'hunt-log.json');
const BACKLOG_PATH = path.join(DATA_DIR, 'prospect-backlog.json');

async function ensureDir(): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true });
}

// --- Hunt State ---

export async function readHuntState(): Promise<HuntState> {
  try {
    const data = await fs.readFile(STATE_PATH, 'utf-8');
    return JSON.parse(data) as HuntState;
  } catch {
    return { ...DEFAULT_HUNT_STATE };
  }
}

export async function writeHuntState(state: HuntState): Promise<void> {
  await ensureDir();
  await fs.writeFile(STATE_PATH, JSON.stringify(state, null, 2), 'utf-8');
}

// --- Hunt Log ---

export async function readHuntLog(): Promise<HuntSession[]> {
  try {
    const data = await fs.readFile(LOG_PATH, 'utf-8');
    return JSON.parse(data) as HuntSession[];
  } catch {
    return [];
  }
}

export async function appendHuntLog(session: HuntSession): Promise<void> {
  await ensureDir();
  const log = await readHuntLog();
  log.push(session);
  // Keep last 100 sessions
  const trimmed = log.slice(-100);
  await fs.writeFile(LOG_PATH, JSON.stringify(trimmed, null, 2), 'utf-8');
}

// --- Prospect Backlog (P3) ---

export async function readBacklog(): Promise<RawProspect[]> {
  try {
    const data = await fs.readFile(BACKLOG_PATH, 'utf-8');
    return JSON.parse(data) as RawProspect[];
  } catch {
    return [];
  }
}

export async function writeBacklog(prospects: RawProspect[]): Promise<void> {
  await ensureDir();
  // Keep last 500 backlog entries
  const trimmed = prospects.slice(-500);
  await fs.writeFile(BACKLOG_PATH, JSON.stringify(trimmed, null, 2), 'utf-8');
}
