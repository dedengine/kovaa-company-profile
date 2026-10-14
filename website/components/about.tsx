'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { useI18n } from '@/lib/i18n-provider'
import { useScrollReveal } from '@/lib/gsap-animations'

// Bentuk blob organik menjiplak referensi (clipPath berskala responsif)
const BLOB_PATH =
  'M 0.205 0.032 C 0.38 0.005, 0.62 0.008, 0.85 0.05 ' +
  'C 0.93 0.065, 0.968 0.11, 0.962 0.19 ' +
  'C 0.94 0.36, 0.84 0.55, 0.70 0.71 ' +
  'C 0.62 0.80, 0.53 0.875, 0.43 0.93 ' +
  'C 0.34 0.975, 0.24 0.95, 0.155 0.885 ' +
  'C 0.09 0.83, 0.058 0.73, 0.06 0.60 ' +
  'C 0.062 0.47, 0.06 0.37, 0.08 0.27 ' +
  'C 0.10 0.17, 0.135 0.075, 0.205 0.032 Z'

export function About() {
  const { t } = useI18n()
  const scope = useRef<HTMLElement>(null)
  useScrollReveal(scope)

  return (
    <section ref={scope} id="tentang" className="mx-auto max-w-page px-4 py-16">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div data-reveal className="mx-auto w-full max-w-md">
          <svg width="0" height="0" className="absolute" aria-hidden="true" focusable="false">
            <defs>
              <clipPath id="about-blob" clipPathUnits="objectBoundingBox">
                <path d={BLOB_PATH} />
              </clipPath>
            </defs>
          </svg>
          <div className="relative aspect-square" style={{ clipPath: 'url(#about-blob)' }}>
            <Image
              src="/assets/section-benner-about.png"
              alt={t('about.imageAlt')}
              fill
              sizes="(max-width: 768px) 100vw, 448px"
              className="object-cover"
            />
          </div>
        </div>

        <div data-reveal>
          <p className="text-xs font-semibold uppercase tracking-widest text-kovaa-orange">
            {t('about.eyebrow')}
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
            {t('about.title')}
          </h2>
          <div className="mt-6 space-y-4 text-lg text-neutral-700">
            <p>{t('about.body1')}</p>
            <p>{t('about.body2')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
