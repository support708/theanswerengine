/**
 * TAE Ad-Launch Compliance Check · Playwright
 *
 * Verifies the live theanswerengine.ai surfaces that Meta's ad reviewers will hit:
 *  - Homepage loads, no console errors
 *  - /privacy page exists and has key sections
 *  - /terms page exists
 *  - Meta Pixel fires (if NEXT_PUBLIC_META_PIXEL_ID is set on Vercel)
 *  - Audit landing surface reachable
 *  - Screenshots of each page for compliance review
 *
 * Run: node scripts/playwright-compliance-check.js
 * Output: screenshots/ + console pass/fail report
 *
 * NOTE: This does NOT log into Meta Business Manager. Meta's bot detection flags
 * Playwright-driven browsers inside their admin surfaces and can lock your ad account.
 * Use your normal Chrome to click through Business Manager — Playwright is for site verification only.
 */
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const BASE = process.env.TAE_BASE_URL || 'https://www.theanswerengine.ai';
const OUT = path.join(__dirname, '..', 'compliance-screenshots');

const CHECKS = [
  { name: 'homepage', path: '/', required_text: ['Answer Engine'] },
  { name: 'privacy', path: '/privacy', required_text: ['privacy', 'data', 'contact'] },
  { name: 'terms', path: '/terms', required_text: ['terms'] },
  { name: 'audit-landing', path: '/services/answer-engine-audit', required_text: [], optional: true },
  { name: 'territory-check', path: '/territory-check', required_text: [], optional: true },
];

function pad(s, n) { return (s + ' '.repeat(n)).slice(0, n); }

(async () => {
  if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    userAgent: 'Mozilla/5.0 (compliance-check) TAE-Playwright/1.0',
  });

  console.log(`\n═══ TAE Compliance Check · ${BASE} ═══\n`);
  console.log(pad('CHECK', 22) + pad('STATUS', 14) + pad('HTTP', 8) + 'NOTES');
  console.log('─'.repeat(80));

  let pixelFired = false;
  let pixelId = null;
  const pageResults = [];

  for (const check of CHECKS) {
    const page = await context.newPage();
    const consoleErrors = [];
    const pixelRequests = [];

    page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
    page.on('request', req => {
      const url = req.url();
      if (url.includes('facebook.net/') || url.includes('facebook.com/tr')) {
        pixelRequests.push(url);
        pixelFired = true;
        const match = url.match(/[?&]id=(\d+)/);
        if (match) pixelId = match[1];
      }
    });

    let status = 'FAIL', httpCode = 0, notes = '';
    try {
      const resp = await page.goto(BASE + check.path, { waitUntil: 'networkidle', timeout: 30000 });
      httpCode = resp?.status() || 0;

      if (httpCode >= 200 && httpCode < 400) {
        const body = (await page.content()).toLowerCase();
        const missing = check.required_text.filter(t => !body.includes(t.toLowerCase()));
        if (missing.length === 0) {
          status = 'PASS';
        } else {
          status = check.optional ? 'WARN' : 'FAIL';
          notes = 'missing: ' + missing.join(', ');
        }
      } else {
        status = check.optional ? 'WARN' : 'FAIL';
        notes = `http ${httpCode}`;
      }

      const shotPath = path.join(OUT, `${check.name}.png`);
      await page.screenshot({ path: shotPath, fullPage: true });
    } catch (e) {
      status = check.optional ? 'WARN' : 'FAIL';
      notes = e.message.slice(0, 40);
    }

    if (consoleErrors.length > 0 && !notes) notes = `${consoleErrors.length} console err`;

    console.log(pad(check.name, 22) + pad(status, 14) + pad(String(httpCode), 8) + notes);
    pageResults.push({ check: check.name, status, httpCode, notes, consoleErrors, pixelRequests });
    await page.close();
  }

  console.log('─'.repeat(80));

  console.log('\n═══ Meta Pixel Verification ═══');
  if (pixelFired) {
    console.log(`✅ Meta Pixel firing. Pixel ID detected: ${pixelId || 'unknown'}`);
    console.log(`   Request count across all pages: ${pageResults.reduce((n, r) => n + r.pixelRequests.length, 0)}`);
  } else {
    console.log(`⚠️  Meta Pixel NOT firing on any page.`);
    console.log(`   - If you haven't created the Pixel yet, this is expected.`);
    console.log(`   - If you have created it, check NEXT_PUBLIC_META_PIXEL_ID is set on Vercel and redeploy.`);
  }

  console.log('\n═══ Ad-Launch Readiness Score ═══');
  const passCount = pageResults.filter(r => r.status === 'PASS').length;
  const failCount = pageResults.filter(r => r.status === 'FAIL').length;
  const readyForMeta = failCount === 0 && pageResults[0].status === 'PASS' && pageResults[1].status === 'PASS' && pageResults[2].status === 'PASS';

  console.log(`Pages passed: ${passCount}/${CHECKS.length}`);
  console.log(`Hard fails:   ${failCount}`);
  console.log(`Meta review ready: ${readyForMeta ? 'YES ✅' : 'NO ❌ — fix homepage/privacy/terms first'}`);
  console.log(`\nScreenshots saved: ${OUT}`);
  console.log(`Use these when Meta asks for landing-page proof in an ad review.\n`);

  await browser.close();
})();
