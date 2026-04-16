# LastSeat — Design System
> Version 1.0 | Neo-Brutalist × Multicolor | Built from Scratch

---

## 🎨 Design Philosophy

LastSeat is **anti-stress ticketing**. Where competitors feel transactional and cold, LastSeat feels like the pre-game hype. The design language borrows from neo-brutalism: bold typography, thick borders, flat offset shadows, and a loud multi-color palette. Every screen should feel like it belongs at a stadium, not a bank.

**Keywords**: Bold. Energetic. Fun. Loud. Unapologetic.
**Inspiration**: Firehose.dev — condensed uppercase typography, thick black borders, offset flat shadows, colored accent blocks, warm grid backgrounds.

---

## 🔤 Typography

### Font Families

| Role | Font | Source |
|---|---|---|
| Display (hero headlines) | Barlow Condensed | Google Fonts |
| UI / Body | Space Grotesk | Google Fonts |
| Mono (badges, labels) | Space Mono | Google Fonts |

### Type Scale

| Token | Size | Line Height | Weight | Family | Usage |
|---|---|---|---|---|---|
| `display-2xl` | 80px | 88px | 900 | Barlow Condensed | Hero headlines |
| `display-xl` | 60px | 68px | 800 | Barlow Condensed | Page titles |
| `display-lg` | 48px | 56px | 800 | Barlow Condensed | Section headers |
| `display-md` | 36px | 44px | 700 | Barlow Condensed | Card titles |
| `heading-xl` | 30px | 38px | 700 | Space Grotesk | Section titles |
| `heading-lg` | 24px | 32px | 700 | Space Grotesk | Subsection titles |
| `heading-md` | 20px | 28px | 600 | Space Grotesk | Card headings |
| `heading-sm` | 16px | 24px | 600 | Space Grotesk | Labels |
| `body-lg` | 18px | 28px | 400 | Space Grotesk | Lead text |
| `body-md` | 16px | 24px | 400 | Space Grotesk | Body copy |
| `body-sm` | 14px | 20px | 400 | Space Grotesk | Secondary text |
| `label-lg` | 14px | 20px | 700 | Space Mono | Category labels |
| `label-sm` | 12px | 16px | 700 | Space Mono | Badges, tags |
| `caption` | 12px | 16px | 400 | Space Grotesk | Helper text |

### Typography Rules
- Display fonts (Barlow Condensed) are always **UPPERCASE**
- Mixed filled + outlined text for hero headlines: one word filled, one outlined (`-webkit-text-stroke: 2px`)
- Body text uses Space Grotesk with generous line-height
- Tracking: display fonts use `letter-spacing: 0.02em`, labels use `letter-spacing: 0.08em`

---

## 🎨 Color Palette

### Base Colors

| Token | Hex | Usage |
|---|---|---|
| `color-black` | `#0A0A0A` | Borders, text, shadows |
| `color-white` | `#FFFFFF` | Card backgrounds, text on dark |
| `color-cream` | `#FAF6EF` | Page background |
| `color-cream-dark` | `#F0E9DC` | Subtle section backgrounds |

### Accent Colors (Multi-color system)

| Token | Hex | Name | Usage |
|---|---|---|---|
| `color-coral` | `#FF4D4D` | Coral Red | Primary CTA, sport events |
| `color-yellow` | `#FFD60A` | Stadium Yellow | Highlights, music events |
| `color-purple` | `#B5A4F5` | Lavender | Tertiary, theatre events |
| `color-teal` | `#00C9A7` | Electric Teal | Success, confirmation |
| `color-orange` | `#FF8C42` | Tangerine | Comedy/other events |
| `color-blue` | `#4D9EFF` | Sky Blue | Info, links |

### Semantic Colors

| Token | Value | Usage |
|---|---|---|
| `color-bg-page` | `#FAF6EF` | Page background |
| `color-bg-card` | `#FFFFFF` | Card background |
| `color-bg-dark` | `#0A0A0A` | Dark sections |
| `color-text-primary` | `#0A0A0A` | Primary text |
| `color-text-secondary` | `#555555` | Secondary text |
| `color-text-muted` | `#888888` | Placeholder, disabled |
| `color-text-inverse` | `#FFFFFF` | Text on dark |
| `color-border` | `#0A0A0A` | All borders |
| `color-success` | `#00C9A7` | Success states |
| `color-error` | `#FF4D4D` | Error states |
| `color-warning` | `#FFD60A` | Warning states |

### Event Category Color Map

| Category | Color Token | Background |
|---|---|---|
| Sport | `color-coral` | `#FF4D4D` |
| Music | `color-yellow` | `#FFD60A` |
| Theatre | `color-purple` | `#B5A4F5` |
| Comedy | `color-orange` | `#FF8C42` |
| Other | `color-blue` | `#4D9EFF` |

---

## 📐 Spacing & Layout

### Spacing Scale

| Token | Value | Usage |
|---|---|---|
| `space-1` | 4px | Micro gaps |
| `space-2` | 8px | Icon padding |
| `space-3` | 12px | Compact padding |
| `space-4` | 16px | Default padding |
| `space-5` | 20px | Card padding |
| `space-6` | 24px | Section gap |
| `space-8` | 32px | Large gap |
| `space-10` | 40px | Component spacing |
| `space-12` | 48px | Section padding |
| `space-16` | 64px | Hero padding |
| `space-20` | 80px | Page sections |
| `space-24` | 96px | Large sections |

### Grid & Containers

| Token | Value |
|---|---|
| `container-sm` | 640px |
| `container-md` | 768px |
| `container-lg` | 1024px |
| `container-xl` | 1280px |
| `container-2xl` | 1440px |
| `grid-cols` | 12 |
| `grid-gap` | 24px |

