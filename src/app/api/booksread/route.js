import { supabase } from "@/src/app/supabase";

export async function GET() {
  const { data, error } = await supabase.from('notes').select();
  if (error) console.log('error', error);
  return Response.json({ notes: data });
}

export async function POST(req, res) {
  const payload = await req.json();
  // console.log('payload', payload);
  const { data, error } = await supabase.from('books').insert(payload);
  if (error) console.log('error', error);
  return Response.json({ notes: 'data'});
}

