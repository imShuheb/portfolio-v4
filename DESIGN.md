# DESIGN.md — Portfolio v4

Direction: **engineering dossier**. The site should read like a well-set technical
document: left-aligned, typographic, calm. The work is the content; the design
stays out of its way. No themes, no fake telemetry, no logo walls, no skill bars.

Tokens live in `src/styles/global.css` as CSS variables. Pages use the names,
never raw values.

## Colour

Light is the default; dark follows the system and can be toggled.

| Token | Light | Dark | Role |
|---|---|---|---|
| `--bg` | `#FAF9F6` | `#0F1113` | Page background (warm paper / near-black) |
| `--surface` | `#FFFFFF` | `#16191C` | Cards, image frames, diagram cells |
| `--ink` | `#15171A` | `#ECEAE5` | Headings and body text |
| `--muted` | `#5A606B` | `#A0A6B0` | Secondary text, metadata |
| `--line` | `#E3E0D9` | `#272B30` | Hairline rules and borders |
| `--accent` | `#B93A12` | `#F2845C` | Links, primary button, numbered labels |
| `--accent-ink` | `#FFFFFF` | `#14100E` | Text on the accent colour |
| `--tint` | `#F3F0EA` | `#1B1E22` | Chips, hover rows, quiet fills |

One accent only (burnt orange). No gradients. Contrast: ink and muted on `--bg`
pass 4.5:1 in both themes; accent on `--bg` passes 4.5:1.

## Typography

| Family | Use |
|---|---|
| Instrument Serif (400) | Display: h1, h2, project titles, big numbers |
| Geist (variable) | Body, UI, h3 |
| Geist Mono (variable) | Labels, metadata, stack lists, table heads |

Scale: 12 (mono label) · 14 (small) · 17 (body, 1.65) · 20 (lead, 1.55) ·
24 (h3) · 40 (h2, 1.1) · clamp(44–88) (h1, 1.02). Body lines are capped at
about 68 characters (`--measure: 40rem`).

## Spacing and layout

4px base scale: 4, 8, 12, 16, 24, 32, 48, 72, 112. Sections are separated by
112px (72px on mobile) and a hairline. Content width 1120px, 24px gutters.
Sections use a two-column "dossier" grid: a narrow label column (number + name
in mono) and a wide content column. It collapses to one column under 800px.

## Shape and depth

Radius: 4px (chips, buttons) and 10px (image frames, cards). No shadows; depth
comes from hairlines and the surface colour.

## Components

- **Buttons**: primary (accent fill), secondary (hairline border), quiet (text
  with arrow). Hover darkens or tints; focus shows a 2px accent outline, offset 2px.
- **Links**: accent colour, underline on hover; in prose, always underlined.
- **Project row**: number, serif title, one-line summary, mono stack, optional
  thumbnail. Whole row is the link; hover tints the row.
- **Chips**: mono 12px on `--tint`, used for stack and module names only.
- **Table**: archive list; mono header, hairline rows.
- **Diagram**: layered boxes built from the same hairlines and surface colour.
- **Nav**: name on the left, four links and a theme toggle on the right.
- **Footer**: one line, links to earlier versions of the site.

## Imagery and icons

Real product screenshots only, shown in a 10px-radius hairline frame. No stock
art, no illustrations, no emoji. Icons are limited to a text arrow (→ ↗) and the
theme toggle glyph.

## Motion

None beyond 150ms colour transitions. `prefers-reduced-motion` disables those.

## Note

This direction was chosen from the content and the three earlier versions of the
site, not from a study of reference sites.
