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
  const imageWrap = useRef<HTMLDivElement>(null)
  const ctaPrimary = useRef<HTMLAnchorElement>(null)
  const ctaSecondary = useRef<HTMLAnchorElement>(null)
  useHeroParallax(scope)
  const hover = useHoverLift()

  return (
    <section ref={scope} id="top" className="mx-auto max-w-page px-4 pb-16 pt-12 md:pt-20">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <h1 className="font-heading text-4xl font-bold tracking-tight text-kovaa-blue md:text-6xl">
            {t('hero.title')}
          </h1>
          <p className="mt-5 max-w-prose text-lg text-neutral-700">{t('hero.subtitle')}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              ref={ctaPrimary}
              href="#produk"
              onMouseEnter={() => hover.lift(ctaPrimary.current)}
              onMouseLeave={() => hover.drop(ctaPrimary.current)}
              className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-kovaa-orange px-6 py-3 text-sm font-semibold text-white transition-[box-shadow] hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kovaa-orange"
            >
              {t('hero.ctaProducts')}
              <PiArrowRight size={18} />
            </Link>
            <Link
              ref={ctaSecondary}
              href="#kontak"
              onMouseEnter={() => hover.lift(ctaSecondary.current)}
              onMouseLeave={() => hover.drop(ctaSecondary.current)}
              className="inline-flex cursor-pointer items-center rounded-full border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-800 transition-colors hover:border-kovaa-blue hover:text-kovaa-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kovaa-blue"
            >
              {t('hero.ctaContact')}
            </Link>
          </div>
        </div>

        <div
          ref={imageWrap}
          data-parallax
          className="relative aspect-4/3 overflow-hidden rounded-2xl bg-neutral-100"
        >
          <Image
            src="/assets/mockup-1.jpeg"
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
