/**
 * Fabrication scan per Master Prompt v9.5 Section 8.
 * Scans generated HTML for common fabrication signals.
 * Any match not traced to verified research = flag.
 */

// Patterns that commonly appear in fabricated content
const FABRICATION_PATTERNS = [
  /\d+%\s/g,                              // Percentage claims
  /\$[\d,]+/g,                            // Dollar amounts
  /studies show/gi,
  /research indicates/gi,
  /according to recent/gi,
  /industry experts/gi,
  /a recent survey/gi,
  /statistics show/gi,
  /\d+ out of \d+/g,                      // X out of Y claims
  /family of four/gi,
  /single mother/gi,
  /retired couple/gi,
  /small business owner/gi,
  /local entrepreneur/gi,
];

export interface FabricationResult {
  flags: string[];
  clean: boolean;
}

export function runFabricationScan(html: string, verifiedData: string[]): FabricationResult {
  const flags: string[] = [];

  // Strip HTML tags for text analysis
  const text = html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ');

  for (const pattern of FABRICATION_PATTERNS) {
    const matches = text.match(pattern);
    if (matches) {
      for (const match of matches) {
        // Check if this claim appears in verified research data
        const isVerified = verifiedData.some(d =>
          d.toLowerCase().includes(match.toLowerCase().trim())
        );
        if (!isVerified) {
          flags.push(`Unverified claim: "${match.trim()}" (not found in research data)`);
        }
      }
    }
  }

  return { flags, clean: flags.length === 0 };
}

/**
 * Em-dash scan per Master Prompt v9.5 Principle 8.
 * Returns true if clean (no em-dashes found).
 */
export function runEmDashScan(html: string): { clean: boolean; count: number } {
  // Match em-dash (U+2014), en-dash (U+2013), and the HTML entity
  const emDashPattern = /[\u2014\u2013]|&mdash;|&ndash;/g;
  const matches = html.match(emDashPattern);
  return { clean: !matches, count: matches?.length ?? 0 };
}

/**
 * Remove em-dashes from content, replacing with commas or periods.
 */
export function stripEmDashes(html: string): string {
  return html
    .replace(/[\u2014\u2013]|&mdash;|&ndash;/g, ',')
    .replace(/\s,\s/g, ', ')    // Clean up spacing
    .replace(/,,/g, ',');        // Clean up double commas
}
