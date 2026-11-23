'use client'

import { useRef } from 'react'
import { useI18n } from '@/lib/i18n-provider'
import { dictionary } from '@/lib/i18n'
import { useGridStagger, useScrollReveal } from '@/lib/gsap-animations'

export function Services() {
  const { t, lang } = useI18n()
  const scope = useRef<HTMLElement>(null)
  const grid = useRef<HTMLUListElement>(null)
  useScrollReveal(scope)
  useGridStagger(grid)
  const items = dictionary[lang].services.items

  return (
    <section ref={scope} id="layanan" className="mx-auto max-w-page px-4 py-16">
      <div data-reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-neutral-900 dark:text-white md:text-4xl">
          {t('services.title')}
        </h2>
        <p className="mt-4 text-neutral-700 dark:text-neutral-300">{t('services.subtitle')}</p>
      </div>

      <ul ref={grid} className="mt-10 grid gap-6 md:grid-cols-2">
        {items.map((item, i) => (
          <li
            key={item.title}
            data-stagger
            className="rounded-2xl border border-l-4 border-l-kovaa-blue border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900"
          >
            <div className="flex items-baseline gap-3">
              <span className="font-heading text-base font-bold text-kovaa-blue dark:text-blue-300">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="font-heading text-base font-semibold text-kovaa-blue dark:text-blue-300">
                {item.title}
              </h3>
            </div>
            <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm text-neutral-700 dark:text-neutral-300">
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  )
}
