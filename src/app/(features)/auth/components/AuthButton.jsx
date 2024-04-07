'use client';

import React from 'react';
import { supabaseClient } from '../../../lib/supabaseClient';

export const AuthButton = ({ user }) => {
  const signInWithGoogle = async () => {
    supabaseClient.auth.signInWithOAuth({
      provider: 'google',
    });
  };

  const signOut = async () => {
    const { error } = await supabaseClient.auth.signOut();
    console.log('error', error);
  };

  return <div>{user ? <div onClick={signOut}>Sign Out</div> : <div onClick={signInWithGoogle}>Sign In</div>}</div>;
};
