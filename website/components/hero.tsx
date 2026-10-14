'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PiArrowRight } from 'react-icons/pi'
import { useI18n } from '@/lib/i18n-provider'
import { useHoverLift, useScrollReveal } from '@/lib/gsap-animations'

export function Hero() {
  const { t } = useI18n()
  const content = useRef<HTMLDivElement>(null)
  const ctaPrimary = useRef<HTMLAnchorElement>(null)
  const ctaSecondary = useRef<HTMLAnchorElement>(null)
  useScrollReveal(content)
  const hover = useHoverLift()

  return (
    <section id="top" className="relative overflow-hidden">
      {/* Gambar hero full-width dari kiri ke kanan (desktop saja) */}
      <div className="absolute inset-0 hidden md:block">
        <Image
          src="/assets/hero-banner.jpg"
          alt={t('hero.imageAlt')}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>

      {/* Fade putih di kiri agar teks terbaca jelas (desktop saja) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden bg-gradient-to-r from-white via-white/85 to-transparent md:block"
      />

      <div
        ref={content}
        className="relative mx-auto max-w-page px-4 py-24 md:py-32 lg:py-40"
      >
        <p
          data-reveal
          className="inline-block rounded-full bg-kovaa-orange/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-kovaa-orange"
        >
          Create • Build • Deliver
        </p>
        <h1
          data-reveal
          className="mt-4 font-heading text-4xl font-bold leading-tight tracking-tight text-kovaa-blue md:text-5xl lg:text-6xl"
        >
          {t('hero.title')}
        </h1>
        <p data-reveal className="mt-5 max-w-prose text-lg text-neutral-700">
          {t('hero.subtitle')}
        </p>
        <div data-reveal className="mt-8 flex flex-wrap gap-3">
          <Link
            ref={ctaPrimary}
            href="#produk"
            onMouseEnter={() => hover.lift(ctaPrimary.current)}
            onMouseLeave={() => hover.drop(ctaPrimary.current)}
            className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-kovaa-blue px-7 py-3.5 text-sm font-semibold tracking-wide text-white shadow-lg transition-[box-shadow] hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kovaa-blue"
          >
            {t('hero.ctaProducts')}
            <PiArrowRight size={18} />
          </Link>
          <Link
            ref={ctaSecondary}
            href="#kontak"
            onMouseEnter={() => hover.lift(ctaSecondary.current)}
            onMouseLeave={() => hover.drop(ctaSecondary.current)}
            className="inline-flex cursor-pointer items-center rounded-full border-2 border-kovaa-blue bg-white/80 px-7 py-3.5 text-sm font-semibold tracking-wide text-kovaa-blue backdrop-blur transition-colors hover:bg-kovaa-blue hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kovaa-blue"
          >
            {t('hero.ctaContact')}
            </Link>
          </div>

          {/* Foto hero sebagai kartu terpisah di bawah teks (mobile saja) */}
          <div className="relative mt-10 aspect-4/3 overflow-hidden rounded-3xl bg-neutral-100 shadow-xl md:hidden">
            <Image
              src="/assets/hero-banner.jpg"
              alt={t('hero.imageAlt')}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
    </section>
  )
}
