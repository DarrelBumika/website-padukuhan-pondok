import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export default function proxy(request: NextRequest) {
    return NextResponse.redirect(new URL('/beranda', request.url))
}

export const config = {
    matcher: [
        // '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
        "/"
    ],
}