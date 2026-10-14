# KOVAA Company Profile Website — Design Spec

**Date:** 2026-10-14
**Status:** Desain disetujui; spec menunggu review user
**Classification:** Architectural (proyek baru dari nol)

## 1. Tujuan & Audiens

Website company profile brand KOVAA — pembuat/penjual peralatan ritel (rak supermarket, rak gondola, rak dinding, drawer, rak sayur/buah). Fungsi utama: **perkenalan brand** (company-only), aksi kontak hanya di seksi Kontak/Footer. Audiens: pembeli B2B (pemilik toko/supermarket, kontraktor ritel) di pasar Indonesia.

Kriteria sukses:
- Satu halaman informatif yang cepat, rapi, responsif (375 / 768 / 1024 / 1440 px)
- Mudah ditemukan Google (SEO on-page + teknis lengkap)
- Dua bahasa (ID default, EN via toggle), semua copy original dan dikoreksi user
- Data kontak mudah ditemukan di bagian bawah

## 2. Tech Stack

| Lapisan | Pilihan | Alasan |
|---|---|---|
| Framework | Next.js (App Router, TypeScript) | Framework paling populer; SEO kelas satu; bisa static-render |
| Styling | Tailwind CSS | Disebut dalam database style skill; cocok dengan pendekatan minimal |
| Icons | `react-icons` (import per-set: `react-icons/pi`, `react-icons/lu`, `react-icons/hi`) | Satu paket, banyak gaya bisa dieksplorasi; tree-shaking tetap jalan via named import |
| Fonts | Lexend (heading) + Source Sans 3 (body), Google Fonts | Pairing "Corporate Trust" dari ui-ux-pro-max: kredibel + aksesibel |
| Rendering | Static (default) | Murah, cepat, ramah SEO |
| Animasi | `gsap` + ScrollTrigger, helper `@gsap/react` (`useGSAP`) | Preset motion dari ui-ux-pro-max ditulis dalam GSAP; auto-cleanup di React |
| Deploy | Vercel (free tier) | Dibuat tim Next.js; nanti bisa pindah ke static host biasa |

Tidak ada backend, CMS, database, atau form pengiriman email.

## 3. Struktur Halaman (single-page)

Urutan seksi dari atas:

1. **Header** — logo (`kovaa-logo-no-bg.png`), menu anchor ke seksi, toggle bahasa (ID/EN), menu mobile (icon list/X). Sticky, background berubah saat scroll.
2. **Hero** — H1 dari tagline "Create • Build • Deliver" + subheadline draf + gambar utama (`mockup-1.jpeg`) + dua CTA: "Lihat Produk" (scroll) & "Hubungi Kami".
3. **Tentang** — profil perusahaan (copy draf ID/EN, ±2 paragraf) + poin singkat keunggulan visual (angka/pencapaian bila tersedia dari user — opsional, tidak wajib).
4. **Produk** — chip filter kategori + grid 12 produk + lightbox.
   - Kategori: `Semua` / `Rak Supermarket & Gondola` / `Rak Dinding & Serbaguna` / `Drawer` / `Rak Sayur & Buah`
   - Setiap kartu: foto (rasio seragam), nama produk (ID/EN), deskripsi singkat 1 baris (ID/EN)
   - Klik kartu → lightbox: gambar besar, nama, deskripsi; navigasi panah kiri/kanan; tutup via Esc, tombol X, atau klik backdrop; fokus keyboard terjaga di dalam modal dan dikembalikan saat tutup
5. **Mengapa KOVAA** — 3–4 poin keunggulan (custom-made sesuai ukuran toko, material rangka kuat, harga langsung pabrik, pengiriman & pemasangan) dengan icon `react-icons`
6. **Proses** — tiga langkah Create → Build → Deliver (dari tagline logo), nomor urut besar
7. **Kontak + Footer** — alamat, telepon/WhatsApp, email, jam operasional; quick link; copyright

## 4. Sistem Visual

- **Style: Minimalism & Swiss** (styles.csv, status active): grid 12–16 kolom, max-width 1200px, whitespace luas, border tipis, shadow minimal, sudut kartu rounded kecil
- **Warna**: dasar putih/abu netral; primary = biru logo KOVAA (di-sample dari `assest/kovaa-logo-no-bg.png` saat implementasi, perkiraan `#0B5CFF`); aksen = oranye logo (perkiraan `#F97B22`) untuk CTA & highlight
- **Tipografi**: Lexend + Source Sans 3 via `next/font/google` (self-hosted saat build, tanpa request runtime ke Google); Lexend semi-bold untuk heading, Source Sans 3 untuk body; skala heading jelas, satu H1 per halaman
- **Interaksi**: hover subtle 200–250ms, `prefers-reduced-motion` dihormati, kontras teks ≥ 4.5:1, `cursor-pointer` di semua elemen klik, focus state terlihat untuk navigasi keyboard
- **Icons**: dari `react-icons`; icon dekoratif (di samping teks) dapat `aria-hidden="true"`, icon di dalam tombol/link mengandalkan label pada elemennya; tidak memakai emoji sebagai icon

## 5. Animasi (GSAP + ScrollTrigger)

