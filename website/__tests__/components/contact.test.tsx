import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { contact } from '@/data/contact'
import { I18nProvider } from '@/lib/i18n-provider'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

describe('contact data', () => {
  it('has no placeholder values left', () => {
    for (const [key, value] of Object.entries(contact)) {
      expect(String(value).toLowerCase(), key).not.toContain('placeholder')
    }
  })
})

describe('Contact + Footer', () => {
  it('renders the contact section with heading and details', () => {
    render(
      <I18nProvider>
        <Contact />
      </I18nProvider>,
    )
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Hubungi Kami')
    expect(document.getElementById('kontak')).not.toBeNull()
  })

  it('embeds a lazy-loaded Google Map of the contact address', () => {
    render(
      <I18nProvider>
        <Contact />
      </I18nProvider>,
    )
    const frame = screen.getByTitle('Peta lokasi KOVAA')
    expect(frame.tagName).toBe('IFRAME')
    const src = frame.getAttribute('src') ?? ''
    expect(src).toContain('maps.google.com')
    expect(src).toContain('output=embed')
    expect(decodeURIComponent(src)).toContain(contact.address)
    expect(frame).toHaveAttribute('loading', 'lazy')
  })

  it('renders a footer with the brand', () => {
    const { container } = render(
      <I18nProvider>
        <Footer />
      </I18nProvider>,
    )
    const text = container.textContent ?? ''
    expect(text).toContain('KOVAA')
  })
})
