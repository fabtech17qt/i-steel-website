import type { Metadata } from 'next'
import Image from 'next/image'
import { ShieldCheck, Award, CheckCircle } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Reveal } from '@/components/motion/Reveal'
import { CTABanner } from '@/components/sections/CTABanner'
import { SteelIcon } from '@/components/ui/SteelIcon'
import { certifications } from '@/lib/content/certifications'

export const metadata: Metadata = {
  title: 'Certifications & Accreditations | iSteel Engineering Qatar',
  description:
    'ISO 9001, ISO 14001, ISO 45001 certified. ICV certified. View all iSteel Engineering certifications, quality accreditations, and client appreciation letters.',
}

const isoCerts = certifications.filter((c) => c.type === 'certification')
const appreciations = certifications.filter((c) => c.type === 'appreciation')

const whyItMatters = [
  'Verified quality management at every production stage',
  'Environmentally responsible operations and waste management',
  'World-class occupational health and safety protocols',
  "Compliance with Qatar's In-Country Value (ICV) programme requirements",
]

export default function CertificationsPage() {
  return (
    <>
      {/* Dark hero header */}
      <div className="relative pt-[120px] pb-24 overflow-hidden">
        <Image
          src="/assets/envato/Metal Textures 3.jpg"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          aria-hidden="true"
          priority
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(4,9,30,0.96) 0%, rgba(10,21,71,0.93) 100%)' }}
        />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.04] pointer-events-none">
          <SteelIcon name="016-steel" size={360} color="white" />
        </div>

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <Eyebrow className="mb-4">Quality &amp; compliance</Eyebrow>
              <h1 className="text-h1 font-heading text-paper max-w-2xl">
                Certified to the highest international standards
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <ul className="flex flex-col gap-3">
                {whyItMatters.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-[#D4A020] mt-0.5 shrink-0" />
                    <span className="text-sm text-mute">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </div>

      {/* ISO Certifications — white */}
      <div className="bg-white py-16 lg:py-20">
        <Container>
          <Reveal>
            <div className="flex items-center gap-3 mb-10">
              <ShieldCheck size={22} className="text-[#D4A020]" />
              <h2 className="text-h2 font-heading text-[#04091E]">Certifications</h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-20">
            {isoCerts.map((cert, i) => (
              <Reveal key={cert.id} delay={i * 0.07}>
                <div className="p-6 bg-[#F8FAFF] border border-[#E0E8F5] rounded-xl flex flex-col items-center text-center gap-4 shadow-[0_2px_16px_-4px_rgba(10,21,71,0.06)] hover:shadow-[0_8px_32px_-8px_rgba(10,21,71,0.12)] hover:border-[#D4A020]/30 transition-all duration-300">
                  <div className="w-16 h-16 rounded-full border-2 border-[#D4A020]/40 bg-[#D4A020]/10 flex items-center justify-center">
                    <ShieldCheck size={28} className="text-[#D4A020]" />
                  </div>
                  <div>
                    <h3 className="text-h3 font-heading text-[#04091E] mb-1">{cert.name}</h3>
                    <p className="text-sm text-[#6080A0]">{cert.issuer}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Appreciation letters */}
          <Reveal>
            <div className="flex items-center gap-3 mb-10">
              <Award size={22} className="text-[#D4A020]" />
              <h2 className="text-h2 font-heading text-[#04091E]">Appreciation Letters</h2>
            </div>
          </Reveal>
          {appreciations.length > 0 && appreciations[0].client?.startsWith('[TODO') ? (
            <Reveal>
              <div className="p-10 bg-[#F8FAFF] border border-[#E0E8F5] border-dashed rounded-xl text-center text-[#8090B0]">
                Client appreciation letters will be added once confirmed with the client.
                <br />
                <span className="text-xs mt-1 block">Add letter details, client name, and year to <code>lib/content/certifications.ts</code></span>
              </div>
            </Reveal>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {appreciations.map((cert, i) => (
                <Reveal key={cert.id} delay={i * 0.06}>
                  <div className="p-6 bg-[#F8FAFF] border border-[#E0E8F5] rounded-xl shadow-[0_2px_16px_-4px_rgba(10,21,71,0.06)]">
                    <div className="text-xs text-[#8090B0] uppercase tracking-widest mb-1">
                      {cert.year}
                    </div>
                    <h3 className="text-h3 font-heading text-[#04091E] mb-1">{cert.name}</h3>
                    <p className="text-sm text-[#6080A0]">{cert.client}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          )}
        </Container>
      </div>

      <CTABanner />
    </>
  )
}
