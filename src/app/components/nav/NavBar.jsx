'use client';

import { SignIn } from '../auth/SignIn';
import { supabase } from '@/supabase';

export const NavBar = async () => {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  console.log('session', session);

  return <SignIn />;
};
