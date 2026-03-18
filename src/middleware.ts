import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || ''

  // Redirect www to apex
  if (host.startsWith('www.')) {
    const apex = host.replace('www.', '')
    const path = request.nextUrl.pathname + request.nextUrl.search
    return NextResponse.redirect(`https://${apex}${path}`, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/:path*',
}
