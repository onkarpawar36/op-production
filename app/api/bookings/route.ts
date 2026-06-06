import { listRows, insertWithValidation } from '@/lib/api';
import { bookingSchema } from '@/lib/validation';

export async function GET() {
  return listRows('bookings');
}

export async function POST(request: Request) {
  const payload = await request.json();
  return insertWithValidation('bookings', bookingSchema, payload);
}
