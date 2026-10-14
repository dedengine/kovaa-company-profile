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

  it('renders a spec table with all spec rows', () => {
    renderDetail()
    const table = screen.getByRole('table')
    for (const spec of product.specs) {
      expect(within(table).getByText(spec.label.id)).toBeDefined()
      expect(within(table).getByText(spec.value.id)).toBeDefined()
    }
  })

  it('links back to the products section and home', () => {
    renderDetail()
    expect(screen.getByRole('link', { name: 'Kembali ke Semua Produk' })).toHaveAttribute(
      'href',
      '/#produk',
    )
    expect(screen.getByRole('link', { name: 'Beranda' })).toHaveAttribute('href', '/')
  })

  it('opens WhatsApp with the product name prefilled', () => {
    renderDetail()
    const wa = screen.getByRole('link', { name: 'Tanya Produk Ini' })
    const href = wa.getAttribute('href') ?? ''
    expect(href.startsWith(`https://wa.me/${contact.whatsapp}`)).toBe(true)
    expect(decodeURIComponent(href)).toContain(product.name.id)
  })
})
