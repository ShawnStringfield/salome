import { Providers } from './providers';
import './theme/vars.css';

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Shawn Stringfield | Frontend Engineer</title>
        <link rel="icon" href="apple-touch-icon.ico" />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
