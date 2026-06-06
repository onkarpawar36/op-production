import { listRows, insertWithValidation } from '@/lib/api';
import { portfolioProjectSchema } from '@/lib/validation';

export async function GET() {
  return listRows('portfolio_projects');
}

export async function POST(request: Request) {
  const payload = await request.json();
  return insertWithValidation('portfolio_projects', portfolioProjectSchema, payload);
}
