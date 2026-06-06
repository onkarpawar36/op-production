'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { portfolioProjects } from '@/lib/data';

export function ShowreelSection() {
  const [activeId, setActiveId] = useState(portfolioProjects[0]?.id);
  const active = portfolioProjects.find((project) => project.id === activeId) ?? portfolioProjects[0];

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-20 md:px-6">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A96E]">Showreel</p>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Featured Cinematic Work</h2>
        </div>
      </div>

      <motion.div
        key={active.id}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="overflow-hidden rounded-2xl border border-[#1A1A1A] bg-[#111111]"
      >
        <iframe
          title={active.title}
          src={active.videoUrl}
          className="aspect-video w-full"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </motion.div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {portfolioProjects.map((project) => (
          <button
            key={project.id}
            onClick={() => setActiveId(project.id)}
            className={`rounded-xl border p-4 text-left transition ${
              active.id === project.id ? 'border-[#C9A96E] bg-[#171717]' : 'border-[#1A1A1A] bg-[#111111] hover:border-zinc-700'
            }`}
          >
            <p className="text-xs uppercase tracking-widest text-zinc-400">{project.category}</p>
            <p className="mt-2 text-base font-medium text-white">{project.title}</p>
          </button>
        ))}
      </div>
    </section>
  );
}
