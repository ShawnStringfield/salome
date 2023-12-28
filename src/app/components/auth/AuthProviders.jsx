'use client';

import React from 'react';
import { SessionProvider } from 'next-auth/react';

export const AuthProviders = ({ children }) => <SessionProvider>{children}</SessionProvider>;
