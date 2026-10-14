import type { Localized } from './products'

export type CategoryId =
  | 'rak-supermarket'
  | 'rak-dinding-serbaguna'
  | 'drawer'
  | 'rak-sayur-buah'

export type Category = { id: CategoryId; label: Localized }

export const categories: Category[] = [
  {
    id: 'rak-supermarket',
    label: { id: 'Rak Supermarket & Gondola', en: 'Supermarket & Gondola Shelving' },
  },
  {
    id: 'rak-dinding-serbaguna',
    label: { id: 'Rak Dinding & Serbaguna', en: 'Wall & Multipurpose Shelving' },
  },
  {
    id: 'drawer',
    label: { id: 'Drawer', en: 'Drawer Units' },
  },
  {
    id: 'rak-sayur-buah',
    label: { id: 'Rak Sayur & Buah', en: 'Fruit & Vegetable Shelving' },
  },
]
