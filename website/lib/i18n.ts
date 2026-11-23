import type { Lang } from '@/data/products';

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
      backToTop: 'Kembali ke atas',
            mainNav: 'Navigasi utama',
            mobileNav: 'Navigasi mobile',
            themeLabel: 'Tema tampilan',
            themeLight: 'Terang',
            themeDark: 'Gelap',
        },
        hero: {
            title: 'Create. Build. Deliver.',
            badge: 'SOLUSI KREATIF • EKSEKUSI ADAPTIF',
            subtitle:
                'KOVAA bergerak di bidang interior komersial, furniture custom, booth, serta media promosi fisik untuk kebutuhan bisnis dan branding perusahaan.',
            ctaProducts: 'Lihat Produk',
            ctaContact: 'Hubungi Kami',
            imageAlt: 'Rak supermarket KOVAA tampil rapi dalam sebuah toko modern',
        },
        ctaBanner: {
            title: 'Siap Memperkuat Tampilan Toko Anda?',
            subtitle: 'Diskusikan kebutuhan rak Anda dengan tim KOVAA dan dapatkan penawaran terbaik: custom ukuran, material kokoh, siap pasang.',
            cta: 'Hubungi via WhatsApp',
            imageAlt: 'Rak KOVAA terpasang di area toko',
        },
        about: {
            title: 'Tentang KOVAA',
            eyebrow: 'Profil Perusahaan',
            imageAlt: 'Foto tim KOVAA bersama di lokasi proyek',
            body1: 'KOVAA adalah partner pengerjaan kebutuhan interior komersial, furniture custom, booth, serta media promosi fisik untuk mendukung kebutuhan bisnis dan branding perusahaan.',
            body2: 'KOVAA mendukung proses mulai dari pemahaman kebutuhan, survei dan validasi lapangan, perencanaan teknis, produksi, hingga pengiriman dan instalasi sesuai lingkup pekerjaan yang disepakati.',
        },
        advantages: {
            title: 'Mengapa KOVAA',
            eyebrow: 'Keunggulan Kami',
            subtitle: 'Kami mengerjakan peralatan ritel yang awet, rapi, dan pas untuk ruang toko Anda.',
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
            viewDetail: 'Lihat Detail',
            scrollPrev: 'Geser ke kiri',
            scrollNext: 'Geser ke kanan',
            viewLarger: 'Lihat lebih besar',
            close: 'Tutup',
            previous: 'Sebelumnya',
            next: 'Berikutnya',
            imageCounter: 'Produk {current} dari {total}',
        },
        detail: {
            home: 'Beranda',
            productsCrumb: 'Produk',
            specsTitle: 'Spesifikasi',
            askViaWa: 'Tanya Produk Ini',
            back: 'Kembali ke Semua Produk',
            waMessage: 'Halo KOVAA, saya tertarik dengan produk {product}.',
        },
        contact: {
            title: 'Hubungi Kami',
            eyebrow: 'Kontak',
            subtitle: 'Diskusikan kebutuhan rak untuk toko Anda bersama tim KOVAA.',
      addressLabel: 'Alamat',
      phoneLabel: 'Telepon / WhatsApp',
      emailLabel: 'Email',
      mapTitle: 'Peta lokasi KOVAA',
      whatsappCta: 'Chat via WhatsApp',
            emailCta: 'Kirim Email',
        },
        footer: {
            tagline: 'Peralatan ritel: create, build, deliver.',
            rights: '| Seluruh hak cipta dilindungi.',
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
      backToTop: 'Back to top',
            mainNav: 'Main navigation',
            mobileNav: 'Mobile navigation',
            themeLabel: 'Appearance',
            themeLight: 'Light',
            themeDark: 'Dark',
        },
        hero: {
            title: 'Create. Build. Deliver.',
            badge: 'CREATIVE SOLUTIONS • ADAPTIVE EXECUTION',
            subtitle:
                'KOVAA operates in commercial interiors, custom furniture, booths, and physical promotional media for business needs and corporate branding.',
            ctaProducts: 'View Products',
            ctaContact: 'Contact Us',
            imageAlt: 'KOVAA supermarket shelving neatly displayed in a modern store',
        },
        ctaBanner: {
            title: 'Ready to Strengthen Your Store Display?',
            subtitle:
                'Discuss your shelving needs with the KOVAA team and get the best offer: custom dimensions, durable materials, ready to install.',
            cta: 'Chat on WhatsApp',
            imageAlt: 'KOVAA shelving installed in a retail store',
        },
        about: {
            title: 'About KOVAA',
            eyebrow: 'Company Profile',
            imageAlt: 'The KOVAA team photographed together at a project site',
            body1: 'KOVAA is your partner for commercial interior projects, custom furniture, booths, and physical promotional media that support business needs and corporate branding.',
            body2: 'KOVAA supports the process from understanding your needs, on-site surveys and validation, technical planning, and production through delivery and installation according to the agreed scope of work.',
        },
        advantages: {
            title: 'Why KOVAA',
            eyebrow: 'Our Advantages',
            subtitle: 'We build retail fixtures that last, look sharp, and fit your store space.',
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
                    desc: 'Buy straight from the maker, no middlemen, quality intact.',
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
            viewDetail: 'View Details',
            scrollPrev: 'Scroll left',
            scrollNext: 'Scroll right',
            viewLarger: 'View larger',
            close: 'Close',
            previous: 'Previous',
            next: 'Next',
            imageCounter: 'Product {current} of {total}',
        },
        detail: {
            home: 'Home',
            productsCrumb: 'Products',
            specsTitle: 'Specifications',
            askViaWa: 'Ask About This Product',
            back: 'Back to All Products',
            waMessage: 'Hello KOVAA, I am interested in the {product} product.',
        },
        contact: {
            title: 'Contact Us',
            eyebrow: 'Contact',
            subtitle: 'Discuss your store shelving needs with the KOVAA team.',
      addressLabel: 'Address',
      phoneLabel: 'Phone / WhatsApp',
      emailLabel: 'Email',
      mapTitle: 'KOVAA location map',
      whatsappCta: 'Chat on WhatsApp',
            emailCta: 'Send Email',
        },
        footer: {
            tagline: 'Retail fixtures: create, build, deliver.',
            rights: '| All rights reserved.',
            quickLinks: 'Quick Links',
            language: 'Language',
        },
    },
} satisfies Record<Lang, unknown>;

export type Dictionary = typeof dictionary;
