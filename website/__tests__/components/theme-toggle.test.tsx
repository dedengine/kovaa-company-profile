import { render, screen, fireEvent } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { ThemeProvider } from '@/lib/theme-provider'
import { I18nProvider } from '@/lib/i18n-provider'
import { ThemeToggle } from '@/components/theme-toggle'

function renderToggle() {
  return render(
    <I18nProvider>
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    </I18nProvider>,
  )
}

afterEach(() => {
  window.localStorage.clear()
  document.documentElement.classList.remove('dark')
})

describe('ThemeToggle', () => {
  it('shows moon on a light system and switches to dark on click', () => {
    renderToggle()
    const button = screen.getByRole('button', { name: /Tema tampilan: Gelap/ })
    expect(button).toBeDefined()
    fireEvent.click(button)
    expect(window.localStorage.getItem('kovaa-theme')).toBe('dark')
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(screen.getByRole('button', { name: /Tema tampilan: Terang/ })).toBeDefined()
  })

  it('switches back to light on the second click', () => {
    renderToggle()
    fireEvent.click(screen.getByRole('button', { name: /Tema tampilan: Gelap/ }))
    fireEvent.click(screen.getByRole('button', { name: /Tema tampilan: Terang/ }))
    expect(window.localStorage.getItem('kovaa-theme')).toBe('light')
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })
})
