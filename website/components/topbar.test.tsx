import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Topbar } from './topbar'
import { contact } from '@/data/contact'

describe('Topbar', () => {
  it('shows phone and email as links', () => {
    render(<Topbar />)
    expect(screen.getByRole('link', { name: contact.phone })).toHaveAttribute('href')
    expect(screen.getByRole('link', { name: contact.email })).toHaveAttribute(
      'href',
      `mailto:${contact.email}`,
    )
  })

  it('shows the brand tagline', () => {
    render(<Topbar />)
    expect(screen.getByText('CREATE • BUILD • DELIVER')).toBeDefined()
  })

  it('does not show business hours', () => {
    render(<Topbar />)
    expect(screen.queryByText(/jam|hours/i)).toBeNull()
  })
})
