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
      <div data-reveal className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-kovaa-orange dark:text-orange-300">
          {t('process.eyebrow')}
        </p>
        <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-neutral-900 dark:text-white md:text-4xl">
          {t('process.title')}
        </h2>
      </div>

      <ol data-reveal className="mt-10 grid gap-6 md:grid-cols-3">
        {steps.map((step, i) => (
          <li
            key={step.title}
            className="rounded-2xl border border-neutral-200 bg-white p-7 shadow-sm dark:border-neutral-800 dark:bg-neutral-900"
          >
            <span className="font-heading text-4xl font-bold text-kovaa-orange dark:text-orange-300">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-3 font-heading text-lg font-semibold text-neutral-900 dark:text-white">
              {step.title}
            </h3>
            <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">{step.desc}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
