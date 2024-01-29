import createMiddleware from 'next-intl/middleware';
import { localePrefix } from '../navigation';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'fr'],
  localePrefix,
  // Used when no locale matches
  defaultLocale: 'en'
});

export const config = {
  // only applies this middleware to files in the app directory
  matcher: ['/((?!api|_next|.*\\..*).*)']
};