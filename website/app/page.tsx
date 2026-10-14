import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Advantages } from '@/components/advantages'
import { CtaBanner } from '@/components/cta-banner'
import { Products } from '@/components/products'
import { Process } from '@/components/process'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <>
      <SiteHeader />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-200 focus:rounded-md focus:bg-kovaa-blue focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Lewati ke konten
      </a>
      <main id="main">
        <Hero />
        <About />
        <Advantages />
        <CtaBanner />
        <Products />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
