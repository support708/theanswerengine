import { NextRequest, NextResponse } from 'next/server';
import { sendGmailMessageWithRetry } from '@/lib/gmail-api';

// Map Eventbrite event IDs to host notification emails + FUB config
const EVENT_HOSTS: Record<string, {
  name: string;
  hosts: { name: string; email: string }[];
  title: string;
  day: string;
  time: string;
  tag: string;
  actionPlanId: number;
  zoom: string;
}> = {
  // Probate: Inherited Property in California — Tuesdays 11 AM PDT
  '1988892476938': {
    name:  'Inherited Property in California: What Heirs Need to Know',
    title: 'Probate Webinar',
    day:   'Tuesday',
    time:  '11:00 AM PT',
    tag:   'Probate Webinar Registrant',
    actionPlanId: 213,
    zoom:  'https://us06web.zoom.us/j/85018610975?pwd=BD8V3z36AzN2h2qBrZFSPBj36c4G9V.1',
    hosts: [
      { name: 'Justin Borges', email: 'justin@theborgesrealestateteam.com' },
      { name: 'Allie Parks',   email: 'allieparksrealty@gmail.com' },
    ],
  },
  // Series child shares same config
  '1988892635412': {
    name:  'Inherited Property in California: What Heirs Need to Know',
    title: 'Probate Webinar',
    day:   'Tuesday',
    time:  '11:00 AM PT',
    tag:   'Probate Webinar Registrant',
    actionPlanId: 213,
    zoom:  'https://us06web.zoom.us/j/85018610975?pwd=BD8V3z36AzN2h2qBrZFSPBj36c4G9V.1',
    hosts: [
      { name: 'Justin Borges', email: 'justin@theborgesrealestateteam.com' },
      { name: 'Allie Parks',   email: 'allieparksrealty@gmail.com' },
    ],
  },
  // FTB LA — Thursdays 6 PM PT
  '1988893291374': {
    name:  'First-Time Buyer Blueprint: How to Buy in LA',
    title: 'LA FTB Webinar',
    day:   'Thursday',
    time:  '6:00 PM PT',
    tag:   'FTHB LA Webinar Registrant',
    actionPlanId: 214,
    zoom:  'https://us06web.zoom.us/j/85018610975?pwd=BD8V3z36AzN2h2qBrZFSPBj36c4G9V.1',
    hosts: [
      { name: 'Justin Borges',  email: 'justin@theborgesrealestateteam.com' },
      { name: 'Brian Grushkin', email: 'bgrush78@gmail.com' },
      { name: 'Isaiah Andalon', email: 'isaiah@theborgesrealestateteam.com' },
    ],
  },
  // FTB IE — Thursdays 4:30 PM PT
  '1988893446839': {
    name:  'First-Time Buyer Blueprint: How to Buy in the Inland Empire',
    title: 'IE FTB Webinar',
    day:   'Thursday',
    time:  '4:30 PM PT',
    tag:   'FTHB IE Webinar Registrant',
    actionPlanId: 215,
    zoom:  'https://us06web.zoom.us/j/86179429016?pwd=oZCl2HjI4nq9LotEGFSoOxEP8LcvwR.1',
    hosts: [
      { name: 'Justin Borges',     email: 'justin@theborgesrealestateteam.com' },
      { name: 'Brandon Thompson',  email: 'realtor.b.properties@gmail.com' },
    ],
  },
};

// ── FUB helpers ───────────────────────────────────────────────────────────────
const FUB_BASE = 'https://api.followupboss.com/v1';

function fubHeaders() {
  const key = process.env.FUB_API_KEY ?? '';
  return {
    Authorization: 'Basic ' + Buffer.from(key + ':').toString('base64'),
    'Content-Type': 'application/json',
  };
}

async function fubUpsertContact(
  name: string,
  email: string,
  tag: string,
  source: string,
): Promise<number | null> {
  // Search for existing contact
  const searchRes = await fetch(
    `${FUB_BASE}/people?email=${encodeURIComponent(email)}&limit=1`,
    { headers: fubHeaders() },
  );
  const searchJson = await searchRes.json() as { people?: Array<{ id: number; tags?: Array<string | { name: string }> }> };

  if (searchJson.people && searchJson.people.length > 0) {
    const person = searchJson.people[0];
    const existingTags = (person.tags ?? []).map(t =>
      typeof t === 'string' ? t : t.name,
    );
    if (!existingTags.includes(tag)) {
      await fetch(`${FUB_BASE}/people/${person.id}`, {
        method: 'PUT',
        headers: fubHeaders(),
        body: JSON.stringify({ tags: [...existingTags, tag] }),
      });
    }
    return person.id;
  }

  // Create new contact
  const [firstName, ...rest] = name.trim().split(' ');
  const lastName = rest.join(' ');
  const createRes = await fetch(`${FUB_BASE}/people`, {
    method: 'POST',
    headers: fubHeaders(),
    body: JSON.stringify({
      firstName,
      lastName,
      emails: [{ value: email, type: 'home' }],
      tags: [tag],
      source,
    }),
  });
  const createJson = await createRes.json() as { id?: number };
  return createJson.id ?? null;
}

async function fubEnrollActionPlan(personId: number, actionPlanId: number): Promise<void> {
  // Check for active enrollment to avoid duplicate
  const existing = await fetch(
    `${FUB_BASE}/actionPlansPeople?personId=${personId}&actionPlanId=${actionPlanId}&limit=5`,
    { headers: fubHeaders() },
  );
  const existingJson = await existing.json() as { actionPlansPeople?: Array<{ status: string }> };
  const alreadyActive = (existingJson.actionPlansPeople ?? []).some(
    ap => ap.status === 'Active' || ap.status === 'Running',
  );
  if (alreadyActive) return;

  await fetch(`${FUB_BASE}/actionPlansPeople`, {
    method: 'POST',
    headers: fubHeaders(),
    body: JSON.stringify({ personId, actionPlanId }),
  });
}

