import type { MetadataRoute } from 'next'
import { contact } from '@/data/contact'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: contact.siteUrl,
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
