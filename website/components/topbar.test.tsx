import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Topbar } from './topbar'
import { contact } from '@/data/contact'

describe('Topbar', () => {
  it('shows phone, email and hours as links', () => {
    render(<Topbar />)
    expect(screen.getByRole('link', { name: contact.phone })).toHaveAttribute('href')
    expect(screen.getByRole('link', { name: contact.email })).toHaveAttribute(
      'href',
      `mailto:${contact.email}`,
    )
    expect(screen.getByText(contact.hours)).toBeDefined()
  })

  it('shows the brand tagline', () => {
    render(<Topbar />)
    expect(screen.getByText('CREATE • BUILD • DELIVER')).toBeDefined()
  })
})
