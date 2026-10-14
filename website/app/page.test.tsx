import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Home from './page'
import { I18nProvider } from '@/lib/i18n-provider'
import { ThemeProvider } from '@/lib/theme-provider'

function renderHome() {
  return render(
    <I18nProvider>
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    </I18nProvider>,
  )
}

describe('Home page', () => {
  it('offers a skip link as the first focus stop', () => {
    renderHome()
    expect(screen.getByRole('link', { name: 'Lewati ke konten' })).toHaveAttribute(
      'href',
      '#main',
    )
  })

  it('places the hero inside the main landmark', () => {
    const { container } = renderHome()
    const main = container.querySelector('main')
    expect(main).not.toBeNull()
    expect(main!.querySelector('h1')).not.toBeNull()
  })
})
