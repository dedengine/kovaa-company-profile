import { render, screen, fireEvent } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ThemeProvider } from '@/lib/theme-provider'
import { I18nProvider } from '@/lib/i18n-provider'
import { ThemeToggle } from './theme-toggle'

function renderToggle() {
  return render(
    <I18nProvider>
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    </I18nProvider>,
  )
}

describe('ThemeToggle', () => {
  it('starts on system and cycles system → light → dark → system', () => {
    renderToggle()
    const button = screen.getByRole('button', { name: /Tema tampilan: Sistem/ })
    expect(button).toBeDefined()
    fireEvent.click(button)
    expect(screen.getByRole('button', { name: /Tema tampilan: Terang/ })).toBeDefined()
    fireEvent.click(screen.getByRole('button', { name: /Tema tampilan: Terang/ }))
    expect(screen.getByRole('button', { name: /Tema tampilan: Gelap/ })).toBeDefined()
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    fireEvent.click(screen.getByRole('button', { name: /Tema tampilan: Gelap/ }))
    expect(screen.getByRole('button', { name: /Tema tampilan: Sistem/ })).toBeDefined()
  })
})
