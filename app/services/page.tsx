import { Metadata } from 'next';
import { SectionHeading } from '@/components/ui/section-heading';
import { services } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Services | OP Productions',
  description: 'Premium editing, motion graphics, wedding films, commercial ads and 3D animation services.',
};

export default function ServicesPage() {
  return (
    <section className="mx-auto w-full max-w-7xl space-y-10 px-4 py-16 md:px-6">
      <SectionHeading title="Services" subtitle="Premium production services for creators, brands and agencies." />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <article key={service.title} className="rounded-xl border border-[#1A1A1A] bg-[#111111] p-6">
            <h2 className="text-xl font-medium text-white">{service.title}</h2>
            <p className="mt-2 text-sm text-zinc-400">{service.description}</p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-300">
              {service.features.map((feature) => <li key={feature}>• {feature}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
