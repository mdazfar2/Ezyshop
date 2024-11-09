import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the route is /admin/auth and skip it
  if (pathname.startsWith('/admin/auth')) {
    return NextResponse.next();
  }

  // Check if the pathname starts with /admin/ followed by an adminId
  const isAdminRoute = pathname.startsWith('/admin/');

  if (isAdminRoute) {
    // Get the token from the request
    const token = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET,
    });
    // Redirect to home if the token doesn't exist, the role is not 'admin', or the AdminId is missing
    if (!token|| token.role !== 'admin' || !token.uid) {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  // Continue to the page if the user is authorized
  return NextResponse.next();
}

// Specify the paths where this middleware applies
export const config = {
  matcher: ['/admin/:adminId*'],
};