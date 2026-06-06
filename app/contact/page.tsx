import { Metadata } from 'next';
import { ContactForm } from '@/components/forms/contact-form';
import { SectionHeading } from '@/components/ui/section-heading';

export const metadata: Metadata = {
  title: 'Contact | OP Productions',
  description: 'Submit your inquiry for premium video editing and content production services.',
};

export default function ContactPage() {
  return (
    <section className="mx-auto w-full max-w-7xl space-y-8 px-4 py-16 md:px-6">
      <SectionHeading title="Contact OP Productions" subtitle="Tell us about your project and we will share a premium production plan." />
      <ContactForm />
    </section>
  );
}
