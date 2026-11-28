import { existsSync } from 'node:fs'
import { join } from 'node:path'
import { describe, expect, it } from 'vitest'
import { categories } from '@/data/categories'
import { products } from '@/data/products'

describe('products data', () => {
  it('has exactly 13 products', () => {
    expect(products).toHaveLength(13)
  })

  it('has unique ids and slugs', () => {
    expect(new Set(products.map((p) => p.id)).size).toBe(13)
    expect(new Set(products.map((p) => p.slug)).size).toBe(13)
  })

  it('assigns every product a valid category', () => {
    const valid = new Set(categories.map((c) => c.id))
    for (const p of products) {
      expect(valid.has(p.category), `${p.slug} → ${p.category}`).toBe(true)
    }
  })

  it('has at least one product per category', () => {
    for (const c of categories) {
      expect(products.filter((p) => p.category === c.id).length).toBeGreaterThan(0)
    }
  })

  it('references image files that exist in public/products', () => {
    for (const p of products) {
      expect(p.image.startsWith('/products/')).toBe(true)
      expect(
        existsSync(join(process.cwd(), 'public', p.image)),
        `${p.image} missing`,
      ).toBe(true)
    }
  })

  it('fills name, description and alt in both languages', () => {
    for (const p of products) {
      for (const key of ['name', 'description', 'alt'] as const) {
        expect(p[key].id.trim().length, `${p.slug}.${key}.id`).toBeGreaterThan(0)
        expect(p[key].en.trim().length, `${p.slug}.${key}.en`).toBeGreaterThan(0)
      }
    }
  })
})

describe('categories data', () => {
  it('has unique ids and localized labels', () => {
    expect(new Set(categories.map((c) => c.id)).size).toBe(categories.length)
    for (const c of categories) {
      expect(c.label.id.trim().length).toBeGreaterThan(0)
      expect(c.label.en.trim().length).toBeGreaterThan(0)
    }
  })
})