### Breakpoints

| Name | Value |
|---|---|
| `bp-sm` | 640px |
| `bp-md` | 768px |
| `bp-lg` | 1024px |
| `bp-xl` | 1280px |

---

## 🟥 Border Radius

| Token | Value | Usage |
|---|---|---|
| `radius-none` | 0px | Neo-brutalist sharp elements |
| `radius-sm` | 4px | Badges, tags |
| `radius-md` | 8px | Buttons, inputs |
| `radius-lg` | 12px | Cards |
| `radius-xl` | 16px | Large cards |
| `radius-full` | 9999px | Pills, avatars |

---

## 🌑 Shadow System

Neo-brutalist shadows: **flat, no blur, hard offset**.

| Token | Value | Usage |
|---|---|---|
| `shadow-sm` | `2px 2px 0px #0A0A0A` | Subtle elements |
| `shadow-md` | `4px 4px 0px #0A0A0A` | Buttons, badges |
| `shadow-lg` | `6px 6px 0px #0A0A0A` | Cards |
| `shadow-xl` | `8px 8px 0px #0A0A0A` | Featured cards |
| `shadow-coral` | `4px 4px 0px #FF4D4D` | Coral colored shadow |
| `shadow-yellow` | `4px 4px 0px #FFD60A` | Yellow colored shadow |

---

## 🔘 Components

### Buttons

| Variant | Background | Text | Border | Shadow |
|---|---|---|---|---|
| `primary` | `#FF4D4D` coral | `#0A0A0A` | 2px black | `shadow-md` |
| `secondary` | `#FFD60A` yellow | `#0A0A0A` | 2px black | `shadow-md` |
| `ghost` | transparent | `#0A0A0A` | 2px black | `shadow-md` |
| `dark` | `#0A0A0A` | `#FFFFFF` | 2px black | `shadow-md` |
| `destructive` | `#FF4D4D` | `#FFFFFF` | 2px black | `shadow-md` |

| Size | Height | Padding | Font | Text |
|---|---|---|---|---|
| `sm` | 32px | 8px 16px | 12px Space Mono | UPPERCASE |
| `md` | 40px | 10px 20px | 14px Space Mono | UPPERCASE |
| `lg` | 48px | 12px 28px | 16px Space Mono | UPPERCASE |
| `xl` | 56px | 16px 36px | 18px Space Mono | UPPERCASE |

All buttons:
- `border-radius: 8px`
- `font-weight: 700`
- `letter-spacing: 0.08em`
- Hover: translate(-2px, -2px), shadow grows
- Active: translate(2px, 2px), shadow shrinks

### Event Cards

Event cards are the **core component** of LastSeat.

| Element | Style |
|---|---|
| Card background | White |
| Border | 2px solid black |
| Shadow | `shadow-lg` (6px 6px 0px black) |
| Border radius | 12px |
| Category tag | Colored pill (category color), Space Mono uppercase |
| Event image | Full width, aspect-ratio 16:9, border-bottom 2px black |
| Title | `display-md`, Barlow Condensed, uppercase |
| Venue | `body-sm`, Space Grotesk |
| Date | `label-lg`, Space Mono |
| Price | `heading-md`, bold, coral |
| Tickets left | Badge with `color-teal` if >10, `color-coral` if <10 |
| Favorite button | Heart icon, top-right corner |
| Hover state | translate(-2px, -2px), shadow grows to 8px |

### Input Fields

| State | Style |
|---|---|
| Default | 2px solid black, white bg, radius-md |
| Focus | 2px solid coral, shadow-sm coral |
| Disabled | gray bg, muted text |
| Error | 2px solid coral, light coral bg |

### Navigation

- Top navbar: cream background, 2px black bottom border
- Logo: Barlow Condensed ExtraBold, black
- Nav links: Space Grotesk 600, uppercase, letter-spacing
- Active link: underline with colored accent
- CTA button: primary variant

### Badges / Tags

| Variant | Style |
|---|---|
| Category tag | Colored bg, 2px black border, Space Mono uppercase |
| Tickets left | Teal or coral bg, white text |
| Event type | Black bg, white text |

### Filter Chips (Event Listing)

Horizontal scrollable row of filter chips:
- Default: white bg, 2px black border, `shadow-sm`
- Active: accent color bg (matching category), 2px black border, `shadow-md`
- Font: Space Mono uppercase

---

## 🖼️ Decorative Elements

Inspired by Firehose:
- **Dot grid / line grid** background on hero sections (CSS `radial-gradient` or `background-image`)
- **Floating shapes**: circles, squares at ±45° rotation, used as background accents
- **Highlight boxes**: colored rectangle behind key words in headlines (like the Firehose "IN REAL-TIME" block)
- **Outlined text**: some words in headlines use outline-only style (`-webkit-text-stroke`)

---

## 🔷 Icon System

**Library**: Lucide Icons
**Sizes**: 16px (sm), 20px (md), 24px (lg), 32px (xl)
**Color**: Inherits from parent text color
**Stroke width**: 2px

Key icons used:
- `map-pin` — location
- `calendar` — date
- `ticket` — tickets
- `heart` / `heart-filled` — favorites
- `filter` — filter
- `search` — search
- `user` — profile
- `shopping-cart` — checkout
- `check-circle` — confirmation
- `qr-code` — ticket QR
- `star` — rating
- `chevron-right` — navigation
- `x` — close/clear

---

## 📱 Responsive Rules

- Mobile-first approach
- Event listing: 1 column (mobile) → 2 columns (tablet) → 3 columns (desktop)
- Navbar: hamburger menu on mobile
- Hero text: scales down using `clamp()`
- Cards: full-width on mobile, fixed aspect ratio on desktop
