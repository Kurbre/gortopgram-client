import { type NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
	// x-pathname передаём в layout через headers
	const pathname = request.nextUrl.pathname
	request.headers.set('x-pathname', pathname)
	return NextResponse.next({
		request: {
			headers: request.headers
		}
	})
}
