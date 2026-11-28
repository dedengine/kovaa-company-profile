import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { I18nProvider } from '@/lib/i18n-provider'
import { ProductDetail } from '@/components/product-detail'
import { products } from '@/data/products'
import { contact } from '@/data/contact'

const product = products[0]

function renderDetail() {
  return render(
    <I18nProvider>
      <ProductDetail product={product} />
    </I18nProvider>,
  )
}

describe('ProductDetail', () => {
  it('renders the product name as h1 with description', () => {
    renderDetail()
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      product.name.id,
    )
    expect(screen.getByText(product.description.id)).toBeDefined()
  })

  it('links back to the products section and home', () => {
    renderDetail()
    const backs = screen.getAllByRole('link', { name: 'Kembali ke Semua Produk' })
    expect(backs.length).toBeGreaterThanOrEqual(1)
    for (const back of backs) {
      expect(back).toHaveAttribute('href', '/#produk')
    }
    expect(screen.getByRole('link', { name: 'Beranda' })).toHaveAttribute('href', '/')
  })

  it('opens WhatsApp with the product name prefilled', () => {
    renderDetail()
    const links = screen.getAllByRole('link', { name: 'Tanya Produk Ini' })
    expect(links.length).toBeGreaterThanOrEqual(1)
    for (const wa of links) {
      const href = wa.getAttribute('href') ?? ''
      expect(href.startsWith(`https://wa.me/${contact.whatsapp}`)).toBe(true)
      expect(decodeURIComponent(href)).toContain(product.name.id)
    }
  })

  it('has a sticky bottom action bar for mobile', () => {
    renderDetail()
    const bar = screen.getByTestId('sticky-cta')
    expect(within(bar).getByRole('link', { name: 'Tanya Produk Ini' })).toHaveAttribute(
      'href',
      expect.stringContaining('https://wa.me/'),
    )
    expect(within(bar).getByRole('link', { name: 'Kembali ke Semua Produk' })).toHaveAttribute(
      'href',
      '/#produk',
    )
  })
})
