'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { PiCaretLeft, PiCaretRight, PiX } from 'react-icons/pi'
import type { Product } from '@/data/products'
import { useI18n } from '@/lib/i18n-provider'

export function Lightbox({
  items,
  index,
  onClose,
}: {
  items: Product[]
  index: number
  onClose: () => void
}) {
  const { t, lang } = useI18n()
  const [current, setCurrent] = useState(index)
  const dialogRef = useRef<HTMLDivElement>(null)
  const product = items[current]

  useEffect(() => {
    dialogRef.current?.focus()
  }, [])

  useGSAP(() => {
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: reduce)', () => {})
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.from(dialogRef.current, { opacity: 0, scale: 0.96, duration: 0.2, ease: 'power2.out' })
    })
  }, [])

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') setCurrent((c) => Math.min(c + 1, items.length - 1))
      if (e.key === 'ArrowLeft') setCurrent((c) => Math.max(c - 1, 0))
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [items.length, onClose])

  const counter = t('products.imageCounter')
    .replace('{current}', String(current + 1))
    .replace('{total}', String(items.length))

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={product.name[lang]}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl rounded-2xl bg-white p-4 outline-none"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-heading text-lg font-semibold text-neutral-900">
              {product.name[lang]}
            </h3>
            <p className="mt-1 text-sm text-neutral-700">{product.description[lang]}</p>
          </div>
          <button
            type="button"
            aria-label={t('products.close')}
            onClick={onClose}
            className="cursor-pointer rounded-md p-2 text-neutral-700 hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kovaa-blue"
          >
            <PiX size={20} />
          </button>
        </div>

        <div className="relative mt-3 aspect-4/3 w-full overflow-hidden rounded-xl bg-neutral-100">
          <Image
            src={product.image}
            alt={product.alt[lang]}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-contain"
          />
        </div>

        <div className="mt-3 flex items-center justify-between">
          <button
            type="button"
            aria-label={t('products.previous')}
            disabled={current === 0}
            onClick={() => setCurrent((c) => Math.max(c - 1, 0))}
            className="cursor-pointer rounded-md p-2 text-neutral-700 hover:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kovaa-blue"
          >
            <PiCaretLeft size={24} />
          </button>
          <span className="text-xs text-neutral-500">{counter}</span>
          <button
            type="button"
            aria-label={t('products.next')}
            disabled={current === items.length - 1}
            onClick={() => setCurrent((c) => Math.min(c + 1, items.length - 1))}
            className="cursor-pointer rounded-md p-2 text-neutral-700 hover:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kovaa-blue"
          >
            <PiCaretRight size={24} />
          </button>
        </div>
      </div>
    </div>
  )
}
