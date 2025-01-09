import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the request is for an icon in a dynamic route
  if (
    pathname.includes('/case-studies/') &&
    (pathname.endsWith('.ico') ||
      pathname.endsWith('.png') ||
      pathname.includes('favicon') ||
      pathname.includes('apple-touch-icon'))
  ) {
    // Redirect icon requests to the root
    const newUrl = new URL('/', request.url);
    return NextResponse.rewrite(newUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/case-studies/:path*'],
};
