/**
 * AE Onboarding Email Generator
 * Sends a branded onboarding email to a new client using their config file.
 *
 * Usage:
 *   node scripts/send-onboarding-email.js --client=truedoor
 *
 * Config file location:
 *   C:/Users/Justi/The Answer Engine LLC/clients/{slug}/onboarding-config.json
 *
 * To onboard a new client:
 *   1. Copy clients/_template/onboarding-config.json to clients/{new-slug}/onboarding-config.json
 *   2. Fill in all fields
 *   3. Run this script with --client={new-slug}
 *   4. Review draft in support@theanswerengine.ai, then send
 */

require('dotenv').config({ path: '.env.local' });
const { google }     = require('googleapis');
const path           = require('path');
const fs             = require('fs');
const { execSync }   = require('child_process');

// Pull missing Gmail creds from Infisical if not in .env.local
const INFISICAL  = 'C:/Users/Justi/AppData/Roaming/npm/node_modules/@infisical/cli/bin/infisical.exe';
const PROJECT_ID = 'c08e818c-11b0-4c49-a251-3d81cff9ba1d';
function getSecret(key) {
  try {
    return execSync(
      `"${INFISICAL}" secrets get ${key} --env=dev --projectId=${PROJECT_ID} --plain --silent`,
      { encoding: 'utf8' }
    ).trim();
  } catch { return ''; }
}
if (!process.env.GMAIL_CLIENT_ID)     process.env.GMAIL_CLIENT_ID     = getSecret('GMAIL_CLIENT_ID');
if (!process.env.GMAIL_CLIENT_SECRET) process.env.GMAIL_CLIENT_SECRET = getSecret('GMAIL_CLIENT_SECRET');
if (!process.env.GMAIL_REFRESH_TOKEN) process.env.GMAIL_REFRESH_TOKEN = getSecret('GMAIL_REFRESH_TOKEN');
if (!process.env.GMAIL_SEND_AS)       process.env.GMAIL_SEND_AS       = getSecret('GMAIL_SEND_AS');

// --- Args ---
const args = Object.fromEntries(
  process.argv.slice(2).map(a => a.replace('--', '').split('='))
);
const clientSlug = args.client;
if (!clientSlug) {
  console.error('Usage: node scripts/send-onboarding-email.js --client=SLUG');
  process.exit(1);
}

// --- Load config ---
const configPath = path.resolve(
  'C:/Users/Justi/The Answer Engine LLC/clients',
  clientSlug,
  'onboarding-config.json'
);
if (!fs.existsSync(configPath)) {
  console.error(`Config not found: ${configPath}`);
  process.exit(1);
}
const cfg = JSON.parse(fs.readFileSync(configPath, 'utf8'));

// --- Derived values ---
const toContact   = cfg.contacts.find(c => c.to);
const ccContacts  = cfg.contacts.filter(c => c.cc).map(c => c.email);
const allNames    = cfg.contacts.map(c => c.firstName).join(' + ');
const primaryFirst = toContact.firstName;
const serviceAreaList = cfg.interview.serviceAreas.join(', ');

// --- Gmail ---
const CLIENT_ID     = process.env.GMAIL_CLIENT_ID;
const CLIENT_SECRET = process.env.GMAIL_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.GMAIL_REFRESH_TOKEN;
const FROM          = process.env.GMAIL_SEND_AS || 'support@theanswerengine.ai';

if (!CLIENT_ID || !CLIENT_SECRET || !REFRESH_TOKEN) {
  console.error('Missing Gmail credentials in .env.local');
  process.exit(1);
}

const oauth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET);
oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
const gmail = google.gmail({ version: 'v1', auth: oauth2Client });

// --- Numbered questions HTML ---
const questionsHtml = cfg.questions
  .map((q, i) => `<li>${q}</li>`)
  .join('\n            ');

// --- Numbered questions plain text ---
const questionsText = cfg.questions
  .map((q, i) => `${i + 1}. ${q}`)
  .join('\n');

