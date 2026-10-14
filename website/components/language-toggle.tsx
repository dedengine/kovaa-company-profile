'use client'

import { useI18n } from '@/lib/i18n-provider'
import type { Lang } from '@/data/products'

const LANGS: { id: Lang; label: string; short: string }[] = [
  { id: 'id', label: 'Indonesia', short: 'ID' },
  { id: 'en', label: 'English', short: 'EN' },
]

export function LanguageToggle() {
  const { lang, setLang, t } = useI18n()

  return (
    <div
      role="group"
      aria-label={t('footer.language')}
      className="inline-flex items-center gap-1 rounded-full border border-neutral-200 p-0.5"
    >
      {LANGS.map((l) => (
        <button
          key={l.id}
          type="button"
          aria-pressed={lang === l.id}
          onClick={() => setLang(l.id)}
          className="cursor-pointer rounded-full px-2.5 py-1 text-xs font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kovaa-blue aria-pressed:bg-kovaa-blue aria-pressed:text-white"
        >
          <span aria-hidden="true">{l.short}</span>
          <span className="sr-only">{l.label}</span>
        </button>
      ))}
    </div>
  )
}
