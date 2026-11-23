import { render, screen, fireEvent } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { contact } from '@/data/contact'
import { dictionary } from '@/lib/i18n'
import { I18nProvider } from '@/lib/i18n-provider'
import { Contact } from '@/components/contact'

function renderContact() {
  return render(
    <I18nProvider>
      <Contact />
    </I18nProvider>,
  )
}

afterEach(() => {
  vi.restoreAllMocks()
})

describe('contact data', () => {
  it('has no placeholder values left', () => {
    for (const [key, value] of Object.entries(contact)) {
      expect(String(value).toLowerCase(), key).not.toContain('placeholder')
    }
  })
})

describe('Contact project form', () => {
  it('renders the project form fields and heading', () => {
    renderContact()
    expect(document.getElementById('kontak')).not.toBeNull()
    expect(screen.getByText('START A PROJECT')).toBeDefined()
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Butuh Interior Fit-Out, Custom Furniture, Booth, atau Media Promosi?',
    )
    for (const key of ['nameLabel', 'companyLabel', 'phoneLabel', 'needLabel'] as const) {
      expect(screen.getByPlaceholderText(dictionary.id.contact[key])).toBeDefined()
    }
    expect(screen.getByRole('combobox')).toBeDefined()
    expect(screen.getByText('Rp 50 - 100 juta')).toBeDefined()
  })

  it('embeds a Google Map of the contact address', () => {
    renderContact()
    const frame = screen.getByTitle('Peta lokasi KOVAA')
    expect(frame.tagName).toBe('IFRAME')
    const src = frame.getAttribute('src') ?? ''
    expect(src).toContain('maps.google.com')
    expect(src).toContain('output=embed')
    expect(decodeURIComponent(src)).toContain(contact.address)
    expect(frame).toHaveAttribute('loading', 'lazy')
  })

  it('opens WhatsApp with the submitted details prefilled', () => {
    const open = vi.spyOn(window, 'open').mockImplementation(() => null)
    renderContact()

    fireEvent.change(screen.getByPlaceholderText('Nama Lengkap'), { target: { value: 'Budi' } })
    fireEvent.change(screen.getByPlaceholderText('Asal Perusahaan (Misal: PT Deta...)'), {
      target: { value: 'PT Contoh' },
    })
    fireEvent.change(screen.getByPlaceholderText('Nomor Whatsapp (Misal: 081234xxx)'), {
      target: { value: '08123456789' },
    })
    fireEvent.change(screen.getByPlaceholderText('Apa yang bisa kami bantu?'), {
      target: { value: 'Butuh booth pameran' },
    })
    fireEvent.change(screen.getByRole('combobox'), {
      target: { value: 'Rp 50 - 100 juta' },
    })
    fireEvent.click(screen.getByRole('button', { name: /Kirim & Dapatkan Respon Prioritas/ }))

    expect(open).toHaveBeenCalledTimes(1)
    const href = String(open.mock.calls[0][0])
    expect(href.startsWith(`https://wa.me/${contact.whatsapp.replace(/\D/g, '')}?text=`)).toBe(true)
    const text = decodeURIComponent(href.split('?text=')[1])
    for (const value of ['Budi', 'PT Contoh', '08123456789', 'Butuh booth pameran', 'Rp 50 - 100 juta']) {
      expect(text).toContain(value)
    }
  })
})
