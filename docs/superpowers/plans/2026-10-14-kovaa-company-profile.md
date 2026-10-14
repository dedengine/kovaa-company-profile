# KOVAA Company Profile Website — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Website company profile KOVAA single-page, bilingual ID/EN, SEO-ready, dengan animasi GSAP subtle.

**Architecture:** Next.js App Router + Tailwind di `website/`; seluruh copy di dictionary i18n dan data produk typed di `data/`; animasi GSAP + ScrollTrigger via `useGSAP` scope per komponen, hanya `transform`/`opacity`, hormat `prefers-reduced-motion`. Deploy static di Vercel.

**Tech Stack:** Next.js (App Router, TypeScript), Tailwind CSS, React Icons (`react-icons`), GSAP + ScrollTrigger + `@gsap/react`, Lexend + Source Sans 3 via `next/font/google`, Vitest + Testing Library (test).

**Spec:** `docs/superpowers/specs/2026-10-14-kovaa-company-profile-design.md`

## Global Constraints

(Setiap task tunduk pada ini — nilai diambil dari spec.)

- Bahasa default `id`; toggle ke `en` via query `?lang=en`; `<html lang>` mengikuti bahasa aktif; seluruh copy ada di dua bahasa
- Max-width konten 1200px; gaya Minimal & Swiss; warna token Tailwind `kovaa.blue` (biru logo) & `kovaa.orange` (oranye logo), nilai hex di-sample dari `assest/kovaa-logo-no-bg.png` di Task 4
- Font heading Lexend, body Source Sans 3 (via `next/font/google`, variabel CSS `--font-heading`/`--font-body`)
- Icon pakai `react-icons`; default set Phosphor (`react-icons/pi`, prefix `Pi`) per kurasi ui-ux-pro-max; tanpa emoji; icon dekoratif `aria-hidden="true"`; icon di kontrol interaktif mengandalkan label elemen
- Animasi: hanya `transform`/`opacity`; `prefers-reduced-motion` → state final; `markers: false`; `ScrollTrigger.refresh()` setelah font/gambar load; tween reverse wajib pada hover
- Responsif 375/768/1024/1440px; kontras teks ≥ 4.5:1; focus state terlihat; `cursor-pointer` di elemen klik
- Data kontak adalah placeholder (`data/contact.ts`) sampai user mengisi (Task 8); sitemap/robots/canonical pakai domain final yang diberikan user
- Tanpa backend, CMS, form submit; produk: 12 item, kategori dari `CategoryId` yang tetap, slug bersih, alt text ID/EN

## Review Focus

Gagal paling mungkin dan harus ada tesnya (pemilik di kurung):

1. **Konten tak terlihat crawler / tanpa JS** — reveal GSAP jangan CSS-hide konten; HTML harus memuat semua teks seksi (Task 6: render-to-string test tiap seksi memuat teks; Task 9: tidak ada `opacity:0`/`display:none` default di CSS)
2. **Reduced-motion diabaikan** — pengguna dengan `prefers-reduced-motion: reduce` harus melihat state final tanpa gerakan (Task 9: unit test memastikan `gsap.matchMedia('(prefers-reduced-motion: reduce)')` terdaftar + step emulasi manual)
3. **Lightbox merusak fokus keyboard** — Esc menutup dan fokus kembali ke kartu pemicu; arrow switch gambar; fokus tak bocor ke background (Task 7)
4. **i18n bolong** — key EN tidak sinkron dengan ID membuat halaman Inggris muncul string kosong (Task 2 parity test + Task 3 test `t()` melempar jelas pada key hilang)
5. **Filter kategori salah petakan** — produk tak muncul di kategori manapun atau muncul ganda (Task 2 invariant 12 produk & kategori valid + Task 7 test jumlah kartu per kategori)

---

### Task 1: Scaffold project + toolchain

**Files:**
- Create: `website/**` via create-next-app
- Create: `vitest.config.ts`, `vitest.setup.ts`, `website/package.json` (scripts)

**Interfaces:**
- Consumes: tidak ada
- Produces: alias import `@/*` → `website/*`; script `npm test` menjalankan Vitest; script `npm run build` Next.js

- [ ] **Step 1: Buat project & install dependensi**

```bash
cd C:\Users\LOQ\Desktop\company-profile\KOVAA
git init
npx --yes create-next-app@latest website --ts --tailwind --eslint --app --no-src-dir --import-alias "@/*" --use-npm --yes
cd website
npm install gsap @gsap/react react-icons
npm install -D vitest @vitejs/plugin-react jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event
```

