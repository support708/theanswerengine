/**
 * TrueDoor onboarding draft — v4 (ChatGPT self-interview only, no live call)
 * Run from: theanswerengine-nextjs/
 *   node scripts/create-truedoor-onboarding-draft.js
 */

const DRAFT_TO_DELETE = 'r-5491867739394154083'; // v3 draft — discard on run

require('dotenv').config({ path: '.env.local' });
const { google } = require('googleapis');

const CLIENT_ID = process.env.GMAIL_CLIENT_ID;
const CLIENT_SECRET = process.env.GMAIL_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.GMAIL_REFRESH_TOKEN;
const FROM = process.env.GMAIL_SEND_AS || 'support@theanswerengine.ai';

if (!CLIENT_ID || !CLIENT_SECRET || !REFRESH_TOKEN) {
  console.error('Missing Gmail credentials in .env.local');
  process.exit(1);
}

const oauth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET);
oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
const gmail = google.gmail({ version: 'v1', auth: oauth2Client });

const htmlBody = `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background-color:#ffffff;font-family:'Inter',Helvetica,Arial,sans-serif;color:#0A0A0A;">
<div style="max-width:620px;margin:0 auto;padding:40px 32px;">

  <p style="font-size:15px;line-height:1.6;margin:0 0 20px 0;">Hey Kyle + Bryant,</p>
  <p style="font-size:15px;line-height:1.6;margin:0 0 28px 0;">Thrilled to officially have TrueDoor on the roster. Before we fire up the content machine, I need four things from your side. Instructions for each are below. Nothing here should take more than a few minutes, except the interview (which is worth doing right).</p>

  <hr style="border:none;border-top:1px solid #E8E4DA;margin:0 0 32px 0;">

  <!-- ITEM 1: GSC -->
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-bottom:32px;">
    <tr>
      <td width="40" valign="top" style="padding-top:2px;">
        <span style="display:inline-block;width:28px;height:28px;background:#F27D24;border-radius:50%;text-align:center;line-height:28px;font-family:'Archivo Black','Arial Black',Arial,sans-serif;font-size:13px;font-weight:900;color:#FAF8F2;">1</span>
      </td>
      <td valign="top">
        <p style="font-size:14px;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;color:#0A0A0A;margin:0 0 7px 0;">Google Search Console Access</p>
        <p style="font-size:14px;line-height:1.65;color:#3a3a3a;margin:0 0 10px 0;">Add <strong>support@theanswerengine.ai</strong> as an <strong>Owner</strong> on your Search Console property. Owner-level gives us full visibility into impressions, queries, and index coverage so we can track exactly how our content is moving your rankings.</p>
        <div style="background:#F4F0E8;border-left:3px solid #F27D24;padding:13px 15px;font-size:13px;line-height:1.8;color:#444;">
          1. Go to <strong>search.google.com/search-console</strong><br>
          2. Select the <strong>truedoorpm.com</strong> property<br>
          3. Click <strong>Settings</strong> (gear icon, bottom left) &rarr; <strong>Users &amp; Permissions</strong><br>
          4. Click <strong>Add User</strong><br>
          5. Enter <strong>support@theanswerengine.ai</strong> and set permission to <strong>Owner</strong><br>
          6. Click <strong>Add</strong>
        </div>
      </td>
    </tr>
  </table>

  <!-- ITEM 2: Connect support@ -->
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-bottom:32px;">
    <tr>
      <td width="40" valign="top" style="padding-top:2px;">
        <span style="display:inline-block;width:28px;height:28px;background:#F27D24;border-radius:50%;text-align:center;line-height:28px;font-family:'Archivo Black','Arial Black',Arial,sans-serif;font-size:13px;font-weight:900;color:#FAF8F2;">2</span>
      </td>
      <td valign="top">
        <p style="font-size:14px;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;color:#0A0A0A;margin:0 0 7px 0;">Connect with support@theanswerengine.ai</p>
        <p style="font-size:14px;line-height:1.65;color:#3a3a3a;margin:0;">This is our working inbox for everything TrueDoor: article drafts, previews, revision requests, approvals. Add it to your contacts now so nothing lands in spam. Reply to this thread or reach out here anytime.</p>
      </td>
    </tr>
  </table>

  <!-- ITEM 3: WordPress -->
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-bottom:32px;">
    <tr>
      <td width="40" valign="top" style="padding-top:2px;">
        <span style="display:inline-block;width:28px;height:28px;background:#F27D24;border-radius:50%;text-align:center;line-height:28px;font-family:'Archivo Black','Arial Black',Arial,sans-serif;font-size:13px;font-weight:900;color:#FAF8F2;">3</span>
      </td>
      <td valign="top">
        <p style="font-size:14px;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;color:#0A0A0A;margin:0 0 7px 0;">WordPress Access</p>
        <p style="font-size:14px;line-height:1.65;color:#3a3a3a;margin:0 0 10px 0;">We'll be publishing 16 articles/month directly to truedoorpm.com. Since your site is on WordPress, here's how to add us. This takes about 2 minutes:</p>
        <div style="background:#F4F0E8;border-left:3px solid #F27D24;padding:13px 15px;font-size:13px;line-height:1.9;color:#444;margin-bottom:10px;">
          1. Log into your WordPress dashboard at <strong>truedoorpm.com/wp-admin</strong><br>
          2. In the left sidebar, go to <strong>Users &rarr; Add New User</strong><br>
          3. Fill in the following:<br>
          &nbsp;&nbsp;&nbsp;&bull; <strong>Username:</strong> answerengine<br>
          &nbsp;&nbsp;&nbsp;&bull; <strong>Email:</strong> support@theanswerengine.ai<br>
          &nbsp;&nbsp;&nbsp;&bull; <strong>Role:</strong> <strong>Administrator</strong><br>
          4. Check <strong>"Send the new user an email about their account"</strong><br>
          5. Click <strong>Add New User</strong>
        </div>
        <p style="font-size:13px;line-height:1.65;color:#666;margin:0;">We need Administrator-level access so we can properly format posts, set featured images, configure SEO metadata, and publish directly. We'll never touch your plugins, settings, or theme. Only blog content. If you'd prefer to start with <strong>Editor</strong> access, that works too; just know we may need a temporary upgrade for initial setup.</p>
      </td>
    </tr>
  </table>

  <!-- ITEM 4: Voice Capture -->
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-bottom:36px;">
    <tr>
      <td width="40" valign="top" style="padding-top:2px;">
        <span style="display:inline-block;width:28px;height:28px;background:#F27D24;border-radius:50%;text-align:center;line-height:28px;font-family:'Archivo Black','Arial Black',Arial,sans-serif;font-size:13px;font-weight:900;color:#FAF8F2;">4</span>
      </td>
      <td valign="top">
        <p style="font-size:14px;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;color:#0A0A0A;margin:0 0 7px 0;">Voice Capture Interview</p>
        <p style="font-size:14px;line-height:1.65;color:#3a3a3a;margin:0 0 12px 0;">This is the most important step. Everything we write needs to sound like <em>you</em>. TrueDoor's language, your perspective on the market, your vision for where this is going. The interview is how we lock that in. The richer your answers, the better the content.</p>

        <!-- How it works -->
        <p style="font-size:14px;font-weight:700;color:#0A0A0A;margin:0 0 8px 0;">How it works:</p>
        <p style="font-size:14px;line-height:1.65;color:#3a3a3a;margin:0 0 14px 0;">This is a ChatGPT self-interview. No call needed, no scheduling. Just you, your phone (or computer), and the questions below. Here's the exact process:</p>
        <div style="background:#F4F0E8;border-left:3px solid #F27D24;padding:13px 15px;font-size:13px;line-height:1.9;color:#444;margin-bottom:16px;">
          <strong>Step 1:</strong> Open ChatGPT and start a new conversation.<br>
          <strong>Step 2:</strong> Paste this exactly to kick it off:<br>
          <div style="background:#fff;border:1px solid #ddd;border-radius:3px;padding:10px 12px;margin:8px 0;font-family:monospace;font-size:12px;color:#333;line-height:1.6;">
            I'm doing a business interview. My name is [your name] and I'm [your title] at TrueDoor Property Management. Please act as my interviewer. I'll give you a list of questions. Ask them one at a time, wait for my full answer, then move to the next. Don't summarize or comment between questions, just keep moving. Here are the questions: [paste the 25 questions below]
          </div>
          <strong>Step 3:</strong> Switch to voice mode (the headphone icon) and just talk. Answer however feels natural. Long answers, tangents, stories, all good.<br>
          <strong>Step 4:</strong> Take your time. Do a few questions, put your phone down, come back later. No rush at all.<br>
          <strong>Step 5:</strong> When you're done, send us the transcript (instructions below the questions).
        </div>

        <!-- Collaborative note -->
        <div style="background:#0A0A0A;color:#FAF8F2;padding:14px 16px;border-radius:4px;margin-bottom:16px;">
          <p style="font-size:13px;line-height:1.7;margin:0;"><strong style="color:#F27D24;">Feel free to take a collaborative approach on this.</strong> If both of you want to go through the questions, great. If one of you covers something and the other doesn't want to be redundant, totally fine. There's no wrong way. The more we have to work with, the better content we can build. Just make sure ChatGPT knows your name and role at the start so we know whose voice we're reading.</p>
        </div>

        <!-- Take your time -->
        <p style="font-size:14px;line-height:1.65;color:#3a3a3a;margin:0 0 14px 0;"><strong>Take your time on this.</strong> There's no deadline. If a question sparks a tangent, follow it. We can always trim; we can't manufacture depth we don't have.</p>

        <!-- Questions -->
        <p style="font-size:14px;font-weight:700;color:#0A0A0A;margin:0 0 10px 0;">The 25 Questions:</p>
        <div style="background:#F4F0E8;border-left:3px solid #F27D24;padding:16px 16px 16px 20px;">
          <ol style="font-size:13px;line-height:2.0;color:#333;margin:0;padding-left:18px;">
            <li>How do you describe TrueDoor to someone who's never heard of you? What's your go-to one-liner?</li>
            <li>What made you build TrueDoor 20 years ago, and what's the single biggest thing that's changed about how you run it today?</li>
            <li>Tell me about the multifamily pivot. Why now? What does TrueDoor look like in 3 years if this goes the way you want it to?</li>
            <li>When you say multifamily, what size property are you targeting? 2&ndash;4 units? 5&ndash;20? 50+? What's the sweet spot and why?</li>
            <li>Who is your ideal multifamily client right now? Paint the picture. What kind of investor are they, where are they located, what's their situation?</li>
            <li>What's the hardest part about managing multifamily that most owners don't anticipate before they hire you?</li>
            <li>Walk me through what a typical onboarding looks like, from the first call to the end of month one. What does the owner experience?</li>
            <li>How do you communicate with owners on an ongoing basis? Portal, calls, emails. How often do they hear from you, and in what format?</li>
            <li>What does your team look like? Who are the key people a multifamily investor would actually work with day-to-day?</li>
            <li>What's the most common thing a new prospect says on their first call, and what do you say back?</li>
            <li>What do you do that your competitors in OC flat-out don't? Not "we care more." Be specific. What's a real operational difference?</li>
            <li>Walk me through TrueScreen AI fraud detection. What's the actual problem it solves, and can you give me a real example?</li>
            <li>Your "30 days or less" tenant placement guarantee. How often do you actually hit it, and what happens when you don't?</li>
            <li>Talk to me about your IE offices, Redlands and Murrieta. What's different about managing property there vs. Orange County? What do investors miss about those markets?</li>
            <li>If someone owns a 12-unit in Redlands versus a 12-unit in Irvine, how does your management approach actually differ?</li>
            <li>Tell me about Murrieta. What's the market like there and what kind of owners are you seeing come through the door?</li>
            <li>Your BBB rating is C+. What's the story there, and how do you address it when a prospect brings it up?</li>
            <li>What's a situation where you went above and beyond for a client, one that you're actually proud of?</li>
            <li>If a landlord is on the fence between self-managing and hiring you, what's the number or fear they always get hung up on, and how do you walk them through it?</li>
            <li>How do you handle rent collection, and what does the first late-payment conversation with a tenant look like?</li>
            <li>AB 1482, AB 2493, just cause eviction requirements. How current is your team on all of this, and is regulatory expertise part of how you sell TrueDoor?</li>
            <li>What do you wish every landlord knew before they called you for the first time?</li>
            <li>You've got "Make more money with less drama" as a tagline. Where did that come from, and does it still feel like TrueDoor to you?</li>
            <li>Kyle, you came from KPMG, working with Fortune 500 companies. How does that background actually show up in how you run TrueDoor? What did you bring from that world?<br>
            <em style="color:#888;font-size:12px;">(Bryant: swap this for your own background, where you came from, what you bring to TrueDoor that no one else does.)</em></li>
            <li>If TrueDoor is showing up at the top of every Google and AI search for multifamily property management in OC and IE 12 months from now, what does that actually mean for the business? What changes?</li>
          </ol>
        </div>

        <!-- How to send it back -->
        <p style="font-size:14px;font-weight:700;color:#0A0A0A;margin:16px 0 8px 0;">How to send it back to us:</p>
        <div style="background:#F4F0E8;border-left:3px solid #F27D24;padding:13px 15px;font-size:13px;line-height:1.9;color:#444;margin-bottom:0;">
          <strong>Option A (easiest):</strong> At the top right of your ChatGPT conversation, click the <strong>Share</strong> button and copy the link. Send that link to <a href="mailto:support@theanswerengine.ai" style="color:#F27D24;">support@theanswerengine.ai</a>.<br>
          <strong>Option B:</strong> Copy the full conversation text (Ctrl+A or select all), paste it into an email, and send to <a href="mailto:support@theanswerengine.ai" style="color:#F27D24;">support@theanswerengine.ai</a>.<br>
          <strong>Option C:</strong> If ChatGPT gives you a download or export option, send us that file.<br><br>
          Either way works perfectly. Just reply to this thread with whatever you've got.
        </div>

      </td>
    </tr>
  </table>

  <hr style="border:none;border-top:1px solid #E8E4DA;margin:0 0 24px 0;">
  <p style="font-size:15px;line-height:1.65;margin:0 0 10px 0;">Once these four are in, I'll lock the content calendar and we'll have the first batch rolling within the week. Fastest way to reach me is replying here or hitting <a href="mailto:support@theanswerengine.ai" style="color:#F27D24;text-decoration:none;">support@theanswerengine.ai</a> directly.</p>
  <p style="font-size:15px;line-height:1.65;margin:0 0 36px 0;">Let's build something here.</p>

  <!-- Signature -->
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="480" style="border-collapse:collapse;max-width:480px;">
    <tr>
      <td style="padding:0 0 2px 0;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td style="font-family:'Archivo Black','Arial Black',Arial,sans-serif;font-weight:900;font-size:36px;letter-spacing:-0.04em;line-height:1;text-transform:uppercase;color:#0A0A0A;white-space:nowrap;padding:0;">THE&nbsp;</td>
            <td style="font-family:'Archivo Black','Arial Black',Arial,sans-serif;font-weight:900;font-size:36px;letter-spacing:-0.04em;line-height:1;text-transform:uppercase;color:#FAF8F2;background-color:#F27D24;white-space:nowrap;padding:0 6px 0 6px;">ANSWER</td>
            <td style="font-family:'Archivo Black','Arial Black',Arial,sans-serif;font-weight:900;font-size:36px;letter-spacing:-0.04em;line-height:1;text-transform:uppercase;color:#0A0A0A;white-space:nowrap;padding:0 0 0 7px;">ENGINE</td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td style="padding:7px 0 20px 0;">
        <span style="font-family:'JetBrains Mono',ui-monospace,Consolas,monospace;font-size:10px;font-weight:400;letter-spacing:0.26em;text-transform:uppercase;color:#F27D24;display:block;">Built so AI cites you</span>
      </td>
    </tr>
    <tr>
      <td style="padding:0 0 16px 0;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
          <tr>
            <td width="32" style="border-top:2px solid #0A0A0A;font-size:0;line-height:0;">&nbsp;</td>
            <td width="8" style="font-size:0;line-height:0;">&nbsp;</td>
            <td style="border-top:1px solid #F4F0E8;font-size:0;line-height:0;">&nbsp;</td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td style="padding:0 0 3px 0;">
        <span style="font-family:'Inter Tight',Helvetica,Arial,sans-serif;font-size:12px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:#0A0A0A;">Justin Borges</span>
        <span style="font-family:'JetBrains Mono',ui-monospace,Consolas,monospace;font-size:10px;font-weight:400;letter-spacing:0.14em;text-transform:uppercase;color:rgba(10,10,10,0.45);padding-left:8px;">Founder</span>
      </td>
    </tr>
    <tr>
      <td style="padding:0;">
        <span style="font-family:'JetBrains Mono',ui-monospace,Consolas,monospace;font-size:10px;font-weight:400;letter-spacing:0.10em;color:rgba(10,10,10,0.50);">
          <a href="mailto:support@theanswerengine.ai" style="color:rgba(10,10,10,0.50);text-decoration:none;">support@theanswerengine.ai</a>
          &nbsp;&middot;&nbsp;
          <a href="https://theanswerengine.ai" style="color:rgba(10,10,10,0.50);text-decoration:none;">theanswerengine.ai</a>
        </span>
      </td>
    </tr>
  </table>

</div>
</body>
</html>`;

