import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { I18nProvider } from '@/lib/i18n-provider'
import { Products } from '@/components/products'
import { products } from '@/data/products'

function renderProducts() {
  return render(
    <I18nProvider>
      <Products />
    </I18nProvider>,
  )
}

function cards() {
  return document.querySelectorAll('[data-testid="product-card"]')
}

describe('Products row', () => {
  it('shows all 12 products in one row', () => {
    renderProducts()
    expect(cards()).toHaveLength(12)
  })

  it('filters products by category', async () => {
    const user = userEvent.setup()
    renderProducts()
    await user.click(screen.getByRole('button', { name: 'Drawer' }))
    const expected = products.filter((p) => p.category === 'drawer').length
    expect(cards()).toHaveLength(expected)
    expect(screen.getByRole('button', { name: 'Drawer' })).toHaveAttribute(
      'aria-pressed',
      'true',
    )
  })

  it('links every card to its detail page', () => {
    renderProducts()
    const first = screen.getByRole('link', { name: products[0].name.id })
    expect(first).toHaveAttribute('href', `/produk/${products[0].slug}`)
  })

  it('has scroll arrows that shift the row', async () => {
    const user = userEvent.setup()
    renderProducts()
    const row = screen.getByTestId('product-row')
    expect(row.scrollLeft).toBe(0)
    await user.click(screen.getByRole('button', { name: 'Geser ke kanan' }))
    expect(row.scrollLeft).toBeGreaterThan(0)
    await user.click(screen.getByRole('button', { name: 'Geser ke kiri' }))
    expect(row.scrollLeft).toBe(0)
  })
})
