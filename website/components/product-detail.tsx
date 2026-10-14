'use client'

import Image from 'next/image'
import Link from 'next/link'
import { PiArrowLeft, PiWhatsappLogo } from 'react-icons/pi'
import { categories } from '@/data/categories'
import type { Product } from '@/data/products'
import { contact } from '@/data/contact'
import { useI18n } from '@/lib/i18n-provider'

export function ProductDetail({ product }: { product: Product }) {
  const { t, lang } = useI18n()
  const categoryLabel =
    categories.find((c) => c.id === product.category)?.label[lang] ?? ''
  const waText = encodeURIComponent(
    t('detail.waMessage').replace('{product}', product.name[lang]),
  )

  return (
    <div className="mx-auto max-w-page px-4 py-10 md:py-14">
      <nav aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
          <li>
            <Link href="/" className="hover:text-kovaa-blue dark:hover:text-blue-300">
              {t('detail.home')}
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/#produk" className="hover:text-kovaa-blue dark:hover:text-blue-300">
              {t('detail.productsCrumb')}
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-neutral-900 dark:text-white">
            {product.name[lang]}
          </li>
        </ol>
      </nav>

      <div className="mt-8 grid gap-10 md:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-2xl bg-neutral-100 shadow-sm dark:bg-neutral-800">
          <Image
            src={product.image}
            alt={product.alt[lang]}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>

        <div>
          <p className="inline-block rounded-full bg-kovaa-blue/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-kovaa-blue dark:bg-blue-500/15 dark:text-blue-300">
            {categoryLabel}
          </p>
          <h1 className="mt-3 font-heading text-3xl font-bold tracking-tight text-neutral-900 dark:text-white md:text-4xl">
            {product.name[lang]}
          </h1>
          <p className="mt-4 text-neutral-700 dark:text-neutral-300">{product.description[lang]}</p>

          <h2 className="mt-8 font-heading text-xl font-bold text-neutral-900 dark:text-white">
            {t('detail.specsTitle')}
          </h2>
          <table className="mt-3 w-full overflow-hidden rounded-xl border border-neutral-200 text-sm dark:border-neutral-800">
            <tbody>
              {product.specs.map((spec) => (
                <tr key={spec.label[lang]} className="border-b border-neutral-200 last:border-0 dark:border-neutral-800">
                  <th
                    scope="row"
                    className="w-2/5 bg-neutral-50 px-4 py-3 text-left font-medium text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
                  >
                    {spec.label[lang]}
                  </th>
                  <td className="px-4 py-3 text-neutral-900 dark:text-neutral-100">{spec.value[lang]}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-8 flex items-center gap-3">
            <a
              href={`https://wa.me/${contact.whatsapp.replace(/\D/g, '')}?text=${waText}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t('detail.askViaWa')}
              title={t('detail.askViaWa')}
              className="inline-flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-kovaa-orange text-white shadow-lg transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kovaa-orange motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              <PiWhatsappLogo size={22} />
            </a>
            <Link
              href="/#produk"
              aria-label={t('detail.back')}
              title={t('detail.back')}
              className="inline-flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-neutral-300 text-neutral-800 transition-colors hover:border-kovaa-blue hover:text-kovaa-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kovaa-blue dark:border-neutral-600 dark:text-neutral-100 dark:hover:border-blue-300 dark:hover:text-blue-300"
            >
              <PiArrowLeft size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