const plainText = `Hey Kyle + Bryant,

Thrilled to have TrueDoor on the roster. Before we fire up the content machine, I need four things. Instructions below. Nothing takes more than a few minutes except the interview (which is worth doing right).

---

1. GOOGLE SEARCH CONSOLE ACCESS
Add support@theanswerengine.ai as an Owner on your Search Console property.

Steps:
- Go to search.google.com/search-console
- Select truedoorpm.com
- Settings → Users & Permissions → Add User
- Enter support@theanswerengine.ai, set to Owner
- Click Add

---

2. CONNECT WITH support@theanswerengine.ai
Add it to your contacts so nothing lands in spam. All content review and approvals flow through this inbox.

---

3. WORDPRESS ACCESS
We'll be publishing 16 articles/month to truedoorpm.com. Here's how to add us:

Steps:
- Log into truedoorpm.com/wp-admin
- Go to Users → Add New User
- Username: answerengine
- Email: support@theanswerengine.ai
- Role: Administrator
- Check "Send the new user an email about their account"
- Click Add New User

We need Administrator access to format posts, set featured images, configure SEO metadata, and publish directly. We'll never touch your plugins, settings, or theme. Only blog content. Editor access works too if preferred; we may need a temporary upgrade for initial setup.

---

4. VOICE CAPTURE INTERVIEW

This is the most important step. Everything we write needs to sound like TrueDoor. Your language, your market perspective, your vision. The richer your answers, the better the content.

This is a ChatGPT self-interview. No call needed, no scheduling. Here's the exact process:

Step 1: Open ChatGPT and start a new conversation.
Step 2: Paste this to kick it off:
  "I'm doing a business interview. My name is [your name] and I'm [your title] at TrueDoor Property Management. Please act as my interviewer. I'll give you a list of questions. Ask them one at a time, wait for my full answer, then move to the next. Don't summarize or comment between questions, just keep moving. Here are the questions: [paste the 25 questions below]"
Step 3: Switch to voice mode (headphone icon) and just talk. Long answers, tangents, stories, all good.
Step 4: Take your time. Do a few questions, come back later. No rush.
Step 5: When done, send us the transcript (see "How to send it back" below).

Feel free to take a collaborative approach. If both of you want to go through the questions, great. If one of you covers something and the other doesn't want to be redundant, totally fine. The more we have, the better. Just make sure ChatGPT knows your name and role at the start.

TAKE YOUR TIME. No deadline. If a question sparks a tangent, follow it. We can trim; we can't manufacture depth we don't have.

THE 25 QUESTIONS:

1. How do you describe TrueDoor to someone who's never heard of you?
2. What made you build TrueDoor 20 years ago, and what's the biggest thing that's changed today?
3. Tell me about the multifamily pivot. Why now? What does TrueDoor look like in 3 years?
4. When you say multifamily, what size property are you targeting? What's the sweet spot?
5. Who is your ideal multifamily client right now? What kind of investor, where located, what's their situation?
6. What's the hardest part about managing multifamily that owners don't anticipate?
7. Walk me through onboarding, first call to end of month one. What does the owner experience?
8. How do you communicate with owners? Portal, calls, emails. How often and in what format?
9. What does your team look like? Who does a multifamily investor work with day-to-day?
10. What's the most common thing a new prospect says on their first call, and what do you say back?
11. What do you do that competitors flat-out don't? Not "we care more." What's a real operational difference?
12. Walk me through TrueScreen AI fraud detection. What's the actual problem it solves?
13. Your 30-days-or-less tenant placement guarantee. How often do you hit it, and what happens when you don't?
14. Talk to me about your IE offices, Redlands and Murrieta. What's different about those markets vs. OC?
15. If someone owns a 12-unit in Redlands vs. a 12-unit in Irvine, how does your approach differ?
16. Tell me about Murrieta specifically. What's the market like and what kind of owners are you seeing?
17. Your BBB rating is C+. What's the story, and how do you address it when a prospect brings it up?
18. What's a situation where you went above and beyond for a client, one you're proud of?
19. If a landlord is on the fence between self-managing and hiring you, what do they always get hung up on?
20. How do you handle rent collection, and what does the first late-payment conversation look like?
21. AB 1482, AB 2493, just cause laws. How current is your team, and is regulatory expertise part of how you sell?
22. What do you wish every landlord knew before they called you?
23. "Make more money with less drama." Where did that come from and does it still feel like TrueDoor?
24. Kyle, you came from KPMG, Fortune 500 clients. How does that background show up in how you run TrueDoor?
    (Bryant: swap for your own background, where you came from, what you bring that no one else does.)
25. If TrueDoor is showing up at the top of every Google and AI search for multifamily PM in OC and IE in 12 months, what does that mean for the business?

HOW TO SEND IT BACK:
- Option A (easiest): Click the Share button in your ChatGPT conversation, copy the link, email it to support@theanswerengine.ai.
- Option B: Copy the full conversation text, paste into an email to support@theanswerengine.ai.
- Option C: Download/export the conversation if ChatGPT gives you that option and send us the file.
Just reply to this thread with whatever you've got.

---

Once these four are in, I'll lock the content calendar and we'll have the first batch rolling within the week.

Let's build something here.

Justin Borges | Founder
support@theanswerengine.ai · theanswerengine.ai`;

const boundary = `boundary_${Date.now()}`;
const rawEmail = [
  `From: Justin Borges <${FROM}>`,
  `To: kyle@truedoorpm.com`,
  `Cc: bryant@truedoorpm.com`,
  `Subject: TrueDoor Onboarding - Four Things Before We Launch`,
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

async function run() {
  // Delete previous draft
  try {
    await gmail.users.drafts.delete({ userId: 'me', id: DRAFT_TO_DELETE });
    console.log('✓ Previous draft deleted:', DRAFT_TO_DELETE);
  } catch (err) {
    console.warn('  Could not delete previous draft (may already be gone):', err.message);
  }

  // Create new draft
  const res = await gmail.users.drafts.create({
    userId: 'me',
    requestBody: { message: { raw: encoded } },
  });
  console.log('✓ New draft created in support@theanswerengine.ai');
  console.log('  Draft ID:', res.data.id);
}

run().catch(err => {
  console.error('✗ Error:', err.message);
  process.exit(1);
});
