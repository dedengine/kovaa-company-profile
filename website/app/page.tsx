import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Products } from '@/components/products'
import { Advantages } from '@/components/advantages'
import { Process } from '@/components/process'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <>
      <SiteHeader />
      <Hero />
      <main>
        <About />
        <Products />
        <Advantages />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
