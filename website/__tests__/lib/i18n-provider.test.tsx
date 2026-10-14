import { render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { I18nProvider, useI18n } from '@/lib/i18n-provider'
import { LanguageToggle } from '@/components/language-toggle'

function Probe() {
  const { t, lang } = useI18n()
  return (
    <div>
      <span data-testid="lang">{lang}</span>
      <span data-testid="title">{t('hero.title')}</span>
      <span data-testid="nav">{t('nav.tentang')}</span>
    </div>
  )
}

function renderProbe() {
  return render(
    <I18nProvider>
      <Probe />
      <LanguageToggle />
    </I18nProvider>,
  )
}

afterEach(() => {
  window.history.replaceState({}, '', '/')
  document.documentElement.lang = ''
})

describe('I18nProvider', () => {
  it('renders Indonesian copy by default', () => {
    renderProbe()
    expect(screen.getByTestId('lang')).toHaveTextContent('id')
    expect(screen.getByTestId('title')).toHaveTextContent('Create. Build. Deliver.')
    expect(screen.getByTestId('nav')).toHaveTextContent('Tentang')
  })

  it('switches to English when ?lang=en', () => {
    window.history.replaceState({}, '', '/?lang=en')
    renderProbe()
    expect(screen.getByTestId('lang')).toHaveTextContent('en')
    expect(screen.getByTestId('nav')).toHaveTextContent('About')
  })

  it('sets <html lang> to match the active language', () => {
    window.history.replaceState({}, '', '/?lang=en')
    renderProbe()
    expect(document.documentElement.lang).toBe('en')
  })

  it('throws a clear error for a missing i18n key', () => {
    function Missing() {
      const { t } = useI18n()
      return <span>{t('nav.tidakAda')}</span>
    }
    expect(() =>
      render(
        <I18nProvider>
          <Missing />
        </I18nProvider>,
      ),
    ).toThrow(/nav\.tidakAda/)
  })
})

describe('LanguageToggle', () => {
  it('marks the active language with aria-pressed', () => {
    window.history.replaceState({}, '', '/?lang=en')
    renderProbe()
    const enButton = screen.getByRole('button', { name: /english/i })
    const idButton = screen.getByRole('button', { name: /indonesia/i })
    expect(enButton).toHaveAttribute('aria-pressed', 'true')
    expect(idButton).toHaveAttribute('aria-pressed', 'false')
  })
})
