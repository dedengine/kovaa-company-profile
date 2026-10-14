'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { dictionary } from './i18n'
import type { Lang } from '@/data/products'

export type I18nValue = {
  lang: Lang
  setLang: (next: Lang) => void
  t: (path: string) => string
}

const I18nContext = createContext<I18nValue | null>(null)

function readLangFromUrl(): Lang {
  if (typeof window === 'undefined') return 'id'
  return new URLSearchParams(window.location.search).get('lang') === 'en' ? 'en' : 'id'
}

function lookup(lang: Lang, path: string): string {
  const value = path
    .split('.')
    .reduce<unknown>(
      (acc, key) =>
        acc && typeof acc === 'object' ? (acc as Record<string, unknown>)[key] : undefined,
      dictionary[lang],
    )
  if (typeof value !== 'string') {
    throw new Error(`Missing i18n key: ${lang}.${path}`)
  }
  return value
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('id')

  useEffect(() => {
    const fromUrl = readLangFromUrl()
    if (fromUrl !== 'id') {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLangState(fromUrl)
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    const url = new URL(window.location.href)
    if (next === 'en') url.searchParams.set('lang', 'en')
    else url.searchParams.delete('lang')
    window.history.replaceState({}, '', url.toString())
  }, [])

  const value = useMemo<I18nValue>(
    () => ({ lang, setLang, t: (path: string) => lookup(lang, path) }),
    [lang, setLang],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}
