'use client';

import React from 'react';
import { Comfortaa } from 'next/font/google';
import logo from './logo.module.css';

const comfortaa = Comfortaa({ subsets: ['latin'] });

export const Logo = () => {
  return (
    <div
      className={`
        ${comfortaa.className}
      `}
    >
      <div className={logo.logoname}>
        <div>Shawn</div>
        <div>Stringfield</div>
      </div>
      <div className={logo.tagline}>Software Engineer</div>
    </div>
  );
};
