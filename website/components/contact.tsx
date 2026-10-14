'use client'

import { PiEnvelope, PiMapPin, PiPhone, PiWhatsappLogo } from 'react-icons/pi'
import { contact } from '@/data/contact'
import { useI18n } from '@/lib/i18n-provider'

export function Contact() {
  const { t } = useI18n()

  const items = [
    {
      icon: PiMapPin,
      label: t('contact.addressLabel'),
      value: contact.address,
    },
    {
      icon: PiPhone,
      label: t('contact.phoneLabel'),
      value: contact.phone,
      href: `tel:${contact.phone.replace(/\s/g, '')}`,
    },
    {
      icon: PiEnvelope,
      label: t('contact.emailLabel'),
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
  ]

  return (
    <section id="kontak" className="bg-neutral-50 py-16">
      <div className="mx-auto max-w-page px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-kovaa-orange">
            {t('contact.eyebrow')}
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
            {t('contact.title')}
          </h2>
          <p className="mt-4 text-neutral-700">{t('contact.subtitle')}</p>
        </div>

        <ul className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-3">
          {items.map((item) => {
            const Icon = item.icon
            return (
              <li
                key={item.label}
                className="flex h-full flex-col items-center rounded-2xl border border-neutral-200 bg-white p-6 text-center shadow-sm"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-kovaa-blue/10 text-kovaa-blue">
                  <Icon size={24} aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-sm font-semibold text-neutral-900">{item.label}</h3>
                {item.href ? (
                  <p className="mt-1 text-sm text-neutral-700">
                    <a
                      href={item.href}
                      className="cursor-pointer hover:text-kovaa-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kovaa-blue"
                    >
                      {item.value}
                    </a>
                  </p>
                ) : (
                  <p className="mt-1 text-sm text-neutral-700">{item.value}</p>
                )}
              </li>
            )
          })}
        </ul>

        <div className="mt-10 text-center">
          <a
            href={`https://wa.me/${contact.whatsapp.replace(/\D/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-kovaa-orange px-8 py-4 text-sm font-semibold tracking-wide text-white shadow-lg transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kovaa-orange motion-reduce:transition-none motion-reduce:hover:translate-y-0"
          >
            <PiWhatsappLogo size={20} />
            {t('contact.whatsappCta')}
          </a>
        </div>
      </div>
    </section>
  )
}
