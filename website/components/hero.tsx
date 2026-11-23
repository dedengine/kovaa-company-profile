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
      {/* Gambar hero full-width dari kiri ke kanan (statis) */}
      <div className="absolute inset-0">
        <Image
          src="/assets/hero-banner.jpg"
          alt={t('hero.imageAlt')}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>

      {/* Fade agar teks terbaca jelas; foto lebih samar */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-white via-white to-white/30 dark:from-neutral-950 dark:via-neutral-950 dark:to-neutral-950/30 md:bg-gradient-to-r md:from-white md:via-white/85 md:to-transparent md:dark:from-neutral-950 md:dark:via-neutral-950/85 md:dark:to-transparent"
      />

      <div
        ref={content}
        className="relative mx-auto max-w-page px-4 pb-16 pt-8 md:py-32 lg:py-40"
      >
        <p
          data-reveal
          className="inline-block rounded-full bg-kovaa-orange/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-kovaa-orange dark:text-orange-300"
        >
            {t('hero.badge')}
        </p>
        <h1
          data-reveal
          className="mt-4 font-heading text-4xl font-bold leading-tight tracking-tight text-kovaa-blue dark:text-white md:text-5xl lg:text-6xl"
        >
            {t('hero.title')}
        </h1>
        <p data-reveal className="mt-5 max-w-prose text-lg text-neutral-700 dark:text-neutral-300">
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
              className="inline-flex cursor-pointer items-center rounded-full border-2 border-kovaa-blue bg-white/80 px-7 py-3.5 text-sm font-semibold tracking-wide text-kovaa-blue backdrop-blur transition-colors hover:bg-kovaa-blue hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kovaa-blue dark:border-neutral-400 dark:bg-transparent dark:text-white dark:hover:border-white dark:hover:bg-white dark:hover:text-neutral-950"
            >
            {t('hero.ctaContact')}
          </Link>
        </div>
      </div>
    </section>
  )
}
