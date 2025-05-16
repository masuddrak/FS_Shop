import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  // Step 1: Get CSRF Cookie first
//   await fetch('http://localhost:8000/sanctum/csrf-cookie', {
//     credentials: 'include',
//     headers: {
//       Cookie: request.headers.get('cookie') || '',
//     },
//   });

//   // Step 2: Call user check
//   const res = await fetch('http://localhost:8000/api/user', {
//     credentials: 'include',
//     headers: {
//       Cookie: request.headers.get('cookie') || '',
//     },
//   });
// console.log('res', res.status);
//   if (res.status !== 200) {
//     return NextResponse.redirect(new URL('/login', request.url));
//   }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
};

