// middleware.ts
import { NextFetchEvent, NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { withAuth } from "next-auth/middleware"
import {jwtVerify} from 'jose'

// This function can be marked `async` if using `await` inside
export async function middleware(req: NextRequest) {
  const jwt = req.cookies.get('myToken')
  if (!jwt) return NextResponse.redirect(new URL("/auth/login", req.url));
  // if (req.nextUrl.pathname.includes('/dashboard')) {
    
  //   if (jwt === undefined) {
  //     return NextResponse.redirect(new URL('/auth/login', req.url))
  //   }
  // } 
  try {
    
    const { payload } = await jwtVerify(jwt, new TextEncoder().encode('secret') )
    console.log(payload);
    
    return NextResponse.next()

    
  } catch (error) {
    console.log(error);
    return NextResponse.redirect(new URL('/auth/login', req.url))
    
  }
  
}


// // More on how NextAuth.js middleware works: https://next-auth.js.org/configuration/nextjs#middleware
// export default withAuth({
//   callbacks: {
//     async authorized({ req, token }) {
//       console.log(req, token);
      
//       // const tokens = await getToken({ req })
//       // console.log('holitas', tokens);
//       // const session = await getSession(req)
//       // console.log('session', session);
//       // `/admin` requires admin role
//       if (req.nextUrl.pathname === "/admin") {
//         return token?.user === "ADMIN_ROLE"
//       }
      
//       // `/me` only requires the user to be logged in
//       return !!token
//     },
//   },
// })

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/dashboard/:path*',
}