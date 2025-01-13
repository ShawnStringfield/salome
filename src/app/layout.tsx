import React from 'react';
import { Navigation } from './components/nav/Navigation';
import { Footer } from './components/Footer';

import './globals.css';

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <title>Shawn Stringfield | Frontend Engineer</title>
        <link rel='icon' href='apple-touch-icon.ico' />
      </head>
      <body>
        <Navigation useDesktopMenuOnMobile={true} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
