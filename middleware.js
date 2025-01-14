import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default async function middleware(request) {
  const { geo, nextUrl } = request

  const response = createMiddleware(routing)
  request.headers.set('scenario', 'local')

  return response(request)
}
 
export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*|favicon.ico).*)']
};