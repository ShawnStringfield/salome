'use client';

import { supabase } from '@/src/app/supabase';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export const NavBar = () => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      console.log('navbar session', session);
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

  return <div>NavBar</div>;
};
