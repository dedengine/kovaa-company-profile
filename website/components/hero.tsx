'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PiArrowRight, PiCaretLeft, PiCaretRight } from 'react-icons/pi'
import { useI18n } from '@/lib/i18n-provider'
import { useHoverLift, useScrollReveal } from '@/lib/gsap-animations'

const SLIDES = [
  '/assets/hero-1.jpg',
  '/assets/hero-2.jpg',
  '/assets/hero-3.jpg',
  '/assets/hero-4.jpg',
] as const

const SLIDE_INTERVAL = 5000

export function Hero() {
  const { t } = useI18n()
  const content = useRef<HTMLDivElement>(null)
  const ctaPrimary = useRef<HTMLAnchorElement>(null)
  const ctaSecondary = useRef<HTMLAnchorElement>(null)
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [reduced, setReduced] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  useScrollReveal(content)
  const hover = useHoverLift()

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = (event: MediaQueryListEvent) => setReduced(event.matches)
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (paused || reduced) return
    const timer = window.setInterval(
      () => setIndex((current) => (current + 1) % SLIDES.length),
      SLIDE_INTERVAL,
    )
    return () => window.clearInterval(timer)
  }, [paused, reduced])

  function step(direction: 1 | -1) {
    setIndex((current) => (current + direction + SLIDES.length) % SLIDES.length)
  }

  return (
    <section
      id="top"
      className="group relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="absolute inset-0 bg-kovaa-navy dark:bg-neutral-950">
        <Image
          key={`blur-${SLIDES[index]}`}
          src={SLIDES[index]}
          alt=""
          fill
          sizes="100vw"
          aria-hidden="true"
          className="scale-110 object-cover opacity-50 blur-2xl"
        />
        <Image
          key={SLIDES[index]}
          src={SLIDES[index]}
          alt={t('hero.imageAlt')}
          width={1920}
          height={1080}
          className="hero-image absolute right-0 top-1/2 w-full max-w-none -translate-y-1/2 md:top-0 md:h-full md:w-auto md:translate-y-0"
          priority={index === 0}
        />
      </div>

      <button
        type="button"
        onClick={() => step(-1)}
        aria-label={t('hero.previousImage')}
        className="absolute left-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/80 text-kovaa-blue shadow-md transition-[opacity,background-color] hover:bg-white hover:text-kovaa-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kovaa-blue dark:bg-neutral-950/70 dark:text-blue-300 dark:hover:bg-neutral-950 md:left-4 md:h-12 md:w-12 md:pointer-events-none md:opacity-0 md:group-hover:pointer-events-auto md:group-hover:opacity-100 md:group-focus-within:pointer-events-auto md:group-focus-within:opacity-100"
      >
        <PiCaretLeft size={22} aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={() => step(1)}
        aria-label={t('hero.nextImage')}
        className="absolute right-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/80 text-kovaa-blue shadow-md transition-[opacity,background-color] hover:bg-white hover:text-kovaa-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kovaa-blue dark:bg-neutral-950/70 dark:text-blue-300 dark:hover:bg-neutral-950 md:right-4 md:h-12 md:w-12 md:pointer-events-none md:opacity-0 md:group-hover:pointer-events-auto md:group-hover:opacity-100 md:group-focus-within:pointer-events-auto md:group-focus-within:opacity-100"
      >
        <PiCaretRight size={22} aria-hidden="true" />
      </button>

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-white via-white to-white/30 dark:from-neutral-950 dark:via-neutral-950 dark:to-neutral-950/30 md:bg-gradient-to-r md:from-white md:via-white/85 md:to-transparent md:dark:from-neutral-950 md:dark:via-neutral-950/85 md:dark:to-transparent"
      />

      <div
        ref={content}
        className="relative mx-auto max-w-page px-4 pb-16 pt-8 md:py-32 lg:py-40"
      >
        <p
          data-reveal
          className="inline-block rounded-full bg-kovaa-orange/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-kovaa-orange dark:text-orange-300"
        >
            {t('hero.badge')}
        </p>
        <h1
          data-reveal
          className="mt-4 font-heading text-4xl font-bold leading-tight tracking-tight text-kovaa-blue dark:text-white md:text-5xl lg:text-6xl"
        >
            {t('hero.title')}
        </h1>
        <p data-reveal className="mt-5 max-w-prose text-lg text-neutral-700 dark:text-neutral-300">
            {t('hero.subtitle')}
        </p>
        <div data-reveal className="mt-8 flex flex-wrap gap-3">
          <Link
            ref={ctaPrimary}
            href="#produk"
            onMouseEnter={() => hover.lift(ctaPrimary.current)}
            onMouseLeave={() => hover.drop(ctaPrimary.current)}
            className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-kovaa-blue px-7 py-3.5 text-sm font-semibold tracking-wide text-white shadow-lg transition-[box-shadow] hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kovaa-blue"
          >
            {t('hero.ctaProducts')}
            <PiArrowRight size={18} />
          </Link>
            <Link
              ref={ctaSecondary}
              href="#kontak"
              onMouseEnter={() => hover.lift(ctaSecondary.current)}
              onMouseLeave={() => hover.drop(ctaSecondary.current)}
              className="inline-flex cursor-pointer items-center rounded-full border-2 border-kovaa-blue bg-white/80 px-7 py-3.5 text-sm font-semibold tracking-wide text-kovaa-blue backdrop-blur transition-colors hover:bg-kovaa-blue hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kovaa-blue dark:border-neutral-400 dark:bg-transparent dark:text-white dark:hover:border-white dark:hover:bg-white dark:hover:text-neutral-950"
            >
            {t('hero.ctaContact')}
          </Link>
        </div>
      </div>
    </section>
  )
}
