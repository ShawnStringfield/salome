import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';

export async function middleware(req) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  const {
    data: { user, error },
  } = await supabase.auth.getUser();

  if (user) {
    console.log('YOU ARE AUTHENTICATED');
  }

  if (!user) {
    console.log('YOU ARE NOT AUTHENTICATED');
  }

  if (!user && req.nextUrl.pathname !== '/resume') {
    console.log('redirecting to /resume');
    return NextResponse.redirect(new URL('/resume', req.url));
  }

  if (error) {
    console.log('middleware error', error);
  }

  return res;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
