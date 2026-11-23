'use client'

import { useEffect, useState } from 'react'
import { PiArrowUp } from 'react-icons/pi'
import { useI18n } from '@/lib/i18n-provider'

const SHOW_AFTER = 400

export function BackToTop() {
  const { t } = useI18n()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function scrollTop() {
    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' })
  }

  return (
    <button
      type="button"
      data-testid="back-to-top"
      onClick={scrollTop}
      aria-label={t('nav.backToTop')}
      {...(!visible ? { 'aria-hidden': true as const } : {})}
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-[4.6rem] right-8 z-40 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-kovaa-orange text-white shadow-lg ring-4 ring-white transition-all duration-300 hover:bg-kovaa-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kovaa-orange dark:ring-neutral-950 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <PiArrowUp size={18} />
    </button>
  )
}
