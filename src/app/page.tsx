import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HomeHero from '@/components/home/HomeHero'
import HomeAbout from '@/components/home/HomeAbout'
import HomeContact from '@/components/home/HomeContact'
import type { Metadata } from 'next'
import content from '../../content.json'

export const metadata: Metadata = {
  title: content.site.title,
  description: content.site.description,
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HomeHero />
        <HomeAbout />
        <HomeContact />
      </main>
      <Footer />
    </>
  )
}
