import { Metadata } from 'next';
import { PortfolioGrid } from '@/components/portfolio/portfolio-grid';
import { SectionHeading } from '@/components/ui/section-heading';

export const metadata: Metadata = {
  title: 'Portfolio | OP Productions',
  description: 'Browse reels, shorts, YouTube edits, motion graphics, commercials, wedding films and 3D projects.',
};

export default function PortfolioPage() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 md:px-6">
      <SectionHeading title="Portfolio" subtitle="Explore category filters, search and instant project previews." />
      <div className="mt-10">
        <PortfolioGrid />
      </div>
    </section>
  );
}
