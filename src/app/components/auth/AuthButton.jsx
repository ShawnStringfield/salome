'use client';

import React from 'react';
import { supabase } from '@/src/app/supabase';

export const AuthButton = ({ user }) => {
  const signInWithGoogle = async () => {
    let { data: user, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    });
    if (user) console.log('user', user);
    if (error) console.log('error', error);
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    console.log('error', error);
  };

  return <div>{user ? <div onClick={signOut}>Sign Out</div> : <div onClick={signInWithGoogle}>Sign In</div>}</div>;
};
