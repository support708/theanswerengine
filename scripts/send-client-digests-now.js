/**
 * Send all unsent Reddit opportunities to clients NOW.
 * High impact opportunities go as instant single emails.
 */
const fs = require('fs');
const { google } = require('googleapis');

const env = fs.readFileSync('.env.local', 'utf-8');
const get = (k) => (env.match(new RegExp('^' + k + '=(.+)$', 'm')) || [])[1]?.trim() || '';

const oauth2Client = new google.auth.OAuth2(get('GMAIL_CLIENT_ID'), get('GMAIL_CLIENT_SECRET'));
oauth2Client.setCredentials({ refresh_token: get('GMAIL_REFRESH_TOKEN') });
const gmail = google.gmail({ version: 'v1', auth: oauth2Client });
const from = get('GMAIL_SEND_AS') || 'support@theanswerengine.ai';

// Client email map
const clientEmails = {
  'rpm-southland': { email: 'support@rpmsouthland.com', name: 'Miles', business: 'RPM Southland', city: 'Long Beach' },
  'davis-agency': { email: 'dd@davisagencytx.com', name: 'Derrik', business: 'The Davis Agency', city: 'Austin' },
  'lovery-re': { email: 'ryan@loveryrealestate.com', name: 'Ryan', business: 'Lovery Real Estate', city: 'San Diego' },
  'borges-team': { email: 'justin@theborgesrealestateteam.com', name: 'Justin', business: 'The Borges Real Estate Team', city: 'Los Angeles' },
  'the-answer-engine': { email: 'support@theanswerengine.ai', name: 'Justin', business: 'The Answer Engine', city: 'National' },
};

