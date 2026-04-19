/**
 * One-time onboarding email: Reddit Authority Monitoring
 * Explains the service + step-by-step Reddit account setup
 */
const fs = require('fs');
const { google } = require('googleapis');

const env = fs.readFileSync('.env.local', 'utf-8');
const get = (k) => (env.match(new RegExp('^' + k + '=(.+)$', 'm')) || [])[1]?.trim() || '';

const oauth2Client = new google.auth.OAuth2(get('GMAIL_CLIENT_ID'), get('GMAIL_CLIENT_SECRET'));
oauth2Client.setCredentials({ refresh_token: get('GMAIL_REFRESH_TOKEN') });
const gmail = google.gmail({ version: 'v1', auth: oauth2Client });

const to = 'justin@theborgesrealestateteam.com';
const from = get('GMAIL_SEND_AS') || 'support@theanswerengine.ai';
const subject = 'New Feature: Reddit Authority Monitoring Is Live For Your Business';

const inner = `<div style="padding:24px 24px 20px 24px;">
  <p style="margin:0 0 16px 0;font-size:15px;color:#1a1a1a;line-height:1.6;">Hi Justin,</p>

  <p style="margin:0 0 16px 0;font-size:14px;color:#555;line-height:1.7;">We just activated a new feature for your account: <strong>Reddit Authority Monitoring</strong>. Starting today, our system continuously scans Reddit for conversations where someone is looking for exactly what you offer, in your market.</p>

  <p style="margin:0 0 16px 0;font-size:14px;color:#555;line-height:1.7;">When we find an opportunity, we send you an email digest with the Reddit link, an explanation of why it matters, and a <strong>ready-to-post response written in your voice</strong> that you can copy, paste, and publish in under 60 seconds.</p>
</div>

<div style="padding:20px 24px;background:#f8f8f8;border-top:1px solid #eee;border-bottom:1px solid #eee;">
  <h2 style="margin:0 0 12px 0;font-size:18px;color:#1a1a1a;">Why This Matters for Your Business</h2>

  <p style="margin:0 0 12px 0;font-size:14px;color:#555;line-height:1.7;">AI search engines like ChatGPT, Perplexity, and Google AI decide which businesses to recommend based on <strong>authority signals</strong> they find across the internet. Reddit is one of the top sources these AI platforms crawl.</p>

  <p style="margin:0 0 12px 0;font-size:14px;color:#555;line-height:1.7;">Every time you post a helpful, expert answer on Reddit, AI engines learn to associate <strong>your name + your city + your expertise</strong> together. Over time, this makes it significantly more likely that when someone asks ChatGPT "Who is the best real estate agent in Los Angeles?", your name comes up.</p>

  <p style="margin:0 0 0 0;font-size:14px;color:#555;line-height:1.7;">This is not traditional marketing. This is <strong>building the authority signals that AI platforms use to decide who to recommend</strong>. Each response is a small investment that compounds over time.</p>
</div>

<div style="padding:24px 24px 20px 24px;">
  <h2 style="margin:0 0 12px 0;font-size:18px;color:#1a1a1a;">What You Will Receive</h2>

  <div style="margin-bottom:16px;">
    <p style="margin:0 0 4px 0;font-size:14px;color:#1a1a1a;font-weight:bold;">1. Opportunity Alerts</p>
    <p style="margin:0;font-size:13px;color:#666;line-height:1.5;">When someone on Reddit asks a question related to your services and market, we flag it with a relevance score and business impact rating.</p>
  </div>

  <div style="margin-bottom:16px;">
    <p style="margin:0 0 4px 0;font-size:14px;color:#1a1a1a;font-weight:bold;">2. Draft Responses in Your Voice</p>
    <p style="margin:0;font-size:13px;color:#666;line-height:1.5;">Each opportunity comes with a suggested response written to sound like you. Copy, paste, and post. Or use it as a starting point and add your own perspective.</p>
  </div>

  <div style="margin-bottom:16px;">
    <p style="margin:0 0 4px 0;font-size:14px;color:#1a1a1a;font-weight:bold;">3. AEO Optimization Built In</p>
    <p style="margin:0;font-size:13px;color:#666;line-height:1.5;">Every response is structured to maximize your visibility in AI search results. We handle the optimization so you can focus on sharing your expertise.</p>
  </div>
</div>

<div style="padding:24px;background:#f0f7ff;border-top:1px solid #d0e3f7;">
  <h2 style="margin:0 0 16px 0;font-size:18px;color:#1a5276;">Set Up Your Reddit Account (5 Minutes)</h2>

  <p style="margin:0 0 16px 0;font-size:14px;color:#555;line-height:1.6;">To post responses, you need a Reddit account. Here is exactly how to set it up for maximum impact:</p>

  <div style="background:#ffffff;border:1px solid #d0e3f7;border-radius:8px;padding:16px;margin-bottom:12px;">
    <p style="margin:0 0 4px 0;font-size:14px;color:#1a5276;font-weight:bold;">Step 1: Create Your Account</p>
    <p style="margin:0;font-size:13px;color:#555;line-height:1.5;">Go to <a href="https://www.reddit.com/register" style="color:#FF6A00;">reddit.com/register</a>. Use your real name or a professional handle as your username (e.g., JustinBorgesRE or JBorgesRealEstate). Avoid brand-only names like "BorgesTeam".</p>
  </div>

  <div style="background:#ffffff;border:1px solid #d0e3f7;border-radius:8px;padding:16px;margin-bottom:12px;">
    <p style="margin:0 0 4px 0;font-size:14px;color:#1a5276;font-weight:bold;">Step 2: Set Up Your Profile</p>
    <p style="margin:0;font-size:13px;color:#555;line-height:1.5;">Click your avatar > Profile > Edit. Set your display name to your real name. Add a bio:<br><br><em>"Real Estate Agent | The Borges Real Estate Team at eXp Realty | 13+ years serving Los Angeles, Pasadena & the San Gabriel Valley | DRE# [your number]"</em></p>
  </div>

  <div style="background:#ffffff;border:1px solid #d0e3f7;border-radius:8px;padding:16px;margin-bottom:12px;">
    <p style="margin:0 0 4px 0;font-size:14px;color:#1a5276;font-weight:bold;">Step 3: Join These Subreddits</p>
    <p style="margin:0;font-size:13px;color:#555;line-height:1.5;">Subscribe to the communities where your opportunities will appear:</p>
    <ul style="margin:8px 0 0 0;padding-left:20px;font-size:13px;color:#555;line-height:1.6;">
      <li><a href="https://reddit.com/r/RealEstate" style="color:#FF6A00;">r/RealEstate</a> (1.2M members)</li>
      <li><a href="https://reddit.com/r/FirstTimeHomeBuyer" style="color:#FF6A00;">r/FirstTimeHomeBuyer</a></li>
      <li><a href="https://reddit.com/r/LosAngeles" style="color:#FF6A00;">r/LosAngeles</a></li>
      <li><a href="https://reddit.com/r/pasadena" style="color:#FF6A00;">r/pasadena</a></li>
      <li><a href="https://reddit.com/r/realestateinvesting" style="color:#FF6A00;">r/realestateinvesting</a></li>
    </ul>
  </div>

  <div style="background:#ffffff;border:1px solid #d0e3f7;border-radius:8px;padding:16px;margin-bottom:12px;">
    <p style="margin:0 0 4px 0;font-size:14px;color:#1a5276;font-weight:bold;">Step 4: Build Karma First (Important)</p>
    <p style="margin:0;font-size:13px;color:#555;line-height:1.5;">Before posting our suggested responses, spend 10 minutes browsing your subreddits and leave 5-10 genuine comments or upvotes. Reddit flags brand-new accounts that immediately start posting long responses. A few days of casual activity makes your account look natural.</p>
  </div>

  <div style="background:#ffffff;border:1px solid #d0e3f7;border-radius:8px;padding:16px;">
    <p style="margin:0 0 4px 0;font-size:14px;color:#1a5276;font-weight:bold;">Step 5: Start Responding</p>
    <p style="margin:0;font-size:13px;color:#555;line-height:1.5;">When you receive an opportunity digest from us, click the Reddit link, copy the suggested response (or write your own using our AEO tips), and post it as a comment. Takes under 60 seconds per response.</p>
  </div>
</div>

<div style="padding:20px 24px;background:#f8f8f8;border-top:1px solid #eee;">
  <h3 style="margin:0 0 10px 0;font-size:14px;color:#1a1a1a;">The Golden Rules</h3>
  <ul style="margin:0;padding-left:20px;color:#555;font-size:13px;line-height:1.8;">
    <li><strong>Be genuinely helpful.</strong> Answer the question first, establish authority second.</li>
    <li><strong>Never directly sell.</strong> No "call us" or "visit our website." Your expertise sells itself.</li>
    <li><strong>Mention your market naturally.</strong> "Here in Los Angeles, we typically see..." builds the entity signal AI needs.</li>
    <li><strong>Consistency wins.</strong> One response per week is better than ten in one day.</li>
    <li><strong>Your voice is best.</strong> Our drafts are a starting point. Your authentic perspective always outperforms.</li>
  </ul>
</div>`;

