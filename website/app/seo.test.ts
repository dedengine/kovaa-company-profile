import { describe, expect, it } from 'vitest'
import { contact } from '@/data/contact'
import { organizationJsonLd } from '@/lib/seo'
import sitemap from '@/app/sitemap'

describe('organization JSON-LD', () => {
  it('is a LocalBusiness carrying the contact details', () => {
    const jsonLd = organizationJsonLd(contact)
    expect(jsonLd['@type']).toBe('LocalBusiness')
    expect(jsonLd.name).toBe(contact.company)
    expect(jsonLd.address).toBe(contact.address)
    expect(jsonLd.email).toBe(contact.email)
    expect(jsonLd.telephone).toBe(contact.phone)
  })
})

describe('sitemap', () => {
  it('uses the absolute site URL from contact data', async () => {
    const result = await sitemap()
    expect(result.length).toBeGreaterThan(0)
    for (const entry of result) {
      expect(entry.url.startsWith(contact.siteUrl)).toBe(true)
    }
  })
})
