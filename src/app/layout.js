import { NextUIProviders } from './NextUIProviders';
import { Inter } from 'next/font/google';
import { NavBar } from './components/nav/NavBar';

import './globals.css';
const inter = Inter({ subsets: ['latin'] });

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} container w-full p-10 text-slate-600 `}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