async function fubAddNote(personId: number, note: string): Promise<void> {
  await fetch(`${FUB_BASE}/notes`, {
    method: 'POST',
    headers: fubHeaders(),
    body: JSON.stringify({ personId, note, isHtml: false }),
  });
}

// ── Webhook handler ───────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const action = body.config?.action || body.action;
    const apiUrl = body.api_url;

    if (action !== 'order.placed' || !apiUrl) {
      return NextResponse.json({ ok: true, skipped: true });
    }

    // Fetch full order from Eventbrite
    const token = process.env.EVENTBRITE_PRIVATE_TOKEN;
    const orderRes = await fetch(`${apiUrl}?expand=event,attendees`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const order = await orderRes.json() as {
      id: string;
      event_id?: string;
      event?: { id: string };
      name?: string;
      first_name?: string;
      last_name?: string;
      email?: string;
    };

    const eventId      = order.event_id || order.event?.id;
    const attendeeName = order.name || `${order.first_name ?? ''} ${order.last_name ?? ''}`.trim();
    const attendeeEmail = order.email ?? '';
    const eventConfig  = eventId ? EVENT_HOSTS[eventId] : undefined;

    if (!eventConfig) {
      console.log(`[eventbrite-webhook] No config for event ${eventId}`);
      return NextResponse.json({ ok: true, unknown_event: eventId });
    }

    // ── 1. Host email notifications ────────────────────────────────────────
    const subject = `New Registration: ${eventConfig.title} — ${attendeeName}`;
    const html = `
<div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto">
  <div style="background:#0a1628;padding:20px 24px;border-bottom:4px solid #c9a84c">
    <p style="color:#c9a84c;font-size:13px;margin:0;font-weight:700;letter-spacing:1px">NEW REGISTRATION</p>
    <h2 style="color:#fff;margin:8px 0 0;font-size:20px">${eventConfig.name}</h2>
  </div>
  <div style="padding:24px;background:#f9f9f9;border:1px solid #eee">
    <table style="width:100%;border-collapse:collapse">
      <tr><td style="padding:8px 0;color:#666;font-size:14px;width:120px">Attendee</td><td style="padding:8px 0;font-weight:700;font-size:14px">${attendeeName}</td></tr>
      <tr><td style="padding:8px 0;color:#666;font-size:14px">Email</td><td style="padding:8px 0;font-size:14px">${attendeeEmail}</td></tr>
      <tr><td style="padding:8px 0;color:#666;font-size:14px">Event</td><td style="padding:8px 0;font-size:14px">${eventConfig.name}</td></tr>
      <tr><td style="padding:8px 0;color:#666;font-size:14px">Schedule</td><td style="padding:8px 0;font-size:14px">Every ${eventConfig.day} at ${eventConfig.time}</td></tr>
      <tr><td style="padding:8px 0;color:#666;font-size:14px">Order ID</td><td style="padding:8px 0;font-size:14px">${order.id}</td></tr>
    </table>
  </div>
  <div style="padding:16px 24px;background:#fff;border:1px solid #eee;border-top:none">
    <p style="margin:0;font-size:13px;color:#999">Sent by The Borges Real Estate Team · Eventbrite Webinar Notifications</p>
  </div>
</div>`;

    const notifyResults = await Promise.allSettled(
      eventConfig.hosts.map(host =>
        sendGmailMessageWithRetry({
          to: host.email,
          subject,
          htmlBody: html,
          body: `New registration for ${eventConfig.name}\nAttendee: ${attendeeName} (${attendeeEmail})`,
        }),
      ),
    );
    const notified = notifyResults.filter(r => r.status === 'fulfilled').length;

    // ── 2. FUB upsert + action plan enrollment ─────────────────────────────
    let fubPersonId: number | null = null;
    let fubEnrolled = false;
    const fubError: string[] = [];

    if (attendeeEmail && process.env.FUB_API_KEY) {
      try {
        fubPersonId = await fubUpsertContact(
          attendeeName || 'Webinar Registrant',
          attendeeEmail,
          eventConfig.tag,
          eventConfig.title,
        );

        if (fubPersonId) {
          await fubEnrollActionPlan(fubPersonId, eventConfig.actionPlanId);
          fubEnrolled = true;

          await fubAddNote(
            fubPersonId,
            `Registered for ${eventConfig.name} (${eventConfig.day}s at ${eventConfig.time}). ` +
            `Zoom: ${eventConfig.zoom} | Eventbrite Order: ${order.id}`,
          );
        }
      } catch (err) {
        fubError.push(String(err));
        console.error('[eventbrite-webhook] FUB error:', err);
      }
    } else if (!process.env.FUB_API_KEY) {
      fubError.push('FUB_API_KEY not set in environment');
    }

    console.log(
      `[eventbrite-webhook] ${eventConfig.title}: notified ${notified}/${eventConfig.hosts.length} hosts, ` +
      `FUB person ${fubPersonId ?? 'n/a'}, enrolled=${fubEnrolled}` +
      (fubError.length ? `, errors=${fubError.join('; ')}` : ''),
    );

    return NextResponse.json({
      ok: true,
      event: eventConfig.title,
      notified,
      fubPersonId,
      fubEnrolled,
      ...(fubError.length ? { fubErrors: fubError } : {}),
    });
  } catch (err) {
    console.error('[eventbrite-webhook] Error:', err);
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}
