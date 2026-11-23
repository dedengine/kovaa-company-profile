import { render, screen, fireEvent } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { I18nProvider } from '@/lib/i18n-provider'
import { Footer } from '@/components/footer'

afterEach(() => {
  vi.restoreAllMocks()
})

describe('Footer', () => {
  it('offers a back-to-top control in the bottom bar', () => {
    const scrollTo = vi.fn()
    window.scrollTo = scrollTo as typeof window.scrollTo
    render(
      <I18nProvider>
        <Footer />
      </I18nProvider>,
    )
    fireEvent.click(screen.getByRole('button', { name: 'Kembali ke atas' }))
    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })
  })
})
