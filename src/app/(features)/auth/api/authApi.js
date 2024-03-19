'use server';

import { cookies } from 'next/headers';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { supabaseServer } from '@/src/app/lib/supabaseServer';

export const getUser = async () => {
  const cookieStore = cookies();
  const supabaseServer = createServerComponentClient({ cookies: () => cookieStore });

  const { data, error } = await supabaseServer.auth.getUser();
  console.log('data', data);
  if (error) return error;
  return data.user;
};
