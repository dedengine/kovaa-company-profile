'use client'

import { useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PiArrowRight, PiCaretLeft, PiCaretRight } from 'react-icons/pi'
import { categories, type CategoryId } from '@/data/categories'
import { products } from '@/data/products'
import { useI18n } from '@/lib/i18n-provider'
import { useGridStagger, useHoverLift } from '@/lib/gsap-animations'

export function Products() {
  const { t, lang } = useI18n()
  const [active, setActive] = useState<CategoryId | 'all'>('all')
  const rowRef = useRef<HTMLDivElement>(null)
  useGridStagger(rowRef, 0.04)
  const hover = useHoverLift()

  const visible = useMemo(
    () => (active === 'all' ? products : products.filter((p) => p.category === active)),
    [active],
  )

  function scrollRow(dir: 1 | -1) {
    const row = rowRef.current
    if (!row) return
    const card = row.querySelector<HTMLElement>('[data-testid="product-card"]')
    const step = card ? card.offsetWidth + 24 : 320
    row.scrollLeft += dir * step
  }

  return (
    <section id="produk" className="mx-auto max-w-page px-4 py-16">
      <div data-reveal className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-kovaa-orange">
          {t('products.eyebrow')}
        </p>
        <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
          {t('products.title')}
        </h2>
        <p className="mt-4 text-neutral-700">{t('products.subtitle')}</p>
      </div>

      <div
        role="group"
        aria-label={t('products.title')}
        className="mt-8 flex flex-wrap justify-center gap-2"
      >
        <button
          type="button"
          aria-pressed={active === 'all'}
          onClick={() => setActive('all')}
          className="cursor-pointer rounded-full border border-neutral-300 px-4 py-1.5 text-sm font-medium transition-colors hover:border-kovaa-blue hover:text-kovaa-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kovaa-blue aria-pressed:border-kovaa-blue aria-pressed:bg-kovaa-blue aria-pressed:text-white"
        >
          {t('products.filterAll')}
        </button>
        {categories.map((c) => (
          <button
            key={c.id}
            type="button"
            aria-pressed={active === c.id}
            onClick={() => setActive(c.id)}
            className="cursor-pointer rounded-full border border-neutral-300 px-4 py-1.5 text-sm font-medium transition-colors hover:border-kovaa-blue hover:text-kovaa-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kovaa-blue aria-pressed:border-kovaa-blue aria-pressed:bg-kovaa-blue aria-pressed:text-white"
          >
            {c.label[lang]}
          </button>
        ))}
      </div>

      <div className="relative mt-8">
        <button
          type="button"
          aria-label={t('products.scrollPrev')}
          onClick={() => scrollRow(-1)}
          className="absolute -left-1 top-1/3 z-10 cursor-pointer rounded-full border border-neutral-200 bg-white p-2 text-neutral-700 shadow-md transition-colors hover:border-kovaa-blue hover:text-kovaa-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kovaa-blue md:p-2.5"
        >
          <PiCaretLeft size={22} />
        </button>

        <div
          ref={rowRef}
          data-testid="product-row"
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2 motion-reduce:scroll-auto"
        >
          {visible.map((p) => (
            <Link
              key={p.id}
              href={`/produk/${p.slug}`}
              data-testid="product-card"
              aria-label={p.name[lang]}
              data-stagger
              onMouseEnter={(e) => hover.lift(e.currentTarget)}
              onMouseLeave={(e) => hover.drop(e.currentTarget)}
              className="group block w-full shrink-0 snap-center overflow-hidden rounded-2xl border border-neutral-200 bg-white text-left transition-[box-shadow] hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kovaa-blue sm:w-80 sm:snap-start"
            >
              <span className="relative block aspect-square bg-neutral-100">
                <Image
                  src={p.image}
                  alt={p.alt[lang]}
                  fill
                  sizes="(max-width: 640px) 72vw, 320px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:transform-none"
                />
              </span>
              <span className="block border-t border-neutral-200 p-4">
                <h3 className="font-heading text-sm font-semibold text-neutral-900">
                  {p.name[lang]}
                </h3>
                <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-kovaa-blue">
                  {t('products.viewDetail')}
                  <PiArrowRight size={14} />
                </span>
              </span>
            </Link>
          ))}
        </div>

        <button
          type="button"
          aria-label={t('products.scrollNext')}
          onClick={() => scrollRow(1)}
          className="absolute -right-1 top-1/3 z-10 cursor-pointer rounded-full border border-neutral-200 bg-white p-2 text-neutral-700 shadow-md transition-colors hover:border-kovaa-blue hover:text-kovaa-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kovaa-blue md:p-2.5"
        >
          <PiCaretRight size={22} />
        </button>
      </div>
    </section>
  )
}
