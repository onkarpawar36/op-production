import { Metadata } from 'next';
import { SectionHeading } from '@/components/ui/section-heading';
import { caseStudies } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Case Studies | OP Productions',
  description: 'Detailed editing case studies with challenge, solution and measurable results.',
};

export default function CaseStudiesPage() {
  return (
    <section className="mx-auto w-full max-w-7xl space-y-8 px-4 py-16 md:px-6">
      <SectionHeading title="Case Studies" subtitle="Real production outcomes for global clients." />
      {caseStudies.map((study) => (
        <article key={study.id} className="rounded-2xl border border-[#1A1A1A] bg-[#111111] p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-white">{study.client}</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="space-y-3 text-sm text-zinc-300">
              <p><span className="text-[#C9A96E]">Challenge:</span> {study.challenge}</p>
              <p><span className="text-[#C9A96E]">Solution:</span> {study.solution}</p>
              <p><span className="text-[#C9A96E]">Before:</span> {study.before}</p>
              <p><span className="text-[#C9A96E]">After:</span> {study.after}</p>
              <ul className="space-y-1 pt-2">{study.results.map((result) => <li key={result}>• {result}</li>)}</ul>
            </div>
            <iframe title={study.client} src={study.videoUrl} className="aspect-video w-full rounded-lg" allowFullScreen />
          </div>
        </article>
      ))}
    </section>
  );
}