// --- GSC section (AE-handled vs client-handled) ---
function gscSection(cfg) {
  if (cfg.gscHandledByAE) {
    return `<p style="font-size:14px;line-height:1.65;color:#e5e2e1;margin:0 0 10px 0;">We're handling your Google Search Console setup directly — you'll receive a confirmation email from Google once it's verified. <strong>No action needed on your end for this one.</strong></p>
        <div style="background:#0f0f10;border-left:3px solid #F27D24;padding:13px 15px;font-size:13px;line-height:1.8;color:#e5e2e1;">
          We'll verify ownership and configure the property under <strong>support@theanswerengine.ai</strong>. This gives us full visibility into impressions, queries, and index coverage so we can track exactly how the content is moving your rankings.
        </div>`;
  }
  return `<p style="font-size:14px;line-height:1.65;color:#e5e2e1;margin:0 0 10px 0;">Add <strong>support@theanswerengine.ai</strong> as an <strong>Owner</strong> on your Search Console property. Owner-level gives us full visibility into impressions, queries, and index coverage so we can track exactly how our content is moving your rankings.</p>
        <div style="background:#0f0f10;border-left:3px solid #F27D24;padding:13px 15px;font-size:13px;line-height:1.8;color:#e5e2e1;">
          1. Go to <strong>search.google.com/search-console</strong><br>
          2. Select the <strong>${cfg.websiteUrl}</strong> property<br>
          3. Click <strong>Settings</strong> (gear icon, bottom left) &rarr; <strong>Users &amp; Permissions</strong><br>
          4. Click <strong>Add User</strong><br>
          5. Enter <strong>support@theanswerengine.ai</strong> and set permission to <strong>Owner</strong><br>
          6. Click <strong>Add</strong>
        </div>`;
}

function gscSectionText(cfg) {
  if (cfg.gscHandledByAE) {
    return `We're handling your Google Search Console setup directly. You'll get a confirmation from Google when it's verified. No action needed from you.`;
  }
  return `- Go to search.google.com/search-console\n- Select ${cfg.websiteUrl}\n- Settings -> Users & Permissions -> Add User\n- Enter support@theanswerengine.ai and set to Owner\n- Click Add`;
}

// --- CMS-specific instructions ---
function cmsInstructions(cms, websiteUrl) {
  if (cms === 'Webflow') {
    return `
        <p style="font-size:14px;line-height:1.7;color:#e5e2e1;margin:0 0 10px 0;">We'll handle your Webflow integration and API setup on our end. Just let us know you're good to go with us publishing directly to your blog, and we'll take it from there.</p>
        <div style="background:#0f0f10;border-left:3px solid #F27D24;padding:13px 15px;font-size:13px;line-height:1.9;color:#e5e2e1;">
          <strong style="color:#F27D24;">What this means:</strong><br>
          We'll securely connect to your Webflow account and publish ${cfg.articlesPerMonth} articles/month directly to your blog. You'll see everything published under our account that we share with you, and all articles are fully formatted and SEO-ready the moment they go live. No extra work from you.
        </div>`;
  }
  if (cms === 'WordPress') {
    return `
        <div style="background:#0f0f10;border-left:3px solid #F27D24;padding:13px 15px;font-size:13px;line-height:1.9;color:#e5e2e1;margin-bottom:10px;">
          1. Log into your WordPress dashboard at <strong>${websiteUrl}/wp-admin</strong><br>
          2. In the left sidebar, go to <strong>Users &rarr; Add New User</strong><br>
          3. Fill in the following:<br>
          &nbsp;&nbsp;&nbsp;&bull; <strong>Username:</strong> answerengine<br>
          &nbsp;&nbsp;&nbsp;&bull; <strong>Email:</strong> support@theanswerengine.ai<br>
          &nbsp;&nbsp;&nbsp;&bull; <strong>Role:</strong> <strong>Administrator</strong><br>
          4. Check <strong>"Send the new user an email about their account"</strong><br>
          5. Click <strong>Add New User</strong>
        </div>
        <p style="font-size:13px;line-height:1.65;color:#888888;margin:0;">We need Administrator-level access so we can properly format posts, set featured images, configure SEO metadata, and publish directly. We'll never touch your plugins, settings, or theme. Only blog content. If you'd prefer to start with <strong>Editor</strong> access, that works too; just know we may need a temporary upgrade for initial setup.</p>`;
  }
  if (cms === 'Squarespace') {
    return `
        <div style="background:#0f0f10;border-left:3px solid #F27D24;padding:13px 15px;font-size:13px;line-height:1.9;color:#e5e2e1;margin-bottom:10px;">
          1. Log into your Squarespace account at <strong>account.squarespace.com</strong><br>
          2. Open your site, go to <strong>Settings &rarr; Permissions &amp; Ownership &rarr; Invite Contributor</strong><br>
          3. Enter <strong>support@theanswerengine.ai</strong><br>
          4. Set role to <strong>Administrator</strong><br>
          5. Click <strong>Send Invitation</strong>
        </div>`;
  }
  // Generic fallback
  return `
        <div style="background:#0f0f10;border-left:3px solid #F27D24;padding:13px 15px;font-size:13px;line-height:1.9;color:#e5e2e1;margin-bottom:10px;">
          Please add <strong>support@theanswerengine.ai</strong> as an Administrator or Editor on your ${cms} site so we can publish articles directly. Reply here and we'll walk you through the exact steps for your platform.
        </div>`;
}

