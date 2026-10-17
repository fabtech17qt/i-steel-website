import type { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { TickerBand } from '@/components/sections/TickerBand'
import { Mission } from '@/components/sections/Mission'
import { ServicesShowcase } from '@/components/sections/ServicesShowcase'
import { ProcessSection } from '@/components/sections/ProcessSection'
import { DNASection } from '@/components/sections/DNASection'
import { FeaturedProjects } from '@/components/sections/FeaturedProjects'
import { VideoSection } from '@/components/sections/VideoSection'
import { CertificationsStrip } from '@/components/sections/CertificationsStrip'
import { ClientsStrip } from '@/components/sections/ClientsStrip'
import { ContactSection } from '@/components/sections/ContactSection'

export const metadata: Metadata = {
  title: 'iSteel Engineering Trading & Contracting | Structural Steel Qatar',
  description:
    'Qatar\'s integrated structural steel and turnkey construction specialist. End-to-end from Design to Handover. 5+ years, 52+ projects. ISO certified, ICV certified.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <TickerBand />
      <Mission />
      <ServicesShowcase />
      <ProcessSection />
      <DNASection />
      <FeaturedProjects />
      <VideoSection />
      <ClientsStrip />
      <CertificationsStrip />
      <ContactSection />
    </>
  )
}
