import { cookies } from 'next/headers';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
const cookieStore = cookies();
export const supabase = createServerComponentClient({ cookies: () => cookieStore });
