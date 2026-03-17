# AI Laugh Lab Site

Landing page for AI Laugh Lab, the AI comedy community on Skool.

## Stack
- Next.js 15 (App Router, SSG)
- TypeScript
- TailwindCSS v4
- Framer Motion for animations
- Bun as package manager

## Commands
- `bun dev` - Dev server with Turbopack
- `bun run build` - Production build
- `bun run start` - Start production server

## Theme System
4 themes controlled via CSS custom properties on `<html>`:
- **AI Lab** (default): Neon green/cyan
- **Wild West**: Sand/leather tones
- **Space Station**: Purple/blue
- **Retro Arcade**: Pink/yellow

Theme state stored in localStorage. First-time visitors see a theme selector modal.

## Key Architecture
- `src/components/theme/` - ThemeProvider (React context), ThemeSelector (modal), theme-config
- `src/styles/globals.css` - CSS custom properties for all 4 themes via `@theme` block
- `src/styles/panorama.css` - Panoramic scene keyframe animations
- `src/data/` - Content data files (experiments, highlights, theme-specific copy)
- `src/components/effects/` - FloatingParticles, CursorGlow, KonamiEgg Easter eggs

## Deployment
- Coolify (self-hosted), Docker multi-stage build, standalone output
- Domain: ailaughlab.com (pending DNS transfer from Namecheap to Cloudflare)

## Panoramic Scene
3-layer parallax CSS animation. Each theme will have its own art set (12 strips total).
Placeholder gradients until Phase 4 art generation.
