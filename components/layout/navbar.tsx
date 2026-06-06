import Link from 'next/link';
import { navLinks } from '@/lib/data';
import { Button } from '@/components/ui/button';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#1A1A1A] bg-[#0A0A0A]/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <Link href="/" className="text-lg font-semibold tracking-wide text-white">
          OP Productions
        </Link>
        <nav className="hidden items-center gap-5 lg:flex">
          {navLinks.slice(1, 8).map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-zinc-300 transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>
        <Button href="/booking" variant="primary" className="text-xs md:text-sm">
          Book A Project
        </Button>
      </div>
    </header>
  );
}
