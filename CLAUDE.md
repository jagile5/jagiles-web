# CLAUDE.md
We are building a video portfolio site for Joshua Giles, a videographer from New Zealand now based in Vancouver. It's going to be a fun website with lots of tasteful animations and effects to really show off their style.

## Project structure
```
src/
  components/   # Reusable components (PascalCase filenames)
  layouts/      # Base layouts
  pages/        # File-based routing (lowercase kebab filenames)
  styles/       # Global CSS and custom properties
  assets/       # Images, fonts
public/         # Static files served as-is
```

## Stack
Astro (static output) + Tailwind + Three.js + GSAP. Deployed to Cloudflare Pages via GitHub — push to `main` to deploy.

## Colours
```
--color-primary:   #2D8AE9
--color-secondary: #F43674
--color-third:     #7DB598
```
Dark background (#0d0d0d), off-black surfaces, near-white text. Pick neutrals that suit the palette.

## Design direction
Dark, cinematic, editorial. Inspired by juanmora.co — bold shapes, confident typography, intentional motion.

Hero: a 3D rounded CRT TV (70s/80s era) drops from above and crashes into frame on page load using Three.js. On impact, the screen flickers on and plays a Vimeo showreel. Below the hero, scroll-triggered animations reveal work sections (GSAP ScrollTrigger). One strong display font (Syne from Google Fonts), clean body font (DM Sans).

Subtle scanline overlay on the TV screen. No scroll-jacking. Mobile responsive.

## How we work
- One task at a time, no subagents
- Commit after every meaningful change
- Build one section fully before starting the next
- Copy tone: casual, direct, genuine — no marketing fluff, no em dashes

## Content
Portfolio site for Josh A Giles — videographer, drone operator, content creator based in North Vancouver, BC. Pages: Home, Work, About, Contact. Projects have title, slug, category, description, thumbnail, embed URL (Vimeo/YouTube), featured flag, and date.