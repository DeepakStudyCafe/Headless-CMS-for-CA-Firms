import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const WEBSITE_SLUG = 'patel-consulting'

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (
    pathname === '/site-offline' ||
    pathname === '/admin-locked' ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api')
  ) {
    return NextResponse.next()
  }

  const apiUrl = process.env.NEXT_PUBLIC_API_URL
  if (!apiUrl) return NextResponse.next()

  try {
    const res = await fetch(`${apiUrl}/public/website-status/${WEBSITE_SLUG}`, {
      cache: 'no-store',
    })
    if (res.ok) {
      const body = await res.json()
      const { isActive, isAdminEnabled } = body?.data || {}

      if (isActive === false) {
        return NextResponse.rewrite(new URL('/site-offline', request.url))
      }

      if (isAdminEnabled === false && pathname.startsWith('/admin')) {
        return NextResponse.rewrite(new URL('/admin-locked', request.url))
      }
    }
  } catch {
    // Backend unreachable — allow request through
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\..*$).*)'],
}
