/**
 * Send Reddit Authority Monitoring onboarding email to all clients
 */
const fs = require('fs');
const { google } = require('googleapis');

const env = fs.readFileSync('.env.local', 'utf-8');
const get = (k) => (env.match(new RegExp('^' + k + '=(.+)$', 'm')) || [])[1]?.trim() || '';

const oauth2Client = new google.auth.OAuth2(get('GMAIL_CLIENT_ID'), get('GMAIL_CLIENT_SECRET'));
oauth2Client.setCredentials({ refresh_token: get('GMAIL_REFRESH_TOKEN') });
const gmail = google.gmail({ version: 'v1', auth: oauth2Client });
const from = get('GMAIL_SEND_AS') || 'support@theanswerengine.ai';

const clients = [
  {
    name: 'Miles', fullName: 'Miles Williams', title: 'Broker/Owner',
    business: 'Real Property Management Southland', email: 'support@rpmsouthland.com',
    bio: '"Broker/Owner, Real Property Management Southland | 11+ years managing residential properties in Long Beach & SE Los Angeles County | DRE #01968830"',
    subreddits: [
      { name: 'r/propertymanagement', url: 'https://reddit.com/r/propertymanagement', desc: '58K members' },
      { name: 'r/landlords', url: 'https://reddit.com/r/landlords', desc: '' },
      { name: 'r/longbeach', url: 'https://reddit.com/r/longbeach', desc: '' },
      { name: 'r/LosAngeles', url: 'https://reddit.com/r/LosAngeles', desc: '' },
      { name: 'r/realestateinvesting', url: 'https://reddit.com/r/realestateinvesting', desc: '' },
    ],
    market: 'Long Beach and Southeast LA County',
    aiQuery: 'best property manager in Long Beach',
  },
  {
    name: 'Derrik', fullName: 'Derrik Davis', title: 'Broker',
    business: 'The Davis Agency', email: 'dd@davisagencytx.com',
    bio: '"Broker, The Davis Agency | Luxury real estate specialist serving Austin, TX | 78704 corridor expert"',
    subreddits: [
      { name: 'r/Austin', url: 'https://reddit.com/r/Austin', desc: '800K+ members' },
      { name: 'r/RealEstate', url: 'https://reddit.com/r/RealEstate', desc: '1.2M members' },
      { name: 'r/realestateinvesting', url: 'https://reddit.com/r/realestateinvesting', desc: '' },
      { name: 'r/homebuyers', url: 'https://reddit.com/r/homebuyers', desc: '' },
    ],
    market: 'Austin, TX',
    aiQuery: 'best luxury real estate agent in Austin',
  },
  {
    name: 'Ryan', fullName: 'Ryan Fisher', title: 'Founder / Real Estate Agent',
    business: 'Lovery Real Estate', email: 'ryan@loveryrealestate.com',
    bio: '"Founder, Lovery Real Estate | Top 10% San Diego County agent 2022-2023 | Serving Chula Vista, North Park, La Jolla & beyond | DRE #02110091"',
    subreddits: [
      { name: 'r/sandiego', url: 'https://reddit.com/r/sandiego', desc: '400K+ members' },
      { name: 'r/RealEstate', url: 'https://reddit.com/r/RealEstate', desc: '1.2M members' },
      { name: 'r/FirstTimeHomeBuyer', url: 'https://reddit.com/r/FirstTimeHomeBuyer', desc: '' },
      { name: 'r/realestateinvesting', url: 'https://reddit.com/r/realestateinvesting', desc: '' },
    ],
    market: 'San Diego County',
    aiQuery: 'best real estate agent in San Diego',
  },
];

