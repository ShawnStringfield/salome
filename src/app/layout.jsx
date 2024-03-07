import { Providers } from './providers';
import { Inter } from 'next/font/google';
import { NavBar } from './components/nav/NavBar';

import './styles/vars.css';

const inter = Inter({ subsets: ['latin'] });

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Providers>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
