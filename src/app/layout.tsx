import React from 'react';
import { Providers } from './providers';

import './globals.css';
import './theme/vars.css';

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <title>Shawn Stringfield | Frontend Engineer</title>
        <link rel='icon' href='apple-touch-icon.ico' />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
