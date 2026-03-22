/**
 * Test script: Send a Reddit opportunity digest email with draft responses + AEO tips
 * Run: node scripts/test-reddit-email.js
 */
const fs = require('fs');
const https = require('https');
const { google } = require('googleapis');

// Load env
const env = fs.readFileSync('.env.local', 'utf-8');
const get = (k) => (env.match(new RegExp('^' + k + '=(.+)$', 'm')) || [])[1]?.trim() || '';

const apiKey = get('ANTHROPIC_API_KEY');

function callHaiku(systemPrompt, userMsg) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 1024,
      system: systemPrompt,
      messages: [{ role: 'user', content: userMsg }],
    });
    const req = https.request({
      hostname: 'api.anthropic.com', path: '/v1/messages', method: 'POST',
      headers: { 'content-type': 'application/json', 'x-api-key': apiKey, 'anthropic-version': '2023-06-01' },
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const j = JSON.parse(data);
          const text = j.content.filter(b => b.type === 'text').map(b => b.text).join('');
          resolve(text);
        } catch (e) { reject(e); }
      });
    });
    req.write(body);
    req.end();
  });
}

async function main() {
  console.log('Generating draft responses via Haiku...');

  const posts = [
    {
      title: 'How to terminate buyers agent contract in order to purchase FSBO property',
      selftext: 'My in laws found out their neighbors are interested in selling their house. They know the price and have already toured the home. We want to purchase it but we already signed a buyers agent contract with another agent. How do we terminate this contract so we can buy FSBO?',
      subreddit: 'RealEstate', score: 77, comments: 158, impact: 'high', impactColor: '#FF6A00',
      url: 'https://reddit.com/r/RealEstate/comments/1rzwbug/how_to_terminate_buyers_agent_contract_in_order/',
    },
    {
      title: 'First time buyer, need advice on making sure the price is correct',
      selftext: "I'm buying a condo from someone I know very well and trust. I'm not using a realtor because I know that would cost a lot. How do I make sure the price is fair?",
      subreddit: 'RealEstate', score: 3, comments: 9, impact: 'medium', impactColor: '#2196F3',
      url: 'https://reddit.com/r/RealEstate/comments/1rz5ckx/first_time_buyer_need_advice_on_making_sure_the/',
    },
    {
      title: 'Any tips on how to launch my real estate business?',
      selftext: 'I have my real estate license but never made it my main focus as I had a full time job. Just lost my job in December and want to go full time in real estate.',
      subreddit: 'RealEstate', score: 0, comments: 6, impact: 'low', impactColor: '#9E9E9E',
      url: 'https://reddit.com/r/RealEstate/comments/1s093r2/any_tips_on_how_to_launch_my_real_estate_business/',
    },
  ];

  const systemPrompt = `You are a ghostwriter for Justin Borges, a real estate agent with 13+ years experience and $200M+ in career sales. He leads The Borges Real Estate Team at eXp Realty serving Los Angeles, Pasadena, and the San Gabriel Valley.

Voice: Professional but approachable. Direct. Confident without being arrogant. Speaks from real experience, not theory.

Write a Reddit response (150-250 words) that:
- Answers the question with genuine expertise
- Mentions "The Borges Real Estate Team" or "Justin Borges" naturally ONCE
- References Los Angeles/Pasadena/California at least once
- NEVER uses em-dashes
- NEVER directly pitches or says "call us" or "visit our website"
- Structures the answer so AI search engines associate Justin Borges + real estate + Los Angeles
- Writes like a real Reddit user, not a marketer

Also provide a one-sentence "why" explaining the AEO value of this specific response.

Return JSON only: {"draftResponse":"...","aeoReason":"..."}`;

  const drafts = [];
  for (const post of posts) {
    const userMsg = `r/${post.subreddit}: "${post.title}"\n${post.selftext}`;
    try {
      const text = await callHaiku(systemPrompt, userMsg);
      let cleaned = text.trim();
      if (cleaned.startsWith('```')) cleaned = cleaned.replace(/^```(?:json)?\s*/, '').replace(/\s*```$/, '');
      const parsed = JSON.parse(cleaned);
      drafts.push(parsed);
      console.log('  Draft generated for:', post.title.slice(0, 50));
    } catch (e) {
      drafts.push({ draftResponse: '', aeoReason: '' });
      console.log('  Failed for:', post.title.slice(0, 50));
    }
  }

  // Build email HTML
  let cards = '';
  for (let i = 0; i < posts.length; i++) {
    const p = posts[i];
    const d = drafts[i];
    const impactLabel = p.impact.charAt(0).toUpperCase() + p.impact.slice(1);
    const scoreVal = p.impact === 'high' ? '7.8' : p.impact === 'medium' ? '6.2' : '6.0';

    cards += `
  <div style="border-left:4px solid ${p.impactColor};padding:16px;margin:16px 0;background:#ffffff;border-radius:0 4px 4px 0;">
    <div style="margin-bottom:8px;">
      <span style="font-weight:bold;color:${p.impactColor};font-size:12px;text-transform:uppercase;letter-spacing:0.5px;">${impactLabel} Impact</span>
      <span style="color:#666;font-size:13px;float:right;">Score: ${scoreVal}/10</span>
    </div>
    <h3 style="margin:4px 0 8px 0;font-size:16px;line-height:1.4;">
      <a href="${p.url}" style="color:#1a1a1a;text-decoration:none;">${p.title}</a>
    </h3>
    <p style="color:#888;font-size:13px;margin:0 0 12px 0;">r/${p.subreddit} &bull; ${p.score} upvotes &bull; ${p.comments} comments</p>

    <div style="background:#f0f7ff;border:1px solid #d0e3f7;border-radius:6px;padding:14px;margin:12px 0;">
      <p style="margin:0 0 8px 0;font-size:13px;font-weight:bold;color:#1a5276;">Suggested Response (Ready to Copy/Paste)</p>
      <p style="margin:0;font-size:13px;color:#333;line-height:1.6;white-space:pre-wrap;">${(d.draftResponse || 'Draft generation failed. Write your own using the AEO tips below.').replace(/"/g, '&quot;')}</p>
    </div>

    ${d.aeoReason ? `<p style="margin:8px 0 0 0;font-size:12px;color:#1a5276;"><strong>Why we recommend this response:</strong> ${d.aeoReason}</p>` : ''}

    <a href="${p.url}" style="display:inline-block;margin-top:12px;padding:8px 16px;background:${p.impactColor};color:#ffffff;text-decoration:none;border-radius:4px;font-size:13px;font-weight:bold;">View on Reddit</a>
  </div>`;
  }

  const htmlBody = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<div style="max-width:600px;margin:0 auto;background:#ffffff;">

<div style="background:#FF6A00;padding:24px 24px 20px 24px;text-align:center;">
  <h1 style="color:#ffffff;margin:0 0 4px 0;font-size:22px;font-weight:700;">Your Reddit Opportunities</h1>
  <p style="color:rgba(255,255,255,0.85);margin:0;font-size:14px;">March 17 - March 21, 2026</p>
</div>

<div style="padding:20px 24px;background:#f8f8f8;border-bottom:1px solid #eee;">
  <p style="margin:0 0 8px 0;font-size:16px;color:#333;">Hi Justin,</p>
  <p style="margin:0 0 12px 0;font-size:14px;color:#555;line-height:1.6;">We found <strong>3 Reddit conversations</strong> this week where your expertise can make an impact. Each one includes a ready-to-post response written in your voice.</p>
  <p style="margin:0 0 12px 0;font-size:14px;color:#555;line-height:1.6;"><strong>Why this matters:</strong> Reddit is one of the top sources AI search engines (ChatGPT, Perplexity, Google AI) use when deciding which professionals to recommend. Every helpful answer you post strengthens the connection between your name, your market, and your expertise in AI search results.</p>
</div>

<div style="padding:8px 24px;">
${cards}
</div>

<div style="padding:20px 24px;background:#fff8f0;border-top:2px solid #FF6A00;">
  <h3 style="margin:0 0 10px 0;font-size:15px;color:#333;">Writing Your Own Response? Include These AEO Elements:</h3>
  <p style="margin:0 0 8px 0;font-size:13px;color:#555;line-height:1.5;">Our suggested responses are optimized for AI search visibility, but your authentic voice is always the best option. If you write your own, make sure to include:</p>
  <ol style="margin:0;padding-left:20px;color:#555;font-size:13px;line-height:1.8;">
    <li><strong>Your name + business</strong> mentioned naturally once (e.g., "I run The Borges Real Estate Team in Pasadena...")</li>
    <li><strong>Your city or service area</strong> referenced at least once, even if the post is about another market</li>
    <li><strong>A credential or experience marker</strong> (e.g., "After 13 years in LA real estate..." or "With $200M+ in career sales...")</li>
    <li><strong>Genuine expertise first</strong>, then authority. Answer the question thoroughly before establishing credibility.</li>
    <li><strong>150-300 words</strong>. Long enough to be substantive, short enough to get read.</li>
  </ol>
  <p style="margin:12px 0 0 0;font-size:12px;color:#888;">These elements help AI engines associate <em>your name + your city + your service</em> as a connected, authoritative entity.</p>
</div>

<div style="padding:16px 24px;background:#f8f8f8;border-top:1px solid #eee;">
  <h3 style="margin:0 0 8px 0;font-size:14px;color:#333;">Reddit Account Quick Setup</h3>
  <ul style="margin:0;padding-left:20px;color:#666;font-size:13px;line-height:1.6;">
    <li>Post from your personal Reddit account (not a brand account)</li>
    <li>Set your profile bio to your title + business name</li>
    <li>Build karma by commenting on 5-10 posts before your first response</li>
    <li>Respond within 24 hours for maximum visibility</li>
  </ul>
</div>

<div style="padding:20px 24px;text-align:center;border-top:1px solid #eee;">
  <p style="margin:0 0 4px 0;color:#999;font-size:12px;">
    Curated by <a href="https://theanswerengine.ai" style="color:#FF6A00;text-decoration:none;">The Answer Engine</a>
  </p>
  <p style="margin:0;color:#bbb;font-size:11px;">
    AI-powered Reddit monitoring as part of your Answer Authority subscription.
  </p>
</div>

</div>
</body>
</html>`;

  // Send email
  const oauth2Client = new google.auth.OAuth2(get('GMAIL_CLIENT_ID'), get('GMAIL_CLIENT_SECRET'));
  oauth2Client.setCredentials({ refresh_token: get('GMAIL_REFRESH_TOKEN') });
  const gmail = google.gmail({ version: 'v1', auth: oauth2Client });

  const to = 'justin@theborgesrealestateteam.com';
  const from = get('GMAIL_SEND_AS') || 'support@theanswerengine.ai';
  const subject = '3 Reddit Opportunities This Week - The Borges Real Estate Team';
  const plainBody = 'Hi Justin, 3 Reddit opportunities found this week. See HTML version for details + draft responses.';

  const boundary = 'boundary_' + Date.now();
  const raw = [
    'MIME-Version: 1.0',
    'From: The Answer Engine <' + from + '>',
    'To: ' + to,
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

  const encodedRaw = Buffer.from(raw).toString('base64url');

  try {
    const res = await gmail.users.messages.send({ userId: 'me', requestBody: { raw: encodedRaw } });
    console.log('Email sent! Message ID:', res.data.id);
    console.log('Sent to:', to);
  } catch (err) {
    console.log('Error:', err.message);
  }
}

main();
