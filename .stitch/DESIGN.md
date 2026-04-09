# The Answer Engine — Design System (AEO_TERMINAL)

## Identity
- **Brand**: AEO_TERMINAL — brutalist, terminal-inspired, military-tech aesthetic
- **Vibe**: Dark ops command center. Not friendly SaaS — aggressive, confident, data-driven
- **Typography**: Space Grotesk (headlines/labels), Inter (body). ALL CAPS for headlines
- **Voice**: Technical, commanding. Underscore_separated labels. Mono status indicators

## Color Tokens
| Role | Value | Usage |
|------|-------|-------|
| Background | `#131313` | Primary canvas |
| Surface Container Low | `#1c1b1b` | Alternate section bg |
| Surface Container High | `#2a2a2a` | Card surfaces, hover states |
| Surface Container Highest | `#353534` | Elevated elements |
| Text Primary | `#e5e2e1` | Headings, primary text |
| Text Secondary | `white/60` | Body copy |
| Text Tertiary | `white/40` | Labels, metadata |
| Text Quaternary | `white/20` | Timestamps, codes |
| Accent Primary | `#FF6A00` | CTAs, highlights, active states, data points |
| Accent Light | `#ffb694` | Secondary accent, gradients |
| Error | `#ffb4ab` | Error states |
| Borders | `white/10` | Card borders, dividers |
| Borders Subtle | `white/5` | Section dividers |

## Typography
- **Headings**: Space Grotesk 800-900 (font-black), tracking-tighter, UPPERCASE always
- **Hero**: text-6xl to text-9xl, leading-[0.85]
- **Section Headers**: text-5xl to text-6xl, tracking-tighter, uppercase
- **Card Headers**: text-2xl, font-bold, uppercase
- **Body**: Inter 400, text-sm, leading-relaxed, white/60
- **Labels**: Space Grotesk, text-xs, tracking-widest, uppercase, white/40
- **Mono/Status**: font-mono, text-[10px], tracking-widest, uppercase, primary-container color
- **Code Tags**: font-mono, text-[10px], white/20 — e.g. "SEC_01 // LIVE_STREAM"

## Components

### Nav (MANDATORY on every screen)
- Fixed top, full-width, h-16, bg-[#131313], border-b border-white/10
- Logo: "AEO_TERMINAL" in Space Grotesk font-black, text-2xl, text-[#FF6A00], uppercase
- Links: Space Grotesk, uppercase, tracking-tighter, font-bold, text-white/60
- Active link: text-[#FF6A00], border-b-2 border-[#FF6A00]
- Right side: terminal + settings icons, "IGNITE" button (bg-[#FF6A00], text-black, font-black)

### Nav Link Mapping
| Screen | Active Link |
|--------|-------------|
| Homepage | INTEL |
| About | CORE |
| Case Studies | ASSETS |
| Blog Index | ASSETS |
| Blog Post | ASSETS |
| Blind Spot Checker | INTEL |
| Contact | NETWORK |
| Services | CORE |
| Territory Check | INTEL |
| Admin Dashboard | (separate admin nav) |

### Footer (MANDATORY on every screen)
- border-t border-white/5, bg-[#131313]
- Left: font-mono text-[10px] "©2026 SYSTEM_AEO // OPERATIONAL"
- Right: PROTOCOL, ENCRYPTION, LEGAL, LATENCY links — font-mono text-[10px] white/40
- Decorative: absolute bottom-right orange bar (h-1 w-32 bg-primary-container)

### Buttons
- **Primary**: bg-[#FF6A00] text-black font-black, NO border-radius (sharp edges), tracking-tighter
- **Secondary**: border-2 border-outline-variant, text-on-background, font-bold
- **CTA Large**: px-10 py-5 text-xl (or px-16 py-6 text-2xl for hero)
- **Hover**: translate-y-[2px] or scale-105

### Cards
- **Sharp edges** — NO rounded corners (this is brutalist, not SaaS)
- bg-surface or bg-surface-container-high
- border border-white/10
- border-l-4 border-primary-container for accent cards
- Hover: bg-surface-container-high transition-colors

### Section Pattern
- py-32 px-6 lg:px-24
- max-w-7xl mx-auto
- Alternating: bg-surface / bg-surface-container-low
- Section headers: Space Grotesk font-black, text-5xl+, uppercase, tracking-tighter
- Accent word in `text-primary-container`

### Status/Mono Indicators
- font-mono text-[10px] text-primary-container tracking-widest uppercase
- Format: "Status: analyzing_data_nodes" or "SEC_01 // LIVE_STREAM"
- Used on cards, data panels, footer

### Scanline Overlay
- Fixed overlay on every page, z-[100], opacity-[0.03], pointer-events-none
- Creates subtle CRT monitor effect

### Grid Background
- radial-gradient dot grid: `radial-gradient(circle, #353534 1px, transparent 1px)` at 32px spacing
- Used on hero sections

### Orange Interstitial CTA
- Full-width bg-primary-container section
- Black text, font-black, huge uppercase headline
- Black button with orange text
- Mono metadata bar below (IP, Latency, Encryption)

## Layout Rules
- **NO rounded corners** on buttons or primary cards (sharp = brutalist)
- **Full-bleed sections** — max-w-7xl for content, but sections go edge-to-edge
- **Grid-based cards** — gap-0 with border dividers, not gap-8 with floating cards
- **Asymmetric layouts** — hero uses 8/4 column split, not centered
- **Industrial photography** — grayscale, high contrast, motherboard/circuit imagery
- **Data visualization** — progress bars, percentage readouts, metric panels

## Stitch Project Reference
- Project ID: `17922925101510828503`
- Screen 1 (Homepage): `12dbdcb9b3004fc2858e65603cd6492f`
