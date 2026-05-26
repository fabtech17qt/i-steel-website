import type { Metadata } from 'next'
import Image from 'next/image'
import { ShieldCheck, Clock, Globe, Award, Target, Eye, Heart } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Stat } from '@/components/ui/Stat'
import { Reveal } from '@/components/motion/Reveal'
import { CTABanner } from '@/components/sections/CTABanner'
import { SteelIcon } from '@/components/ui/SteelIcon'
import { company } from '@/lib/content/company'

export const metadata: Metadata = {
  title: 'About iSteel Engineering | Qatar Steel Contractor',
  description:
    'iSteel Engineering Trading & Contracting W.L.L — leading main contractor of turnkey steel and civil projects in Qatar since 2013.',
}

const values = [
  {
    icon: ShieldCheck,
    title: 'Quality First',
    body: 'All fabrication and construction works follow ISO 9001:2015-certified quality management procedures with full documentation and ITP sign-off.',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    body: 'We invest in planning, procurement, and programme management to keep projects on track and clients fully informed at every stage.',
  },
  {
    icon: Globe,
    title: 'Safety Without Compromise',
    body: 'ISO 45001:2018-accredited H&S management system. Zero tolerance for unsafe acts. Full COSHH, PTW, and PPE compliance across all sites.',
  },
  {
    icon: Award,
    title: 'Integrated Capability',
    body: 'Design, fabricate, coat, erect — one contract, one team, one point of accountability from drawing through to handover.',
  },
]

const milestones = [
  { year: '2013', event: 'iSteel Engineering established in Doha, Qatar' },
  { year: '2015', event: 'ISO 9001 & ISO 14001 certifications achieved' },
  { year: '2017', event: 'In-house blasting and painting facility opened' },
  { year: '2019', event: 'ISO 45001:2018 occupational health & safety accreditation' },
  { year: '2021', event: 'QCD registered for Qatar Chemical & Petroleum sector' },
  { year: '2023', event: 'Expanded workshop capacity and engineering department' },
]

