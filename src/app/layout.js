import { NextUIProviders } from './NextUIProviders';
import { AuthProviders } from './components/auth/AuthProviders';
import { Inter } from 'next/font/google';
import { Header } from './components/header/header';
import { NavBar } from './components/nav/NavBar';
import { getServerSession } from 'next-auth';

import './globals.css';
const inter = Inter({ subsets: ['latin'] });

export default async function RootLayout({ children }) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={`${inter.className} container w-full max-w-3xl p-10 text-slate-600 `}>
        <NextUIProviders>
          <AuthProviders session={session}>
            <Header />
            <NavBar />
            {children}
          </AuthProviders>
        </NextUIProviders>
      </body>
    </html>
  );
}