function cmsInstructionsText(cms, websiteUrl) {
  if (cms === 'Webflow') {
    return `We'll handle your Webflow integration and API setup. We'll securely connect to your account and publish articles directly to your blog — fully formatted and SEO-ready. No extra work from you.`;
  }
  if (cms === 'WordPress') {
    return `- Log into ${websiteUrl}/wp-admin
- Go to Users -> Add New User
- Username: answerengine | Email: support@theanswerengine.ai | Role: Administrator
- Check "Send the new user an email about their account"
- Click Add New User

We need Administrator access to format posts, set featured images, configure SEO metadata, and publish directly. We'll never touch your plugins, settings, or theme. Only blog content. Editor works too if preferred.`;
  }
  return `Please add support@theanswerengine.ai as an Administrator or Editor on your ${cms} site. Reply and we'll walk you through the steps.`;
}

// --- Build HTML body ---
const htmlBody = `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background-color:#131313;font-family:Arial,Helvetica,sans-serif;color:#e5e2e1;">
<div style="max-width:620px;margin:0 auto;padding:40px 32px;">

  <!-- Logo mark -->
  <div style="margin-bottom:28px;">
    <img src="https://theanswerengine.ai/mark-1a-orange.png" width="48" height="48" alt="The Answer Engine" style="display:block;">
  </div>

  <p style="font-size:15px;line-height:1.7;color:#e5e2e1;margin:0 0 20px 0;">Hey ${allNames},</p>
  <p style="font-size:15px;line-height:1.7;color:#e5e2e1;margin:0 0 28px 0;">Thrilled to officially have ${cfg.companyName} on the roster. Before we fire up the content machine, I need four things from your side. Instructions for each are below. Nothing here should take more than a few minutes, except the interview (which is worth doing right).</p>

  <hr style="border:none;border-top:1px solid #1c1c1c;margin:0 0 32px 0;">

  <!-- ITEM 1: GSC -->
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-bottom:32px;">
    <tr>
      <td width="44" valign="top" style="padding-top:2px;">
        <span style="display:inline-block;width:28px;height:28px;background:#F27D24;text-align:center;line-height:28px;font-family:'Arial Black',Arial,sans-serif;font-size:13px;font-weight:900;color:#131313;">1</span>
      </td>
      <td valign="top">
        <p style="font-family:'Courier New',Courier,monospace;font-size:10px;font-weight:400;letter-spacing:3px;text-transform:uppercase;color:#F27D24;margin:0 0 9px 0;">Google Search Console Access</p>
        ${gscSection(cfg)}
      </td>
    </tr>
  </table>

  <!-- ITEM 2: Connect support@ -->
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-bottom:32px;">
    <tr>
      <td width="44" valign="top" style="padding-top:2px;">
        <span style="display:inline-block;width:28px;height:28px;background:#F27D24;text-align:center;line-height:28px;font-family:'Arial Black',Arial,sans-serif;font-size:13px;font-weight:900;color:#131313;">2</span>
      </td>
      <td valign="top">
        <p style="font-family:'Courier New',Courier,monospace;font-size:10px;font-weight:400;letter-spacing:3px;text-transform:uppercase;color:#F27D24;margin:0 0 9px 0;">Connect with support@theanswerengine.ai</p>
        <p style="font-size:14px;line-height:1.7;color:#e5e2e1;margin:0;">This is our working inbox for everything ${cfg.companyName}: article drafts, previews, revision requests, approvals. Add it to your contacts now so nothing lands in spam. Reply to this thread or reach out here anytime.</p>
      </td>
    </tr>
  </table>

  ${!cfg.cmsHandledByAE ? `<!-- ITEM 3: CMS -->
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-bottom:32px;">
    <tr>
      <td width="44" valign="top" style="padding-top:2px;">
        <span style="display:inline-block;width:28px;height:28px;background:#F27D24;text-align:center;line-height:28px;font-family:'Arial Black',Arial,sans-serif;font-size:13px;font-weight:900;color:#131313;">3</span>
      </td>
      <td valign="top">
        <p style="font-family:'Courier New',Courier,monospace;font-size:10px;font-weight:400;letter-spacing:3px;text-transform:uppercase;color:#F27D24;margin:0 0 9px 0;">${cfg.cms} Access</p>
        <p style="font-size:14px;line-height:1.7;color:#e5e2e1;margin:0 0 10px 0;">We'll be publishing ${cfg.articlesPerMonth} articles/month directly to ${cfg.websiteUrl}. Here's how to add us:</p>
        ${cmsInstructions(cfg.cms, cfg.websiteUrl)}
      </td>
    </tr>
  </table>` : ''}

  <!-- Interview -->
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-bottom:36px;">
    <tr>
      <td width="44" valign="top" style="padding-top:2px;">
        <span style="display:inline-block;width:28px;height:28px;background:#F27D24;text-align:center;line-height:28px;font-family:'Arial Black',Arial,sans-serif;font-size:13px;font-weight:900;color:#131313;">${cfg.cmsHandledByAE ? '3' : '4'}</span>
      </td>
      <td valign="top">
        <p style="font-family:'Courier New',Courier,monospace;font-size:10px;font-weight:400;letter-spacing:3px;text-transform:uppercase;color:#F27D24;margin:0 0 9px 0;">Voice Capture Interview</p>
        <p style="font-size:14px;line-height:1.7;color:#e5e2e1;margin:0 0 12px 0;">This is the most important step. Everything we write needs to sound like <em>you</em>. ${cfg.companyName}'s language, your perspective on the market, your vision for where this is going. The interview is how we lock that in. The richer your answers, the better the content.</p>

        <p style="font-size:14px;font-weight:700;color:#e5e2e1;margin:0 0 8px 0;">How it works:</p>
        <p style="font-size:14px;line-height:1.7;color:#e5e2e1;margin:0 0 14px 0;">This is a ChatGPT self-interview. No call needed, no scheduling. Just you, your phone (or computer), and the questions below. Here's the exact process:</p>
        <div style="background:#0f0f10;border-left:3px solid #F27D24;padding:13px 15px;font-size:13px;line-height:1.9;color:#e5e2e1;margin-bottom:16px;">
          <strong>Step 1:</strong> Open ChatGPT and start a new conversation.<br>
          <strong>Step 2:</strong> Paste this exactly to kick it off:<br>
          <div style="background:#131313;border:1px solid #1c1c1c;padding:10px 12px;margin:8px 0;font-family:'Courier New',Courier,monospace;font-size:12px;color:#e5e2e1;line-height:1.6;">
            I'm doing a business interview. My name is [your name] and I'm [your title] at ${cfg.companyName}. Please act as my interviewer. I'll give you a list of questions. Ask them one at a time, wait for my full answer, then move to the next. Don't summarize or comment between questions, just keep moving. Here are the questions: [paste the questions below]
          </div>
          <strong>Step 3:</strong> Switch to voice mode (the headphone icon) and just talk. Answer however feels natural. Long answers, tangents, stories, all good.<br>
          <strong>Step 4:</strong> Take your time. Do a few questions, put your phone down, come back later. No rush at all.<br>
          <strong>Step 5:</strong> When you're done, send us the transcript (instructions below the questions).
        </div>

        <div style="background:#0f0f10;border-left:3px solid #F27D24;padding:14px 16px;margin-bottom:16px;">
          <p style="font-size:13px;line-height:1.7;color:#e5e2e1;margin:0;"><strong style="color:#F27D24;">Feel free to take a collaborative approach on this.</strong> If both of you want to go through the questions, great. If one of you covers something and the other doesn't want to be redundant, totally fine. There's no wrong way. The more we have to work with, the better content we can build. Just make sure ChatGPT knows your name and role at the start so we know whose voice we're reading.</p>
        </div>

        <p style="font-size:14px;line-height:1.7;color:#e5e2e1;margin:0 0 14px 0;"><strong>Take your time on this.</strong> There's no deadline. If a question sparks a tangent, follow it. We can always trim; we can't manufacture depth we don't have.</p>

        <p style="font-family:'Courier New',Courier,monospace;font-size:10px;letter-spacing:3px;text-transform:uppercase;color:#F27D24;margin:0 0 10px 0;">The Questions</p>
        <div style="background:#0f0f10;border-left:3px solid #F27D24;padding:16px 16px 16px 20px;">
          <ol style="font-size:13px;line-height:2.0;color:#e5e2e1;margin:0;padding-left:18px;">
            ${questionsHtml}
          </ol>
        </div>

        <p style="font-family:'Courier New',Courier,monospace;font-size:10px;letter-spacing:3px;text-transform:uppercase;color:#F27D24;margin:16px 0 8px 0;">How to send it back</p>
        <div style="background:#0f0f10;border-left:3px solid #F27D24;padding:13px 15px;font-size:13px;line-height:1.9;color:#e5e2e1;">
          <strong>Option A (easiest):</strong> At the top right of your ChatGPT conversation, click the <strong>Share</strong> button and copy the link. Send that link to <a href="mailto:support@theanswerengine.ai" style="color:#F27D24;">support@theanswerengine.ai</a>.<br>
          <strong>Option B:</strong> Copy the full conversation text, paste it into an email, and send to <a href="mailto:support@theanswerengine.ai" style="color:#F27D24;">support@theanswerengine.ai</a>.<br>
          <strong>Option C:</strong> If ChatGPT gives you a download or export option, send us that file.<br><br>
          Either way works perfectly. Just reply to this thread with whatever you've got.
        </div>
      </td>
    </tr>
  </table>

  <hr style="border:none;border-top:1px solid #1c1c1c;margin:0 0 24px 0;">
  <p style="font-size:15px;line-height:1.7;color:#e5e2e1;margin:0 0 10px 0;">Once these four are in, I'll lock the content calendar and we'll have the first batch rolling within the week. Fastest way to reach me is replying here or hitting <a href="mailto:support@theanswerengine.ai" style="color:#F27D24;text-decoration:none;">support@theanswerengine.ai</a> directly.</p>
  <p style="font-size:15px;line-height:1.7;color:#e5e2e1;margin:0 0 40px 0;">Let's build something here.</p>

  <!-- Signature -->
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="480" style="border-collapse:collapse;max-width:480px;">
    <tr>
      <td style="padding:0 0 2px 0;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td style="font-family:'Arial Black',Arial,sans-serif;font-weight:900;font-size:32px;letter-spacing:-0.03em;line-height:1;text-transform:uppercase;color:#e5e2e1;white-space:nowrap;padding:0;">THE&nbsp;</td>
            <td style="font-family:'Arial Black',Arial,sans-serif;font-weight:900;font-size:32px;letter-spacing:-0.03em;line-height:1;text-transform:uppercase;color:#131313;background-color:#F27D24;white-space:nowrap;padding:0 6px;">[ANSWER]</td>
            <td style="font-family:'Arial Black',Arial,sans-serif;font-weight:900;font-size:32px;letter-spacing:-0.03em;line-height:1;text-transform:uppercase;color:#e5e2e1;white-space:nowrap;padding:0 0 0 7px;">ENGINE</td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td style="padding:6px 0 0 0;">
        <div style="border-top:3px solid #F27D24;width:100%;font-size:0;line-height:0;">&nbsp;</div>
      </td>
    </tr>
    <tr>
      <td style="padding:7px 0 20px 0;">
        <span style="font-family:'Courier New',Courier,monospace;font-size:10px;font-weight:400;letter-spacing:4px;text-transform:uppercase;color:#F27D24;display:block;">Become the Answer</span>
      </td>
    </tr>
    <tr>
      <td style="padding:0 0 3px 0;">
        <span style="font-family:'Arial Black',Arial,sans-serif;font-size:12px;font-weight:900;letter-spacing:0.06em;text-transform:uppercase;color:#e5e2e1;">Justin Borges</span>
        <span style="font-family:'Courier New',Courier,monospace;font-size:10px;font-weight:400;letter-spacing:0.14em;text-transform:uppercase;color:#888888;padding-left:8px;">Founder</span>
      </td>
    </tr>
    <tr>
      <td style="padding:0;">
        <span style="font-family:'Courier New',Courier,monospace;font-size:10px;font-weight:400;letter-spacing:0.10em;color:#888888;">
          <a href="mailto:support@theanswerengine.ai" style="color:#888888;text-decoration:none;">support@theanswerengine.ai</a>
          &nbsp;&middot;&nbsp;
          <a href="https://theanswerengine.ai" style="color:#888888;text-decoration:none;">theanswerengine.ai</a>
        </span>
      </td>
    </tr>
  </table>

</div>
</body>
</html>`;

