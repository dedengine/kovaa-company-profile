'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useI18n } from '@/lib/i18n-provider'
import { contact } from '@/data/contact'

const LINKS = [
  { id: 'tentang', key: 'nav.tentang' },
  { id: 'produk', key: 'nav.produk' },
  { id: 'keunggulan', key: 'nav.keunggulan' },
  { id: 'kontak', key: 'nav.kontak' },
] as const

export function Footer() {
  const { t } = useI18n()
  // Next 16: new Date() saat render client component bikin prerender gagal → effect
  const [year, setYear] = useState('')
  useEffect(() => setYear(String(new Date().getFullYear())), [])

  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-page flex-col gap-6 px-4 py-10 md:flex-row md:items-start md:justify-between">
        <div>
          <Image
            src="/assets/kovaa-logo-no-bg.png"
            alt="KOVAA"
            width={110}
            height={30}
          />
          <p className="mt-3 max-w-xs text-sm text-neutral-600">{t('footer.tagline')}</p>
        </div>
        <nav aria-label={t('footer.quickLinks')}>
          <h3 className="text-sm font-semibold text-neutral-900">
            {t('footer.quickLinks')}
          </h3>
          <ul className="mt-3 space-y-1.5">
            {LINKS.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  className="cursor-pointer text-sm text-neutral-600 hover:text-kovaa-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kovaa-blue"
                >
                  {t(l.key)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-neutral-200 px-4 py-4">
        <p className="mx-auto max-w-page text-xs text-neutral-500">
          © {year ? `${year} ` : ''}
          {contact.company} — {t('footer.rights')}
        </p>
      </div>
    </footer>
  )
}
