'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Reveal } from '@/components/motion/Reveal'
import { SteelIcon } from '@/components/ui/SteelIcon'
import { services } from '@/lib/content/services'

const bgImages = [
  '/assets/envato/Images/1.jpeg',
  '/assets/envato/New-img/WhatsApp Image 2026-05-26 at 2.15.36 PM.jpeg',
  '/assets/envato/Images/4.jpeg',
  '/assets/envato/New-img/WhatsApp Image 2026-05-26 at 2.15.27 PM.jpeg',
  '/assets/envato/Images/9.jpeg',
  '/assets/envato/New-img/WhatsApp Image 2026-05-26 at 2.15.31 PM.jpeg',
]

export function ServicesGrid() {
  return (
    <div>
      {/* Section header with Envato construction photo */}
      <div className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/envato/Images/21.jpeg"
            alt="Aerial view of iSteel industrial construction project in Qatar"
            fill
            className="object-cover object-center"
            sizes="100vw"
            aria-hidden="true"
          />
        </div>
        {/* Deep navy overlay */}
        <div className="absolute inset-0 z-[1]"
          style={{ background: 'linear-gradient(135deg, rgba(4,9,30,0.94) 0%, rgba(10,21,71,0.85) 100%)' }}
        />
        {/* Large steel icon watermark */}
        <div className="absolute right-[5%] top-1/2 -translate-y-1/2 z-[2] opacity-[0.05] pointer-events-none">
          <SteelIcon name="011-beam" size={320} color="white" />
        </div>

        <Container className="relative z-10">
          <Reveal className="text-center">
            <Eyebrow className="mb-4">What we do</Eyebrow>
            <h2 className="text-h1 font-heading text-white max-w-2xl mx-auto">
              12 integrated services,<br />one accountable partner
            </h2>
          </Reveal>
        </Container>
      </div>

      {/* Cards grid — white background */}
      <Section className="bg-white" noPadding>
        <Container className="py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {services.map((svc, i) => (
              <Reveal key={svc.slug} delay={i * 0.04}>
                <Link
                  href={`/services/${svc.slug}`}
                  className="group relative block overflow-hidden rounded-xl border border-[#E8EDF5] bg-white hover:border-[#1B2F8A]/30 hover:shadow-[0_8px_32px_-8px_rgba(10,21,71,0.15)] transition-all duration-300"
                >
                  {/* Top metal texture strip */}
                  <div className="relative h-36 overflow-hidden">
                    <Image
                      src={bgImages[i % bgImages.length]}
                      alt=""
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      aria-hidden="true"
                    />
                    <div className="absolute inset-0"
                      style={{ background: 'linear-gradient(to bottom, rgba(10,21,71,0.5) 0%, rgba(4,9,30,0.8) 100%)' }}
                    />
                    {/* Service number */}
                    <div className="absolute top-3 left-4">
                      <span className="text-eyebrow text-accent">{svc.number}</span>
                    </div>
                    {/* Icon */}
                    <div className="absolute bottom-3 right-4">
                      <SteelIcon name={svc.icon} size={32} color="gold" className="opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>

                  {/* Card body — white */}
                  <div className="p-5">
                    <h3 className="text-h3 font-heading text-[#04091E] mb-2 group-hover:text-[#0A1547] transition-colors duration-200 leading-snug">
                      {svc.title}
                    </h3>
                    <p className="text-xs text-[#6080A0] leading-relaxed mb-4">
                      {svc.shortDescription}
                    </p>
                    <div className="flex items-center gap-1.5 text-accent text-xs font-heading font-medium">
                      Learn more
                      <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </div>

                  {/* Gold bottom accent on hover */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <p className="mt-10 text-center text-[#6080A0] text-sm">
              Don&rsquo;t see what you need?{' '}
              <Link
                href="/contact"
                className="text-accent hover:text-accent-2 transition-colors duration-200 inline-flex items-center gap-1 font-medium"
              >
                Talk to our engineers <ArrowRight size={12} />
              </Link>
            </p>
          </Reveal>
        </Container>
      </Section>
    </div>
  )
}