export default function AboutPage() {
  return (
    <>
      {/* Dark hero header with photo bg */}
      <div className="relative pt-[120px] pb-24 overflow-hidden">
        <Image
          src="/assets/envato/Images/1.jpeg"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          aria-hidden="true"
          priority
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(4,9,30,0.95) 0%, rgba(16,32,106,0.90) 100%)' }}
        />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.04] pointer-events-none">
          <SteelIcon name="001-steel" size={360} color="white" />
        </div>

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div>
              <Reveal>
                <Eyebrow className="mb-4">About iSteel</Eyebrow>
                <h1 className="text-h1 font-heading text-paper">
                  Building Qatar's industrial &amp; commercial infrastructure since 2013
                </h1>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <p className="text-body text-mute">
                iSteel Engineering Trading &amp; Contracting W.L.L is the leading main contractor
                of turnkey steel and civil projects in Qatar — combining an integrated workshop,
                in-house engineering, and experienced site execution crews under a single contract.
              </p>
            </Reveal>
          </div>
        </Container>
      </div>

      {/* Stats — white */}
      <div className="bg-white border-b border-[#E0E8F5] py-14">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y-0 md:divide-x md:divide-[#E0E8F5]">
            <Stat value={company.stats.yearsExperience} label="Years of experience" dark />
            <Stat value={company.stats.projectsDelivered} label="Projects delivered" className="md:pl-8" dark />
            <Stat value={company.stats.teamMembers} label="Skilled team members" className="md:pl-8" dark />
            <Stat value={company.stats.tonnesFabricated} label="Tonnes fabricated annually" className="md:pl-8" dark />
          </div>
        </Container>
      </div>

      {/* Story — white */}
      <Section className="bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <Reveal>
              <div>
                <Eyebrow className="mb-4">Our story</Eyebrow>
                <h2 className="text-h2 font-heading text-[#04091E] mb-6">
                  A decade of steel expertise in Qatar
                </h2>
                <p className="text-body text-[#3A4A60] mb-4">
                  Founded in 2013 and headquartered in Doha, iSteel has grown from a focused steel
                  fabrication shop into a fully integrated contractor serving the oil &amp; gas,
                  industrial, and commercial construction sectors across Qatar.
                </p>
                <p className="text-body text-[#3A4A60] mb-4">
                  Our team brings together structural engineers, workshop fabricators, blasting and
                  painting specialists, and erection crews — all under one management system. This
                  integration lets us move faster, control quality tighter, and take on complex
                  multi-discipline scopes that a traditional subcontract chain cannot match.
                </p>
                <p className="text-body text-[#3A4A60]">
                  Today we work with EPC contractors, government entities, real estate developers,
                  and direct owner-operators on projects ranging from a 50-tonne equipment support
                  frame to a 4,000 m² design-build industrial facility.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-[#E0E8F5] shadow-[0_8px_40px_-12px_rgba(10,21,71,0.15)]">
                <Image
                  src="/assets/envato/New-img/WhatsApp Image 2026-05-26 at 2.15.37 PM.jpeg"
                  alt="iSteel Engineering welder at work in fabrication workshop"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#04091E]/40 to-transparent" />
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Mission / Vision / Values — dark with metal texture */}
      <div className="relative overflow-hidden py-20">
        <Image
          src="/assets/envato/Images/18.jpeg"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(4,9,30,0.96) 0%, rgba(10,21,71,0.93) 100%)' }}
        />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-[0.04] pointer-events-none">
          <SteelIcon name="016-steel" size={320} color="white" />
        </div>

        <Container className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Target,
                label: 'Mission',
                text: 'To deliver high-quality, innovative, and sustainable engineering solutions that exceed client expectations — on time and within budget — while maintaining the highest standards of safety and integrity.',
              },
              {
                icon: Eye,
                label: 'Vision',
                text: 'To be the most trusted and preferred main contractor in Qatar and the wider GCC region, recognised for engineering excellence, integrated delivery, and long-term client partnerships.',
              },
              {
                icon: Heart,
                label: 'Values',
                text: 'Integrity in every commitment. Quality in every weld. Safety in every decision. Innovation in every design. Teamwork in every project.',
              },
            ].map((item, i) => (
              <Reveal key={item.label} delay={i * 0.08}>
                <div className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                  <item.icon size={22} className="text-accent mb-4" />
                  <h3 className="text-h3 font-heading text-paper mb-3">{item.label}</h3>
                  <p className="text-sm text-mute leading-relaxed">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Values grid */}
          <Reveal>
            <Eyebrow className="text-center mb-4">How we work</Eyebrow>
            <h2 className="text-h2 font-heading text-paper text-center mb-10">Our core values</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.07}>
                <div className="flex items-start gap-4 p-6 rounded-xl border border-white/10 bg-white/5">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 border border-accent/30 flex items-center justify-center shrink-0">
                    <v.icon size={18} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-h3 font-heading text-paper mb-1">{v.title}</h3>
                    <p className="text-sm text-mute leading-relaxed">{v.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </div>

      {/* Timeline — white */}
      <Section className="bg-white">
        <Container>
          <Reveal>
            <Eyebrow className="mb-4">Our journey</Eyebrow>
            <h2 className="text-h2 font-heading text-[#04091E] mb-12">Key milestones</h2>
          </Reveal>
          <div className="relative">
            <div className="absolute left-[19px] top-2 bottom-2 w-px bg-[#E0E8F5]" />
            <div className="flex flex-col gap-8">
              {milestones.map((m, i) => (
                <Reveal key={m.year} delay={i * 0.06}>
                  <div className="flex items-start gap-6 pl-2">
                    <div className="relative flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#D4A020] bg-white shrink-0 z-10">
                      <div className="w-2 h-2 rounded-full bg-[#D4A020]" />
                    </div>
                    <div className="pt-2">
                      <div className="text-xs font-heading font-semibold text-[#D4A020] uppercase tracking-widest mb-1">{m.year}</div>
                      <p className="text-[#3A4A60]">{m.event}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Team — dark */}
      <div className="bg-[#04091E] border-y border-[#1B2F8A]/60 py-16">
        <Container>
          <Reveal className="text-center">
            <Eyebrow className="mb-4">Leadership</Eyebrow>
            <h2 className="text-h2 font-heading text-paper mb-4">Our team</h2>
            <p className="text-mute text-body max-w-lg mx-auto">
              Real team bios and headshots will be added once photos are confirmed with the client.
            </p>
          </Reveal>
        </Container>
      </div>

      <CTABanner />
    </>
  )
}