- [ ] **Step 2: Konfigurasi Vitest** — `vitest.config.ts` (root `website/`): environment `jsdom`, `setupFiles: ['./vitest.setup.ts']`, globals true, plugin react. `vitest.setup.ts`: `import '@testing-library/jest-dom/vitest'`.

- [ ] **Step 3: Tambah script** — `package.json`: `"test": "vitest run"`.

- [ ] **Step 4: Verifikasi scaffold** — jalankan `npm run build`; Expected: sukses tanpa error. Jalankan `npm test`; Expected: "No test files found" exit 0/1 adalah OK di tahap ini (Vitest terpasang).

- [ ] **Step 5: Commit**

```bash
git add -A && git commit -m "chore: scaffold Next.js project with GSAP, React Icons, Vitest"
```

---

### Task 2: Data produk, kategori, dictionary i18n, gsap setup

**Files:**
- Create: `website/data/products.ts`, `website/data/categories.ts`
- Create: `website/lib/i18n.ts`, `website/lib/gsap.ts`
- Create: `website/data/products.test.ts`, `website/data/i18n.test.ts`
- Copy: `assest/*` → `website/public/assets/`, `produk/*` → `website/public/products/` (nama file produk di-slugkan)

**Interfaces:**
- Consumes: alias `@/*`
- Produces:
  - `type Lang = 'id' | 'en'`; `type Localized = Record<Lang, string>`
  - `type CategoryId = 'rak-supermarket' | 'rak-dinding-serbaguna' | 'drawer' | 'rak-sayur-buah'`; `categories: { id: CategoryId; label: Localized }[]`
  - `products: { id: string; slug: string; category: CategoryId; name: Localized; description: Localized; image: string; alt: Localized }[]` (12 item; `image` = `/products/<slug>.png`)
  - `dictionary: Record<Lang, { nav: {...}; hero: {...}; about: {...}; advantages: {...}; process: {...}; products: {...}; contact: {...}; footer: {...} }>` — struktur key identik di kedua bahasa
  - `registerGsap(): void` — memanggil `gsap.registerPlugin(ScrollTrigger)` sekali (idempoten)

- [ ] **Step 1: Salin aset** — copy `assest/` dan `produk/` ke `public/`; peta slug → file asli dicatat di `data/products.ts` (komentar atas file produk terpanjang: "Rak Display Rak Supermarket Modern untuk Toko Grosir-1.png" → `rak-display-supermarket-1.png`)

- [ ] **Step 2: Tulis gagal: `products.test.ts`** — assert: panjang `products` = 12; setiap `id`/`slug` unik; `category` ∈ daftar `CategoryId`; setiap kategori punya ≥1 produk; setiap file `image` ada di `public/products/` (baca `fs`); `alt` & `name` terisi kedua bahasa.

- [ ] **Step 3: Tulis gagal: `i18n.test.ts`** — assert: `dictionary.id` dan `dictionary.en` punya set key yang persis sama (deep-key compare); tidak ada string kosong; `registerGsap()` dapat dipanggil 2× tanpa throw.

- [ ] **Step 4: Jalankan, pastikan gagal** — `npx vitest run`; Expected: FAIL karena modul belum ada.

- [ ] **Step 5: Implementasikan** — isi `data/products.ts` (nama & deskripsi didraf dari nama file: rapikan, produk B2B; ID + EN), `data/categories.ts` (4 kategori), `lib/i18n.ts` (copy semua seksi dua bahasa), `lib/gsap.ts` (`export function registerGsap()`; import `gsap` & `ScrollTrigger`, panggil registerPlugin sekali).

- [ ] **Step 6: Jalankan, pastikan lulus** — `npx vitest run`; Expected: PASS semua.

- [ ] **Step 7: Commit** — `feat: add product data, categories, i18n dictionary, gsap setup`

---

### Task 3: Mekanisme bahasa (provider + toggle)

**Files:**
- Create: `website/lib/i18n-provider.tsx`, `website/components/language-toggle.tsx`, `website/lib/i18n-provider.test.tsx`
- Modify: `website/app/layout.tsx` (bungkus children dengan `I18nProvider`)

**Interfaces:**
- Consumes: `Lang`, `Localized`, `dictionary` dari Task 2
- Produces:
  - `I18nProvider({ children }: { children: React.ReactNode })` — baca `?lang=en` dari `window.location.search`, set `<html lang>` sesuai
  - `useI18n(): { lang: Lang; setLang(next: Lang): void; t(path: string): string }` — `t` lempar `Error` berisi key bila path tak ditemukan
  - `LanguageToggle()` — tombol ID/EN, `aria-pressed` per opsi

