'use client';

import { supabase } from '@/src/app/supabase';
import Link from 'next/link';
import { Logo } from '../logo/logo';
import { Avatar } from '@nextui-org/react';
import { AuthButton } from '../auth/AuthButton';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react';
import { useState, useEffect } from 'react';

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
    <>
      <Navbar height="125px" maxWidth="full" className="mb-20">
        <NavbarBrand>
          <Logo classes="mt-10 mb-10" />
        </NavbarBrand>
        <NavbarContent justify="end">
          <NavbarItem>
            <Link href="/books/newbook">
              <div>Add Book</div>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <AuthButton user={currentUser} />
          </NavbarItem>
          <NavbarItem>{currentUser ? <Avatar src={currentUser.avatar_url} size="lg" /> : <></>}</NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  );
};
