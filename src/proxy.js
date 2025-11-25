import { NextResponse } from 'next/server';
import { useContext } from 'react';
import { AuthContext } from './app/context/AuthContext';

export function proxy() {
  const { user, loading } = useContext(AuthContext);

  return NextResponse.redirect(new URL('/home', request.url));
}

export const config = {
  matcher: '/about/:path*',
};
