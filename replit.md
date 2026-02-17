# AVNIGOLD Seeds Website

## Overview
A full-stack React Router v7 website for AVNIGOLD Seeds Private Limited, an agricultural seeds company based in Mandsaur, Madhya Pradesh. The site includes pages for Home, About Us, Products, R&D & Quality, Careers, and Contact.

## Tech Stack
- **Framework**: React Router v7 (with SSR)
- **Build Tool**: Vite 7
- **Language**: TypeScript
- **Styling**: CSS Modules + custom design tokens
- **Component Library**: Radix UI
- **Runtime**: Node.js 20

## Project Structure
- `app/` - Main application code
  - `components/` - Reusable UI components (header, footer, hero-slider, ui/)
  - `data/` - Static data files (blog, careers, products, team)
  - `hooks/` - Custom React hooks
  - `routes/` - Page routes with co-located CSS modules
  - `styles/` - Global styles, theme, and design tokens
- `public/` - Static assets (favicon, robots.txt, sitemap)
- `prompts/` - Design system and coding pattern documentation

## Development
- Dev server: `npm run dev` (port 5000)
- Build: `npm run build`
- Production: `npm run start`

## Deployment
- Target: autoscale
- Build: `npm run build`
- Run: `npm run start`
