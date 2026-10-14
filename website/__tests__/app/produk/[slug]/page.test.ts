import { describe, expect, it } from 'vitest'
import { generateMetadata, generateStaticParams } from '@/app/produk/[slug]/page'
import { products } from '@/data/products'

describe('product detail routes', () => {
  it('generates one static route per product', async () => {
    const routes = await generateStaticParams()
    expect(routes).toHaveLength(12)
    expect(routes.map((r) => r.slug).sort()).toEqual(products.map((p) => p.slug).sort())
  })

  it('generates metadata with the product name and description', async () => {
    const metadata = await generateMetadata({
      params: Promise.resolve({ slug: products[0].slug }),
    })
    expect(String(metadata.title)).toContain(products[0].name.id)
    expect(metadata.description).toBe(products[0].description.id)
  })
})
