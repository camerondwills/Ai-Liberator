
# Modern Landing Page Template

A modern, responsive landing page template built with React, TypeScript, and Tailwind CSS. Features a clean design with components from Shadcn UI.

## Tech Stack

- **Frontend**: React + TypeScript + Vite
- **Styling**: Tailwind CSS + Shadcn UI
- **Backend**: Express.js
- **Database**: DrizzleORM with PostgreSQL
- **Routing**: Wouter
- **State Management**: React Query
- **Environment**: Node.js

## Features

- 🎨 Modern, responsive design
- 🌗 Light/dark mode support
- 📱 Mobile-first approach
- 🔍 SEO optimized
- 📊 Google Analytics integration
- 🚀 Fast development with HMR
- 💅 Customizable theme

## Getting Started

1. Clone the repository
2. Copy `.env.example` to `.env` and update the values:
```
VITE_GTAG_ID=your-google-analytics-id
VITE_GTM_ID=your-google-tag-manager-id
```
3. Install dependencies:
```bash
npm install
```
4. Start the development server:
```bash
npm run dev
```

## Project Structure

```
├── client/               # Frontend code
│   ├── public/          # Static assets
│   └── src/
│       ├── components/  # React components
│       ├── hooks/       # Custom React hooks
│       ├── lib/         # Utilities and configs
│       └── pages/       # Page components
├── server/              # Backend code
└── db/                  # Database schema and config
```

## Customization Guide

### Adding/Editing Content

1. **Landing Page Content**: Edit components in `client/src/components/`:
   - `Hero.tsx`: Main hero section
   - `Features.tsx`: Features section
   - `SupportedModels.tsx`: Models/services section
   - `Download.tsx`: Download/CTA section

2. **Styling**: 
   - Global styles: `client/src/index.css`
   - Theme: `theme.json`
   - Tailwind config: `tailwind.config.ts`

3. **Images**: Add to `client/public/` directory

4. **Routes**: Add new pages in `client/src/pages/` and update routing in `App.tsx`

### Best Practices

- Keep components small and focused
- Use Shadcn UI components from `components/ui/` for consistency
- Follow the existing file structure for new features
- Keep environment variables in `.env` (don't commit this file)

## Development

- Run `npm run dev` for development with hot reload
- Run `npm run build` to create production build
- Run `npm run check` for TypeScript checks

## License

MIT
