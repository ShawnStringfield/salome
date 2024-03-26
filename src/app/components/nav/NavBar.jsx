'use client';

import { supabaseClient } from '@/src/app/lib/supabaseClient';
import { AuthButton } from '../../(features)/auth';
import { useState, useEffect } from 'react';
import { Container, Flex, Menu, MenuButton, MenuList, MenuItem, Avatar } from '@chakra-ui/react';
import { Logo } from '../display/logo/logo';

import Link from 'next/link';
import navbar from './navbar.module.css';

export const NavBar = () => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    supabaseClient.auth.onAuthStateChange((event, session) => {
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
    <Container py={5} centerContent={true} className={navbar.container}>
      <Flex w={'2xl'} justify="space-between">
        <Link href="/">
          <Logo />
        </Link>
        <Menu>
          <MenuButton>
            <Avatar name={currentUser?.name} size="lg" src={currentUser?.avatar_url} />
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
    </Container>
  );
};
