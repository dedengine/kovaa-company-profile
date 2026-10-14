import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { describe, expect, it } from 'vitest'

function luminance(hex: string): number {
  const m = hex.replace('#', '')
  const rgb = [0, 2, 4].map((i) => {
    const c = parseInt(m.slice(i, i + 2), 16) / 255
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4
  })
  return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]
}

function contrast(a: string, b: string): number {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x)
  return (hi + 0.05) / (lo + 0.05)
}

function tokenFromGlobals(name: string): string {
  const css = readFileSync(join(process.cwd(), 'app/globals.css'), 'utf8')
  const match = css.match(new RegExp(`${name}:\\s*(#[0-9a-fA-F]{6})`))
  expect(match, `token ${name} not found in globals.css`).not.toBeNull()
  return match![1]
}

describe('brand token contrast (spec §4: teks ≥ 4.5:1)', () => {
  it('white text on the orange CTA token passes 4.5:1', () => {
    const orange = tokenFromGlobals('--color-kovaa-orange')
    expect(contrast('#ffffff', orange)).toBeGreaterThanOrEqual(4.5)
  })

  it('white text on the blue token passes 4.5:1', () => {
    const blue = tokenFromGlobals('--color-kovaa-blue')
    expect(contrast('#ffffff', blue)).toBeGreaterThanOrEqual(4.5)
  })
})

describe('dark mode text colors on neutral-950 (spec §4: teks ≥ 4.5:1)', () => {
  const bg = '#0a0a0a'
  it.each([
    ['blue-300 links', '#93c5fd'],
    ['orange-300 eyebrows', '#fdba74'],
    ['white headings', '#ffffff'],
    ['neutral-300 body', '#d4d4d4'],
  ])('%s passes 4.5:1', (_name, fg) => {
    expect(contrast(fg, bg)).toBeGreaterThanOrEqual(4.5)
  })
})