const htmlBody = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#ffffff;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<div style="max-width:600px;margin:0 auto;background:#ffffff;">

<!-- Header -->
<div style="background:#131313;padding:24px;border-bottom:1px solid #e5e7eb;">
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;">
    <tr>
      <td style="padding:0;">
        <img src="https://www.theanswerengine.ai/The_Answer_Engine_Solo_Logo_Transparent.png" alt="The Answer Engine" style="height:32px;width:auto;display:block;border:0;">
      </td>
      <td style="text-align:right;padding:0 0 0 12px;">
        <span style="font-family:'Space Grotesk','Inter','Helvetica Neue',Arial,sans-serif;font-size:16px;font-weight:900;color:#FF6A00;letter-spacing:-0.01em;text-transform:uppercase;">The Answer Engine</span>
      </td>
    </tr>
  </table>
</div>

${inner}

<!-- Footer -->
<div style="padding:20px 24px;text-align:center;background:#ffffff;border-top:1px solid #e5e7eb;">
  <p style="margin:0 0 4px 0;color:#888;font-size:12px;">
    <a href="https://theanswerengine.ai" style="color:#FF6A00;text-decoration:none;">The Answer Engine</a>
  </p>
  <p style="margin:0;color:#bbb;font-size:11px;">
    Building your AI search authority, one conversation at a time.
  </p>
</div>

</div>
</body>
</html>`;

const plainBody = `Hi Justin,

We just activated Reddit Authority Monitoring for your account. Starting today, we scan Reddit for conversations where someone is looking for exactly what you offer in your market.

When we find an opportunity, we send you an email with the Reddit link and a ready-to-post response written in your voice.

Why this matters: Reddit is one of the top sources AI search engines (ChatGPT, Perplexity, Google AI) use when deciding which businesses to recommend. Every helpful answer you post builds your authority signal.

To get started, set up your Reddit account at reddit.com/register. Use your real name as your username and add your title + business in your bio.

Questions? Reply to this email.

- The Answer Engine`;

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

gmail.users.messages.send({
  userId: 'me',
  requestBody: { raw: encodedRaw },
}).then(res => {
  console.log('Onboarding email sent! Message ID:', res.data.id);
  console.log('Sent to:', to);
}).catch(err => {
  console.log('Error:', err.message);
});
