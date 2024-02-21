import { supabase } from '@/supabase';

export const onAuthChange = () => {
  supabase.auth.onAuthStateChange((event, session) => {
    console.log('session', session);
  });
};