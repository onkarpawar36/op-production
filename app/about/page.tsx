import { Metadata } from 'next';
import { SectionHeading } from '@/components/ui/section-heading';
import { stats } from '@/lib/data';

export const metadata: Metadata = {
  title: 'About | OP Productions',
  description: 'Agency story, mission, vision, values, skills and achievements of OP Productions.',
};

const values = ['Creative Excellence', 'Client Partnership', 'Consistency', 'Global Standards'];
const skills = ['Narrative Editing', 'Motion Graphics', 'Sound Design', 'Color Grading', 'Commercial Storytelling', '3D Visualization'];

export default function AboutPage() {
  return (
    <section className="mx-auto w-full max-w-7xl space-y-10 px-4 py-16 md:px-6">
      <SectionHeading title="About OP Productions" subtitle="Premium content production agency serving creators, personal brands and businesses worldwide." />
      <div className="grid gap-4 md:grid-cols-2">
        <article className="rounded-xl border border-[#1A1A1A] bg-[#111111] p-6"><h2 className="text-xl font-medium">Agency Story</h2><p className="mt-2 text-sm text-zinc-400">OP Productions was built to provide global-quality editing systems with fast, reliable execution.</p></article>
        <article className="rounded-xl border border-[#1A1A1A] bg-[#111111] p-6"><h2 className="text-xl font-medium">Mission</h2><p className="mt-2 text-sm text-zinc-400">Help creators and brands communicate with cinematic clarity and conversion-focused content.</p></article>
        <article className="rounded-xl border border-[#1A1A1A] bg-[#111111] p-6"><h2 className="text-xl font-medium">Vision</h2><p className="mt-2 text-sm text-zinc-400">Become a leading global creative production partner for high-growth digital-first brands.</p></article>
        <article className="rounded-xl border border-[#1A1A1A] bg-[#111111] p-6"><h2 className="text-xl font-medium">Why Choose OP Productions</h2><p className="mt-2 text-sm text-zinc-400">Premium quality, predictable turnarounds, and strategic editing built for measurable outcomes.</p></article>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <article className="rounded-xl border border-[#1A1A1A] bg-[#111111] p-6"><h2 className="text-xl font-medium">Core Values</h2><ul className="mt-3 space-y-2 text-sm text-zinc-300">{values.map((value) => <li key={value}>• {value}</li>)}</ul></article>
        <article className="rounded-xl border border-[#1A1A1A] bg-[#111111] p-6"><h2 className="text-xl font-medium">Skills & Achievements</h2><ul className="mt-3 space-y-2 text-sm text-zinc-300">{skills.map((skill) => <li key={skill}>• {skill}</li>)}</ul></article>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => <article key={item.label} className="rounded-xl border border-[#1A1A1A] bg-[#111111] p-6"><p className="text-3xl font-semibold">{item.value}</p><p className="mt-1 text-sm text-zinc-400">{item.label}</p></article>)}
      </div>
    </section>
  );
}
