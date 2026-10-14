import { describe, expect, it, vi } from 'vitest'

vi.mock('gsap', () => ({
  gsap: { registerPlugin: vi.fn() },
}))

vi.mock('gsap/ScrollTrigger', () => ({
  ScrollTrigger: {},
}))

const { dictionary } = await import('@/lib/i18n')
const { registerGsap } = await import('@/lib/gsap')
const gsapModule = await import('gsap')

function collectLeaves(value: unknown, prefix = ''): [string, unknown][] {
  if (typeof value !== 'object' || value === null) return [[prefix, value]]
  return Object.entries(value as Record<string, unknown>).flatMap(([k, v]) =>
    collectLeaves(v, prefix ? `${prefix}.${k}` : k),
  )
}

describe('i18n dictionary', () => {
  it('has identical key structure in both languages', () => {
    const idKeys = collectLeaves(dictionary.id).map(([k]) => k).sort()
    const enKeys = collectLeaves(dictionary.en).map(([k]) => k).sort()
    expect(enKeys).toEqual(idKeys)
  })

  it('has no empty strings in either language', () => {
    for (const lang of ['id', 'en'] as const) {
      for (const [key, value] of collectLeaves(dictionary[lang])) {
        expect(typeof value, `${lang}.${key} not a string`).toBe('string')
        expect(String(value).trim().length, `${lang}.${key} empty`).toBeGreaterThan(0)
      }
    }
  })
})

describe('registerGsap', () => {
  it('registers ScrollTrigger exactly once even when called twice', () => {
    registerGsap()
    registerGsap()
    const registerPlugin = vi.mocked(gsapModule.gsap.registerPlugin)
    expect(registerPlugin).toHaveBeenCalledTimes(1)
  })
})
