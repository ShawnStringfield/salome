import React from 'react';
import { Navigation } from './components/nav/Navigation';
import { Footer } from './components/Footer';

import './globals.css';

export const metadata = {
  title: 'Shawn Stringfield | Frontend Engineer',
  description: 'Frontend Engineer specializing in React and TypeScript',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <link rel='icon' href='apple-touch-icon.ico' />
      </head>
      <body className='no-transition'>
        <div className='no-transition'>
          <Navigation useDesktopMenuOnMobile={true} />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
