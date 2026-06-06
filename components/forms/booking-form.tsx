'use client';

import { useMemo, useState } from 'react';
import { availableDates, bookedDates, projectTypes } from '@/lib/data';
import { Button } from '@/components/ui/button';

export function BookingForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    service_selection: projectTypes[0],
    requested_date: availableDates[0],
    notes: '',
  });
  const [status, setStatus] = useState('');

  const estimatedDeliveryDate = useMemo(() => {
    const requested = new Date(form.requested_date);
    requested.setDate(requested.getDate() + 5);
    return requested.toISOString().slice(0, 10);
  }, [form.requested_date]);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('Submitting...');

    const response = await fetch('/api/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      setStatus('Booking request submitted.');
      return;
    }

    setStatus('Unable to submit booking request.');
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 rounded-2xl border border-[#1A1A1A] bg-[#111111] p-6">
      <div className="grid gap-4 md:grid-cols-2">
        <input required placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="rounded-md border border-[#1A1A1A] bg-[#0A0A0A] px-3 py-2 text-white" />
        <input required type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="rounded-md border border-[#1A1A1A] bg-[#0A0A0A] px-3 py-2 text-white" />
        <select value={form.service_selection} onChange={(e) => setForm({ ...form, service_selection: e.target.value })} className="rounded-md border border-[#1A1A1A] bg-[#0A0A0A] px-3 py-2 text-white">
          {projectTypes.map((type) => <option key={type} value={type}>{type}</option>)}
        </select>
        <input type="date" value={form.requested_date} onChange={(e) => setForm({ ...form, requested_date: e.target.value })} className="rounded-md border border-[#1A1A1A] bg-[#0A0A0A] px-3 py-2 text-white" />
      </div>
      <textarea placeholder="Project notes" value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} className="min-h-32 rounded-md border border-[#1A1A1A] bg-[#0A0A0A] px-3 py-2 text-white" />
      <div className="rounded-md border border-[#1A1A1A] bg-[#0A0A0A] p-4 text-sm text-zinc-300">
        <p>Available Dates: {availableDates.join(', ')}</p>
        <p className="mt-1">Booked Dates: {bookedDates.join(', ')}</p>
        <p className="mt-1 text-[#C9A96E]">Estimated Delivery Date: {estimatedDeliveryDate}</p>
      </div>
      <Button type="submit">Book A Project</Button>
      <p className="text-sm text-zinc-400">{status}</p>
    </form>
  );
}
