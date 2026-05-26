import type { Metadata } from 'next'
import { ContactSection } from '@/components/sections/ContactSection'

export const metadata: Metadata = {
  title: 'Contact Us | iSteel Engineering',
  description:
    'Get in touch with iSteel Engineering in Doha, Qatar. Request a quote for structural steel, civil, or MEP works.',
}

export default function ContactPage() {
  return <ContactSection />
}
