'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { PiList, PiX } from 'react-icons/pi'
import { useI18n } from '@/lib/i18n-provider'
import { LanguageToggle } from './language-toggle'

const NAV_IDS = ['tentang', 'produk', 'keunggulan', 'kontak'] as const

export function SiteHeader() {
  const { t } = useI18n()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    // class toggle ringan; animasi GSAP menyusul di task tersendiri
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      data-scrolled={scrolled}
      className={`sticky top-0 z-50 border-b bg-white/90 backdrop-blur ${
        scrolled ? 'border-neutral-200' : 'border-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-page items-center justify-between gap-4 px-4">
        <a href="#top" className="flex items-center" aria-label="KOVAA">
          <Image
            src="/assets/kovaa-logo-no-bg.png"
            alt="KOVAA"
            width={132}
            height={36}
            priority
          />
        </a>

        <nav aria-label="Utama" className="hidden items-center gap-6 md:flex">
          {NAV_IDS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="cursor-pointer text-sm font-medium text-neutral-700 transition-colors hover:text-kovaa-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kovaa-blue"
            >
              {t(`nav.${id}`)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <button
            type="button"
            className="cursor-pointer rounded-md p-2 text-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kovaa-blue md:hidden"
            aria-expanded={open}
            aria-label={t(open ? 'nav.closeMenu' : 'nav.openMenu')}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <PiX size={22} /> : <PiList size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <nav aria-label="Mobile" className="border-t border-neutral-200 bg-white md:hidden">
          <div className="mx-auto flex max-w-page flex-col px-4 py-2">
            {NAV_IDS.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className="cursor-pointer py-2 text-sm font-medium text-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kovaa-blue"
              >
                {t(`nav.${id}`)}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
