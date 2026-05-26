import type { Metadata } from 'next'
import Image from 'next/image'  // used for hero background
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Reveal } from '@/components/motion/Reveal'
import { CTABanner } from '@/components/sections/CTABanner'
import { SteelIcon } from '@/components/ui/SteelIcon'
import { services } from '@/lib/content/services'

export const metadata: Metadata = {
  title: 'Our Services | iSteel Engineering Qatar',
  description:
    'Structural steel fabrication, civil construction, MEP, oil & gas, and 9 more integrated services — all from a single main contractor in Qatar.',
}

export default function ServicesPage() {
  return (
    <>
      {/* Dark hero header */}
      <div className="relative pt-[120px] pb-24 overflow-hidden">
        <Image
          src="/assets/envato/Images/21.jpeg"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          aria-hidden="true"
          priority
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(4,9,30,0.95) 0%, rgba(10,21,71,0.90) 100%)' }}
        />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.04] pointer-events-none">
          <SteelIcon name="011-beam" size={360} color="white" />
        </div>

        <Container className="relative z-10">
          <Reveal>
            <Eyebrow className="mb-4">What we do</Eyebrow>
            <h1 className="text-h1 font-heading text-paper max-w-2xl">
              12 integrated services — one accountable partner
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-body text-mute mt-6 max-w-xl">
              From structural steel fabrication to turnkey civil construction, MEP, and oil &amp; gas
              works — we self-perform every scope under a single contract and point of responsibility.
            </p>
          </Reveal>
        </Container>
      </div>

      {/* Services grid — white */}
      <div className="bg-white py-16 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <Reveal key={svc.slug} delay={i * 0.04}>
                <Link
                  href={`/services/${svc.slug}`}
                  className="group flex flex-col gap-0 rounded-xl border border-[#E0E8F5] overflow-hidden hover:border-[#D4A020]/40 hover:-translate-y-1 transition-all duration-300 shadow-[0_2px_16px_-4px_rgba(10,21,71,0.08)] hover:shadow-[0_8px_32px_-8px_rgba(10,21,71,0.16)] bg-white"
                >
                  {/* Gold accent top bar */}
                  <div className="h-[3px] w-full bg-gradient-to-r from-[#D4A020] via-[#F0C840] to-transparent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                  <div className="flex flex-col gap-4 p-6 flex-1">
                    <div className="flex items-start justify-between">
                      <div className="w-11 h-11 rounded-lg bg-[#0A1547]/8 border border-[#1B2F8A]/15 flex items-center justify-center">
                        <SteelIcon name={svc.icon} size={22} color="gold" />
                      </div>
                      <span className="text-[10px] text-[#8090B0] font-heading font-semibold uppercase tracking-widest">{svc.number}</span>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-h3 font-heading text-[#04091E] mb-2 group-hover:text-[#D4A020] transition-colors duration-200">
                        {svc.title}
                      </h2>
                      <p className="text-sm text-[#3A4A60] leading-relaxed">{svc.shortDescription}</p>
                    </div>
                    <div className="pt-4 border-t border-[#E0E8F5]">
                      <ul className="flex flex-col gap-1.5 mb-4">
                        {svc.capabilities.slice(0, 3).map((cap) => (
                          <li key={cap} className="flex items-center gap-2 text-xs text-[#6080A0]">
                            <span className="w-1 h-1 rounded-full bg-[#D4A020] shrink-0" />
                            {cap}
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center gap-1 text-xs text-[#D4A020] font-heading font-medium group-hover:gap-2 transition-all duration-200">
                        Learn more <ArrowRight size={12} />
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </div>

      <CTABanner />
    </>
  )
}
