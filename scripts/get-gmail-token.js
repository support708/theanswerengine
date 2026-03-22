/**
 * Gmail OAuth2 Refresh Token Generator (Desktop App Flow)
 *
 * Run once: node scripts/get-gmail-token.js
 * Opens browser, you authorize, refresh token is printed.
 */

const http = require('http');
const { URL } = require('url');
const { exec } = require('child_process');

const CLIENT_ID = '1069086253734-1ukvkilian9t67pmrp6kkjtdrfo4skd4.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const PORT = 3456;
const REDIRECT_URI = `http://localhost:${PORT}`;
const SCOPES = [
  'https://www.googleapis.com/auth/gmail.compose',
  'https://www.googleapis.com/auth/gmail.modify',
];

const params = new URLSearchParams({
  client_id: CLIENT_ID,
  redirect_uri: REDIRECT_URI,
  response_type: 'code',
  scope: SCOPES.join(' '),
  access_type: 'offline',
  prompt: 'consent',
});
const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);

  const code = url.searchParams.get('code');
  const error = url.searchParams.get('error');

  if (error) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Authorization failed: ' + error + '</h1><p>Close this tab.</p>');
    console.error('\nAuthorization failed:', error);
    server.close();
    process.exit(1);
    return;
  }

  if (!code) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<p>Waiting for authorization...</p>');
    return;
  }

  // Exchange code for tokens
  try {
    const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        code,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        redirect_uri: REDIRECT_URI,
        grant_type: 'authorization_code',
      }).toString(),
    });

    const tokens = await tokenRes.json();

    if (tokens.error) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end('<h1>Token error: ' + tokens.error_description + '</h1>');
      console.error('\nToken error:', tokens.error_description);
      server.close();
      process.exit(1);
      return;
    }

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1 style="color:green">Success! Refresh token obtained.</h1><p>Close this tab and check your terminal.</p>');

    console.log('\n=== SUCCESS ===\n');
    console.log('GMAIL_REFRESH_TOKEN=' + tokens.refresh_token);
    console.log('\nAdd this to .env.local and Vercel env vars.\n');

    server.close();
    process.exit(0);
  } catch (err) {
    res.writeHead(500, { 'Content-Type': 'text/html' });
    res.end('<h1>Error: ' + err.message + '</h1>');
    console.error(err);
    server.close();
    process.exit(1);
  }
});

server.listen(PORT, () => {
  console.log('\n=== Gmail OAuth2 Token Generator ===\n');
  console.log('Opening browser for authorization...');
  console.log('Sign in with the Gmail account you want to send emails from.\n');
  exec(`start "" "${authUrl}"`);
});
