'use client'

import Image from 'next/image'
import { PiArrowUpRight, PiWhatsappLogo } from 'react-icons/pi'
import { contact } from '@/data/contact'
import { useI18n } from '@/lib/i18n-provider'
import { useScrollReveal } from '@/lib/gsap-animations'
import { useRef } from 'react'

export function CtaBanner() {
  const { t } = useI18n()
  const scope = useRef<HTMLElement>(null)
  useScrollReveal(scope)

  return (
    <section
      ref={scope}
      className="relative overflow-hidden bg-kovaa-navy py-20 text-white"
    >
      <Image
        src="/assets/banner-section-1.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-20"
        aria-hidden="true"
      />
      <div data-reveal className="relative mx-auto max-w-page px-4 text-center">
        <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl">
          {t('ctaBanner.title')}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/80">{t('ctaBanner.subtitle')}</p>
        <a
          href={`https://wa.me/${contact.whatsapp.replace(/\D/g, '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex cursor-pointer items-center gap-2 rounded-full bg-kovaa-orange px-8 py-4 text-sm font-semibold tracking-wide text-white shadow-lg transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none motion-reduce:hover:translate-y-0"
        >
          <PiWhatsappLogo size={20} />
          {t('ctaBanner.cta')}
          <PiArrowUpRight size={16} />
        </a>
      </div>
    </section>
  )
}