// --- Build plain text ---
const plainText = `Hey ${allNames},

Thrilled to officially have ${cfg.companyName} on the roster. Before we fire up the content machine, I need four things. Nothing takes more than a few minutes, except the interview (which is worth doing right).

---

1. GOOGLE SEARCH CONSOLE ACCESS
${gscSectionText(cfg)}

---

2. CONNECT WITH support@theanswerengine.ai
Add it to your contacts so nothing lands in spam. All content review and approvals flow through this inbox.

---

3. ${cfg.cms.toUpperCase()} ACCESS
We'll be publishing ${cfg.articlesPerMonth} articles/month to ${cfg.websiteUrl}.

${cmsInstructionsText(cfg.cms, cfg.websiteUrl)}

---

4. VOICE CAPTURE INTERVIEW

This is the most important step. Everything we write needs to sound like ${cfg.companyName}. Your language, your market perspective, your vision. The richer your answers, the better the content.

This is a ChatGPT self-interview. No call needed, no scheduling. Here's the exact process:

Step 1: Open ChatGPT and start a new conversation.
Step 2: Paste this to kick it off:
  "I'm doing a business interview. My name is [your name] and I'm [your title] at ${cfg.companyName}. Please act as my interviewer. I'll give you a list of questions. Ask them one at a time, wait for my full answer, then move to the next. Don't summarize or comment between questions, just keep moving. Here are the questions: [paste the questions below]"
Step 3: Switch to voice mode (headphone icon) and just talk. Long answers, tangents, stories, all good.
Step 4: Take your time. Do a few questions, come back later. No rush.
Step 5: When done, send us the transcript (see below).

Feel free to take a collaborative approach. If both of you want to go through the questions, great. If one of you covers something and the other doesn't want to be redundant, totally fine. The more we have, the better. Just make sure ChatGPT knows your name and role at the start.

Take your time. No deadline. If a question sparks a tangent, follow it. We can trim; we can't manufacture depth we don't have.

THE QUESTIONS:

${questionsText}

HOW TO SEND IT BACK:
- Option A (easiest): Click Share in your ChatGPT conversation, copy the link, email to support@theanswerengine.ai.
- Option B: Copy the full conversation text, paste into an email to support@theanswerengine.ai.
- Option C: Download/export the conversation if available and send us the file.
Just reply to this thread with whatever you've got.

---

Once these four are in, I'll lock the content calendar and we'll have the first batch rolling within the week.

Let's build something here.

Justin Borges | Founder
support@theanswerengine.ai · theanswerengine.ai`;

