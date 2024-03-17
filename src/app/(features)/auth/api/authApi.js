import { supabase } from '@/src/app/lib/supabaseClient';

export const getUser = async () => {
  const { data, error } = await supabase.auth.getUser();
  if (error) return error;
  return data.user;
};
