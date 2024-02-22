import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';

export async function middleware(req) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  const {
    data: { session, error },
  } = await supabase.auth.getSession();

  if (session) {
    console.log('YOU ARE AUTHENTICATED');
    // console.log('middleware session', session);
  }

  if (error) {
    console.log('middleware error', error);
  }

  return res;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
