import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { I18nProvider } from '@/lib/i18n-provider'
import { ThemeProvider } from '@/lib/theme-provider'
import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'

function renderPage() {
  return render(
    <I18nProvider>
      <ThemeProvider>
        <SiteHeader />
        <Hero />
      </ThemeProvider>
    </I18nProvider>,
  )
}

describe('SiteHeader + Hero', () => {
  it('renders the KOVAA logo with an alt text', () => {
    renderPage()
    expect(screen.getByRole('img', { name: 'KOVAA' })).toBeDefined()
  })

  it('renders exactly one h1 with the hero headline', () => {
    renderPage()
    const h1s = screen.getAllByRole('heading', { level: 1 })
    expect(h1s).toHaveLength(1)
    expect(h1s[0]).toHaveTextContent('Create. Build. Deliver.')
  })

  it('links to the product and contact sections', () => {
    renderPage()
    expect(document.querySelector('a[href="#produk"]')).not.toBeNull()
    expect(document.querySelector('a[href="#kontak"]')).not.toBeNull()
  })

  it('includes the services menu item after About', () => {
    renderPage()
    const about = document.querySelector('a[href="#tentang"]')
    const services = document.querySelector('a[href="#layanan"]')
    expect(services).not.toBeNull()
    expect(about!.compareDocumentPosition(services!) & Node.DOCUMENT_POSITION_FOLLOWING).toBe(
      Node.DOCUMENT_POSITION_FOLLOWING,
    )
  })

  it('shows the language toggle and a mobile menu button', () => {
    renderPage()
    expect(screen.getByRole('button', { name: /indonesia/i })).toBeDefined()
    expect(screen.getByRole('button', { name: 'Buka menu' })).toBeDefined()
  })
})

function heroImageSrc() {
  return (
    screen.getByRole('img', {
      name: 'Rak supermarket KOVAA tampil rapi dalam sebuah toko modern',
    }).getAttribute('src') ?? ''
  )
}

describe('Hero carousel', () => {
  it('cycles the five images with the arrow buttons', async () => {
    const user = userEvent.setup()
    renderPage()
    expect(heroImageSrc()).toContain('hero-1.jpeg')

    await user.click(screen.getByRole('button', { name: 'Gambar berikutnya' }))
    expect(heroImageSrc()).toContain('hero-2.jpeg')

    await user.click(screen.getByRole('button', { name: 'Gambar sebelumnya' }))
    expect(heroImageSrc()).toContain('hero-1.jpeg')

    await user.click(screen.getByRole('button', { name: 'Gambar sebelumnya' }))
    expect(heroImageSrc()).toContain('hero-5.png')
  })

  it('advances to the next image every five seconds', () => {
    vi.useFakeTimers()
    try {
      renderPage()
      expect(heroImageSrc()).toContain('hero-1.jpeg')
      act(() => {
        vi.advanceTimersByTime(5000)
      })
      expect(heroImageSrc()).toContain('hero-2.jpeg')
    } finally {
      vi.useRealTimers()
    }
  })
})
