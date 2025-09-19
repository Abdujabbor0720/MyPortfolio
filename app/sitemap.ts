import type { MetadataRoute } from 'next'
import { PROJECTS } from '@/data/projects'
import { SITE } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url.replace(/\/$/, '')
  const routes = [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/about`, lastModified: new Date() },
    { url: `${base}/contact`, lastModified: new Date() }
  ]
  const projectRoutes = PROJECTS.map(p => ({ url: `${base}/projects/${p.slug}`, lastModified: new Date() }))
  return [...routes, ...projectRoutes]
}
