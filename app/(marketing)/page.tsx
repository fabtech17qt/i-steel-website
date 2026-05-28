import type { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { StatsStrip } from '@/components/sections/StatsStrip'
import { AboutSnapshot } from '@/components/sections/AboutSnapshot'
import { ServicesGrid } from '@/components/sections/ServicesGrid'
import { FeaturedProjects } from '@/components/sections/FeaturedProjects'
import { VideoSection } from '@/components/sections/VideoSection'
import { CertificationsStrip } from '@/components/sections/CertificationsStrip'
import { ProcessSection } from '@/components/sections/ProcessSection'
import { CTABanner } from '@/components/sections/CTABanner'
import { ContactSection } from '@/components/sections/ContactSection'

export const metadata: Metadata = {
  title: 'iSteel Engineering Trading & Contracting | Structural Steel Qatar',
  description:
    'Qatar-based structural steel fabrication, civil construction, and turnkey MEP contracting since 2013. ISO certified.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <AboutSnapshot />
      <ServicesGrid />
      <FeaturedProjects />
      <VideoSection />
      <CertificationsStrip />
      <ProcessSection />
      <CTABanner />
      <ContactSection />
    </>
  )
}
