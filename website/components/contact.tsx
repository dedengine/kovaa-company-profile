'use client'

import { PiClock, PiEnvelope, PiMapPin, PiPhone, PiWhatsappLogo } from 'react-icons/pi'
import { contact } from '@/data/contact'
import { useI18n } from '@/lib/i18n-provider'

export function Contact() {
  const { t } = useI18n()

  return (
    <section id="kontak" className="bg-neutral-50 py-16">
      <div className="mx-auto max-w-page px-4">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
          {t('contact.title')}
        </h2>
        <p className="mt-3 text-neutral-700">{t('contact.subtitle')}</p>

        <ul className="mt-8 grid gap-6 md:grid-cols-2">
          <li className="flex gap-3">
            <PiMapPin size={22} className="mt-0.5 shrink-0 text-kovaa-blue" aria-hidden="true" />
            <div>
              <h3 className="text-sm font-semibold text-neutral-900">
                {t('contact.addressLabel')}
              </h3>
              <p className="mt-1 text-sm text-neutral-700">{contact.address}</p>
            </div>
          </li>

          <li className="flex gap-3">
            <PiPhone size={22} className="mt-0.5 shrink-0 text-kovaa-blue" aria-hidden="true" />
            <div>
              <h3 className="text-sm font-semibold text-neutral-900">
                {t('contact.phoneLabel')}
              </h3>
              <p className="mt-1 text-sm text-neutral-700">
                <a
                  href={`tel:${contact.phone.replace(/\s/g, '')}`}
                  className="cursor-pointer hover:text-kovaa-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kovaa-blue"
                >
                  {contact.phone}
                </a>
              </p>
            </div>
          </li>

          <li className="flex gap-3">
            <PiEnvelope size={22} className="mt-0.5 shrink-0 text-kovaa-blue" aria-hidden="true" />
            <div>
              <h3 className="text-sm font-semibold text-neutral-900">
                {t('contact.emailLabel')}
              </h3>
              <p className="mt-1 text-sm text-neutral-700">
                <a
                  href={`mailto:${contact.email}`}
                  className="cursor-pointer hover:text-kovaa-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kovaa-blue"
                >
                  {contact.email}
                </a>
              </p>
            </div>
          </li>

          <li className="flex gap-3">
            <PiClock size={22} className="mt-0.5 shrink-0 text-kovaa-blue" aria-hidden="true" />
            <div>
              <h3 className="text-sm font-semibold text-neutral-900">
                {t('contact.hoursLabel')}
              </h3>
              <p className="mt-1 text-sm text-neutral-700">{contact.hours}</p>
            </div>
          </li>
        </ul>

        <a
          href={`https://wa.me/${contact.whatsapp.replace(/\D/g, '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex cursor-pointer items-center gap-2 rounded-full bg-kovaa-orange px-6 py-3 text-sm font-semibold text-white transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kovaa-orange motion-reduce:transition-none motion-reduce:hover:translate-y-0"
        >
          <PiWhatsappLogo size={18} />
          {t('contact.whatsappCta')}
        </a>
      </div>
    </section>
  )
}
