import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default async function middleware(request) {
  const { geo, headers } = request

  const response = createMiddleware(routing)
  const host = headers.get('host')

  const scenario = host.startsWith('world.') ? 'world' : 'local'
  headers.set('scenario', scenario)

  return response(request)
}
 
export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*|favicon.ico).*)']
};