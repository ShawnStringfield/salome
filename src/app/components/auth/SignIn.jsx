'use client';

import React, { useEffect } from 'react';
import { supabase } from '@/supabase';

export const SignIn = async () => {
  const handleClick = () => {
    supabase.auth.signInWithOAuth({
      provider: 'google',
    });
  };
  return <div onClick={handleClick}>Sign In</div>;
};
