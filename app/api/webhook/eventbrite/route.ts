import { NextRequest, NextResponse } from 'next/server';
import { sendGmailMessageWithRetry } from '@/lib/gmail-api';

// Map Eventbrite event IDs to host notification emails
const EVENT_HOSTS: Record<string, { name: string; hosts: { name: string; email: string }[]; title: string; day: string; time: string }> = {
  // Probate: Inherited Property in California — Wednesdays 11 AM PDT
  '1988892476938': {
    name: 'Inherited Property in California: What Heirs Need to Know',
    title: 'Probate Webinar',
    day: 'Wednesday',
    time: '11:00 AM PDT',
    hosts: [
      { name: 'Justin Borges', email: 'justin@theborgesrealestateteam.com' },
      { name: 'Allie Parks', email: 'allieparksrealty@gmail.com' },
    ],
  },
  // Also fire on child event IDs (series children share the same hosts)
  '1988892635412': { name: 'Inherited Property in California: What Heirs Need to Know', title: 'Probate Webinar', day: 'Wednesday', time: '11:00 AM PDT', hosts: [{ name: 'Justin Borges', email: 'justin@theborgesrealestateteam.com' }, { name: 'Allie Parks', email: 'allieparksrealty@gmail.com' }] },
  // FTB LA — Thursdays 6 PM PDT
  '1988893291374': {
    name: 'First-Time Buyer Blueprint: How to Buy in LA',
    title: 'LA FTB Webinar',
    day: 'Thursday',
    time: '6:00 PM PDT',
    hosts: [
      { name: 'Justin Borges', email: 'justin@theborgesrealestateteam.com' },
      // Isaiah Andalon and Brian Grushkin — add emails when available
      // { name: 'Isaiah Andalon', email: 'isaiah@...' },
      // { name: 'Brian Grushkin', email: 'brian@...' },
    ],
  },
  // FTB IE — Thursdays 4:30 PM PDT
  '1988893446839': {
    name: 'First-Time Buyer Blueprint: How to Buy in the Inland Empire',
    title: 'IE FTB Webinar',
    day: 'Thursday',
    time: '4:30 PM PDT',
    hosts: [
      { name: 'Justin Borges', email: 'justin@theborgesrealestateteam.com' },
      { name: 'Brandon Thompson', email: 'realtor.b.properties@gmail.com' },
    ],
  },
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Eventbrite sends the action and the API URL to fetch the full order
    const action = body.config?.action || body.action;
    const apiUrl = body.api_url;

    if (action !== 'order.placed' || !apiUrl) {
      return NextResponse.json({ ok: true, skipped: true });
    }

    // Fetch full order details from Eventbrite
    const token = process.env.EVENTBRITE_PRIVATE_TOKEN;
    const orderRes = await fetch(`${apiUrl}?token=${token}&expand=event,attendees`);
    const order = await orderRes.json();

    const eventId = order.event_id || order.event?.id;
    const attendeeName = order.name || `${order.first_name ?? ''} ${order.last_name ?? ''}`.trim();
    const attendeeEmail = order.email;
    const eventConfig = EVENT_HOSTS[eventId];

    if (!eventConfig) {
      console.log(`[eventbrite-webhook] No host config for event ${eventId}`);
      return NextResponse.json({ ok: true, unknown_event: eventId });
    }

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

    // Notify all hosts
    const results = await Promise.allSettled(
      eventConfig.hosts.map(host =>
        sendGmailMessageWithRetry({
          to: host.email,
          subject,
          htmlBody: html,
          body: `New registration for ${eventConfig.name}\nAttendee: ${attendeeName} (${attendeeEmail})`,
        })
      )
    );

    const sent = results.filter(r => r.status === 'fulfilled').length;
    console.log(`[eventbrite-webhook] ${eventConfig.title}: notified ${sent}/${eventConfig.hosts.length} hosts for ${attendeeName}`);

    return NextResponse.json({ ok: true, event: eventConfig.title, notified: sent });
  } catch (err) {
    console.error('[eventbrite-webhook] Error:', err);
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}
