/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  images: {
    domains: ['gushka.ua', 'cdn.sanity.io', 'gushka.1b.app'],
  }
};

export default withNextIntl(nextConfig);