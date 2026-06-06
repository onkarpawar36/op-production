'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import { portfolioProjects } from '@/lib/data';

const categories = ['All', 'Reels', 'Shorts', 'YouTube Videos', 'Motion Graphics', 'Commercial Projects', 'Wedding Films', '3D Animation'] as const;

export function PortfolioGrid() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<(typeof categories)[number]>('All');
  const [activeId, setActiveId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return portfolioProjects.filter((project) => {
      const categoryMatch = category === 'All' || project.category === category;
      const queryMatch = `${project.title} ${project.client} ${project.tags.join(' ')}`.toLowerCase().includes(query.toLowerCase());
      return categoryMatch && queryMatch;
    });
  }, [category, query]);

  const activeProject = portfolioProjects.find((project) => project.id === activeId);

  return (
    <>
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search projects"
          className="w-full rounded-md border border-[#1A1A1A] bg-[#111111] px-4 py-2 text-sm text-white outline-none focus:border-[#C9A96E] md:max-w-sm"
        />
        <div className="flex flex-wrap gap-2">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`rounded-md border px-3 py-1 text-xs uppercase tracking-widest ${
                category === item ? 'border-[#C9A96E] text-[#C9A96E]' : 'border-[#1A1A1A] text-zinc-400'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <article key={project.id} className="overflow-hidden rounded-xl border border-[#1A1A1A] bg-[#111111]">
            <Image src={project.thumbnail} alt={project.title} width={800} height={480} className="h-48 w-full object-cover" loading="lazy" />
            <div className="space-y-2 p-4">
              <p className="text-xs uppercase tracking-widest text-[#C9A96E]">{project.category}</p>
              <h3 className="text-lg font-medium text-white">{project.title}</h3>
              <p className="text-sm text-zinc-400">{project.summary}</p>
              <button onClick={() => setActiveId(project.id)} className="pt-2 text-sm text-white underline underline-offset-4">
                Preview
              </button>
            </div>
          </article>
        ))}
      </div>

      {activeProject ? (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/80 p-4" role="dialog" aria-modal="true">
          <div className="w-full max-w-4xl rounded-xl border border-[#1A1A1A] bg-[#111111] p-4">
            <div className="mb-4 flex items-center justify-between">
              <h4 className="text-lg font-medium text-white">{activeProject.title}</h4>
              <button onClick={() => setActiveId(null)} className="text-sm text-zinc-400">Close</button>
            </div>
            <iframe
              title={activeProject.title}
              src={activeProject.videoUrl}
              className="aspect-video w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
