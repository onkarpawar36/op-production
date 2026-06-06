type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export function SectionHeading({ eyebrow, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl space-y-3">
      {eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A96E]">{eyebrow}</p> : null}
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">{title}</h2>
      {subtitle ? <p className="text-base text-zinc-400 md:text-lg">{subtitle}</p> : null}
    </div>
  );
}
