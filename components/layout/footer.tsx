export function Footer() {
  return (
    <footer className="border-t border-[#1A1A1A] bg-[#0A0A0A]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-4 py-8 text-sm text-zinc-400 md:flex-row md:items-center md:justify-between md:px-6">
        <p>© {new Date().getFullYear()} OP Productions. All rights reserved.</p>
        <p>Cinematic Video Editing For Creators, Brands & Businesses</p>
      </div>
    </footer>
  );
}
