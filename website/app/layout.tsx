import type { Metadata, Viewport } from "next";
import { Poppins, Roboto } from "next/font/google";
import { I18nProvider } from "@/lib/i18n-provider";
import { ThemeProvider } from "@/lib/theme-provider";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { contact } from "@/data/contact";
import { organizationJsonLd } from "@/lib/seo";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(contact.siteUrl),
  title: {
    // absolute: judul beranda tidak ditempeli template (hindari "KOVAA | KOVAA")
    absolute: "KOVAA",
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
    title: "KOVAA: Create. Build. Deliver.",
    description:
      "Peralatan ritel custom-made: rak supermarket, gondola, rak dinding, dan drawer kayu. Dibuat, dibangun, dan dikirim langsung oleh tim KOVAA.",
    url: contact.siteUrl,
    images: ["/assets/mockup-2.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "KOVAA: Create. Build. Deliver.",
    description:
      "Peralatan ritel custom-made: rak supermarket, gondola, rak dinding, dan drawer kayu.",
    images: ["/assets/mockup-2.jpeg"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${poppins.variable} ${roboto.variable} font-body antialiased`}
    >
      <head>
        <meta name="color-scheme" content="light dark" />
        {/* Set tema sebelum paint agar tidak ada flash; selaras dengan ThemeProvider */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('kovaa-theme');var d=t==='dark'||(t!=='light'&&window.matchMedia('(prefers-color-scheme: dark)').matches);if(d)document.documentElement.classList.add('dark')}catch(e){}})()`,
          }}
        />
      </head>
      <body className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd(contact)),
          }}
        />
        <I18nProvider>
          <ThemeProvider>
            {children}
            <WhatsAppFloat />
          </ThemeProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
