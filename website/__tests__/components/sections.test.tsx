import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { I18nProvider } from '@/lib/i18n-provider'
import { About } from '@/components/about'
import { Advantages } from '@/components/advantages'
import { Process } from '@/components/process'

function renderSections() {
  return render(
    <I18nProvider>
      <About />
      <Advantages />
      <Process />
    </I18nProvider>,
  )
}

describe('about, advantages, process sections', () => {
  it('renders all section copy in the DOM (crawler-safe, no JS-only content)', () => {
    renderSections()
    const text = document.body.textContent ?? ''
    expect(text).toContain('Tentang KOVAA')
    expect(text).toContain('interior komersial')
    expect(text).toContain('Mengapa Memilih KOVAA')
    expect(text).toContain('Berpengalaman')
    expect(text).toContain('Proses Kerja Kami')
  })

  it('renders every advantage item and process step', () => {
    renderSections()
    expect(screen.getAllByRole('heading', { level: 3 }).length).toBeGreaterThanOrEqual(7) // 4 advantages + 3 steps
    const headings = screen.getAllByRole('heading', { level: 2 })
    expect(headings).toHaveLength(3)
  })

  it('keeps section ids for anchor navigation', () => {
    renderSections()
    for (const id of ['tentang', 'keunggulan', 'proses']) {
      expect(document.getElementById(id)).not.toBeNull()
    }
  })

  it('does not hide content by default (no opacity/display none inline styles)', () => {
    const { container } = renderSections()
    expect(container.querySelectorAll('[style*="opacity: 0"]')).toHaveLength(0)
    expect(container.querySelectorAll('[style*="opacity:0"]')).toHaveLength(0)
    expect(container.querySelectorAll('[style*="display: none"]')).toHaveLength(0)
    expect(container.querySelectorAll('[style*="display:none"]')).toHaveLength(0)
  })

  it('marks decorative advantage icons as aria-hidden', () => {
    const { container } = renderSections()
    const icons = container.querySelectorAll('svg[aria-hidden="true"]')
    expect(icons.length).toBeGreaterThanOrEqual(4)
  })
})
