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
    label: {
      id: 'Commercial Interior & Fit-Out',
      en: 'Commercial Interior & Fit-Out',
    },
  },
  {
    id: 'rak-dinding-serbaguna',
    label: {
      id: 'Custom Furniture & Backwall',
      en: 'Custom Furniture & Backwall',
    },
  },
  {
    id: 'drawer',
    label: {
      id: 'Booth Exhibition & Event Setup',
      en: 'Booth Exhibition & Event Setup',
    },
  },
  {
    id: 'rak-sayur-buah',
    label: {
      id: 'Retail Furniture Installation & Relocation',
      en: 'Retail Furniture Installation & Relocation',
    },
  },
]
