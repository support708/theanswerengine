import { promises as fs } from 'fs';
import path from 'path';
import type { Lead } from './types';

const LEADS_PATH = path.join(process.cwd(), 'data', 'leads.json');

export async function readLeads(): Promise<Lead[]> {
  try {
    const data = await fs.readFile(LEADS_PATH, 'utf-8');
    return JSON.parse(data) as Lead[];
  } catch {
    return [];
  }
}

export async function writeLeads(leads: Lead[]): Promise<void> {
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

export function generateSlug(businessName: string): string {
  return businessName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export function generateId(): string {
  return `lead_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}
