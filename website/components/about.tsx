'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { useI18n } from '@/lib/i18n-provider'
import { useScrollReveal } from '@/lib/gsap-animations'

export function About() {
  const { t } = useI18n()
  const scope = useRef<HTMLElement>(null)
  useScrollReveal(scope)

  return (
    <section ref={scope} id="tentang" className="mx-auto max-w-page px-4 py-16">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div data-reveal className="relative">
          <div className="relative aspect-4/3 overflow-hidden rounded-3xl bg-neutral-100 shadow-xl">
            <Image
              src="/assets/mockup-1.jpeg"
              alt={t('about.imageAlt')}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-2 rounded-2xl bg-kovaa-blue px-6 py-4 text-white shadow-xl sm:-right-6">
            <p className="font-heading text-lg font-bold">Create • Build • Deliver</p>
            <p className="mt-0.5 text-xs text-white/80">{t('about.badge')}</p>
          </div>
        </div>

        <div data-reveal>
          <p className="text-xs font-semibold uppercase tracking-widest text-kovaa-orange">
            {t('about.eyebrow')}
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
            {t('about.title')}
          </h2>
          <div className="mt-6 space-y-4 text-lg text-neutral-700">
            <p>{t('about.body1')}</p>
            <p>{t('about.body2')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
