import React from 'react';
import { Comfortaa } from 'next/font/google';

const comfortaa = Comfortaa({ subsets: ['latin'] });

export const Logo = ({ classes }) => {
  return (
    <div className={`${classes} ${comfortaa.className} logo`}>
      <div className="">
        <div>Shawn</div>
        <div>Stringfield</div>
      </div>
      <div className="">Software Engineer</div>
    </div>
  );
};
