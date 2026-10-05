# Email Design Template

Standalone Next.js app for designing and previewing email templates. Same stack as the HT frontend apps (Next.js, React, Tailwind, TypeScript), without the monorepo `packages` layout.

## Scripts

```bash
npm install
npm run dev
```

The app runs at [http://localhost:3000](http://localhost:3000).

## Layout

- `app` — routes and global styles
- `components` — UI and email templates
- `lib` — template registry
- `types` — shared types

Add a template under `components/templates` and register it in `lib/templates.ts`.
