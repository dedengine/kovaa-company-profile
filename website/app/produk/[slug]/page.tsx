import { Suspense } from 'react'
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
    // Judul polos: template layout "%s | KOVAA" yang menambahkan akhiran
    title: product.name.id,
    description: product.description.id,
    openGraph: {
      title: `${product.name.id} | KOVAA`,
      description: product.description.id,
      images: [product.image],
      url: `${contact.siteUrl}/produk/${product.slug}`,
    },
  }
}

async function ProductLoader({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)
  if (!product) notFound()
  return <ProductDetail product={product} />
}

function ProductSkeleton() {
  return (
    <div className="mx-auto max-w-page animate-pulse px-4 py-10 md:py-14" aria-hidden="true">
      <div className="h-4 w-64 rounded bg-neutral-200" />
      <div className="mt-8 grid gap-10 md:grid-cols-2">
        <div className="aspect-square rounded-2xl bg-neutral-200" />
        <div className="space-y-4">
          <div className="h-6 w-40 rounded bg-neutral-200" />
          <div className="h-10 w-3/4 rounded bg-neutral-200" />
          <div className="h-4 w-full rounded bg-neutral-200" />
          <div className="h-4 w-5/6 rounded bg-neutral-200" />
        </div>
      </div>
    </div>
  )
}

export default function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  return (
    <Suspense fallback={<ProductSkeleton />}>
      <ProductLoader params={params} />
    </Suspense>
  )
}
