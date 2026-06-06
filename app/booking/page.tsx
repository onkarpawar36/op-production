import { Metadata } from 'next';
import { BookingForm } from '@/components/forms/booking-form';
import { SectionHeading } from '@/components/ui/section-heading';

export const metadata: Metadata = {
  title: 'Booking | OP Productions',
  description: 'Book your video editing project with available slots and delivery estimates.',
};

export default function BookingPage() {
  return (
    <section className="mx-auto w-full max-w-7xl space-y-8 px-4 py-16 md:px-6">
      <SectionHeading title="Book A Project" subtitle="Reserve your slot, select services and receive a delivery estimate." />
      <BookingForm />
    </section>
  );
}
