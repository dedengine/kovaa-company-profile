import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { contact } from '@/data/contact'
import { products } from '@/data/products'
import { ProductDetail } from '@/components/product-detail'

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)
  if (!product) return { title: 'KOVAA' }
  return {
    title: `${product.name.id} | KOVAA`,
    description: product.description.id,
    openGraph: {
      title: `${product.name.id} | KOVAA`,
      description: product.description.id,
      images: [product.image],
      url: `${contact.siteUrl}/produk/${product.slug}`,
    },
  }
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)
  if (!product) notFound()
  return <ProductDetail product={product} />
}
