import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { requireAuth } from './lib/auth'

export async function middleware(request: NextRequest) {
  // Protect admin routes
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // Skip the login page
    if (request.nextUrl.pathname === '/admin/login') {
      return NextResponse.next()
    }
    
    const isAuthenticated = await requireAuth(request)
    
    if (!isAuthenticated) {
      const url = new URL('/admin/login', request.url)
      url.searchParams.set('from', request.nextUrl.pathname)
      return NextResponse.redirect(url)
    }
  }
  
  // Protect admin API routes
  if (request.nextUrl.pathname.startsWith('/api/admin') && 
      !request.nextUrl.pathname.startsWith('/api/admin/login')) {
    const isAuthenticated = await requireAuth(request)
    
    if (!isAuthenticated) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*'],
}
