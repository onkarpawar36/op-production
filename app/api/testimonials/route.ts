import { listRows, insertWithValidation } from '@/lib/api';
import { testimonialSchema } from '@/lib/validation';

export async function GET() {
  return listRows('testimonials');
}

export async function POST(request: Request) {
  const payload = await request.json();
  return insertWithValidation('testimonials', testimonialSchema, payload);
}
