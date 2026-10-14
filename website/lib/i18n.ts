import type { Lang } from '@/data/products'

/**
 * Semua copy situs. Struktur key `id` dan `en` harus identik
 * (dijaga oleh data/i18n.test.ts).
 */
export const dictionary = {
  id: {
    nav: {
      tentang: 'Tentang',
      produk: 'Produk',
      keunggulan: 'Keunggulan',
      proses: 'Proses',
      kontak: 'Kontak',
      openMenu: 'Buka menu',
      closeMenu: 'Tutup menu',
      skipToContent: 'Lewati ke konten',
      mainNav: 'Navigasi utama',
      mobileNav: 'Navigasi mobile',
    },
    hero: {
      title: 'Create. Build. Deliver.',
      subtitle:
        'KOVAA menciptakan, membangun, dan mengirim peralatan ritel berkualitas — rak supermarket, gondola, rak dinding, dan drawer — siap memperkuat tampilan toko Anda.',
      ctaProducts: 'Lihat Produk',
      ctaContact: 'Hubungi Kami',
      imageAlt: 'Rak supermarket KOVAA tampil rapi dalam sebuah toko modern',
    },
    ctaBanner: {
      title: 'Siap Memperkuat Tampilan Toko Anda?',
      subtitle:
        'Diskusikan kebutuhan rak Anda dengan tim KOVAA dan dapatkan penawaran terbaik — custom ukuran, material kokoh, siap pasang.',
      cta: 'Hubungi via WhatsApp',
      imageAlt: 'Rak KOVAA terpasang di area toko',
    },
    about: {
      title: 'Tentang KOVAA',
      eyebrow: 'Profil Perusahaan',
      badge: 'Peralatan ritel untuk toko Anda',
      imageAlt: 'Rak KOVAA terpasang di dalam toko',
      body1:
        'KOVAA adalah penyedia peralatan ritel untuk toko, minimarket, dan supermarket. Kami mengerjakan rak supermarket, rak gondola kerangka besi, rak dinding, rak sayur-buah, hingga drawer kayu solid.',
      body2:
        'Setiap produk kami buat sesuai kebutuhan toko Anda: ukuran, tingkat, dan material menyesuaikan ruang serta karakter merchandise. Dari pembuatan hingga pengiriman, satu tim menangani semuanya.',
    },
    advantages: {
      title: 'Mengapa KOVAA',
      eyebrow: 'Keunggulan Kami',
      subtitle:
        'Kami mengerjakan peralatan ritel yang awet, rapi, dan pas untuk ruang toko Anda.',
      items: [
        {
          title: 'Custom-Made',
          desc: 'Ukuran, tingkat, dan warna disesuaikan dengan ruang dan kebutuhan toko Anda.',
        },
        {
          title: 'Material Kokoh',
          desc: 'Kerangka besi dan kayu pilihan untuk daya tahan jangka panjang di area ramai.',
        },
        {
          title: 'Harga Langsung Pabrik',
          desc: 'Beli langsung dari pembuat, tanpa perantara, dengan kualitas yang terjaga.',
        },
        {
          title: 'Pengiriman & Pemasangan',
          desc: 'Kami antar dan pasang di lokasi Anda, siap digunakan.',
        },
      ],
    },
    process: {
      title: 'Proses Kerja Kami',
      eyebrow: 'Cara Kerja',
      steps: [
        {
          title: 'Create',
          desc: 'Kami dengarkan kebutuhan toko Anda dan rancang solusi rak yang tepat.',
        },
        {
          title: 'Build',
          desc: 'Produksi dengan material pilihan dan standar kualitas yang konsisten.',
        },
        {
          title: 'Deliver',
          desc: 'Pengiriman dan pemasangan di lokasi, tepat waktu dan siap pakai.',
        },
      ],
    },
    products: {
      title: 'Produk Kami',
      eyebrow: 'Katalog Produk',
      subtitle: 'Pilih kategori untuk melihat produk KOVAA.',
      filterAll: 'Semua',
      viewLarger: 'Lihat lebih besar',
      close: 'Tutup',
      previous: 'Sebelumnya',
      next: 'Berikutnya',
      imageCounter: 'Produk {current} dari {total}',
    },
    contact: {
      title: 'Hubungi Kami',
      eyebrow: 'Kontak',
      subtitle: 'Diskusikan kebutuhan rak untuk toko Anda bersama tim KOVAA.',
      addressLabel: 'Alamat',
      phoneLabel: 'Telepon / WhatsApp',
      emailLabel: 'Email',
      hoursLabel: 'Jam Operasional',
      whatsappCta: 'Chat via WhatsApp',
      emailCta: 'Kirim Email',
    },
    footer: {
      tagline: 'Peralatan ritel: create, build, deliver.',
      rights: 'KOVAA. Seluruh hak cipta dilindungi.',
      quickLinks: 'Tautan Cepat',
      language: 'Bahasa',
    },
  },
  en: {
    nav: {
      tentang: 'About',
      produk: 'Products',
      keunggulan: 'Why Us',
      proses: 'Process',
      kontak: 'Contact',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      skipToContent: 'Skip to content',
      mainNav: 'Main navigation',
      mobileNav: 'Mobile navigation',
    },
    hero: {
      title: 'Create. Build. Deliver.',
      subtitle:
        'KOVAA creates, builds, and delivers quality retail fixtures — supermarket shelves, gondolas, wall racks, and drawers — ready to strengthen your store display.',
      ctaProducts: 'View Products',
      ctaContact: 'Contact Us',
      imageAlt: 'KOVAA supermarket shelving neatly displayed in a modern store',
    },
    ctaBanner: {
      title: 'Ready to Strengthen Your Store Display?',
      subtitle:
        'Discuss your shelving needs with the KOVAA team and get the best offer — custom dimensions, durable materials, ready to install.',
      cta: 'Chat on WhatsApp',
      imageAlt: 'KOVAA shelving installed in a retail store',
    },
    about: {
      title: 'About KOVAA',
      eyebrow: 'Company Profile',
      badge: 'Retail fixtures for your store',
      imageAlt: 'KOVAA shelving installed inside a store',
      body1:
        'KOVAA is a retail fixtures provider for stores, minimarkets, and supermarkets. We build supermarket shelves, steel-frame gondolas, wall racks, fruit and vegetable shelving, and solid wood drawers.',
      body2:
        'Every product is made to fit your store: dimensions, tiers, and materials adapt to your space and merchandise. From manufacturing to delivery, one team handles it all.',
    },
    advantages: {
      title: 'Why KOVAA',
      eyebrow: 'Our Advantages',
      subtitle:
        'We build retail fixtures that last, look sharp, and fit your store space.',
      items: [
        {
          title: 'Custom-Made',
          desc: 'Dimensions, tiers, and finishes tailored to your store space and needs.',
        },
        {
          title: 'Durable Materials',
          desc: 'Steel frames and selected woods built to last in high-traffic areas.',
        },
        {
          title: 'Factory-Direct Pricing',
          desc: 'Buy straight from the maker — no middlemen, quality intact.',
        },
        {
          title: 'Delivery & Installation',
          desc: 'We deliver and install on site, ready for use.',
        },
      ],
    },
    process: {
      title: 'Our Process',
      eyebrow: 'How We Work',
      steps: [
        {
          title: 'Create',
          desc: 'We listen to your store needs and design the right shelving solution.',
        },
        {
          title: 'Build',
          desc: 'Production with selected materials and consistent quality standards.',
        },
        {
          title: 'Deliver',
          desc: 'Delivery and installation at your site, on time and ready to use.',
        },
      ],
    },
    products: {
      title: 'Our Products',
      eyebrow: 'Product Catalog',
      subtitle: 'Choose a category to browse KOVAA products.',
      filterAll: 'All',
      viewLarger: 'View larger',
      close: 'Close',
      previous: 'Previous',
      next: 'Next',
      imageCounter: 'Product {current} of {total}',
    },
    contact: {
      title: 'Contact Us',
      eyebrow: 'Contact',
      subtitle: 'Discuss your store shelving needs with the KOVAA team.',
      addressLabel: 'Address',
      phoneLabel: 'Phone / WhatsApp',
      emailLabel: 'Email',
      hoursLabel: 'Operating Hours',
      whatsappCta: 'Chat on WhatsApp',
      emailCta: 'Send Email',
    },
    footer: {
      tagline: 'Retail fixtures: create, build, deliver.',
      rights: 'KOVAA. All rights reserved.',
      quickLinks: 'Quick Links',
      language: 'Language',
    },
  },
} satisfies Record<Lang, unknown>

export type Dictionary = typeof dictionary
