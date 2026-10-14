import type { Metadata } from "next";
import { Lexend, Source_Sans_3 } from "next/font/google";
import { I18nProvider } from "@/lib/i18n-provider";
import { contact } from "@/data/contact";
import { organizationJsonLd } from "@/lib/seo";
import "./globals.css";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(contact.siteUrl),
  title: {
    default: "KOVAA — Rak Supermarket, Gondola, Rak Dinding & Drawer",
    template: "%s | KOVAA",
  },
  description:
    "KOVAA menciptakan, membangun, dan mengirim peralatan ritel berkualitas: rak supermarket, rak gondola kerangka besi, rak dinding, rak sayur-buah, dan drawer kayu. Custom-made sesuai kebutuhan toko Anda.",
  keywords: [
    "rak supermarket",
    "rak gondola",
    "rak display",
    "rak dinding",
    "rak sayur buah",
    "drawer kayu",
    "peralatan toko",
    "perlengkapan ritel",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    alternateLocale: "en_US",
    siteName: "KOVAA",
    title: "KOVAA — Create. Build. Deliver.",
    description:
      "Peralatan ritel custom-made: rak supermarket, gondola, rak dinding, dan drawer kayu. Dibuat, dibangun, dan dikirim langsung oleh tim KOVAA.",
    url: contact.siteUrl,
    images: ["/assets/mockup-2.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "KOVAA — Create. Build. Deliver.",
    description:
      "Peralatan ritel custom-made: rak supermarket, gondola, rak dinding, dan drawer kayu.",
    images: ["/assets/mockup-2.jpeg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${lexend.variable} ${sourceSans.variable} font-body antialiased`}
    >
      <body className="min-h-screen bg-white text-neutral-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd(contact)),
          }}
        />
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
