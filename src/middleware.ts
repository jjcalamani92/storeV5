// middleware.ts
import { NextFetchEvent, NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt';

// This function can be marked `async` if using `await` inside
export async function middleware(req: NextRequest, res: NextResponse, event: NextFetchEvent) {
  const session = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });
  console.log('session', session);

  
  return NextResponse.redirect(new URL('/auth/login', req.url))
}



// See "Matching Paths" below to learn more
export const config = {
  matcher: '/dashboard/:path*',
}