'use client';

import React from 'react';
import { supabase } from '@/supabase';
import { useState, useEffect } from 'react';

export const AuthButton = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (!session) setCurrentUser(null);
      if (session) {
        setCurrentUser({
          role: session.user.role,
          name: session.user.user_metadata.name,
          avatar_url: session.user.user_metadata.avatar_url,
        });
      }
    });
  }, [setCurrentUser]);

  const signInWithGoogle = () => {
    supabase.auth.signInWithOAuth({
      provider: 'google',
    });
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    console.log('error', error);
  };

  return <div>{currentUser ? <div onClick={signOut}>Sign Out</div> : <div onClick={signInWithGoogle}>Sign In</div>}</div>;
};
