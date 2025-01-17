import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['uk', 'en', 'ar'],
  defaultLocale: 'uk',
  localePrefix: 'as-needed',
  localeDetection: false,
  domains: [
    {
      domain: process.env.HOST,
      defaultLocale: 'uk',
      locales: ['uk'],
    },
    {
      domain: `world.${process.env.HOST}`,
      defaultLocale: 'en',
      locales: ['en', 'ar']
    }
  ],
});