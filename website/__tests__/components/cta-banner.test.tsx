import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { I18nProvider } from '@/lib/i18n-provider'
import { CtaBanner } from '@/components/cta-banner'
import { contact } from '@/data/contact'

describe('CtaBanner', () => {
  it('renders the headline and a WhatsApp call to action', () => {
    render(
      <I18nProvider>
        <CtaBanner />
      </I18nProvider>,
    )
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Siap Memperkuat Tampilan Toko Anda?',
    )
    const cta = screen.getByRole('link', { name: /Hubungi via WhatsApp/ })
    expect(cta).toHaveAttribute(
      'href',
      `https://wa.me/${contact.whatsapp.replace(/\D/g, '')}`,
    )
  })
})
