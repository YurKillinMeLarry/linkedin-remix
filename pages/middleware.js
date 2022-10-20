// middleware.ts
import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'

export async function middleware(req) {
  if (req.nextUrl.pathname === '/') {
    const session = await getToken({
      req,
      secret: process.env.JWT_SECRET,
      secureCookie: process.env.NODE_ENV === 'production'
    })
    // You also have the option to check for any properties on the session object like 'role ==='admin' or name === 'john doe' etc.
    if (!session) return NextResponse.redirect('/home')
    // If user is authenticated, continue
  }
}

// Checking if our user is on the pathname for our home route '/' then it's retrieving the session for the user by using getToken.
// getToken excepts 3 parameters; the request(req), the JWT secret and the secureCookie.
// Then we're checking if the session exists and if not then we'll redirect the user to the home page.
