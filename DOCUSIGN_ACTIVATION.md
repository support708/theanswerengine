# DocuSign API Integration — Activation Checklist

## The Wow Factor: 3 Recipient Touchpoints

1. **Email** — Dark AE-branded header, orange "Review Document" button, personal message from Justin
2. **Signing Page** — Dark bar with AE logo, orange "Sign" button, clean signing ceremony
3. **Completion Page** — `theanswerengine.ai/signed` — branded timeline, phone number, next steps

---

## 4 Steps to Activate

### Step 1: Register Connect OAuth Endpoint (DocuSign Admin) — 2 min
1. Go to DocuSign Admin → **Integrations → Apps and Keys**
2. Scroll to **OAuth**
3. Under **Authorization Server URL**, paste:
   ```
   https://theanswerengine.ai/api/docusign/oauth
   ```
4. Click **Save**

### Step 2: Get Production Refresh Token — 5 min
1. **Deploy** the latest code to Vercel (includes new OAuth endpoint)
2. Visit: `https://theanswerengine.ai/api/docusign/auth`
3. DocuSign redirects you to grant consent → click **Allow**
4. You'll see a success message
5. **Check Vercel logs** (Deployments → logs) for the line:
   ```
   === DOCUSIGN REFRESH TOKEN ===
   <token here>
   ```
6. Copy that token
7. Update `.env.local`:
   ```
   DOCUSIGN_REFRESH_TOKEN=<token from step 5>
   ```
8. **Redeploy** to Vercel

### Step 3: Create Brand + Register Webhook — 3 min
1. Visit: `https://theanswerengine.ai/api/docusign/setup`
2. You'll see JSON response:
   ```json
   {
     "brandId": "12345678-1234-1234-1234-123456789012",
     "webhookId": "xxxxxxxx"
   }
   ```
3. Copy the `brandId` value
4. Update `.env.local`:
   ```
   DOCUSIGN_BRAND_ID=<brandId from step 2>
   ```
5. **Redeploy** to Vercel

### Step 4: Send a Test Contract — 2 min
1. Use this curl command (fill in the blanks):
   ```bash
   curl -X POST https://theanswerengine.ai/api/docusign/send \
     -H "Content-Type: application/json" \
     -d '{
       "client": "Test Client",
       "signers": [
         {"name": "Your Name", "email": "your-test-email@example.com"}
       ],
       "pdfBase64": "<base64-encoded PDF here>",
       "pdfName": "Test_Agreement.pdf"
     }'
   ```

   **To get base64 of the TrueDoor PDF:**
   ```bash
   base64 ~/Desktop/TrueDoor_Service_Agreement.pdf | tr -d '\n'
   ```

   Then paste the output into the `pdfBase64` field above.

2. Submit the curl request
3. Check your email — you should receive the branded DocuSign with AE logo

---

## What Gets Branded

✅ **Email header** — AE logo, dark background
✅ **Email button** — Orange (#FF6B35)
✅ **Signing page** — AE logo in dark top bar
✅ **Sign button** — Orange, prominent
✅ **Completion page** — Full AE branding with timeline + CTA

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| "401 Unauthorized" on Step 3 | Refresh token expired. Re-run Step 2. |
| Email doesn't have AE logo | Wait 5 min for brand propagation, then resend. |
| Sign button is still DocuSign blue | Brand hasn't propagated. Wait 10 min, then resend test. |
| Completion page is 404 | Deploy hasn't finished. Check Vercel deployments. |

---

## Next: Send to TrueDoor

Once you've completed Steps 1-4, use the send endpoint to push the actual TrueDoor contract to Kyle and Bryant.