// --- Encode and send ---
const boundary = `boundary_${Date.now()}`;
const rawEmail = [
  `From: Justin Borges <${FROM}>`,
  `To: ${toContact.email}`,
  ...(ccContacts.length ? [`Cc: ${ccContacts.join(', ')}`] : []),
  `Subject: ${cfg.companyName} Onboarding - Four Things Before We Launch`,
  `MIME-Version: 1.0`,
  `Content-Type: multipart/alternative; boundary="${boundary}"`,
  ``,
  `--${boundary}`,
  `Content-Type: text/plain; charset=utf-8`,
  ``,
  plainText,
  ``,
  `--${boundary}`,
  `Content-Type: text/html; charset=utf-8`,
  ``,
  htmlBody,
  ``,
  `--${boundary}--`,
].join('\r\n');

const encoded = Buffer.from(rawEmail)
  .toString('base64')
  .replace(/\+/g, '-')
  .replace(/\//g, '_')
  .replace(/=+$/, '');

gmail.users.drafts.create({
  userId: 'me',
  requestBody: { message: { raw: encoded } },
}).then(res => {
  console.log(`\n✓ Onboarding draft created for ${cfg.companyName}`);
  console.log(`  To:      ${toContact.email}`);
  if (ccContacts.length) console.log(`  CC:      ${ccContacts.join(', ')}`);
  console.log(`  Subject: ${cfg.companyName} Onboarding - Four Things Before We Launch`);
  console.log(`  Draft ID: ${res.data.id}`);
  console.log(`\n  Review in support@theanswerengine.ai drafts, then send.\n`);
}).catch(err => {
  console.error('✗ Error:', err.message);
  process.exit(1);
});
