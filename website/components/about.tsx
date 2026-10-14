'use client'

import { useI18n } from '@/lib/i18n-provider'

export function About() {
  const { t } = useI18n()

  return (
    <section id="tentang" className="mx-auto max-w-page px-4 py-16">
      <h2 className="font-heading text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
        {t('about.title')}
      </h2>
      <div className="mt-6 max-w-3xl space-y-4 text-lg text-neutral-700">
        <p>{t('about.body1')}</p>
        <p>{t('about.body2')}</p>
      </div>
    </section>
  )
}
