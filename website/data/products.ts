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

// Peta slug → nama file asli di produk/ (referensi source of truth):
// rak-display-supermarket-1 → "Rak Display Rak Supermarket Modern untuk Toko Grosir-1.png"
// rak-display-supermarket-2 → "Rak Display Rak Supermarket Modern untuk Toko Grosir-2.png"
// rak-gondola-multilayer-1..4 → "Rak Supermarket Kerangka Besi Gondola Multilayer-1..4.png"
// rak-display-sayur-buah → "Rak Display Sayur dan Buah Kayu Supermarket.png"
// rak-dinding-minimi → "Rak Dinding Minimi.png"
// rak-serbaguna-minimalis → "Rak Serbaguna Minimalis.png"
// drawer-rangka-natural → "Drawer Rangka Natural.png"
// drawer-solid-natural → "Drawer Solid Natural.png"
// salami-multidrawer → "Salami Multidrawer.png"

export const products: Product[] = [
  {
    id: 'rak-display-supermarket-1',
    slug: 'rak-display-supermarket-1',
    category: 'rak-supermarket',
    name: { id: 'Rak Display Supermarket, Model Grosir A', en: 'Supermarket Display Shelf, Wholesale Model A' },
    description: {
      id: 'Rak display modern untuk toko grosir dan minimarket dengan susunan rak yang fleksibel.',
      en: 'Modern display shelving for wholesale stores and minimarkets with a flexible layout.',
    },
    image: '/products/rak-display-supermarket-1.png',
    alt: {
      id: 'Rak display supermarket modern model grosir A di area toko',
      en: 'Modern supermarket display shelf, wholesale model A, in a retail floor',
    },
  },
  {
    id: 'rak-display-supermarket-2',
    slug: 'rak-display-supermarket-2',
    category: 'rak-supermarket',
    name: { id: 'Rak Display Supermarket, Model Grosir B', en: 'Supermarket Display Shelf, Wholesale Model B' },
    description: {
      id: 'Varian display supermarket dengan kapasitas susun lebih banyak dan struktur kokoh.',
      en: 'Supermarket display variant with a higher tier capacity and sturdy frame.',
    },
    image: '/products/rak-display-supermarket-2.png',
    alt: {
      id: 'Rak display supermarket model grosir B dengan banyak tingkat rak',
      en: 'Supermarket display shelf, wholesale model B, with multiple tiers',
    },
  },
  {
    id: 'rak-gondola-multilayer-1',
    slug: 'rak-gondola-multilayer-1',
    category: 'rak-supermarket',
    name: { id: 'Rak Gondola Multilayer, Model 1', en: 'Multi-Layer Gondola Shelf, Model 1' },
    description: {
      id: 'Rak gondola kerangka besi multilayer untuk menampilkan produk dalam jumlah besar.',
      en: 'Steel-frame multi-layer gondola shelf for high-volume product display.',
    },
    image: '/products/rak-gondola-multilayer-1.png',
    alt: {
      id: 'Rak gondola multilayer kerangka besi model 1',
      en: 'Steel-frame multi-layer gondola shelf, model 1',
    },
  },
  {
    id: 'rak-gondola-multilayer-2',
    slug: 'rak-gondola-multilayer-2',
    category: 'rak-supermarket',
    name: { id: 'Rak Gondola Multilayer, Model 2', en: 'Multi-Layer Gondola Shelf, Model 2' },
    description: {
      id: 'Konfigurasi gondola multilayer kedua, cocok untuk lorong toko utama.',
      en: 'Second multi-layer gondola configuration, ideal for main store aisles.',
    },
    image: '/products/rak-gondola-multilayer-2.png',
    alt: {
      id: 'Rak gondola multilayer model 2 di lorong toko',
      en: 'Multi-layer gondola shelf, model 2, in a store aisle',
    },
  },
  {
    id: 'rak-gondola-multilayer-3',
    slug: 'rak-gondola-multilayer-3',
    category: 'rak-supermarket',
    name: { id: 'Rak Gondola Multilayer, Model 3', en: 'Multi-Layer Gondola Shelf, Model 3' },
    description: {
      id: 'Gondola multilayer dengan kompartemen luas untuk produk beragam sekaligus.',
      en: 'Multi-layer gondola with wide compartments for mixed product ranges.',
    },
    image: '/products/rak-gondola-multilayer-3.png',
    alt: {
      id: 'Rak gondola multilayer model 3 dengan kompartemen luas',
      en: 'Multi-layer gondola shelf, model 3, with wide compartments',
    },
  },
  {
    id: 'rak-gondola-multilayer-4',
    slug: 'rak-gondola-multilayer-4',
    category: 'rak-supermarket',
    name: { id: 'Rak Gondola Multilayer, Model 4', en: 'Multi-Layer Gondola Shelf, Model 4' },
    description: {
      id: 'Konfigurasi gondola multilayer terbesar, mendukung volume produk maksimal.',
      en: 'Largest multi-layer gondola configuration, supporting maximum product volume.',
    },
    image: '/products/rak-gondola-multilayer-4.png',
    alt: {
      id: 'Rak gondola multilayer model 4 dengan volume tampung terbesar',
      en: 'Multi-layer gondola shelf, model 4, with maximum capacity',
    },
  },
  {
    id: 'rak-dinding-minimi',
    slug: 'rak-dinding-minimi',
    category: 'rak-dinding-serbaguna',
    name: { id: 'Rak Dinding Minimalis', en: 'Minimalist Wall Shelf' },
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
    name: { id: 'Rak Serbaguna Minimalis', en: 'Minimalist Multipurpose Shelf' },
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
    name: { id: 'Drawer Rangka Natural', en: 'Natural Frame Drawer Unit' },
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
    name: { id: 'Drawer Solid Natural', en: 'Solid Natural Drawer Unit' },
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
    name: { id: 'Salami Multidrawer', en: 'Salami Multi-Drawer Cabinet' },
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
    name: { id: 'Rak Display Sayur & Buah Kayu', en: 'Wooden Fruit & Vegetable Display Shelf' },
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
