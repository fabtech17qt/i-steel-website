import React from 'react'
import Image from 'next/image'
import { ArrowRight, ShieldCheck, Clock, Award } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Reveal } from '@/components/motion/Reveal'
import { Button } from '@/components/ui/Button'
import { SteelIcon } from '@/components/ui/SteelIcon'

const badges = [
  { icon: '016-steel' as const, label: 'ISO Certified', sub: '9001 · 14001 · 45001', lucide: ShieldCheck },
  { icon: '038-bars' as const, label: '12+ Years', sub: 'Est. 2013, Doha', lucide: Clock },
  { icon: '001-steel' as const, label: 'Local Presence', sub: 'Global Standards', lucide: Award },
]

export function AboutSnapshot() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text — dark on white */}
          <div>
            <Reveal>
              <Eyebrow className="mb-4">About iSteel</Eyebrow>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="text-h1 font-heading text-[#04091E] mb-6">
                Steel expertise built over a decade in Qatar
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="text-body text-[#3A4A60] mb-4">
                iSteel Engineering Trading & Contracting W.L.L has delivered structural steel and
                turnkey civil packages across Qatar since 2013. From our fabrication workshop in
                Doha, we serve EPC contractors, government clients, real estate developers, and oil
                & gas operators.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="text-body text-[#3A4A60] mb-8">
                Our integrated capability — design, fabricate, coat, erect — means a single
                accountable partner from drawing to handover, with full QA documentation and ISO
                management systems.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <Button
                href="/about"
                className="group bg-[#0A1547] text-white hover:bg-[#10206A]"
              >
                More about us
                <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Button>
            </Reveal>

            {/* Badge row */}
            <Reveal delay={0.32}>
              <div className="grid grid-cols-3 gap-4 mt-10 pt-10 border-t border-[#E8EDF5]">
                {badges.map(({ icon, label, sub }) => (
                  <div key={label} className="flex flex-col gap-2">
                    <div className="w-10 h-10 rounded-lg bg-[#0A1547]/8 flex items-center justify-center">
                      <SteelIcon
                        name={icon}
                        size={22}
                        color="gold"
                        className="[filter:brightness(0)_saturate(100%)_invert(20%)_sepia(80%)_saturate(600%)_hue-rotate(198deg)_brightness(90%)_contrast(95%)]"
                      />
                    </div>
                    <div className="text-sm font-heading font-medium text-[#04091E] leading-snug">{label}</div>
                    <div className="text-xs text-[#6080A0]">{sub}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Real Envato welder photo */}
          <Reveal delay={0.1}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-[0_24px_64px_-12px_rgba(10,21,71,0.25)]">
              <Image
                src="/assets/envato/Images/4.jpeg"
                alt="iSteel welder on steel arch truss at a Qatar construction project"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Subtle navy overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#04091E]/60 via-transparent to-transparent" />

              {/* Gold accent frame */}
              <div className="absolute top-5 left-5 w-px h-20 bg-accent" />
              <div className="absolute top-5 left-5 w-20 h-px bg-accent" />
              <div className="absolute bottom-0 right-0 w-16 h-16 rounded-tl-2xl bg-accent/20" />

              {/* Caption */}
              <div className="absolute bottom-5 left-5 right-5">
                <div className="text-[10px] text-accent tracking-widest uppercase mb-1">Steel erection — Qatar</div>
                <div className="text-sm text-white font-heading font-medium">Arched steel truss installation at height</div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}
