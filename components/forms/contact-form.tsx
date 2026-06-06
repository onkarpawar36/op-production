'use client';

import { useState } from 'react';
import { projectTypes } from '@/lib/data';
import { Button } from '@/components/ui/button';

const initialState = {
  name: '',
  email: '',
  whatsapp_number: '',
  country: '',
  project_type: projectTypes[0],
  budget: '',
  project_description: '',
};

export function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState('');

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('Submitting...');

    const response = await fetch('/api/contact-inquiries', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      setStatus('Inquiry submitted successfully.');
      setForm(initialState);
      return;
    }

    const result = await response.json().catch(() => null);
    setStatus(result?.error ? 'Unable to submit inquiry.' : 'Unable to submit inquiry.');
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 rounded-2xl border border-[#1A1A1A] bg-[#111111] p-6">
      <div className="grid gap-4 md:grid-cols-2">
        <input required placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="rounded-md border border-[#1A1A1A] bg-[#0A0A0A] px-3 py-2 text-white" />
        <input required type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="rounded-md border border-[#1A1A1A] bg-[#0A0A0A] px-3 py-2 text-white" />
        <input required placeholder="WhatsApp Number" value={form.whatsapp_number} onChange={(e) => setForm({ ...form, whatsapp_number: e.target.value })} className="rounded-md border border-[#1A1A1A] bg-[#0A0A0A] px-3 py-2 text-white" />
        <input required placeholder="Country" value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })} className="rounded-md border border-[#1A1A1A] bg-[#0A0A0A] px-3 py-2 text-white" />
        <select value={form.project_type} onChange={(e) => setForm({ ...form, project_type: e.target.value })} className="rounded-md border border-[#1A1A1A] bg-[#0A0A0A] px-3 py-2 text-white">
          {projectTypes.map((type) => <option key={type} value={type}>{type}</option>)}
        </select>
        <input required placeholder="Budget" value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })} className="rounded-md border border-[#1A1A1A] bg-[#0A0A0A] px-3 py-2 text-white" />
      </div>
      <textarea required placeholder="Project Description" value={form.project_description} onChange={(e) => setForm({ ...form, project_description: e.target.value })} className="min-h-36 rounded-md border border-[#1A1A1A] bg-[#0A0A0A] px-3 py-2 text-white" />
      <div className="flex flex-wrap items-center gap-3">
        <Button type="submit">Submit Inquiry</Button>
        <Button href="https://wa.me/0000000000" variant="secondary">Contact On WhatsApp</Button>
      </div>
      <p className="text-sm text-zinc-400">{status}</p>
    </form>
  );
}