- [ ] **Step 1: Tulis gagal: `i18n-provider.test.tsx`** — (a) render probe `t('hero.title')` tanpa query → teks Indonesia; (b) dengan `?lang=en` → teks Inggris; (c) `t('nav.tidakAda')` melempar error memuat `nav.tidakAda`; (d) `<html lang>` jadi `en` setelah `?lang=en`.

- [ ] **Step 2: Jalankan, pastikan gagal** — `npx vitest run lib/i18n-provider.test.tsx`; Expected: FAIL (modul tidak ada).

- [ ] **Step 3: Implementasikan** — context + reducer; `useSearchParams` dibaca dalam useEffect (hindari suspensi build); `setLang` update `?lang=` via `history.replaceState`; provider client `'use client'`; `layout.tsx` bungkus children.

- [ ] **Step 4: Jalankan, pastikan lulus** — Expected: PASS.

- [ ] **Step 5: Commit** — `feat: add language provider and toggle`

---

### Task 4: Layout shell + SEO (fonts, metadata, JSON-LD, sitemap, robots)

**Files:**
- Create: `website/data/contact.ts`, `website/app/sitemap.ts`, `website/app/robots.ts`, `website/lib/seo.ts`
- Modify: `website/app/layout.tsx`, `website/app/globals.css`
- Create: `website/app/seo.test.ts`

**Interfaces:**
- Consumes: `data/contact.ts` (milik Task 8); `Localized` dari Task 2
- Produces:
  - `contact: { company: string; address: string; phone: string; whatsapp: string; email: string; hours: string; mapsUrl: string; siteUrl: string }` — semua string; nilai placeholder diberi komentar jelas
  - `export const metadata: Metadata` — title, description, keywords (rak supermarket, rak gondola, rak display, peralatan toko), openGraph, twitter, `metadataBase`
  - `organizationJsonLd(contact)` → object JSON-LD `LocalBusiness`; dipasang via `<script type="application/ld+json">` di layout
  - `sitemap()` & `robots()` Next default route handlers membaca `contact.siteUrl`

- [ ] **Step 1: Sample warna logo** — ambil hex dominan dari `public/assets/kovaa-logo-no-bg.png` (tool berbasis read image + hex reader), catat di `globals.css` token: `@theme { --color-kovaa-blue: <biru>; --color-kovaa-orange: <oranye>; --container-page: 1200px }` + variabel font `--font-heading`/`--font-body` di layout.

- [ ] **Step 2: Tulis gagal: `seo.test.ts`** — assert JSON-LD: `@type === 'LocalBusiness'`, memuat `contact.address`, `contact.email`, `telepon; sitemap exporter menghasilkan URL absolut `contact.siteUrl`.

- [ ] **Step 3: Jalankan, pastikan gagal.**

- [ ] **Step 4: Implementasikan** — `layout.tsx`: `Lexend` (variable `--font-heading`) + `Source_Sans_3` (variable `--font-body`) via `next/font/google`; terapkan `metadata`; inject JSON-LD; `app/sitemap.ts`, `app/robots.ts` memakai `contact.siteUrl`.

- [ ] **Step 5: Jalankan, pastikan lulus + build** — `npx vitest run` lalu `npm run build`; Expected: PASS & build sukses.

- [ ] **Step 6: Commit** — `feat: add fonts, metadata, JSON-LD, sitemap, robots`

---

### Task 5: Header + Hero

**Files:**
- Create: `website/components/site-header.tsx`, `website/components/hero.tsx`
- Create: `website/components/hero.test.tsx` (atau `site-header.test.tsx`)

**Interfaces:**
- Consumes: `useI18n`, `LanguageToggle` (Task 3), `dictionary.nav`, `dictionary.hero`
- Produces:
  - `SiteHeader()` — sticky, logo `assest/kovaa-logo-no-bg.png`, anchor nav (Tentang, Produk, Keunggulan, Kontak), `LanguageToggle`, menu mobile (icon `react-icons/pi` `PiList`/`PiX`)
  - `Hero()` — H1 dari `hero.title` + subjudul + CTA (`Lihat Produk`, `Hubungi Kami`) + gambar `mockup-1.jpeg` (`next/image`, alt dari dictionary)

- [ ] **Step 1: Tulis gagal: render test** — assert: logo render `<img alt kovaa>`; satu `h1` dengan teks Indonesia; anchor `#produk` & `#kontak` ada; `LanguageToggle` tampil; tombol mobile ada.

- [ ] **Step 2: Jalankan, pastikan gagal.**

