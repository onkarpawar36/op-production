import { Metadata } from 'next';
import { getSupabaseServerClient } from '@/lib/supabase/server';

export const metadata: Metadata = {
  title: 'Admin | OP Productions',
  description: 'Manage inquiries, bookings, testimonials and portfolio projects.',
};

async function getTableRows(table: string) {
  const supabase = getSupabaseServerClient();
  if (!supabase) {
    return [] as Record<string, string>[];
  }

  const { data } = await supabase.from(table).select('*').order('created_at', { ascending: false }).limit(10);
  return (data ?? []) as Record<string, string>[];
}

export default async function AdminPage() {
  const [contacts, projects, bookings, testimonials, portfolio] = await Promise.all([
    getTableRows('contact_inquiries'),
    getTableRows('project_inquiries'),
    getTableRows('bookings'),
    getTableRows('testimonials'),
    getTableRows('portfolio_projects'),
  ]);

  const sections = [
    { label: 'Inquiries', rows: contacts },
    { label: 'Project Inquiries', rows: projects },
    { label: 'Bookings', rows: bookings },
    { label: 'Testimonials', rows: testimonials },
    { label: 'Portfolio Projects', rows: portfolio },
  ];

  return (
    <section className="mx-auto w-full max-w-7xl space-y-6 px-4 py-16 md:px-6">
      <h1 className="text-3xl font-semibold text-white">Admin Panel</h1>
      <p className="text-sm text-zinc-400">Manage inquiries, bookings, portfolio projects and testimonials.</p>
      {sections.map((section) => (
        <article key={section.label} className="rounded-xl border border-[#1A1A1A] bg-[#111111] p-6">
          <h2 className="text-lg font-medium text-white">{section.label}</h2>
          <p className="mt-1 text-xs text-zinc-500">Showing latest 10 records.</p>
          <pre className="mt-4 overflow-x-auto rounded-md bg-[#0A0A0A] p-4 text-xs text-zinc-300">{JSON.stringify(section.rows, null, 2)}</pre>
        </article>
      ))}
    </section>
  );
}
