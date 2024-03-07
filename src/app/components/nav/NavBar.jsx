'use client';

import { supabase } from '@/src/app/supabase';
import { useState, useEffect } from 'react';
import { Logo } from '../logo/logo';
import { Avatar } from '@chakra-ui/react';
import { Box, Flex } from '@chakra-ui/react';
import Link from 'next/link';

import navbar from './navbar.module.css';

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

  return (
    <Flex className={navbar.container} alignItems="center" justifyContent="space-between">
      <Link href="/">
        <Logo />
      </Link>
      <Avatar bg="purple" color="white" name={currentUser?.name || 'Shawn Stringfield'} size="lg" src={currentUser?.avatar_url} />
    </Flex>
  );
};
