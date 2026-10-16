'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { PiList, PiX } from 'react-icons/pi'
import { useI18n } from '@/lib/i18n-provider'
import { LanguageToggle } from './language-toggle'
import { ThemeToggle } from './theme-toggle'

const NAV_IDS = ['tentang', 'produk', 'keunggulan', 'kontak'] as const

export function SiteHeader() {
  const { t } = useI18n()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      data-scrolled={scrolled}
      className={`sticky top-0 z-50 bg-white/95 backdrop-blur dark:bg-neutral-950/95 ${
        scrolled ? 'shadow-md' : 'shadow-sm'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-page items-center justify-between gap-4 px-4 lg:h-20">
        <a href="#top" className="flex items-center" aria-label="KOVAA">
          <Image
            src="/assets/kovaa-logo-no-bg.png"
            alt="KOVAA"
            width={132}
            height={36}
            priority
          />
        </a>

        <nav
          aria-label={t('nav.mainNav')}
          className="hidden items-center gap-1 rounded-full bg-neutral-100 px-2 py-1.5 dark:bg-neutral-800 md:flex"
        >
          {NAV_IDS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="cursor-pointer rounded-full px-4 py-1.5 text-sm font-medium text-neutral-700 transition-colors hover:bg-kovaa-blue hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kovaa-blue dark:text-neutral-200 dark:hover:bg-kovaa-blue dark:hover:text-white"
            >
              {t(`nav.${id}`)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <span className="hidden md:block">
            <ThemeToggle />
          </span>
          <LanguageToggle />
          <button
            type="button"
            className="cursor-pointer rounded-md p-2 text-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kovaa-blue dark:text-neutral-200 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={t(open ? 'nav.closeMenu' : 'nav.openMenu')}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <PiX size={22} /> : <PiList size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label={t('nav.mobileNav')}
          className="absolute inset-x-0 top-full z-40 border-t border-neutral-200 bg-white shadow-lg dark:border-neutral-800 dark:bg-neutral-950 md:hidden"
        >
          <div className="mx-auto flex max-w-page flex-col px-4 py-2">
            {NAV_IDS.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className="cursor-pointer py-2 text-sm font-medium text-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kovaa-blue dark:text-neutral-200"
              >
                {t(`nav.${id}`)}
              </a>
            ))}
            <div className="flex items-center py-2 md:hidden">
              <ThemeToggle />
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}
