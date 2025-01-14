import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['uk', 'en', 'ar'],
  defaultLocale: 'uk',
  localePrefix: 'as-needed',
  localeDetection: false,
  domains: [
    {
      domain: 'localhost:3000',
      defaultLocale: 'uk',
      locales: ['uk'],
    },
    {
      domain: 'world.localhost:3000',
      defaultLocale: 'en',
      locales: ['en', 'ar']
    }
  ],
});