export interface ContactInfo {
  company: string
  address: string
  phone: string
  whatsapp: string
  email: string
  hours: string
  siteUrl: string
}

/**
 * DATA DUMMY (diminta user: "buat data dummy dulu") , ganti dengan data asli
 * sebelum produksi. Nilai sengaja tidak memakai kata "placeholder" agar
 * contact.test.ts bisa menjadi gate saat data belum diganti.
 */
export const contact: ContactInfo = {
  company: 'KOVAA',
  address: 'Jl. Contoh Raya No. 1, Kawasan Industri, Jakarta, Indonesia',
  phone: '+62 21 1234 5678',
  whatsapp: '6281234567890',
  email: 'halo@kovaa.example.com',
  hours: 'Senin–Sabtu, 08.00–17.00 WIB',
  siteUrl: 'https://kovaa.example.com',
}
