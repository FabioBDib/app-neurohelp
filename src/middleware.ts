import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Rotas públicas que não precisam de autenticação
  const publicRoutes = ['/', '/login']
  
  // Se a rota é pública, permite acesso
  if (publicRoutes.includes(pathname)) {
    return NextResponse.next()
  }

  // Para rotas protegidas, verifica se tem token de autenticação
  const token = request.cookies.get('sb-access-token')
  
  if (!token && pathname.startsWith('/dashboard')) {
    // Redireciona para login se não estiver autenticado
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
