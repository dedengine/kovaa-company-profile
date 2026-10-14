'use client'

import { useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import { categories, type CategoryId } from '@/data/categories'
import { products } from '@/data/products'
import { useI18n } from '@/lib/i18n-provider'
import { useGridStagger, useHoverLift } from '@/lib/gsap-animations'
import { Lightbox } from './lightbox'

export function Products() {
  const { t, lang } = useI18n()
  const [active, setActive] = useState<CategoryId | 'all'>('all')
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const triggerRef = useRef<HTMLButtonElement | null>(null)
  const grid = useRef<HTMLUListElement>(null)
  useGridStagger(grid, 0.04)
  const hover = useHoverLift()

  const visible = useMemo(
    () => (active === 'all' ? products : products.filter((p) => p.category === active)),
    [active],
  )

  function closeLightbox() {
    setOpenIndex(null)
    triggerRef.current?.focus()
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

      <ul ref={grid} className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {visible.map((p) => (
          <li key={p.id} data-stagger>
            <button
              type="button"
              data-testid="product-card"
              aria-label={p.name[lang]}
              onMouseEnter={(e) => hover.lift(e.currentTarget)}
              onMouseLeave={(e) => hover.drop(e.currentTarget)}
              onClick={(e) => {
                triggerRef.current = e.currentTarget
                setOpenIndex(visible.indexOf(p))
              }}
              className="group block w-full cursor-pointer overflow-hidden rounded-2xl border border-neutral-200 bg-white text-left transition-[box-shadow] hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kovaa-blue"
            >
              <span className="relative block aspect-square bg-neutral-100">
                <Image
                  src={p.image}
                  alt={p.alt[lang]}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:transform-none"
                />
              </span>
              <span className="block border-t border-neutral-200 p-4">
                <h3 className="font-heading text-sm font-semibold text-neutral-900">
                  {p.name[lang]}
                </h3>
                <p className="mt-1 text-xs text-neutral-600">{p.description[lang]}</p>
              </span>
            </button>
          </li>
        ))}
      </ul>

      {openIndex !== null && (
        <Lightbox items={visible} index={openIndex} onClose={closeLightbox} />
      )}
    </section>
  )
}
