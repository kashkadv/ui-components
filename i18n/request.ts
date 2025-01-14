import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale

  if (!locale || !routing.locales.includes(locale as any)) locale = routing.defaultLocale

  const response = await fetch('http://localhost:3000/api/test-json')
  const messages = await response.json()

  return {
    locale,
    messages
  };
});


