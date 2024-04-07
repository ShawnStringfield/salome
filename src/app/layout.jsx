import { Providers } from './providers';
import './theme/vars.css';

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
