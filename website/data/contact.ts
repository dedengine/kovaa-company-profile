export interface ContactInfo {
  company: string
  address: string
  phone: string
  whatsapp: string
  email: string
  siteUrl: string
}

/**
 * DATA DUMMY (diminta user: "buat data dummy dulu") , ganti dengan data asli
 * sebelum produksi. Nilai sengaja tidak memakai kata "placeholder" agar
 * contact.test.ts bisa menjadi gate saat data belum diganti.
 */
export const contact: ContactInfo = {
  company: 'KOVAA',
  address: 'Family barbershop, RT.001/RW.003, Mustikasari, Kec. Mustika Jaya, Kota Bekasi, Jawa Barat 17157',
  phone: '+62 21 1234 5678',
  whatsapp: '6281234567890',
  email: 'halo@kovaa.example.com',
  siteUrl: 'https://kovaa.example.com',
}
