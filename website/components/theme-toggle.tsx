'use client'

import { PiMonitor, PiMoon, PiSun } from 'react-icons/pi'
import { THEME_CYCLE, useTheme, type Theme } from '@/lib/theme-provider'
import { useI18n } from '@/lib/i18n-provider'

const ICONS: Record<Theme, typeof PiSun> = {
  system: PiMonitor,
  light: PiSun,
  dark: PiMoon,
}

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const { t } = useI18n()
  const Icon = ICONS[theme]
  const label = t(`nav.theme${theme[0].toUpperCase()}${theme.slice(1)}`)

  function cycle() {
    const next = THEME_CYCLE[(THEME_CYCLE.indexOf(theme) + 1) % THEME_CYCLE.length]
    setTheme(next)
  }

  return (
    <button
      type="button"
      onClick={cycle}
      aria-label={`${t('nav.themeLabel')}: ${label}`}
      title={`${t('nav.themeLabel')}: ${label}`}
      className="cursor-pointer rounded-full border border-neutral-200 p-2 text-neutral-700 transition-colors hover:border-kovaa-blue hover:text-kovaa-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kovaa-blue dark:border-neutral-700 dark:text-neutral-200 dark:hover:border-blue-300 dark:hover:text-blue-300"
    >
      <Icon size={16} />
    </button>
  )
}