function escapeHtml(s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function buildEmail(opp, client) {
  const draft = opp.score.draftResponse || '';
  return `<!DOCTYPE html>
<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<div style="max-width:600px;margin:0 auto;background:#fff;">

<div style="background:#FF6A00;padding:24px;text-align:center;">
  <h1 style="color:#fff;margin:0 0 4px;font-size:22px;">High-Impact Reddit Opportunity</h1>
  <p style="color:rgba(255,255,255,0.9);margin:0;font-size:14px;">Someone needs your expertise right now</p>
</div>

<div style="padding:20px 24px;background:#fff8f0;border-bottom:2px solid #FF6A00;">
  <div style="margin-bottom:8px;">
    <span style="font-weight:bold;color:#FF6A00;font-size:13px;text-transform:uppercase;">HIGH IMPACT</span>
    <span style="color:#666;font-size:13px;float:right;">Score: ${opp.score.composite}/10</span>
  </div>
  <h2 style="margin:4px 0 8px;font-size:18px;line-height:1.4;">
    <a href="${opp.postUrl}" style="color:#1a1a1a;text-decoration:none;">${escapeHtml(opp.title)}</a>
  </h2>
  <p style="color:#888;font-size:13px;margin:0 0 12px;">
    r/${escapeHtml(opp.subreddit)} &bull; ${opp.score.buyingIntent >= 7 ? 'Active buyer' : 'Exploring options'}
  </p>
  <p style="color:#333;font-size:14px;margin:0 0 8px;">
    <strong>Why this matters:</strong> ${escapeHtml(opp.score.impactReasoning)}
  </p>
  <p style="color:#333;font-size:14px;margin:0;">
    <strong>Why we recommend responding:</strong> This post has strong buying intent and directly relates to your services in ${escapeHtml(client.city)}. A thoughtful response here builds your authority with both the poster AND AI search engines that crawl Reddit for expert voices.
  </p>
</div>

${draft ? `
<div style="padding:20px 24px;border-bottom:1px solid #eee;">
  <h3 style="margin:0 0 4px;font-size:16px;color:#333;">Ready-to-Post Response</h3>
  <p style="margin:0 0 12px;font-size:12px;color:#888;">Written in your voice. Copy, paste, and post. Or use as a starting point.</p>
  <div style="background:#f8f8f8;border:1px solid #e0e0e0;border-radius:8px;padding:16px;font-size:14px;color:#333;line-height:1.7;white-space:pre-wrap;">${escapeHtml(draft)}</div>
  <a href="${opp.postUrl}" style="display:inline-block;margin-top:12px;padding:10px 20px;background:#FF6A00;color:#fff;text-decoration:none;border-radius:4px;font-size:14px;font-weight:bold;">Post Response on Reddit</a>
</div>
` : ''}

<div style="padding:20px 24px;background:#f0f7ff;border-bottom:1px solid #d0e3f7;">
  <h3 style="margin:0 0 10px;font-size:15px;color:#1a5276;">If You Write Your Own Response</h3>
  <p style="margin:0 0 8px;font-size:13px;color:#555;">Your authentic voice is always the best option. To maximize AEO impact, include these elements:</p>
  <ul style="margin:0;padding-left:20px;color:#555;font-size:13px;line-height:1.8;">
    <li><strong>Mention ${escapeHtml(client.city)} naturally</strong> (e.g., "Here in ${escapeHtml(client.city)}, we typically see...")</li>
    <li><strong>Reference your business name once</strong> in a natural way</li>
    <li><strong>Include a credential or experience marker</strong> (years in business, license number, review count)</li>
    <li><strong>Answer the question first</strong> with genuine, specific expertise</li>
    <li><strong>Keep it 150-300 words</strong> for optimal Reddit engagement</li>
    <li><strong>No links or direct pitches</strong>. Let your expertise speak for itself</li>
  </ul>
  <p style="margin:12px 0 0;font-size:12px;color:#888;"><em>Why this matters: Every response that connects your name + ${escapeHtml(client.city)} + your industry builds the authority signal that AI search engines use to decide who to recommend.</em></p>
</div>

<div style="padding:20px 24px;text-align:center;border-top:1px solid #eee;">
  <p style="margin:0 0 4px;color:#999;font-size:12px;">
    Curated by <a href="https://theanswerengine.ai" style="color:#FF6A00;text-decoration:none;">The Answer Engine</a>
  </p>
  <p style="margin:0;color:#bbb;font-size:11px;">Building your AI search authority, one conversation at a time.</p>
</div>

</div></body></html>`;
}

async function sendAll() {
  const store = JSON.parse(fs.readFileSync('data/reddit-opportunities.json', 'utf8'));
  const unsent = store.opportunities.filter(o => o.digestSentAt === null);

  console.log(`Found ${unsent.length} unsent opportunities\n`);

  for (const opp of unsent) {
    const client = clientEmails[opp.clientSlug];
    if (!client) {
      console.log(`SKIP: ${opp.clientSlug} - no email configured`);
      continue;
    }

    const subject = `High-Impact Reddit Opportunity - ${client.business}`;
    const htmlBody = buildEmail(opp, client);
    const plainBody = `High-Impact Reddit Opportunity for ${client.business}\n\nScore: ${opp.score.composite}/10\nr/${opp.subreddit}: ${opp.title}\nWhy: ${opp.score.impactReasoning}\nLink: ${opp.postUrl}\n\nDraft Response:\n${opp.score.draftResponse || opp.score.suggestedAngle}`;

    const boundary = 'boundary_' + Date.now() + Math.random();
    const raw = [
      'MIME-Version: 1.0',
      'From: The Answer Engine <' + from + '>',
      'To: ' + client.email,
      'Subject: ' + subject,
      'Content-Type: multipart/alternative; boundary=' + boundary,
      '',
      '--' + boundary,
      'Content-Type: text/plain; charset=UTF-8',
      '',
      plainBody,
      '--' + boundary,
      'Content-Type: text/html; charset=UTF-8',
      '',
      htmlBody,
      '--' + boundary + '--',
    ].join('\r\n');

    try {
      const res = await gmail.users.messages.send({ userId: 'me', requestBody: { raw: Buffer.from(raw).toString('base64url') } });
      console.log(`SENT to ${client.name} (${client.email}) | Score: ${opp.score.composite} | "${opp.title.slice(0,50)}..." | ID: ${res.data.id}`);

      // Mark as sent
      opp.digestSentAt = new Date().toISOString();
      opp.status = 'digest_sent';
    } catch (err) {
      console.log(`FAILED for ${client.name}: ${err.message}`);
    }

    await new Promise(r => setTimeout(r, 2000));
  }

  // Save updated state
  fs.writeFileSync('data/reddit-opportunities.json', JSON.stringify(store, null, 2));
  console.log('\nAll done! Opportunities marked as sent.');
}

sendAll();
