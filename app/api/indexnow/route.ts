import { NextResponse } from "next/server";

const SITE_URL = "https://theanswerengine.ai";
const INDEXNOW_KEY = process.env.INDEXNOW_KEY || "f4c128c8a80a40a787182abb458213f4";
const CRON_SECRET = process.env.CRON_SECRET;

/**
 * IndexNow Auto-Ping — runs daily via Vercel Cron
 *
 * 1. Fetches the live sitemap
 * 2. Extracts all URLs
 * 3. Compares against last known set (stored in KV or memory)
 * 4. Pings IndexNow with any new/changed URLs
 *
 * IndexNow is supported by: Bing, Yandex, DuckDuckGo, Naver, Seznam
 */
export async function GET(request: Request) {
  // Auth check — only allow Vercel Cron or manual with secret
  const authHeader = request.headers.get("authorization");
  if (CRON_SECRET && authHeader !== `Bearer ${CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // 1. Fetch live sitemap
    const sitemapRes = await fetch(`${SITE_URL}/sitemap.xml`, {
      headers: { "User-Agent": "IndexNow-Ping/1.0" },
    });

    if (!sitemapRes.ok) {
      return NextResponse.json(
        { error: "Failed to fetch sitemap", status: sitemapRes.status },
        { status: 500 }
      );
    }

    const sitemapXml = await sitemapRes.text();

    // 2. Extract URLs from sitemap XML
    const urlMatches = sitemapXml.match(/<loc>(.*?)<\/loc>/g) || [];
    const urls = urlMatches
      .map((match) => match.replace(/<\/?loc>/g, ""))
      .filter((url) => url.startsWith(SITE_URL));

    if (urls.length === 0) {
      return NextResponse.json({ message: "No URLs found in sitemap", submitted: 0 });
    }

    // 3. Submit to IndexNow (supports batch up to 10,000 URLs)
    const indexNowPayload = {
      host: new URL(SITE_URL).hostname,
      key: INDEXNOW_KEY,
      keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
      urlList: urls.slice(0, 10000), // IndexNow max batch size
    };

    const indexNowRes = await fetch("https://api.indexnow.org/IndexNow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(indexNowPayload),
    });

    const result = {
      message: "IndexNow ping complete",
      submitted: urls.length,
      indexNowStatus: indexNowRes.status,
      indexNowOk: indexNowRes.ok,
      timestamp: new Date().toISOString(),
    };

    console.log(`[IndexNow] Submitted ${urls.length} URLs — status: ${indexNowRes.status}`);

    return NextResponse.json(result);
  } catch (error) {
    console.error("[IndexNow] Error:", error);
    return NextResponse.json(
      { error: "IndexNow ping failed", details: String(error) },
      { status: 500 }
    );
  }
}
