# Alwahaa Technical Services (ATS) — Website

Production-ready single-page parallax website for **Alwahaa Technical Services LLC**, a luxury swimming pool construction company based in Dubai, UAE.

> *For Your Expectations, We Build With Passion.*

## Tech Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** (custom brand theme)
- **Framer Motion** (scroll-triggered animations, parallax)
- **Lucide Icons**

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Copy env file
cp .env.example .env.local

# 3. Run dev server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Next.js dev server |
| `npm run build` | Production build |
| `npm start` | Run production server |
| `npm run lint` | Lint the project |

## Project Structure

```
/app
  layout.tsx        # Root layout, metadata, fonts
  page.tsx          # Single-page composition
  globals.css       # Tailwind + custom styles
/components
  Navbar.tsx        # Fixed blurred nav + mobile menu
  Hero.tsx          # Parallax hero with ripples
  PoolTypes.tsx     # 10 pool type cards, staggered
  Process.tsx       # 5-step animated timeline
  Commercial.tsx    # Commercial project cards
  Wellness.tsx      # Add-on service pills
  CTA.tsx           # Contact cards + WhatsApp CTA
  Footer.tsx        # Logo, links, socials
/public
  /images           # Place pool imagery here
  favicon.png
tailwind.config.ts
next.config.ts
vercel.json
```

## Brand Colors

| Token | Hex |
|-------|-----|
| `brand.blue` | `#00aaff` |
| `brand.navy` | `#1a4f9a` |
| `brand.dark` | `#0a0e1a` |
| `brand.accent` | `#00d4ff` |

## Contact

- **WhatsApp:** [+971 52 565 2771](https://wa.me/971525652771) (HabibRahman)
- **Phone:** [+971 4 255 2895](tel:+97142552895)
- **Email:** [alwahaatechnical@gmail.com](mailto:alwahaatechnical@gmail.com)
- **Location:** Dubai, UAE

## Deployment (Vercel)

This project is preconfigured for Vercel via `vercel.json`.

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or push to GitHub and import the repo at [vercel.com/new](https://vercel.com/new).

## License

© Alwahaa Technical Services LLC. All rights reserved.
