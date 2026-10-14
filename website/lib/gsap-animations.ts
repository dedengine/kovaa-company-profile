'use client'

import type { RefObject } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { registerGsap } from './gsap'

const REDUCE = '(prefers-reduced-motion: reduce)'
const NORMAL = '(prefers-reduced-motion: no-preference)'

/** Fade + naik halus saat elemen [data-reveal] masuk viewport. Enhancement saja. */
export function useScrollReveal<T extends HTMLElement>(scope: RefObject<T | null>) {
  useGSAP(
    () => {
      if (!scope.current) return
      registerGsap()
      const mm = gsap.matchMedia()
      mm.add(REDUCE, () => {
        gsap.set('[data-reveal]', { opacity: 1, y: 0 })
      })
      mm.add(NORMAL, () => {
        gsap.from('[data-reveal]', {
          opacity: 0,
          y: 14,
          duration: 0.4,
          ease: 'power2.out',
          stagger: 0.06,
          scrollTrigger: {
            trigger: scope.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        })
      })
    },
    { scope },
  )
}

/** Stagger masuk untuk grid [data-stagger]; delay per item pendek untuk list panjang. */
export function useGridStagger<T extends HTMLElement>(scope: RefObject<T | null>, itemDelay = 0.06) {
  useGSAP(
    () => {
      if (!scope.current) return
      registerGsap()
      const mm = gsap.matchMedia()
      mm.add(REDUCE, () => {
        gsap.set('[data-stagger]', { opacity: 1, y: 0 })
      })
      mm.add(NORMAL, () => {
        gsap.from('[data-stagger]', {
          opacity: 0,
          y: 8,
          duration: 0.3,
          ease: 'power1.out',
          stagger: itemDelay,
          scrollTrigger: { trigger: scope.current, start: 'top 85%' },
        })
      })
    },
    { scope },
  )
}

/** Hover lift tombol/kartu: quickTo transform y, dengan reverse saat pointer keluar. */
export function useHoverLift() {
  const cache = new WeakMap<Element, (value: number) => void>()
  const reduced = () =>
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  const tween = (el: Element | null, value: number) => {
    if (!el || reduced()) return
    let to = cache.get(el)
    if (!to) {
      to = gsap.quickTo(el, 'y', { duration: 0.25, ease: 'power2.out' })
      cache.set(el, to)
    }
    to(value)
  }
  return {
    lift: (el: Element | null) => tween(el, -4),
    drop: (el: Element | null) => tween(el, 0),
  }
}
