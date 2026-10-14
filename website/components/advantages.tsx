'use client'

import { PiFactory, PiShieldCheck, PiTruck, PiWrench } from 'react-icons/pi'
import { useI18n } from '@/lib/i18n-provider'
import { dictionary } from '@/lib/i18n'

const ICONS = [PiWrench, PiShieldCheck, PiFactory, PiTruck]

export function Advantages() {
  const { t, lang } = useI18n()
  const items = dictionary[lang].advantages.items

  return (
    <section id="keunggulan" className="bg-neutral-50 py-16">
      <div className="mx-auto max-w-page px-4">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
          {t('advantages.title')}
        </h2>
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => {
            const Icon = ICONS[i]
            return (
              <li
                key={item.title}
                className="rounded-2xl border border-neutral-200 bg-white p-6"
              >
                <Icon size={28} className="text-kovaa-blue" aria-hidden="true" />
                <h3 className="mt-4 font-heading text-lg font-semibold text-neutral-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-700">{item.desc}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
