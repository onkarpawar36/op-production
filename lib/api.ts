import { NextResponse } from 'next/server';
import { ZodType } from 'zod';
import { getSupabaseServerClient } from '@/lib/supabase/server';

export async function insertWithValidation<T>(
  table: string,
  schema: ZodType<T>,
  payload: unknown
) {
  const parsed = schema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const supabase = getSupabaseServerClient();
  if (!supabase) {
    return NextResponse.json({ error: 'Supabase is not configured.' }, { status: 503 });
  }

  const { data, error } = await supabase.from(table).insert(parsed.data as never).select('*').single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ data }, { status: 201 });
}

export async function listRows(table: string) {
  const supabase = getSupabaseServerClient();
  if (!supabase) {
    return NextResponse.json({ data: [] }, { status: 200 });
  }

  const { data, error } = await supabase.from(table).select('*').order('created_at', { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ data }, { status: 200 });
}
