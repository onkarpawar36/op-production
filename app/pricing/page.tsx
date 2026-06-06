import { Metadata } from 'next';
import { SectionHeading } from '@/components/ui/section-heading';
import { pricingPlans } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Pricing | OP Productions',
  description: 'Premium pricing for reels, YouTube edits and monthly content retainers.',
};

const groups = ['Reels', 'YouTube', 'Monthly Retainers'] as const;

export default function PricingPage() {
  return (
    <section className="mx-auto w-full max-w-7xl space-y-10 px-4 py-16 md:px-6">
      <SectionHeading title="Pricing" subtitle="Transparent packages for creators, brands and business teams." />
      {groups.map((group) => (
        <div key={group} className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">{group}</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {pricingPlans.filter((plan) => plan.group === group).map((plan) => (
              <article key={plan.name} className="rounded-xl border border-[#1A1A1A] bg-[#111111] p-6">
                <h3 className="text-lg font-medium text-white">{plan.name}</h3>
                <p className="mt-2 text-2xl font-semibold text-[#C9A96E]">{plan.price}</p>
                <ul className="mt-3 space-y-1 text-sm text-zinc-300">{plan.details.map((detail) => <li key={detail}>• {detail}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
