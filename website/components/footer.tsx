'use client'

import { useI18n } from '@/lib/i18n-provider'
import { contact } from '@/data/contact'

const LINKS = [
  { id: 'tentang', key: 'nav.tentang' },
  { id: 'produk', key: 'nav.produk' },
  { id: 'keunggulan', key: 'nav.keunggulan' },
  { id: 'proses', key: 'nav.proses' },
  { id: 'kontak', key: 'nav.kontak' },
] as const

export function Footer() {
  const { t } = useI18n()

  return (
    <footer className="bg-kovaa-navy text-white/70">
      <div className="mx-auto grid max-w-page gap-10 px-4 py-14 md:grid-cols-3">
        <div>
          <p className="font-heading text-2xl font-bold tracking-tight text-white">KOVAA</p>
          <p className="mt-3 max-w-xs text-sm">{t('footer.tagline')}</p>
        </div>

        <nav aria-label={t('footer.quickLinks')}>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-white">
            {t('footer.quickLinks')}
          </h3>
          <ul className="mt-4 space-y-2">
            {LINKS.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  className="cursor-pointer text-sm transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {t(l.key)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-white">
            {t('contact.title')}
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>{contact.address}</li>
            <li>
              <a
                href={`tel:${contact.phone.replace(/\s/g, '')}`}
                className="cursor-pointer hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {contact.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${contact.email}`}
                className="cursor-pointer hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {contact.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-5">
        <p className="mx-auto max-w-page text-xs text-white/50">
          © {contact.company}. {t('footer.rights')}
        </p>
      </div>
    </footer>
  )
}
