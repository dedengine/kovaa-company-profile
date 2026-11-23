'use client'

import { PiWhatsappLogo } from 'react-icons/pi'
import { contact } from '@/data/contact'
import { useI18n } from '@/lib/i18n-provider'

export function WhatsAppFloat() {
  const { t } = useI18n()

  return (
    <a
      href={`https://wa.me/${contact.whatsapp.replace(/\D/g, '')}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t('contact.waFloating')}
      title={t('contact.waFloating')}
      className="fixed bottom-24 right-6 z-40 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-kovaa-orange text-white shadow-lg transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kovaa-orange motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      <PiWhatsappLogo size={26} aria-hidden="true" />
    </a>
  )
}
