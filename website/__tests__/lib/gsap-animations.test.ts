import { renderHook } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

const from = vi.fn()
const set = vi.fn()
const to = vi.fn()
const quickTo = vi.fn(() => vi.fn())
const registerPlugin = vi.fn()
const addCalls: [string, () => void][] = []
const matchMedia = vi.fn(() => ({
  add: (condition: string, cb: () => void) => {
    addCalls.push([condition, cb])
    cb()
  },
}))

vi.mock('gsap', () => ({
  gsap: { from, set, to, quickTo, registerPlugin, matchMedia },
}))

vi.mock('gsap/ScrollTrigger', () => ({ ScrollTrigger: {} }))

vi.mock('@gsap/react', () => ({
  useGSAP: (fn: () => void) => fn(),
}))

const { useScrollReveal, useGridStagger, useHoverLift } = await import('@/lib/gsap-animations'
)

const div = () => ({ current: document.createElement('div') })

describe('gsap animation hooks', () => {
  it('registers the ScrollTrigger plugin', () => {
    renderHook(() => useScrollReveal(div()))
    expect(registerPlugin).toHaveBeenCalled()
  })

  it('registers a prefers-reduced-motion branch via gsap.matchMedia', () => {
    renderHook(() => useScrollReveal(div()))
    expect(matchMedia).toHaveBeenCalled()
    expect(addCalls.some(([c]) => c === '(prefers-reduced-motion: reduce)')).toBe(true)
  })

  it('renders the final state immediately in the reduce branch', () => {
    renderHook(() => useScrollReveal(div()))
    expect(set).toHaveBeenCalledWith(expect.anything(), expect.objectContaining({ opacity: 1 }))
  })

  it('animates reveal from hidden state in the normal branch', () => {
    renderHook(() => useScrollReveal(div()))
    expect(from).toHaveBeenCalledWith(
      expect.anything(),
      expect.objectContaining({ opacity: 0, duration: 0.4 }),
    )
  })

  it('grid stagger uses the short per-item delay for long lists', () => {
    renderHook(() => useGridStagger(div()))
    expect(from).toHaveBeenCalledWith(
      expect.anything(),
      expect.objectContaining({ stagger: expect.any(Number) }),
    )
  })

  it('hover lift uses gsap.quickTo with a short duration', () => {
    const el = document.createElement('div')
    const { result } = renderHook(() => useHoverLift())
    result.current.lift(el)
    expect(quickTo).toHaveBeenCalledWith(el, 'y', expect.objectContaining({ duration: 0.25 }))
    result.current.drop(el)
  })
})
