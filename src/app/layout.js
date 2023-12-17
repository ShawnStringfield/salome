import { Providers } from "./providers";
import { Inter } from "next/font/google";
import { Header } from "./components/header/header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Salome",
  description: "I come in peace",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-slate-600`}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
