import { render, screen, fireEvent } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { I18nProvider } from '@/lib/i18n-provider'
import { ThemeProvider } from '@/lib/theme-provider'
import { BackToTop } from '@/components/back-to-top'

function renderButton() {
  return render(
    <I18nProvider>
      <ThemeProvider>
        <BackToTop />
      </ThemeProvider>
    </I18nProvider>,
  )
}

afterEach(() => {
  vi.restoreAllMocks()
})

describe('BackToTop', () => {
  it('is hidden near the top and appears after scrolling down', () => {
    renderButton()
    const button = screen.getByRole('button', { name: 'Kembali ke atas', hidden: true })
    expect(button).toHaveAttribute('aria-hidden', 'true')
    Object.defineProperty(window, 'scrollY', { value: 500, configurable: true })
    fireEvent.scroll(window)
    expect(button).not.toHaveAttribute('aria-hidden')
  })

  it('scrolls smoothly to the top on click', () => {
    const scrollTo = vi.fn()
    window.scrollTo = scrollTo as typeof window.scrollTo
    renderButton()
    Object.defineProperty(window, 'scrollY', { value: 500, configurable: true })
    fireEvent.scroll(window)
    fireEvent.click(screen.getByRole('button', { name: 'Kembali ke atas' }))
    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })
  })

  it('jumps instantly under prefers-reduced-motion', () => {
    window.matchMedia = ((query: string) => ({
      matches: query === '(prefers-reduced-motion: reduce)',
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    })) as unknown as typeof window.matchMedia
    const scrollTo = vi.fn()
    window.scrollTo = scrollTo as typeof window.scrollTo
    renderButton()
    Object.defineProperty(window, 'scrollY', { value: 500, configurable: true })
    fireEvent.scroll(window)
    fireEvent.click(screen.getByRole('button', { name: 'Kembali ke atas' }))
    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'auto' })
  })
})
