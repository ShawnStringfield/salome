import { Inter } from 'next/font/google';
import { NavBar } from './components/nav/NavBar';

const inter = Inter({ subsets: ['latin'] });

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
