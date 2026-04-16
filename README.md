# AllocaIQ — Autonomous Capital Allocation Intelligence

A production-ready, responsive SaaS landing page for AllocaIQ, an institutional decision intelligence platform for hedge funds, venture firms, and quantitative investment teams.

## Tech Stack

- **React 19** — component-based UI
- **Vite** — fast build tooling
- **Tailwind CSS v4** — utility-first styling via `@tailwindcss/vite`

## Design

Light, minimal fintech aesthetic (Stripe / Ramp style):
- Background: light neutral (`#f8fafc` + white surfaces)
- Single accent color: indigo CTA (`#4f46e5`)
- Typography-first centered hero with high whitespace
- Subtle borders and soft shadows

## Sections

1. **Navbar** — Product / Docs / Pricing / Login + Request Access CTA
2. **Hero** — centered headline, subheadline, single primary CTA + sample link
3. **Signal Preview** — clean output table (ETH / SOL / ARB)
4. **Problem** — concise market fragmentation statement
5. **Solution** — dual-layer architecture (Intelligence Layer + Risk Layer)
6. **Features** — 3 focused cards
7. **Footer**

## Getting Started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy to Vercel

1. In Vercel, import the `awaregh/AllocaIQ` repository as a new project.
2. Confirm project settings:
   - Framework Preset: `Vite`
   - Install Command: `npm install`
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Set the production branch (usually `main`) and deploy.
4. After deploy, open the live URL and verify the page and static assets load correctly.
5. Keep Git integration enabled so pushes trigger automatic deployments.

### Optional: SPA rewrites for client-side routing

If you add client-side routes later, use this rewrite rule in `vercel.json` so deep links resolve to `index.html`:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```
