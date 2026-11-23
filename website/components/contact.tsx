'use client'

import { useState, type FormEvent } from 'react'
import { PiWhatsappLogo } from 'react-icons/pi'
import { contact } from '@/data/contact'
import { dictionary } from '@/lib/i18n'
import { useI18n } from '@/lib/i18n-provider'

const FIELD_CLASS =
  'w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-kovaa-blue focus-visible:outline-2 focus-visible:outline-kovaa-blue dark:border-neutral-700 dark:bg-neutral-950 dark:text-neutral-100 dark:placeholder:text-neutral-500 dark:focus:border-blue-400 dark:focus-visible:outline-blue-400'

export function Contact() {
  const { t, lang } = useI18n()
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [phone, setPhone] = useState('')
  const [need, setNeed] = useState('')
  const [budget, setBudget] = useState('')
  const options = dictionary[lang].contact.budgetOptions

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const message = [
      'Halo KOVAA, saya ingin mendiskusikan kebutuhan project:',
      '',
      `Nama: ${name}`,
      `Perusahaan: ${company || '-'}`,
      `WhatsApp: ${phone}`,
      `Kebutuhan: ${need}`,
      `Estimasi Budget: ${budget || '-'}`,
    ].join('\n')
    const href = `https://wa.me/${contact.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`
    window.open(href, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="kontak" className="bg-neutral-50 py-16 dark:bg-neutral-900">
      <div className="mx-auto max-w-page px-4">
        <div className="overflow-hidden rounded-2xl border border-neutral-200 shadow-sm dark:border-neutral-800">
          <iframe
            title={t('contact.mapTitle')}
            src={`https://maps.google.com/maps?q=${encodeURIComponent(contact.address)}&z=15&output=embed`}
            className="h-80 w-full md:h-96"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-kovaa-orange dark:text-orange-300">
              {t('contact.eyebrow')}
            </p>
            <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-neutral-900 dark:text-white md:text-4xl">
              {t('contact.title')}
            </h2>
            <p className="mt-4 text-neutral-700 dark:text-neutral-300">{t('contact.subtitle')}</p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-950 md:p-8"
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="contact-name" className="sr-only">{t('contact.nameLabel')}</label>
                <input
                  id="contact-name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t('contact.nameLabel')}
                  className={FIELD_CLASS}
                />
              </div>
              <div>
                <label htmlFor="contact-company" className="sr-only">{t('contact.companyLabel')}</label>
                <input
                  id="contact-company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder={t('contact.companyLabel')}
                  className={FIELD_CLASS}
                />
              </div>
              <div>
                <label htmlFor="contact-phone" className="sr-only">{t('contact.phoneLabel')}</label>
                <input
                  id="contact-phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={t('contact.phoneLabel')}
                  className={FIELD_CLASS}
                />
              </div>
              <div>
                <label htmlFor="contact-need" className="sr-only">{t('contact.needLabel')}</label>
                <textarea
                  id="contact-need"
                  required
                  rows={3}
                  value={need}
                  onChange={(e) => setNeed(e.target.value)}
                  placeholder={t('contact.needLabel')}
                  className={FIELD_CLASS}
                />
              </div>
              <div>
                <label htmlFor="contact-budget" className="sr-only">{t('contact.budgetLabel')}</label>
                <select
                  id="contact-budget"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className={FIELD_CLASS}
                >
                  <option value="" disabled>{t('contact.budgetLabel')}</option>
                  {options.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-kovaa-orange px-6 py-4 text-sm font-semibold tracking-wide text-white shadow-lg transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kovaa-orange motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              <PiWhatsappLogo size={20} aria-hidden="true" />
              {t('contact.submit')}
            </button>
            <p className="mt-4 text-center text-xs text-neutral-500 dark:text-neutral-400">
              {t('contact.privacy')}
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