- Plugin ScrollTrigger didaftarkan sekali (`gsap.registerPlugin`) di `lib/gsap.ts`; animasi React dibungkus `useGSAP` dari `@gsap/react` agar auto-cleanup saat unmount dan ter-scope per container
- Efek mengikuti preset `motion.csv` (intensitas subtle, hanya properti `transform`/`opacity`; `gsap.matchMedia('(prefers-reduced-motion: reduce)')` merender state final tanpa gerakan):
  - **Hover micro-interaction** (150–300ms, `power1/2.out`): displacement ≤ 4px pada tombol & kartu produk; tween reverse saat pointer keluar
  - **Scroll reveal** (300–400ms): fade + `y` 8–16px, trigger `top 85–90%`, `play none none reverse`; reveal murni enhancement — konten tetap ada di HTML untuk crawler
  - **Stagger** (250–350ms): grid produk & kartu keunggulan, 0,03–0,08s per item, maks ±8 item per batch
  - **Parallax tipis**: maks 2 layer di hero, translateY via transform; tanpa pin section (pin hanya kalau nanti diminta storytelling)
- `markers: false` di produksi; `ScrollTrigger.refresh()` setelah font & gambar produk selesai load

## 6. Bilingual (ID/EN)

- Dictionary tunggal di `lib/i18n.ts`: `{ id: {...}, en: {...} }` berisi seluruh copy (nav, hero, semua seksi, tombol, nama+deskripsi produk, footer)
- Halaman di-render server dengan konten bahasa default **Indonesia** (aman untuk crawler); `LanguageProvider` menimpa teks secara client-side saat bahasa diganti
- Bahasa aktif disimpan di URL query (`?lang=en`), jadi link bisa di-share dalam bahasa tertentu; default "id" bila query kosong
- `<html lang>` mengikuti bahasa aktif

## 7. SEO

- `app/layout.tsx` Metadata API: title, description, keywords (rak supermarket, rak gondola, rak display, peralatan toko/modern), canonical, OpenGraph + Twitter card (pakai `mockup-2.jpeg`)
- `app/sitemap.ts` + `app/robots.ts` (URL produksi diisi setelah domain deploy diketahui — lihat Input Pending)
- JSON-LD `LocalBusiness` (di-generate dari data kontak; mengikuti Input Pending)
- HTML semantik (`header`, `main`, `section`, `footer`, `nav`), heading hierarkis (H1 → H2 → H3)
- `alt` text tiap gambar produk (ID/EN sesuai bahasa aktif), logo, dan mockup
- Static rendering (tidak ada konten client-only yang tidak bisa di-crawl)

## 8. Struktur Proyek & Aset

Project dibuat di subfolder `website/` di dalam repo ini:

```
website/
  app/
    layout.tsx        # metadata, fonts, JSON-LD, LanguageProvider
    page.tsx          # komposisi semua seksi
    sitemap.ts, robots.ts, manifest.ts
  components/
    header.tsx, hero.tsx, about.tsx, products.tsx, lightbox.tsx,
    advantages.tsx, process.tsx, contact.tsx, footer.tsx,
    language-toggle.tsx, i18n-provider.tsx
  data/
    products.ts       # 12 produk: slug, kategori, nama id/en, deskripsi id/en, gambar
    contact.ts        # data kontak (placeholder sampai input user)
  lib/
    i18n.ts           # dictionary id/en
    gsap.ts           # registerPlugin(ScrollTrigger)
  public/
    assets/           # hasil copy dari ../assest
    products/         # hasil copy dari ../produk (nama di-slug-kan)
```

- `assest/` dan `produk/` asli tetap sebagai source of truth; file disalin ke `website/public/`
- Nama file produk di-slugkan (mis. `Rak Supermarket Kerangka Besi Gondola Multilayer-1.png` → `rak-gondola-multilayer-1.png`), pemetaan lengkap ada di `data/products.ts`
- Kategori & nama/deskripsi produk didraf berdasarkan nama file produk; user review copy final

## 9. Input yang Diberikan User (bukan TBD desain)

Sebelum/saat implementasi dimulai, user menyediakan:

1. Alamat lengkap perusahaan (dipakai di seksi Kontak + JSON-LD)
2. Nomor telepon/WhatsApp (format internasional, mis. 628…utm wa.me)
3. Email perusahaan
4. Jam operasional
5. Domain akhir (untuk sitemap, robots, canonical, OG url)

Copy selain data kontak saya yang draft (ID+EN) mengikuti produk & tagline; hanya menunggu review user, bukan input teknis.

## 10. Verifikasi (sebelum dinyatakan selesai)

- `npm run build` (static export) sukses tanpa error TypeScript/lint
- Checklist pre-delivery dari ui-ux-pro-max: icon SVG (bukan emoji), `cursor-pointer` pada elemen klik, kontras teks, focus visible, reflow tanpa clipping di 375px, `prefers-reduced-motion` dihormati
- Lightbox: buka/tutup (Esc, X, backdrop), navigasi panah, fokus balik ke kartu setelah tutup
- Toggle bahasa: semua teks berubah ID↔EN, `<html lang>` update, `?lang=` shareable
- Semua 12 produk tampil dengan nama, kategori, alt text, dan masuk filter yang benar
- Metadata + `sitemap.xml` + `robots.ts` ter-generate (verifikasi via preview build)
- GSAP: `prefers-reduced-motion` → state final tanpa animasi (tes emulasi DevTools); hover selalu punya reverse tween; tanpa layout shift (CLS ≈ 0); refresh setelah gambar/font load; `markers` off; tanpa error di console
- Preview lokal dijalankan dan dicek user sebelum deploy

## 11. Di Luar Scope (YAGNI)

Tidak dibangun: CMS/panel admin, form inquiry + backend email, e-commerce/payment, blog, analytics berbayar, integrasi Google Maps embed (cukup alamat teks kecuali user minta), multi-halaman.
