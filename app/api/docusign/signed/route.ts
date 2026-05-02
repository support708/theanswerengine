import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const clientName = searchParams.get('client') || 'Partner';
  const envelopeId = searchParams.get('envelopeId') || '';

  // Return HTML directly
  return new NextResponse(
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Agreement Received — The Answer Engine</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: #0a0e27;
      color: #ffffff;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }
    .container {
      max-width: 600px;
      text-align: center;
    }
    .logo {
      margin-bottom: 48px;
    }
    .logo img {
      height: 40px;
      width: auto;
    }
    .checkmark {
      width: 120px;
      height: 120px;
      margin: 0 auto 40px;
      background: rgba(255, 107, 53, 0.15);
      border: 3px solid #ff6b35;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 60px;
      animation: pulse 0.6s ease-in-out;
    }
    @keyframes pulse {
      0% { transform: scale(0.8); opacity: 0; }
      100% { transform: scale(1); opacity: 1; }
    }
    h1 {
      font-size: 42px;
      font-weight: 700;
      margin-bottom: 16px;
      letter-spacing: -0.5px;
    }
    .subtitle {
      font-size: 18px;
      color: #b0b3c1;
      margin-bottom: 48px;
      line-height: 1.6;
    }
    .timeline {
      background: rgba(255, 107, 53, 0.08);
      border: 1px solid rgba(255, 107, 53, 0.2);
      border-radius: 12px;
      padding: 32px;
      margin-bottom: 48px;
      text-align: left;
    }
    .timeline h3 {
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #ff6b35;
      margin-bottom: 24px;
      font-weight: 600;
    }
    .step {
      display: flex;
      margin-bottom: 24px;
      align-items: flex-start;
    }
    .step:last-child {
      margin-bottom: 0;
    }
    .step-number {
      flex-shrink: 0;
      width: 32px;
      height: 32px;
      background: #ff6b35;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      margin-right: 16px;
      font-size: 14px;
    }
    .step-content h4 {
      font-size: 16px;
      margin-bottom: 4px;
      font-weight: 600;
    }
    .step-content p {
      font-size: 14px;
      color: #b0b3c1;
    }
    .cta {
      background: #ff6b35;
      color: #0a0e27;
      padding: 16px 32px;
      border-radius: 8px;
      font-size: 16px;
      font-weight: 600;
      text-decoration: none;
      display: inline-block;
      margin-bottom: 32px;
      border: none;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    .cta:hover {
      background: #ff5a1f;
      transform: translateY(-2px);
    }
    .contact {
      font-size: 14px;
      color: #b0b3c1;
      margin-top: 32px;
      padding-top: 32px;
      border-top: 1px solid rgba(255, 107, 53, 0.1);
    }
    .contact strong {
      color: #ff6b35;
      font-weight: 600;
    }
    .envelope-id {
      font-size: 12px;
      color: #666;
      margin-top: 16px;
      font-family: monospace;
      word-break: break-all;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="logo">
      <svg width="160" height="40" viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="32" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="#ffffff">
          THE
        </text>
        <text x="40" y="32" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="#ff6b35">
          ANSWER
        </text>
        <text x="115" y="32" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="#ffffff">
          ENGINE
        </text>
      </svg>
    </div>

    <div class="checkmark">✓</div>

    <h1>Agreement Received</h1>
    <p class="subtitle">
      ${clientName}, your contract is signed and confirmed. Here's what happens next.
    </p>

    <div class="timeline">
      <h3>Next 7 Days</h3>
      <div class="step">
        <div class="step-number">1</div>
        <div class="step-content">
          <h4>Voice Capture</h4>
          <p>Schedule a 75-minute strategy session. We'll map your goals, audience, and competitive position.</p>
        </div>
      </div>
      <div class="step">
        <div class="step-number">2</div>
        <div class="step-content">
          <h4>Content Map</h4>
          <p>We create your 16-article content calendar: topics, angles, keywords, and CTAs aligned with your goals.</p>
        </div>
      </div>
      <div class="step">
        <div class="step-number">3</div>
        <div class="step-content">
          <h4>Articles Live</h4>
          <p>Your first 4 articles ship to your site, optimized for search, branded, and driving qualified leads.</p>
        </div>
      </div>
    </div>

    <a href="https://calendar.app.google.com/calendar/u/0/" class="cta">Schedule Voice Capture</a>

    <div class="contact">
      Questions? Reach out directly.<br>
      <strong>Justin Borges</strong><br>
      (213) 262-5092<br>
      justin@theanswerengine.ai
    </div>

    ${envelopeId ? `<div class="envelope-id">Envelope ID: ${envelopeId}</div>` : ''}
  </div>
</body>
</html>`,
      {
        headers: {
          'Content-Type': 'text/html; charset=utf-8',
        },
      }
    );
}
