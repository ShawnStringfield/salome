import { supabase } from '@/src/app/supabase';

export const setUser = async () => {
  const { data, error } = await supabase.auth.getUser();
  if (error) console.log('error from setUser', error);
  return { user: data.user, error };
};


