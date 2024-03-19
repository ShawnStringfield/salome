import { cookies } from 'next/headers';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';

const supabase = (cookies) => createServerComponentClient({ cookies: () => cookies() });

export const supabaseServer = async () => {
  return supabase(cookies());
};

