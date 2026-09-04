import type {MetadataRoute} from 'next';
import {siteConfig} from '@/config/site';

export default function robots():MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      ...(siteConfig.isDemo ? {disallow: '/'} : {allow: '/'}),
    },
    sitemap: siteConfig.isDemo ? undefined : 'https://bsfadvogados.com.br/sitemap.xml',
  };
}
