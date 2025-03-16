import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['uk', 'en', 'ar'],
  defaultLocale: 'uk',
  localePrefix: 'never',
  localeDetection: false,
  domains: [
    {
      domain: process.env.SITE_DOMAIN,
      defaultLocale: 'uk',
      locales: ['uk'],
    },
    {
      domain: `world.${process.env.SITE_DOMAIN}`,
      defaultLocale: 'en',
      locales: ['en', 'ar']
    }
  ],
});