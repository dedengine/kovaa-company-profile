'use client'

import { useRef } from 'react'
import { useI18n } from '@/lib/i18n-provider'
import { dictionary } from '@/lib/i18n'
import { useScrollReveal } from '@/lib/gsap-animations'

export function Process() {
  const { t, lang } = useI18n()
  const scope = useRef<HTMLElement>(null)
  useScrollReveal(scope)
  const steps = dictionary[lang].process.steps

  return (
    <section ref={scope} id="proses" className="mx-auto max-w-page px-4 py-16">
      <h2 data-reveal className="font-heading text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
        {t('process.title')}
      </h2>
      <ol data-reveal className="mt-8 grid gap-6 md:grid-cols-3">
        {steps.map((step, i) => (
          <li key={step.title} className="rounded-2xl border border-neutral-200 p-6">
            <span className="font-heading text-4xl font-bold text-kovaa-orange">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-3 font-heading text-lg font-semibold text-neutral-900">
              {step.title}
            </h3>
            <p className="mt-2 text-sm text-neutral-700">{step.desc}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
