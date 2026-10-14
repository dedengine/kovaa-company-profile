'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PiArrowRight } from 'react-icons/pi'
import { useI18n } from '@/lib/i18n-provider'
import { useHeroParallax, useHoverLift } from '@/lib/gsap-animations'

export function Hero() {
  const { t } = useI18n()
  const scope = useRef<HTMLElement>(null)
  const ctaPrimary = useRef<HTMLAnchorElement>(null)
  const ctaSecondary = useRef<HTMLAnchorElement>(null)
  useHeroParallax(scope)
  const hover = useHoverLift()

  return (
    <section ref={scope} id="top" className="mx-auto max-w-page px-4 pb-16 pt-10 md:pt-16">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <p className="mb-3 inline-block rounded-full bg-kovaa-orange/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-kovaa-orange">
            Create • Build • Deliver
          </p>
          <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-kovaa-blue md:text-5xl lg:text-6xl">
            {t('hero.title')}
          </h1>
          <p className="mt-5 max-w-prose text-lg text-neutral-700">{t('hero.subtitle')}</p>
          <div className="mt-8 flex flex-wrap gap-3">
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
              className="inline-flex cursor-pointer items-center rounded-full border-2 border-kovaa-blue px-7 py-3.5 text-sm font-semibold tracking-wide text-kovaa-blue transition-colors hover:bg-kovaa-blue hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kovaa-blue"
            >
              {t('hero.ctaContact')}
            </Link>
          </div>
        </div>

        <div
          data-parallax
          className="relative aspect-4/3 overflow-hidden rounded-3xl bg-neutral-100 shadow-2xl ring-1 ring-black/5"
        >
          <Image
            src="/assets/hero-banner.jpg"
            alt={t('hero.imageAlt')}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}
