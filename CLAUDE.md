# CelpipMaster

AI-powered CELPIP exam preparation platform.

## Project Overview

CelpipMaster is a Duolingo/EWA-style learning platform specifically designed for CELPIP General exam preparation. It combines progressive learning with full exam simulation, powered by AI for personalized feedback and voice practice.

### Core Features
- **Progressive Learning**: Vocabulary, grammar, pattern sentences, reading comprehension (Duolingo-style)
- **CELPIP Exam Simulation**: All 4 sections — Listening, Reading, Writing, Speaking
- **AI Voice Coach**: Real-time speaking practice via OpenAI Realtime Voice API
- **AI Feedback**: Writing and grammar feedback via Claude API
- **Spaced Repetition System (SRS)**: Tracks what users know/don't know
- **Gamification**: XP, streaks, daily progress, achievements
- **Business Model**: Freemium SaaS (free tier + paid subscriptions)

## Tech Stack

- **Framework**: Next.js 14+ (App Router, Server Components)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **Database & Auth**: Supabase (PostgreSQL + Row Level Security + Auth)
- **AI - Text**: Claude API (Anthropic) — reading, writing, grammar feedback
- **AI - Voice**: OpenAI Realtime Voice API — speaking practice
- **Deployment**: Digital Ocean

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── learn/              # Learning modules
│   │   ├── vocabulary/     # Vocabulary lessons
│   │   ├── grammar/        # Grammar lessons
│   │   ├── patterns/       # Pattern sentences
│   │   └── reading/        # Reading comprehension
│   ├── exam/               # CELPIP exam simulation
│   │   ├── listening/      # Listening section
│   │   ├── reading/        # Reading section
│   │   ├── writing/        # Writing section
│   │   └── speaking/       # Speaking section
│   ├── dashboard/          # User dashboard & progress
│   ├── speaking/           # AI voice practice
│   ├── profile/            # User profile & settings
│   └── api/                # API routes
│       ├── ai/             # AI integration endpoints
│       └── auth/           # Auth endpoints
├── components/
│   ├── ui/                 # Reusable UI components (buttons, cards, modals)
│   ├── layout/             # Layout components (navbar, sidebar, footer)
│   ├── learning/           # Learning-specific components
│   ├── exam/               # Exam-specific components
│   └── dashboard/          # Dashboard components
├── lib/
│   ├── supabase/           # Supabase client & helpers
│   ├── ai/                 # AI client configs (Claude, OpenAI)
│   └── utils/              # Utility functions
├── hooks/                  # Custom React hooks
├── types/                  # TypeScript type definitions
└── stores/                 # State management
```

## Development Rules

### Code Style
- Use TypeScript strict mode — no `any` types
- Use functional components with hooks
- Prefer Server Components where possible; use `'use client'` only when needed
- Use Tailwind CSS for styling — no CSS modules or styled-components
- File naming: kebab-case for files, PascalCase for components

### Conventions
- All pages use Next.js App Router conventions (page.tsx, layout.tsx, loading.tsx, error.tsx)
- API routes go in `src/app/api/` using route handlers
- Shared types go in `src/types/`
- Database queries go through Supabase client in `src/lib/supabase/`
- Environment variables: prefix public ones with `NEXT_PUBLIC_`

### AI Integration
- Claude API calls go through server-side API routes (never expose keys client-side)
- OpenAI Realtime Voice uses WebSocket connections from client
- AI responses should be streamed where possible

### Database (Supabase)
- All tables must have Row Level Security (RLS) enabled
- Use Supabase Auth for user management
- Migrations tracked in Supabase dashboard

### Testing & Quality
- Run `npm run build` before deploying — must pass with zero errors
- ESLint must pass with zero warnings

## Environment Variables

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=

# AI
CLAUDE_API_KEY=
OPENAI_API_KEY=

# App
NEXT_PUBLIC_APP_URL=
```

## Commands

```bash
npm run dev          # Start development server
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Run ESLint
```
