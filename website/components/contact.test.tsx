import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { contact } from '@/data/contact'
import { I18nProvider } from '@/lib/i18n-provider'
import { Contact } from './contact'
import { Footer } from './footer'

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
