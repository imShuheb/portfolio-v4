# Portfolio v4

Personal site of Mohammed Shuheb, full stack developer in Bengaluru.
Live at [imshuheb.in](https://imshuheb.in).

Built with [Astro](https://astro.build). Static output, no client framework, no CSS framework.

## Run it

Requires Node.js 18 or later.

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # static site in dist/
npm run preview   # serve the build locally
```

## Edit content

All content lives in two files. Pages read from them, so most changes never touch a page.

| File | What it holds |
|---|---|
| `src/data/site.ts` | Name, contact links, résumé path, experience, toolbox |
| `src/data/projects.ts` | Every project and its case study |

To add a project, add an object to `projects` in `src/data/projects.ts`. Its page at `/projects/<slug>` is generated automatically. Screenshots go in `public/shots/<project>/`.

## Structure

```
src/
  data/         site.ts, projects.ts
  layouts/      Base.astro         page shell, nav, footer, theme toggle
  components/   Thumb.astro        project thumbnail or flow diagram
  pages/
    index.astro                    home
    work/skilldeck.astro           SkillDeck case study
    projects/index.astro           project list
    projects/[slug].astro          one page per project
    about.astro
    404.astro
  styles/global.css                design tokens and shared styles
public/
  shots/                           project screenshots
  Mohammed_Shuheb_Resume.docx
```

## Design

Colours, type, spacing and components are documented in [DESIGN.md](DESIGN.md) and defined as CSS variables in `src/styles/global.css`. Light and dark themes follow the system setting and can be toggled.

## Deploy

Any static host works. Build command `npm run build`, output directory `dist`.
