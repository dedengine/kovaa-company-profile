import type { MetadataRoute } from 'next'
import { contact } from '@/data/contact'
import { products } from '@/data/products'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: contact.siteUrl,
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...products.map(
      (p): MetadataRoute.Sitemap[number] => ({
        url: `${contact.siteUrl}/produk/${p.slug}`,
        changeFrequency: 'monthly',
        priority: 0.8,
      }),
    ),
  ]
}
