import type { Lang } from '@/data/products';

/**
 * Semua copy situs. Struktur key `id` dan `en` harus identik
 * (dijaga oleh data/i18n.test.ts).
 */
export const dictionary = {
    id: {
        nav: {
            tentang: 'Tentang',
            layanan: 'Layanan',
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
            previousImage: 'Gambar sebelumnya',
            nextImage: 'Gambar berikutnya',
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
        services: {
            eyebrow: 'Layanan Kami',
            title: 'Empat pilar layanan',
            subtitle: 'Empat area layanan yang dapat saling terhubung dalam satu kebutuhan proyek.',
            items: [
                {
                    title: 'Custom Furniture & Interior Elements',
                    bullets: [
                        'Backwall, kabinet, meja kasir, built-in & meja custom',
                        'Rak display, backdrop & elemen interior khusus',
                        'Bongkar pasang furniture custom',
                    ],
                },
                {
                    title: 'Commercial Interior & Fit-Out',
                    bullets: [
                        'Retail, minimarket, toko, coffee shop, F&B, kantor, ruang komersial',
                        'Wall panel, vinyl floor, partisi, plafon, HPL/WPC & finishing',
                        'Bongkar pasang, relayout, renovasi & penyesuaian',
                    ],
                },
                {
                    title: 'Booth, Exhibition & Event Setup',
                    bullets: [
                        'Photobooth, photobox, booth pameran & promosi',
                        'Backdrop, activation counter & display custom',
                        'Pengiriman, instalasi, pembongkaran & relokasi',
                    ],
                },
                {
                    title: 'Promotional Media & Brand Display',
                    bullets: [
                        'Stiker kaca/lift/cutting sticker & surface branding',
                        'Signage, neon box, lightbox, papan nama & logo timbul',
                        'Floor display, rak promosi & product display custom',
                    ],
                },
            ],
        },
        advantages: {
            title: 'Mengapa Memilih KOVAA',
            eyebrow: 'Keunggulan Kami',
            subtitle: 'Kami mengerjakan kebutuhan interior komersial, furniture custom, booth, dan media promosi dengan perencanaan matang dan hasil yang rapi.',
            items: [
                {
                    title: 'Berpengalaman',
                    desc: 'Memiliki pengalaman dalam pengerjaan interior, furniture custom, booth, dan kebutuhan display sesuai lingkup proyek.',
                },
                {
                    title: 'Solusi Terintegrasi',
                    desc: 'Menghubungkan kebutuhan interior komersial, furniture custom, booth, dan media promosi dalam satu cakupan layanan.',
                },
                {
                    title: 'Perencanaan Berbasis Data',
                    desc: 'Menggunakan ukuran aktual, spesifikasi teknis, dan perhitungan biaya sebagai dasar perencanaan.',
                },
                {
                    title: 'Fleksibel & Bertanggung Jawab',
                    desc: 'Menyesuaikan pendekatan dengan kebutuhan proyek serta menjalankan pekerjaan berdasarkan kesepakatan yang jelas.',
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
            descriptionTitle: 'Deskripsi',
            specsTitle: 'Spesifikasi',
            askViaWa: 'Tanya Produk Ini',
            back: 'Kembali ke Semua Produk',
            waMessage: 'Halo KOVAA, saya tertarik dengan produk {product}.',
        },
        contact: {
            eyebrow: 'START A PROJECT',
            footerTitle: 'Hubungi Kami',
            title: 'Butuh Interior Fit-Out, Custom Furniture, Booth, atau Media Promosi?',
            subtitle: 'Ceritakan kebutuhannya, sisanya biar kami yang pikirkan. Diskusikan kebutuhan pengerjaan interior komersial, furniture custom, booth exhibition, media promosi, serta bongkar pasang dan relayout furniture outlet bersama KOVAA.',
            nameLabel: 'Nama Lengkap',
            companyLabel: 'Asal Perusahaan (Misal: PT Deta...)',
            phoneLabel: 'Nomor Whatsapp (Misal: 081234xxx)',
            needLabel: 'Apa yang bisa kami bantu?',
            budgetLabel: '- Pilih Estimasi Budget -',
            budgetOptions: ['< Rp 50 juta', 'Rp 50 - 100 juta', 'Rp 100 - 250 juta', '> Rp 250 juta', 'Belum pasti'],
            submit: 'Kirim & Dapatkan Respon Prioritas',
            privacy: 'Data Anda aman dan hanya dipakai untuk merespon kebutuhan project.',
            mapTitle: 'Peta lokasi KOVAA',
            waFloating: 'Chat via WhatsApp',
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
            layanan: 'Services',
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
            previousImage: 'Previous image',
            nextImage: 'Next image',
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
        services: {
            eyebrow: 'Our Services',
            title: 'Four service pillars',
            subtitle: 'Four service areas that can connect within a single project need.',
            items: [
                {
                    title: 'Custom Furniture & Interior Elements',
                    bullets: [
                        'Backwalls, cabinets, cashier counters, built-in and custom tables',
                        'Display shelves, backdrops and custom interior elements',
                        'Custom furniture dismantling and reassembly',
                    ],
                },
                {
                    title: 'Commercial Interior & Fit-Out',
                    bullets: [
                        'Retail, minimarkets, shops, coffee shops, F&B, offices, commercial spaces',
                        'Wall panels, vinyl flooring, partitions, ceilings, HPL/WPC and finishing',
                        'Dismantling, re-layout, renovation and adjustments',
                    ],
                },
                {
                    title: 'Booth, Exhibition & Event Setup',
                    bullets: [
                        'Photo booths, photo boxes, exhibition and promotional booths',
                        'Backdrops, activation counters and custom displays',
                        'Delivery, installation, dismantling and relocation',
                    ],
                },
                {
                    title: 'Promotional Media & Brand Display',
                    bullets: [
                        'Glass and lift stickers, cutting stickers and surface branding',
                        'Signage, neon boxes, lightboxes, nameplates and raised logos',
                        'Floor displays, promotional racks and custom product displays',
                    ],
                },
            ],
        },
        advantages: {
            title: 'Why Choose KOVAA',
            eyebrow: 'Our Advantages',
            subtitle: 'We handle commercial interiors, custom furniture, booths, and promotional media with careful planning and clean results.',
            items: [
                {
                    title: 'Experienced',
                    desc: 'Experienced in commercial interiors, custom furniture, booths, and display needs according to project scope.',
                },
                {
                    title: 'Integrated Solutions',
                    desc: 'Connecting commercial interior, custom furniture, booth, and promotional media needs within one service scope.',
                },
                {
                    title: 'Data-Driven Planning',
                    desc: 'Using actual measurements, technical specifications, and cost calculations as the basis for planning.',
                },
                {
                    title: 'Flexible & Accountable',
                    desc: 'Adapting the approach to project needs and carrying out work based on clear agreements.',
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
            descriptionTitle: 'Description',
            specsTitle: 'Specifications',
            askViaWa: 'Ask About This Product',
            back: 'Back to All Products',
            waMessage: 'Hello KOVAA, I am interested in the {product} product.',
        },
        contact: {
            eyebrow: 'START A PROJECT',
            footerTitle: 'Contact Us',
            title: 'Need Interior Fit-Out, Custom Furniture, Booths, or Promotional Media?',
            subtitle: 'Tell us what you need, leave the rest to us. Discuss commercial interiors, custom furniture, exhibition booths, promotional media, and furniture outlet dismantling or re-layout with the KOVAA team.',
            nameLabel: 'Full Name',
            companyLabel: 'Company (e.g. PT Deta...)',
            phoneLabel: 'WhatsApp Number (e.g. 081234xxx)',
            needLabel: 'How can we help?',
            budgetLabel: '- Select Estimated Budget -',
            budgetOptions: ['< Rp 50 million', 'Rp 50 - 100 million', 'Rp 100 - 250 million', '> Rp 250 million', 'Not sure yet'],
            submit: 'Send & Get Priority Response',
            privacy: 'Your data is safe and used only to respond to your project needs.',
            mapTitle: 'KOVAA location map',
            waFloating: 'Chat on WhatsApp',
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
