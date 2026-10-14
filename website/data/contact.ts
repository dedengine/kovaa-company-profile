export interface ContactInfo {
  company: string
  address: string
  phone: string
  whatsapp: string
  email: string
  hours: string
  mapsUrl: string
  siteUrl: string
}

/**
 * PLACEHOLDER — user mengisi data asli pada Task 8.
 * Semua nilai berisi kata "placeholder" agar mudah diverifikasi (lihat contact.test.ts).
 */
export const contact: ContactInfo = {
  company: 'KOVAA',
  address: 'placeholder-alamat-lengkap',
  phone: 'placeholder-telepon',
  whatsapp: 'placeholder-whatsapp',
  email: 'placeholder@example.com',
  hours: 'placeholder-jam-operasional',
  mapsUrl: 'https://placeholder-maps.example.com',
  siteUrl: 'https://placeholder-domain.example.com',
}
