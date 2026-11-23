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
        <div data-reveal className="mx-auto w-full max-w-md">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg dark:shadow-none dark:ring-1 dark:ring-neutral-800">
            <Image
              src="/assets/foto-team.jpg"
              alt={t('about.imageAlt')}
              fill
              sizes="(max-width: 768px) 100vw, 448px"
              className="object-cover"
            />
          </div>
        </div>

        <div data-reveal>
          <p className="text-xs font-semibold uppercase tracking-widest text-kovaa-orange dark:text-orange-300">
            {t('about.eyebrow')}
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-neutral-900 dark:text-white md:text-4xl">
            {t('about.title')}
          </h2>
          <div className="mt-6 space-y-4 text-lg text-neutral-700 dark:text-neutral-300">
            <p>{t('about.body1')}</p>
            <p>{t('about.body2')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
