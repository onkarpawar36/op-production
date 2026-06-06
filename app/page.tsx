import { ShowreelSection } from '@/components/home/showreel';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/ui/section-heading';
import { faqItems, portfolioProjects, processSteps, services, stats, testimonials } from '@/lib/data';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'OP Productions',
  slogan: 'Cinematic Video Editing For Creators, Brands & Businesses',
  serviceType: 'Video Editing & Content Production',
  areaServed: 'Worldwide',
};

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-[calc(100vh-73px)] items-center border-b border-[#1A1A1A]">
        <div className="mx-auto w-full max-w-7xl px-4 py-20 md:px-6">
          <div className="max-w-4xl space-y-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A96E]">OP Productions</p>
            <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">Transform Your Content Into Cinematic Experiences</h1>
            <p className="max-w-2xl text-lg text-zinc-300">Professional video editing, motion graphics and content solutions that help creators and brands grow faster.</p>
            <div className="flex flex-wrap gap-3">
              <Button href="/portfolio" variant="secondary">View Portfolio</Button>
              <Button href="/booking">Book A Project</Button>
            </div>
          </div>
        </div>
      </section>

      <ShowreelSection />

      <section className="mx-auto grid w-full max-w-7xl gap-4 px-4 py-16 md:grid-cols-2 lg:grid-cols-4 md:px-6">
        {stats.map((item) => (
          <article key={item.label} className="rounded-xl border border-[#1A1A1A] bg-[#111111] p-6">
            <p className="text-3xl font-semibold text-white">{item.value}</p>
            <p className="mt-2 text-sm text-zinc-400">{item.label}</p>
          </article>
        ))}
      </section>

      <section className="mx-auto w-full max-w-7xl space-y-10 px-4 py-16 md:px-6">
        <SectionHeading eyebrow="Services" title="Premium Editing & Production Services" subtitle="Built for creators, businesses and agencies that need world-class output and consistency." />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="rounded-xl border border-[#1A1A1A] bg-[#111111] p-6">
              <p className="text-xs uppercase tracking-widest text-[#C9A96E]">{service.category}</p>
              <h3 className="mt-3 text-xl font-medium">{service.title}</h3>
              <p className="mt-2 text-sm text-zinc-400">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl space-y-8 px-4 py-16 md:px-6">
        <SectionHeading eyebrow="Featured Work" title="Selected Projects" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {portfolioProjects.slice(0, 3).map((project) => (
            <article key={project.id} className="rounded-xl border border-[#1A1A1A] bg-[#111111] p-6">
              <p className="text-xs uppercase tracking-widest text-[#C9A96E]">{project.category}</p>
              <h3 className="mt-3 text-lg font-medium">{project.title}</h3>
              <p className="mt-2 text-sm text-zinc-400">{project.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl space-y-8 px-4 py-16 md:px-6">
        <SectionHeading eyebrow="Testimonials" title="Trusted By Global Clients" />
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.id} className="rounded-xl border border-[#1A1A1A] bg-[#111111] p-6">
              <p className="text-[#C9A96E]">{'★'.repeat(testimonial.rating)}</p>
              <p className="mt-3 text-sm text-zinc-300">“{testimonial.feedback}”</p>
              <p className="mt-4 text-sm font-medium text-white">{testimonial.name} — {testimonial.role}, {testimonial.company}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl space-y-8 px-4 py-16 md:px-6">
        <SectionHeading eyebrow="Process" title="How We Deliver" />
        <div className="grid gap-4 md:grid-cols-5">
          {processSteps.map((step, index) => (
            <article key={step} className="rounded-xl border border-[#1A1A1A] bg-[#111111] p-5">
              <p className="text-xs uppercase tracking-widest text-[#C9A96E]">Step {index + 1}</p>
              <p className="mt-2 text-lg font-medium text-white">{step}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl space-y-4 px-4 py-16 md:px-6">
        <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
        {faqItems.map((faq) => (
          <details key={faq.question} className="rounded-xl border border-[#1A1A1A] bg-[#111111] p-5">
            <summary className="cursor-pointer list-none text-base font-medium text-white">{faq.question}</summary>
            <p className="mt-3 text-sm text-zinc-400">{faq.answer}</p>
          </details>
        ))}
      </section>

      <section className="mx-auto mb-20 w-full max-w-7xl rounded-2xl border border-[#1A1A1A] bg-[#111111] px-6 py-14 text-center">
        <h2 className="text-3xl font-semibold text-white md:text-4xl">Ready To Elevate Your Content?</h2>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button href="/booking">Book A Project</Button>
          <Button href="/contact" variant="secondary">Schedule A Call</Button>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
