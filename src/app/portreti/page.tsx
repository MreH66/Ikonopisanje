import Navbar from '@/components/Navbar'
import PortretiHero from '@/components/portreti/PortretiHero'
import PortretiGallery from '@/components/portreti/PortretiGallery'
import PortretiPrices from '@/components/portreti/PortretiPrices'
import PortretiContact from '@/components/portreti/PortretiContact'
import PortretiFooter from '@/components/portreti/PortretiFooter'
import type { Metadata } from 'next'
import content from '../../../content.json'

export const metadata: Metadata = {
  title: content.portreti.meta.title,
  description: content.portreti.meta.description,
}

export default function PortretiPage() {
  return (
    <>
      <Navbar />
      <main>
        <PortretiHero />
        <PortretiGallery />
        <PortretiPrices />
      </main>
      <PortretiFooter />
    </>
  )
}
