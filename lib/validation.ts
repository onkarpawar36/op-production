import { z } from 'zod';

const baseContactSchema = {
  name: z.string().trim().min(2).max(100),
  email: z.email(),
  whatsapp_number: z.string().trim().min(7).max(30),
  country: z.string().trim().min(2).max(60),
  project_type: z.string().trim().min(2).max(120),
  budget: z.string().trim().min(1).max(80),
  project_description: z.string().trim().min(20).max(2000),
};

export const contactInquirySchema = z.object(baseContactSchema);

export const projectInquirySchema = z.object({
  ...baseContactSchema,
  preferred_delivery_date: z.string().optional(),
});

export const bookingSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.email(),
  service_selection: z.string().trim().min(2).max(120),
  requested_date: z.string(),
  notes: z.string().trim().max(1200).optional(),
});

export const testimonialSchema = z.object({
  name: z.string().trim().min(2).max(120),
  role: z.string().trim().min(2).max(120),
  company: z.string().trim().min(2).max(120),
  rating: z.number().int().min(1).max(5),
  feedback: z.string().trim().min(10).max(1000),
});

export const portfolioProjectSchema = z.object({
  title: z.string().trim().min(2).max(150),
  category: z.string().trim().min(2).max(80),
  client: z.string().trim().min(2).max(120),
  summary: z.string().trim().min(10).max(1000),
  thumbnail: z.url(),
  video_url: z.url(),
  tags: z.array(z.string()).default([]),
  result: z.string().trim().min(2).max(500),
});
