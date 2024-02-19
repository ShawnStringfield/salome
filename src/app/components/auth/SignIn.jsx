'use client';

import React from 'react';
import { supabase } from '@/supabase';

export const SignIn = async () => {
  const signInWithGoogle = () => {
    supabase.auth.signInWithOAuth({
      provider: 'google',
    });
  };
  return <div onClick={signInWithGoogle}>Sign In</div>;
};
