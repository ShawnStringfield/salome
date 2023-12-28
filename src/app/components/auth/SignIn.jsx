'use client';

import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';

export const SignIn = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }

  return (
    <>
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
};
