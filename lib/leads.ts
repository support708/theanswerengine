/**
 * Lead data I/O.
 * On Vercel: reads/writes via GitHub API for persistence.
 * Locally: reads/writes from filesystem.
 */

import { promises as fs } from 'fs';
import path from 'path';
import type { Lead } from './types';
import { getFileContentSafe, publishToGitHub } from './github-publish';

const IS_VERCEL = !!process.env.VERCEL;
const LEADS_PATH = path.join(process.cwd(), 'data', 'leads.json');
const GH_LEADS = 'data/leads.json';

export async function readLeads(): Promise<Lead[]> {
  try {
    if (IS_VERCEL) {
      const data = await getFileContentSafe(GH_LEADS);
      if (data) return JSON.parse(data) as Lead[];
      return [];
    }
    const data = await fs.readFile(LEADS_PATH, 'utf-8');
    return JSON.parse(data) as Lead[];
  } catch {
    return [];
  }
}

export async function writeLeads(leads: Lead[]): Promise<void> {
  if (IS_VERCEL) {
    // On Vercel, persist to GitHub so data survives between function invocations
    await publishToGitHub(
      [{ path: GH_LEADS, content: JSON.stringify(leads, null, 2) }],
      `data: update leads (${leads.length} total)`,
    );
    return;
  }
  await fs.mkdir(path.dirname(LEADS_PATH), { recursive: true });
  await fs.writeFile(LEADS_PATH, JSON.stringify(leads, null, 2), 'utf-8');
}

export async function getLeadById(id: string): Promise<Lead | null> {
  const leads = await readLeads();
  return leads.find(l => l.id === id) ?? null;
}

export async function updateLead(id: string, updates: Partial<Lead>): Promise<Lead | null> {
  const leads = await readLeads();
  const idx = leads.findIndex(l => l.id === id);
  if (idx === -1) return null;

  leads[idx] = {
    ...leads[idx],
    ...updates,
    updatedAt: new Date().toISOString(),
  };

  await writeLeads(leads);
  return leads[idx];
}

/**
 * Atomic flush: write leads + extra files in a single GitHub commit.
 * Used by the pipeline to batch all state changes + report HTML into one commit.
 * Falls back to filesystem writes locally.
 */
export async function flushLeadsWithFiles(
  leads: Lead[],
  extraFiles: { path: string; content: string }[],
  commitMessage: string,
): Promise<void> {
  if (IS_VERCEL) {
    const files = [
      { path: GH_LEADS, content: JSON.stringify(leads, null, 2) },
      ...extraFiles,
    ];
    await publishToGitHub(files, commitMessage);
  } else {
    // Local: write leads + extra files to filesystem
    await fs.mkdir(path.dirname(LEADS_PATH), { recursive: true });
    await fs.writeFile(LEADS_PATH, JSON.stringify(leads, null, 2), 'utf-8');
    for (const file of extraFiles) {
      const filePath = path.join(process.cwd(), file.path);
      await fs.mkdir(path.dirname(filePath), { recursive: true });
      await fs.writeFile(filePath, file.content, 'utf-8');
    }
  }
}

export function generateSlug(businessName: string): string {
  const base = businessName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
  // Append short hash to prevent slug collisions between similar business names
  const hash = Math.random().toString(36).slice(2, 6);
  return `${base}-${hash}`;
}

export function generateId(): string {
  return `lead_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}
