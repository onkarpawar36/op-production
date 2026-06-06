# OP Productions

Premium portfolio website for **OP Productions** — a cinematic video editing and content production agency.

## Tech Stack

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS
- Framer Motion
- Supabase

## Setup

1. Install dependencies:

```bash
npm install
```

2. Configure environment variables:

```bash
cp .env.example .env.local
```

Set the following keys:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

3. Run database schema in Supabase SQL editor:

- `supabase/schema.sql`

4. Start development server:

```bash
npm run dev
```

## Routes

- `/` Home
- `/services`
- `/portfolio`
- `/case-studies`
- `/about`
- `/pricing`
- `/booking`
- `/contact`
- `/admin`

## API Routes

- `POST/GET /api/contact-inquiries`
- `POST/GET /api/project-inquiries`
- `POST/GET /api/bookings`
- `POST/GET /api/testimonials`
- `POST/GET /api/portfolio-projects`
