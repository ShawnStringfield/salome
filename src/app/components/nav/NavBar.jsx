'use client';

import { supabase } from '@/src/app/supabase';
import { useState, useEffect } from 'react';
import { Flex, Menu, MenuButton, MenuList, MenuItem, Avatar } from '@chakra-ui/react';
import { Logo } from '../display/logo/logo';
import { AuthButton } from '../auth/AuthButton';
import Link from 'next/link';
import navbar from './navbar.module.css';

export const NavBar = (props) => {
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
      <Menu>
        <MenuButton>
          <Avatar name={currentUser?.name || 'Shawn Stringfield'} size="lg" src={currentUser?.avatar_url} />
        </MenuButton>
        <MenuList>
          <MenuItem>
            <AuthButton user={currentUser} />
          </MenuItem>
          <MenuItem as="a" href="/books">
            Books
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};
