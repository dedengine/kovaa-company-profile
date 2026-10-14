'use client'

import { PiMoon, PiSun } from 'react-icons/pi'
import { useTheme } from '@/lib/theme-provider'
import { useI18n } from '@/lib/i18n-provider'

export function ThemeToggle() {
  const { resolved, setTheme } = useTheme()
  const { t } = useI18n()
  const dark = resolved === 'dark'
  const Icon = dark ? PiSun : PiMoon
  const label = dark ? t('nav.themeLight') : t('nav.themeDark')

  return (
    <button
      type="button"
      onClick={() => setTheme(dark ? 'light' : 'dark')}
      aria-label={`${t('nav.themeLabel')}: ${label}`}
      title={`${t('nav.themeLabel')}: ${label}`}
      className="cursor-pointer rounded-full border border-neutral-200 p-2 text-neutral-700 transition-colors hover:border-kovaa-blue hover:text-kovaa-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kovaa-blue dark:border-neutral-700 dark:text-neutral-200 dark:hover:border-blue-300 dark:hover:text-blue-300"
    >
      <Icon size={16} />
    </button>
  )
}
