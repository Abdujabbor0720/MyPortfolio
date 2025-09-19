import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/site'

export default function robots(): MetadataRoute.Robots {
  const base = SITE.url.replace(/\/$/, '')
  return { rules: { userAgent: '*', allow: '/' }, sitemap: `${base}/sitemap.xml` }
}