- [ ] **Step 3: Implementasikan** — header `'use client'` (toggle & menu mobile), hero client (menyiapkan host animasi Task 9). Semua teks via `useI18n().t`; ikon `react-icons/pi`; `cursor-pointer`, focus-visible Tailwind.

- [ ] **Step 4: Jalankan test + build; Expected PASS.**

- [ ] **Step 5: Commit** — `feat: add header and hero sections`

---

### Task 6: Tentang, Keunggulan, Proses

**Files:**
- Create: `website/components/about.tsx`, `website/components/advantages.tsx`, `website/components/process.tsx`
- Create: `website/components/sections.test.tsx`

**Interfaces:**
- Consumes: `useI18n`, `dictionary.about/advantages/process`, React Icons
- Produces: `About()`, `Advantages()`, `Process()` — heading per seksi memakai `h2`; keunggulan memakai `react-icons/pi` (ikon dekoratif `aria-hidden`); proses 3 langkah bernomor

- [ ] **Step 1: Tulis gagal: `sections.test.tsx`** — sertakan **crawler guard**: `render` (bungkus dengan `I18nProvider`) lalu periksa `container.innerHTML` per seksi memuat teks heading & body inti, dan tak ada elemen konten dengan `style` `opacity:0`/`display:none` default.

- [ ] **Step 2: Jalankan, pastikan gagal.**

- [ ] **Step 3: Implementasikan** — tiga komponen `'use client'`; konten dari dictionary; tautkan ke `app/page.tsx` dengan `id="tentang"`, `id="keunggulan"`, `id="proses"`.

- [ ] **Step 4: Jalankan test + build; Expected PASS.**

- [ ] **Step 5: Commit** — `feat: add about, advantages, process sections`

---

### Task 7: Produk: grid + filter + lightbox

**Files:**
- Create: `website/components/products.tsx`, `website/components/lightbox.tsx`
- Create: `website/components/products.test.tsx`

**Interfaces:**
- Consumes: `products`, `categories` (Task 2), `useI18n` (Task 3)
- Produces:
  - `Products()` — chip kategori (default `Semua`), grid kartu produk (foto, `name[lang]`, `description[lang]`, `alt[lang]`)
  - `Lightbox({ items, index, onClose })` — gambar besar + nama + deskripsi; tutup via Esc, tombol `PiX`, klik backdrop; panah kiri/kanan; fokus kembali ke kartu pemicu saat tutup

- [ ] **Step 1: Tulis gagal: `products.test.tsx`** — (a) 12 kartu saat filter `Semua`; (b) klik chip `Drawer` → jumlah kartu = jumlah kategori itu; (c) klik kartu buka lightbox memuat nama & deskripsi produk pertama; (d) tekan `Escape` menutup dan fokus kembali ke kartu; (e) panah kanan berpindah indeks.

- [ ] **Step 2: Jalankan, pastikan gagal.**

- [ ] **Step 3: Implementasikan** — `Products` client; lightbox pakai `role="dialog"` `aria-modal`, `tabIndex=-1`, fokus awal ke kotak dialog, listener keyboard pada window, kembalikan fokus via ref kartu. Ikon navigasi dari `react-icons/pi`.

- [ ] **Step 4: Jalankan test + build; Expected PASS.**

- [ ] **Step 5: Commit** — `feat: add products grid with category filter and lightbox`

---

### Task 8: Kontak + Footer + isi data kontak asli

**Files:**
- Create: `website/components/contact.tsx`, `website/components/footer.tsx`
- Create: `website/components/contact.test.tsx`
- Modify: `website/data/contact.ts` (user isi data asli)

**Interfaces:**
- Consumes: `contact` (Task 4), `useI18n`
- Produces: `Contact()` — alamat/telpon/WA/email/jam dari `contact`, ikon `react-icons/pi` (`PiMapPin`, `PiPhone`, `PiEnvelope`, `PiClock`, `PiWhatsappLogo` bila tersedia); `Footer()` — quick link, copyright

- [ ] **Step 1: Tulis gagal: `contact.test.ts`** — assert data kontak tidak memuat nilai placeholder string khusus (mis. `ALAMAT_LENGKAP`); footer memuat tahun berjalan & nama KOVAA.

- [ ] **Step 2: Jalankan, pastikan gagal (selama data masih placeholder).**

- [ ] **Step 3: User mengisi `data/contact.ts`** — data asli: alamat, telepon/WhatsApp, email, jam operasional, domain final `siteUrl`.

