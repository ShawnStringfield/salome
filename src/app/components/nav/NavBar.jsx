// 'use client';

import { SignIn } from '../auth/SignIn';
import { supabase } from '@/supabase';

export const NavBar = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return <></>;
};
