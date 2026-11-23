import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { I18nProvider } from '@/lib/i18n-provider'
import { Services } from '@/components/services'
import { dictionary } from '@/lib/i18n'

function renderServices() {
  return render(
    <I18nProvider>
      <Services />
    </I18nProvider>,
  )
}

describe('Services', () => {
  it('renders the four service pillars with an anchor id', () => {
    renderServices()
    expect(document.getElementById('layanan')).not.toBeNull()
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Four service pillars.')
    const items = dictionary.id.services.items
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(items.length)
    for (const item of items) {
      expect(screen.getByText(item.title)).toBeDefined()
    }
  })

  it('renders every bullet of every pillar', () => {
    renderServices()
    const text = document.body.textContent ?? ''
    for (const item of dictionary.id.services.items) {
      for (const bullet of item.bullets) {
        expect(text).toContain(bullet)
      }
    }
  })
})
