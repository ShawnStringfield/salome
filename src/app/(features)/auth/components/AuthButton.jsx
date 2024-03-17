'use client';

import React from 'react';
import { supabase } from '@/src/app/lib/supabaseClient';

export const AuthButton = ({ user }) => {
  const signInWithGoogle = async () => {
    supabase.auth.signInWithOAuth({
      provider: 'google',
    });
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    console.log('error', error);
  };

  return <div>{user ? <div onClick={signOut}>Sign Out</div> : <div onClick={signInWithGoogle}>Sign In</div>}</div>;
};
