create extension if not exists "pgcrypto";

create table if not exists public.contact_inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  whatsapp_number text not null,
  country text not null,
  project_type text not null,
  budget text not null,
  project_description text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.project_inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  whatsapp_number text not null,
  country text not null,
  project_type text not null,
  budget text not null,
  project_description text not null,
  preferred_delivery_date date,
  created_at timestamptz not null default now()
);

create table if not exists public.bookings (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  service_selection text not null,
  requested_date date not null,
  notes text,
  created_at timestamptz not null default now()
);

create table if not exists public.testimonials (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  role text not null,
  company text not null,
  rating int not null check (rating between 1 and 5),
  feedback text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.portfolio_projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  category text not null,
  client text not null,
  summary text not null,
  thumbnail text not null,
  video_url text not null,
  tags text[] not null default '{}',
  result text not null,
  created_at timestamptz not null default now()
);
