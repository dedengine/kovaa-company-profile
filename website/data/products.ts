import type { CategoryId } from './categories'

export type Lang = 'id' | 'en'
export type Localized = Record<Lang, string>

export interface Product {
  id: string
  slug: string
  category: CategoryId
  name: Localized
  description: Localized
  /** Relative path under public/ */
  image: string
  alt: Localized
}

export const products: Product[] = [
  {
    id: 'commercial-interior-fit-out-1',
    slug: 'commercial-interior-fit-out-1',
    category: 'rak-supermarket',
    name: { id: 'Commercial Interior & Fit-Out 1', en: 'Commercial Interior & Fit-Out 1' },
    description: {
      id: 'Portofolio pengerjaan interior komersial dan fit-out oleh KOVAA.',
      en: 'Commercial interior and fit-out project portfolio by KOVAA.',
    },
    image: '/products/commercial-interior-fit-out-1.webp',
    alt: {
      id: 'Dokumentasi proyek Commercial Interior & Fit-Out KOVAA 1',
      en: 'KOVAA Commercial Interior & Fit-Out project documentation 1',
    },
  },
  {
    id: 'commercial-interior-fit-out-2',
    slug: 'commercial-interior-fit-out-2',
    category: 'rak-supermarket',
    name: { id: 'Commercial Interior & Fit-Out 2', en: 'Commercial Interior & Fit-Out 2' },
    description: {
      id: 'Portofolio pengerjaan interior komersial dan fit-out oleh KOVAA.',
      en: 'Commercial interior and fit-out project portfolio by KOVAA.',
    },
    image: '/products/commercial-interior-fit-out-2.webp',
    alt: {
      id: 'Dokumentasi proyek Commercial Interior & Fit-Out KOVAA 2',
      en: 'KOVAA Commercial Interior & Fit-Out project documentation 2',
    },
  },
  {
    id: 'commercial-interior-fit-out-3',
    slug: 'commercial-interior-fit-out-3',
    category: 'rak-supermarket',
    name: { id: 'Commercial Interior & Fit-Out 3', en: 'Commercial Interior & Fit-Out 3' },
    description: {
      id: 'Portofolio pengerjaan interior komersial dan fit-out oleh KOVAA.',
      en: 'Commercial interior and fit-out project portfolio by KOVAA.',
    },
    image: '/products/commercial-interior-fit-out-3.webp',
    alt: {
      id: 'Dokumentasi proyek Commercial Interior & Fit-Out KOVAA 3',
      en: 'KOVAA Commercial Interior & Fit-Out project documentation 3',
    },
  },
  {
    id: 'commercial-interior-fit-out-4',
    slug: 'commercial-interior-fit-out-4',
    category: 'rak-supermarket',
    name: { id: 'Commercial Interior & Fit-Out 4', en: 'Commercial Interior & Fit-Out 4' },
    description: {
      id: 'Portofolio pengerjaan interior komersial dan fit-out oleh KOVAA.',
      en: 'Commercial interior and fit-out project portfolio by KOVAA.',
    },
    image: '/products/commercial-interior-fit-out-4.webp',
    alt: {
      id: 'Dokumentasi proyek Commercial Interior & Fit-Out KOVAA 4',
      en: 'KOVAA Commercial Interior & Fit-Out project documentation 4',
    },
  },
  {
    id: 'commercial-interior-fit-out-5',
    slug: 'commercial-interior-fit-out-5',
    category: 'rak-supermarket',
    name: { id: 'Commercial Interior & Fit-Out 5', en: 'Commercial Interior & Fit-Out 5' },
    description: {
      id: 'Portofolio pengerjaan interior komersial dan fit-out oleh KOVAA.',
      en: 'Commercial interior and fit-out project portfolio by KOVAA.',
    },
    image: '/products/commercial-interior-fit-out-5.webp',
    alt: {
      id: 'Dokumentasi proyek Commercial Interior & Fit-Out KOVAA 5',
      en: 'KOVAA Commercial Interior & Fit-Out project documentation 5',
    },
  },
  {
    id: 'commercial-interior-fit-out-6',
    slug: 'commercial-interior-fit-out-6',
    category: 'rak-supermarket',
    name: { id: 'Commercial Interior & Fit-Out 6', en: 'Commercial Interior & Fit-Out 6' },
    description: {
      id: 'Portofolio pengerjaan interior komersial dan fit-out oleh KOVAA.',
      en: 'Commercial interior and fit-out project portfolio by KOVAA.',
    },
    image: '/products/commercial-interior-fit-out-6.webp',
    alt: {
      id: 'Dokumentasi proyek Commercial Interior & Fit-Out KOVAA 6',
      en: 'KOVAA Commercial Interior & Fit-Out project documentation 6',
    },
  },
  {
    id: 'commercial-interior-fit-out-7',
    slug: 'commercial-interior-fit-out-7',
    category: 'rak-supermarket',
    name: { id: 'Commercial Interior & Fit-Out 7', en: 'Commercial Interior & Fit-Out 7' },
    description: {
      id: 'Portofolio pengerjaan interior komersial dan fit-out oleh KOVAA.',
      en: 'Commercial interior and fit-out project portfolio by KOVAA.',
    },
    image: '/products/commercial-interior-fit-out-7.webp',
    alt: {
      id: 'Dokumentasi proyek Commercial Interior & Fit-Out KOVAA 7',
      en: 'KOVAA Commercial Interior & Fit-Out project documentation 7',
    },
  },
  {
    id: 'rak-dinding-minimi',
    slug: 'rak-dinding-minimi',
    category: 'rak-dinding-serbaguna',
    name: { id: 'Rak Dinding', en: 'Wall Shelf' },
    description: {
      id: 'Rak dinding minimalis untuk memaksimalkan ruang toko dan menampilkan produk di area terbatas.',
      en: 'Minimalist wall-mounted shelf that maximizes retail space in tight areas.',
    },
    image: '/products/rak-dinding-minimi.png',
    alt: {
      id: 'Rak dinding minimalis terpasang di dinding toko',
      en: 'Minimalist wall shelf mounted on a store wall',
    },
  },
  {
    id: 'rak-serbaguna-minimalis',
    slug: 'rak-serbaguna-minimalis',
    category: 'rak-dinding-serbaguna',
    name: { id: 'Rak Serbaguna', en: 'Multipurpose Shelf' },
    description: {
      id: 'Rak serbaguna untuk aneka kebutuhan toko, dari sembako hingga alat tulis.',
      en: 'Multipurpose shelving suited for groceries, stationery, and general retail.',
    },
    image: '/products/rak-serbaguna-minimalis.png',
    alt: {
      id: 'Rak serbaguna minimalis dengan berbagai jenis produk',
      en: 'Minimalist multipurpose shelf holding assorted products',
    },
  },
  {
    id: 'drawer-rangka-natural',
    slug: 'drawer-rangka-natural',
    category: 'drawer',
    name: { id: 'Drawer Rangka', en: 'Frame Drawer' },
    description: {
      id: 'Drawer dengan rangka kayu natural, kuat dan estetik untuk area konter toko.',
      en: 'Drawer unit with a natural wood frame, sturdy and aesthetic for retail counters.',
    },
    image: '/products/drawer-rangka-natural.png',
    alt: {
      id: 'Drawer dengan rangka kayu natural di konter toko',
      en: 'Drawer unit with natural wood frame at a retail counter',
    },
  },
  {
    id: 'drawer-solid-natural',
    slug: 'drawer-solid-natural',
    category: 'drawer',
    name: { id: 'Drawer Solid', en: 'Solid Drawer' },
    description: {
      id: 'Drawer solid wood natural dengan kapasitas besar untuk penyimpanan rapi.',
      en: 'Solid natural wood drawers with generous capacity for tidy storage.',
    },
    image: '/products/drawer-solid-natural.png',
    alt: {
      id: 'Drawer solid wood natural bertumpuk rapi',
      en: 'Solid natural wood drawers stacked neatly',
    },
  },
  {
    id: 'salami-multidrawer',
    slug: 'salami-multidrawer',
    category: 'drawer',
    name: { id: 'Salami', en: 'Salami Cabinet' },
    description: {
      id: 'Kabinet multi-drawer untuk menyimpan barang kecil seperti aksesoris dan spare part.',
      en: 'Multi-drawer cabinet for small items like accessories and spare parts.',
    },
    image: '/products/salami-multidrawer.png',
    alt: {
      id: 'Kabinet multi-drawer Salami dengan banyak laci kecil',
      en: 'Salami multi-drawer cabinet with many small drawers',
    },
  },
  {
    id: 'rak-display-sayur-buah',
    slug: 'rak-display-sayur-buah',
    category: 'rak-sayur-buah',
    name: { id: 'Rak Sayur & Buah', en: 'Fruit & Veg Shelf' },
    description: {
      id: 'Rak display kayu khusus sayur dan buah, tampilan segar dan mudah dijangkau pembeli.',
      en: 'Wooden display shelf designed for fresh fruit and vegetable presentation.',
    },
    image: '/products/rak-display-sayur-buah.png',
    alt: {
      id: 'Rak display kayu untuk sayur dan buah',
      en: 'Wooden display shelf for fruit and vegetables',
    },
  },
]
