import { Providers } from './providers';
import { Inter } from 'next/font/google';
import { NavBar } from './components/nav/NavBar';

import './theme/vars.css';

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
