import React from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Reveal } from '@/components/motion/Reveal'
import { Button } from '@/components/ui/Button'
import { SteelIcon } from '@/components/ui/SteelIcon'

const badges = [
  {
    icon: '016-steel' as const,
    label: 'Integrated Capability',
    sub: 'Steel Design, Fabrication, Blasting, Painting, Fireproofing and Erection — all under one roof.',
  },
  {
    icon: '001-steel' as const,
    label: 'Turnkey Delivery',
    sub: 'Complete Civil and MEP projects on one contract, from Substructure to Superstructure.',
  },
  {
    icon: '038-bars' as const,
    label: 'One Accountable Partner',
    sub: 'A single team owns the work end to end. No vendor blame-game, fewer delays.',
  },
]

export function AboutSnapshot() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div>
            <Reveal>
              <Eyebrow className="mb-4">What We Do</Eyebrow>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="text-h1 font-heading text-[#04091E] mb-6">
                Qatar&rsquo;s integrated structural steel &amp; construction specialist
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="text-body text-[#3A4A60] mb-4">
                iSteel Engineering is a Qatar-based Structural Steel and Construction Specialist.
                We Design, Fabricate, Finish, Erect and Install Steel In-House — and deliver
                Complete Civil and MEP works on a Turnkey basis.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="text-body text-[#3A4A60] mb-8">
                Clients get a single point of contact from the first drawing to Final Handover.
                Most steel jobs split Design, Fabrication and Erection across separate vendors —
                and the gaps between them cause delays. iSteel owns every stage, so accountability
                never changes hands.
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
              <div className="flex flex-col gap-5 mt-10 pt-10 border-t border-[#E8EDF5]">
                {badges.map(({ icon, label, sub }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#0A1547]/8 flex items-center justify-center shrink-0 mt-0.5">
                      <SteelIcon
                        name={icon}
                        size={22}
                        color="gold"
                        className="[filter:brightness(0)_saturate(100%)_invert(20%)_sepia(80%)_saturate(600%)_hue-rotate(198deg)_brightness(90%)_contrast(95%)]"
                      />
                    </div>
                    <div>
                      <div className="text-sm font-heading font-semibold text-[#04091E] leading-snug mb-0.5">{label}</div>
                      <div className="text-xs text-[#6080A0] leading-relaxed">{sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Photo */}
          <Reveal delay={0.1}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-[0_24px_64px_-12px_rgba(10,21,71,0.25)]">
              <Image
                src="/assets/envato/Images/4.jpeg"
                alt="iSteel Engineering fabrication and erection work on a Qatar construction project"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#04091E]/60 via-transparent to-transparent" />

              {/* Gold accent frame */}
              <div className="absolute top-5 left-5 w-px h-20 bg-accent" />
              <div className="absolute top-5 left-5 w-20 h-px bg-accent" />
              <div className="absolute bottom-0 right-0 w-16 h-16 rounded-tl-2xl bg-accent/20" />

              {/* Caption */}
              <div className="absolute bottom-5 left-5 right-5">
                <div className="text-[10px] text-accent tracking-widest uppercase mb-1">iSteel — Doha, Qatar</div>
                <div className="text-sm text-white font-heading font-medium">From Drawing to Final Bolt — one team</div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}
