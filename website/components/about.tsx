'use client'

import { useRef } from 'react'
import { useI18n } from '@/lib/i18n-provider'
import { useScrollReveal } from '@/lib/gsap-animations'

export function About() {
  const { t } = useI18n()
  const scope = useRef<HTMLElement>(null)
  useScrollReveal(scope)

  return (
    <section ref={scope} id="tentang" className="mx-auto max-w-page px-4 py-16">
      <h2 data-reveal className="font-heading text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
        {t('about.title')}
      </h2>
      <div data-reveal className="mt-6 max-w-3xl space-y-4 text-lg text-neutral-700">
        <p>{t('about.body1')}</p>
        <p>{t('about.body2')}</p>
      </div>
    </section>
  )
}
