import { render, screen, fireEvent, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { I18nProvider } from '@/lib/i18n-provider'
import { Products } from './products'
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

describe('Products grid + lightbox', () => {
  it('shows all 12 products by default', () => {
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

  it('opens a lightbox with the product details when a card is clicked', async () => {
    const user = userEvent.setup()
    renderProducts()
    await user.click(screen.getByRole('button', { name: products[0].name.id }))
    const dialog = screen.getByRole('dialog')
    expect(dialog).toHaveAttribute('aria-modal', 'true')
    expect(dialog.textContent).toContain(products[0].name.id)
    expect(dialog.textContent).toContain(products[0].description.id)
  })

  it('closes on Escape and returns focus to the card that opened it', async () => {
    const user = userEvent.setup()
    renderProducts()
    const card = screen.getByRole('button', { name: products[0].name.id })
    await user.click(card)
    expect(screen.getByRole('dialog')).toBeDefined()
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(screen.queryByRole('dialog')).toBeNull()
    expect(card).toHaveFocus()
  })

  it('navigates between products with arrow keys', async () => {
    const user = userEvent.setup()
    renderProducts()
    await user.click(screen.getByRole('button', { name: products[0].name.id }))
    fireEvent.keyDown(document, { key: 'ArrowRight' })
    const dialog = screen.getByRole('dialog')
    expect(within(dialog).getByText(products[1].name.id)).toBeDefined()
  })
})
