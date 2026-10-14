import type { ContactInfo } from '@/data/contact'

/** JSON-LD LocalBusiness untuk SEO (bergantung pada data kontak). */
export function organizationJsonLd(contact: ContactInfo) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: contact.company,
    description:
      'Peralatan ritel: rak supermarket, rak gondola, rak dinding, rak sayur-buah, dan drawer kayu.',
    address: contact.address,
    telephone: contact.phone,
    email: contact.email,
    url: contact.siteUrl,
    image: `${contact.siteUrl}/assets/mockup-1.jpeg`,
  }
}
