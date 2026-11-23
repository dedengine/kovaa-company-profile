'use client'

import { useRef } from 'react'
import { PiChartBar, PiHandshake, PiMedal, PiPlugsConnected } from 'react-icons/pi'
import { useI18n } from '@/lib/i18n-provider'
import { dictionary } from '@/lib/i18n'
import { useGridStagger, useScrollReveal } from '@/lib/gsap-animations'

const ICONS = [PiMedal, PiPlugsConnected, PiChartBar, PiHandshake]

export function Advantages() {
  const { t, lang } = useI18n()
  const scope = useRef<HTMLElement>(null)
  const grid = useRef<HTMLUListElement>(null)
  useScrollReveal(scope)
  useGridStagger(grid)
  const items = dictionary[lang].advantages.items

  return (
    <section ref={scope} id="keunggulan" className="bg-neutral-50 py-16 dark:bg-neutral-900">
      <div className="mx-auto max-w-page px-4">
        <div data-reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-kovaa-orange dark:text-orange-300">
            {t('advantages.eyebrow')}
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-neutral-900 dark:text-white md:text-4xl">
            {t('advantages.title')}
          </h2>
          <p className="mt-4 text-neutral-700 dark:text-neutral-300">{t('advantages.subtitle')}</p>
        </div>

        <ul ref={grid} className="mt-10 grid gap-6 sm:grid-cols-2">
          {items.map((item, i) => {
            const Icon = ICONS[i]
            return (
              <li
                key={item.title}
                data-stagger
                className="group rounded-2xl border border-neutral-200 bg-white p-8 text-center shadow-sm transition-[box-shadow,transform] hover:-translate-y-1 hover:shadow-xl motion-reduce:transition-none motion-reduce:hover:translate-y-0 dark:border-neutral-800 dark:bg-neutral-950"
              >
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-kovaa-blue/10 text-kovaa-blue transition-colors group-hover:bg-kovaa-blue group-hover:text-white dark:bg-blue-500/15 dark:text-blue-300 dark:group-hover:bg-blue-600 dark:group-hover:text-white">
                  <Icon size={30} aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-heading text-base font-semibold text-neutral-900 dark:text-white md:text-lg">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">{item.desc}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
