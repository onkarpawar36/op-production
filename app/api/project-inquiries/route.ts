import { listRows, insertWithValidation } from '@/lib/api';
import { projectInquirySchema } from '@/lib/validation';

export async function GET() {
  return listRows('project_inquiries');
}

export async function POST(request: Request) {
  const payload = await request.json();
  return insertWithValidation('project_inquiries', projectInquirySchema, payload);
}