function buildEmail(client) {
  const subsList = client.subreddits.map(s =>
    `<li><a href="${s.url}" style="color:#FF6A00;">${s.name}</a>${s.desc ? ' (' + s.desc + ')' : ''}</li>`
  ).join('\n      ');

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<div style="max-width:600px;margin:0 auto;background:#ffffff;">

<div style="background:#FF6A00;padding:28px 24px 24px 24px;text-align:center;">
  <h1 style="color:#ffffff;margin:0 0 6px 0;font-size:24px;font-weight:700;">Reddit Authority Monitoring</h1>
  <p style="color:rgba(255,255,255,0.9);margin:0;font-size:15px;">Now active as part of your Answer Authority subscription</p>
</div>

<div style="padding:24px 24px 20px 24px;">
  <p style="margin:0 0 16px 0;font-size:15px;color:#333;line-height:1.6;">Hi ${client.name},</p>

  <p style="margin:0 0 16px 0;font-size:14px;color:#555;line-height:1.7;">We just activated a new feature for your account: <strong>Reddit Authority Monitoring</strong>. Starting today, our system continuously scans Reddit for conversations where someone is looking for exactly what you offer in ${client.market}.</p>

  <p style="margin:0 0 16px 0;font-size:14px;color:#555;line-height:1.7;">When we find an opportunity, we send you an email digest with the Reddit link, an explanation of why it matters, and a <strong>ready-to-post response written in your voice</strong> that you can copy, paste, and publish in under 60 seconds.</p>
</div>

<div style="padding:20px 24px;background:#fff8f0;border-top:2px solid #FF6A00;border-bottom:2px solid #FF6A00;">
  <h2 style="margin:0 0 12px 0;font-size:18px;color:#333;">Why This Matters for ${client.business}</h2>

  <p style="margin:0 0 12px 0;font-size:14px;color:#555;line-height:1.7;">AI search engines like ChatGPT, Perplexity, and Google AI decide which businesses to recommend based on <strong>authority signals</strong> they find across the internet. Reddit is one of the top sources these AI platforms crawl.</p>

  <p style="margin:0 0 12px 0;font-size:14px;color:#555;line-height:1.7;">Every time you post a helpful, expert answer on Reddit, AI engines learn to associate <strong>${client.fullName} + ${client.market} + your expertise</strong> together. Over time, this makes it significantly more likely that when someone asks ChatGPT "${client.aiQuery}", your name comes up.</p>

  <p style="margin:0 0 0 0;font-size:14px;color:#555;line-height:1.7;">This is not traditional marketing. This is <strong>building the authority signals that AI platforms use to decide who to recommend</strong>. Each response is a small investment that compounds over time.</p>
</div>

<div style="padding:24px 24px 20px 24px;">
  <h2 style="margin:0 0 12px 0;font-size:18px;color:#333;">What You Will Receive</h2>

  <div style="margin-bottom:16px;">
    <p style="margin:0 0 4px 0;font-size:14px;color:#333;font-weight:bold;">1. Opportunity Alerts</p>
    <p style="margin:0;font-size:13px;color:#666;line-height:1.5;">When someone on Reddit asks a question related to your services in ${client.market}, we flag it with a relevance score and business impact rating.</p>
  </div>

  <div style="margin-bottom:16px;">
    <p style="margin:0 0 4px 0;font-size:14px;color:#333;font-weight:bold;">2. Draft Responses in Your Voice</p>
    <p style="margin:0;font-size:13px;color:#666;line-height:1.5;">Each opportunity comes with a suggested response written to sound like you. Copy, paste, and post. Or use it as a starting point and add your own perspective. Your authentic voice is always the best option.</p>
  </div>

  <div style="margin-bottom:16px;">
    <p style="margin:0 0 4px 0;font-size:14px;color:#333;font-weight:bold;">3. AEO Optimization Built In</p>
    <p style="margin:0;font-size:13px;color:#666;line-height:1.5;">Every response is structured to maximize your visibility in AI search results. We handle the optimization so you can focus on sharing your expertise.</p>
  </div>
</div>

<div style="padding:24px;background:#f0f7ff;border-top:2px solid #2196F3;">
  <h2 style="margin:0 0 16px 0;font-size:18px;color:#1a5276;">Set Up Your Reddit Account (5 Minutes)</h2>

  <p style="margin:0 0 16px 0;font-size:14px;color:#555;line-height:1.6;">To post responses, you need a Reddit account. Here is exactly how to set it up for maximum impact:</p>

  <div style="background:#ffffff;border:1px solid #d0e3f7;border-radius:8px;padding:16px;margin-bottom:12px;">
    <p style="margin:0 0 4px 0;font-size:14px;color:#1a5276;font-weight:bold;">Step 1: Create Your Account</p>
    <p style="margin:0;font-size:13px;color:#555;line-height:1.5;">Go to <a href="https://www.reddit.com/register" style="color:#FF6A00;">reddit.com/register</a>. Use your real name or a professional handle as your username (e.g., ${client.fullName.replace(' ', '')}RE). Avoid brand-only names.</p>
  </div>

  <div style="background:#ffffff;border:1px solid #d0e3f7;border-radius:8px;padding:16px;margin-bottom:12px;">
    <p style="margin:0 0 4px 0;font-size:14px;color:#1a5276;font-weight:bold;">Step 2: Set Up Your Profile</p>
    <p style="margin:0;font-size:13px;color:#555;line-height:1.5;">Click your avatar > Profile > Edit. Set your display name to your real name. Add this bio:<br><br><em>${client.bio}</em></p>
  </div>

  <div style="background:#ffffff;border:1px solid #d0e3f7;border-radius:8px;padding:16px;margin-bottom:12px;">
    <p style="margin:0 0 4px 0;font-size:14px;color:#1a5276;font-weight:bold;">Step 3: Join These Subreddits</p>
    <p style="margin:0;font-size:13px;color:#555;line-height:1.5;">Subscribe to the communities where your opportunities will appear:</p>
    <ul style="margin:8px 0 0 0;padding-left:20px;font-size:13px;color:#555;line-height:1.6;">
      ${subsList}
    </ul>
  </div>

  <div style="background:#ffffff;border:1px solid #d0e3f7;border-radius:8px;padding:16px;margin-bottom:12px;">
    <p style="margin:0 0 4px 0;font-size:14px;color:#1a5276;font-weight:bold;">Step 4: Build Karma First (Important)</p>
    <p style="margin:0;font-size:13px;color:#555;line-height:1.5;">Before posting our suggested responses, spend 10 minutes browsing your subreddits and leave 5-10 genuine comments or upvotes. Reddit flags brand-new accounts that immediately start posting long responses. A few days of casual activity makes your account look natural.</p>
  </div>

  <div style="background:#ffffff;border:1px solid #d0e3f7;border-radius:8px;padding:16px;">
    <p style="margin:0 0 4px 0;font-size:14px;color:#1a5276;font-weight:bold;">Step 5: Start Responding</p>
    <p style="margin:0;font-size:13px;color:#555;line-height:1.5;">When you receive an opportunity digest from us, click the Reddit link, copy the suggested response (or write your own using our AEO tips), and post it as a comment. Takes under 60 seconds.</p>
  </div>
</div>

<div style="padding:20px 24px;background:#f8f8f8;border-top:1px solid #eee;">
  <h3 style="margin:0 0 10px 0;font-size:14px;color:#333;">The Golden Rules</h3>
  <ul style="margin:0;padding-left:20px;color:#555;font-size:13px;line-height:1.8;">
    <li><strong>Be genuinely helpful.</strong> Answer the question first, establish authority second.</li>
    <li><strong>Never directly sell.</strong> No "call us" or "visit our website." Your expertise sells itself.</li>
    <li><strong>Mention your market naturally.</strong> "Here in ${client.market}, we typically see..." builds the entity signal AI needs.</li>
    <li><strong>Consistency wins.</strong> One response per week is better than ten in one day.</li>
    <li><strong>Your voice is best.</strong> Our drafts are a starting point. Your authentic perspective always outperforms.</li>
  </ul>
</div>

<div style="padding:20px 24px;text-align:center;border-top:1px solid #eee;">
  <p style="margin:0 0 8px 0;font-size:14px;color:#333;">Questions? Reply to this email or reach out anytime.</p>
  <p style="margin:0 0 4px 0;color:#999;font-size:12px;">
    <a href="https://theanswerengine.ai" style="color:#FF6A00;text-decoration:none;">The Answer Engine</a>
  </p>
  <p style="margin:0;color:#bbb;font-size:11px;">
    Building your AI search authority, one conversation at a time.
  </p>
</div>

</div>
</body>
</html>`;
}

async function sendAll() {
  for (const client of clients) {
    const subject = 'New Feature: Reddit Authority Monitoring Is Live For Your Business';
    const htmlBody = buildEmail(client);
    const plainBody = `Hi ${client.name}, we just activated Reddit Authority Monitoring for your account. See the HTML version for full details and setup instructions. - The Answer Engine`;

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

    const encodedRaw = Buffer.from(raw).toString('base64url');

    try {
      const res = await gmail.users.messages.send({ userId: 'me', requestBody: { raw: encodedRaw } });
      console.log('SENT to', client.name, '(' + client.email + ') - ID:', res.data.id);
    } catch (err) {
      console.log('FAILED for', client.name, ':', err.message);
    }

    // 2 second delay between sends
    await new Promise(r => setTimeout(r, 2000));
  }
  console.log('\nAll onboarding emails sent!');
}

sendAll();
