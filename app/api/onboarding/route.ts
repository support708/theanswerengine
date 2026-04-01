import { NextRequest, NextResponse } from 'next/server';
import { readLeads, writeLeads } from '@/lib/leads';
import { sanitizeField, sanitizeEmail, sanitizeUrl } from '@/lib/sanitize';
import type { Lead } from '@/lib/types';
import fs from 'fs/promises';
import path from 'path';

const AEO_CLIENTS_DIR = 'C:/Users/Justi/aeo-clients';
const AEO_OUTPUT_DIR = 'C:/Users/Justi/aeo-output';

interface OnboardingRequest {
  leadId?: string;
  businessName: string;
  contactFirstName: string;
  contactLastName?: string;
  contactEmail: string;
  phone?: string;
  websiteUrl?: string;
  serviceCategory: string;
  serviceArea: string;
  city: string;
  state: string;
  license?: string;
  brandVoice?: string;
  tier?: 'foundation' | 'authority' | 'dominance';
}

interface ClientConfig {
  slug: string;
  business: {
    name: string;
    phone: string;
    email: string;
    website: string;
    license: string;
    serviceCategory: string;
  };
  contact: {
    firstName: string;
    lastName: string;
    email: string;
  };
  location: {
    primaryCity: string;
    state: string;
    serviceArea: string;
  };
  brand: {
    voice: string;
    tagline: string;
  };
  services: string[];
  cities: string[];
  onboarding: {
    startedAt: string;
    tier: string;
    status: 'pending_contract' | 'pending_payment' | 'pending_interview' | 'content_generation' | 'active' | 'paused';
    interviewAnswers: Record<string, string> | null;
  };
}

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

/**
 * POST /api/onboarding — Start client onboarding
 * Creates client config, output directory, and updates lead status
 */
export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as OnboardingRequest;

    // Validate required fields
    const required = ['businessName', 'contactFirstName', 'contactEmail', 'serviceCategory', 'serviceArea', 'city', 'state'];
    for (const field of required) {
      if (!body[field as keyof OnboardingRequest]) {
        return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 });
      }
    }

    const slug = slugify(body.businessName);

    // Check if client config already exists
    const configPath = path.join(AEO_CLIENTS_DIR, `${slug}.json`);
    try {
      await fs.access(configPath);
      return NextResponse.json({ error: `Client config already exists: ${slug}.json` }, { status: 409 });
    } catch {
      // File doesn't exist — good, proceed
    }

    // Build client config
    const config: ClientConfig = {
      slug,
      business: {
        name: sanitizeField('businessName', body.businessName),
        phone: body.phone || '',
        email: sanitizeEmail(body.contactEmail),
        website: body.websiteUrl ? sanitizeUrl(body.websiteUrl) : '',
        license: body.license || '',
        serviceCategory: body.serviceCategory,
      },
      contact: {
        firstName: sanitizeField('contactFirstName', body.contactFirstName),
        lastName: body.contactLastName || '',
        email: sanitizeEmail(body.contactEmail),
      },
      location: {
        primaryCity: body.city,
        state: body.state,
        serviceArea: body.serviceArea,
      },
      brand: {
        voice: body.brandVoice || 'Professional, trustworthy, local expert',
        tagline: '',
      },
      services: [],
      cities: [body.city],
      onboarding: {
        startedAt: new Date().toISOString(),
        tier: body.tier || 'foundation',
        status: 'pending_contract',
        interviewAnswers: null,
      },
    };

    // Write client config
    await fs.writeFile(configPath, JSON.stringify(config, null, 2), 'utf-8');

    // Create output directory
    const outputDir = path.join(AEO_OUTPUT_DIR, slug);
    await fs.mkdir(outputDir, { recursive: true });

    // Update lead status if leadId provided
    if (body.leadId) {
      const leads = await readLeads();
      const lead = leads.find((l: Lead) => l.id === body.leadId);
      if (lead) {
        lead.status = 'closed_won';
        lead.notes = `${lead.notes || ''}\n[${new Date().toISOString()}] Onboarding started — ${body.tier || 'foundation'} tier`;
        await writeLeads(leads);
      }
    }

    // Generate interview questions based on service category
    const interviewQuestions = generateInterviewQuestions(body.serviceCategory, body.businessName, body.city);

    return NextResponse.json({
      success: true,
      slug,
      configPath,
      outputDir,
      interviewQuestions,
      nextSteps: [
        'Send contract for signature',
        `Send Stripe payment link ($2,997/mo ${body.tier || 'foundation'} tier)`,
        'Send interview questions to client',
        'Wait for signed contract + payment + interview answers',
        'Run /aeo-client-setup to finalize config',
        'Run /aeo-batch to generate initial 10 articles',
      ],
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

/**
 * GET /api/onboarding — List all clients and their onboarding status
 */
export async function GET() {
  try {
    const files = await fs.readdir(AEO_CLIENTS_DIR);
    const configs = await Promise.all(
      files
        .filter(f => f.endsWith('.json') && f !== 'client-template.json')
        .map(async f => {
          const content = await fs.readFile(path.join(AEO_CLIENTS_DIR, f), 'utf-8');
          const config = JSON.parse(content);
          // Count articles in output directory
          let articleCount = 0;
          try {
            const outputDir = path.join(AEO_OUTPUT_DIR, config.slug || f.replace('.json', ''));
            const outputFiles = await fs.readdir(outputDir, { recursive: true });
            articleCount = outputFiles.filter((file: string) => file.toString().endsWith('.html')).length;
          } catch {
            // No output directory yet
          }
          return {
            slug: config.slug || f.replace('.json', ''),
            businessName: config.business?.name || config.businessName || f,
            contact: config.contact?.firstName || config.contactFirstName || 'Unknown',
            email: config.contact?.email || config.contactEmail || '',
            status: config.onboarding?.status || 'active',
            tier: config.onboarding?.tier || 'foundation',
            articleCount,
            startedAt: config.onboarding?.startedAt || null,
          };
        })
    );

    return NextResponse.json(configs);
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

function generateInterviewQuestions(category: string, businessName: string, city: string): string[] {
  const base = [
    `What makes ${businessName} different from other ${category} businesses in ${city}?`,
    `What are the top 3 problems your customers face when looking for ${category} services?`,
    `Describe your ideal customer — who do you want to attract?`,
    `What neighborhoods or areas do you serve? Which are your strongest?`,
    `What credentials, licenses, or certifications does your team hold?`,
    `Tell me about a recent project or success story that represents your best work.`,
    `What do your 5-star reviews say about you? What words do clients use?`,
    `What's your brand voice? (Professional, casual, technical, warm, etc.)`,
    `What services do you offer? List them all, including specialty services.`,
    `What's your phone number and preferred contact method for customers?`,
  ];

  // Category-specific questions
  if (category.toLowerCase().includes('real estate')) {
    base.push(
      'What price range do most of your deals fall in?',
      'Do you specialize in buyers, sellers, or both?',
      'What MLS areas or zip codes are your strongest?',
    );
  } else if (category.toLowerCase().includes('plumbing') || category.toLowerCase().includes('hvac') || category.toLowerCase().includes('electric')) {
    base.push(
      'Do you offer emergency/after-hours service?',
      'What brands do you install or recommend?',
      'What\'s your typical response time for service calls?',
    );
  } else if (category.toLowerCase().includes('law') || category.toLowerCase().includes('attorney')) {
    base.push(
      'What practice areas do you focus on?',
      'What bar associations are you a member of?',
      'What\'s your case success rate or notable outcomes?',
    );
  }

  return base;
}
