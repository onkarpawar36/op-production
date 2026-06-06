import { listRows, insertWithValidation } from '@/lib/api';
import { contactInquirySchema } from '@/lib/validation';

export async function GET() {
  return listRows('contact_inquiries');
}

export async function POST(request: Request) {
  const payload = await request.json();
  return insertWithValidation('contact_inquiries', contactInquirySchema, payload);
}