- [ ] **Step 4: Implementasikan** `Contact` & `Footer`; pasang di `app/page.tsx` (`id="kontak"`); JSON-LD (Task 4) otomatis memakai data asli.

- [ ] **Step 5: Jalankan test + build; Expected PASS (setelah data diisi).**

- [ ] **Step 6: Commit** — `feat: add contact and footer sections`

---

### Task 9: Animasi GSAP (hover, reveal, stagger, parallax)

**Files:**
- Modify: `website/lib/gsap.ts`, `website/components/site-header.tsx`, `website/components/hero.tsx`, `website/components/about.tsx`, `website/components/advantages.tsx`, `website/components/process.tsx`, `website/components/products.tsx`, `website/components/lightbox.tsx`
- Create: `website/lib/gsap-animations.test.ts`

**Interfaces:**
- Consumes: `registerGsap` (Task 2); `useGSAP` dari `@gsap/react`
- Produces:
  - `useScrollReveal<T extends HTMLElement>(scope: RefObject<T>)` — fade + `y: 14`, `duration: 0.4`, `power2.out`, trigger `top 85%`, `toggleActions: 'play none none reverse'`; di-skip bila reduced-motion
  - `useHoverLift(el)` — `gsap.quickTo` `y: -4` 0.25s `power2.out` + reverse saat leave
  - `useGridStagger(el)` — `y: 8, opacity: 0` dari, `stagger: 0.06`, maks 8 anak per scope
  - `useHeroParallax(el)` — translateY maks 2 layer, `scrub: false`, di-trigger `ScrollTrigger` start `top top`

- [ ] **Step 1: Tulis gagal: `gsap-animations.test.ts`** — mock modul `gsap` & `@gsap/react`; assert: `registerGsap` memanggil `registerPlugin(ScrollTrigger)` sekali walau dipanggil 2×; `useScrollReveal` mendaftarkan handler via `gsap.matchMedia` dengan kondisi `'(prefers-reduced-motion: reduce)'` dan memperlihatkan state final di cabang reduce.

- [ ] **Step 2: Jalankan, pastikan gagal.**

- [ ] **Step 3: Implementasikan** — terapkan hook di masing-masing scope komponen (pakai `useGSAP({ scope })`); hover pada kartu produk & tombol; stagger pada grid produk & kartu keunggulan; parallax pada hero; **tidak ada** `opacity:0`/`visibility:hidden` default di CSS/JSX — hanya di dalam tween.

- [ ] **Step 4: `ScrollTrigger.refresh()` setelah load** — panggil di `useGSAP` `dependencies` `[]` + listener `window load` (atau `next/image` `onLoad` counter) di layout/hero.

- [ ] **Step 5: Jalankan test + build; Expected PASS.**

- [ ] **Step 6: Verifikasi visual/manual** — DevTools rendering emulasi `prefers-reduced-motion: reduce` → semua seksi tampil final tanpa gerakan; hover kartu kembali normal saat pointer keluar cepat; console tanpa error; `markers` off.

- [ ] **Step 7: Commit** — `feat: add GSAP scroll, hover, stagger, parallax animations`

---

### Task 10: Polish, verifikasi akhir, preview

**Files:**
- Modify: `website/app/page.tsx` (komposisi final seksi), `website/lib/seo.ts` (isi `siteUrl` asli bila berubah), README singkat jika ingin

**Interfaces:**
- Consumes: semua komponen Task 5–8

- [ ] **Step 1: Susun `page.tsx`** — urutan: Header, Hero, About, Products, Advantages, Process, Contact, Footer; satu `h1` (hero); heading lain `h2`.

- [ ] **Step 2: Checklist pre-delivery ui-ux-pro-max** — ikon SVG (bukan emoji) ✓; `cursor-pointer` semua klik ✓; kontras ≥ 4.5:1 ✓; focus visible ✓; reflow tanpa clipping di 375px ✓; `prefers-reduced-motion` ✓; teks produk & badge wrap rapi ✓.

- [ ] **Step 3: Verifikasi responsif** — cek 375/768/1024/1440px; tidak ada horizontal scroll; grid produk 1→2→3→4 kolom; menu mobile berfungsi.

- [ ] **Step 4: Build + preview** — `npm run build`; `npm start`; buka `http://localhost:3000`; cek `<title>`, `sitemap.xml`, `robots.txt`, dan sumber HTML memuat seluruh teks seksi (view-source).

- [ ] **Step 5: User review copy** — reviewer copy ID/EN, nama & deskripsi produk, dan isi seksi Tentang.

- [ ] **Step 6: Commit akhir** — `chore: final polish and verification`
