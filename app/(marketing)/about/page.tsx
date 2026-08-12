import type { Metadata } from 'next'
import Image from 'next/image'
import { ShieldCheck, Clock, Globe, Award, Target, Eye, Heart, MapPin } from 'lucide-react'
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
    'iSteel Engineering Trading & Contracting W.L.L — 5+ years of structural steel and turnkey construction across Qatar. ISO certified, ICV certified.',
}

const values = [
  {
    icon: ShieldCheck,
    title: 'Quality First',
    body: 'All fabrication and construction works follow ISO 9001:2015-certified quality management procedures with full documentation and ITP sign-off at every stage.',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    body: 'We invest in planning, procurement, and programme management to keep projects on track — and have a track record of delivering ahead of schedule.',
  },
  {
    icon: Globe,
    title: 'Safety Without Compromise',
    body: 'ISO 45001:2018-accredited H&S management system. 2M+ LTI-free safe work hours. Zero tolerance for unsafe acts. Full compliance across all sites.',
  },
  {
    icon: Award,
    title: 'Integrated Capability',
    body: 'Design, fabricate, coat, erect — one contract, one team, one point of accountability from drawing through to handover.',
  },
]

const whyUs = [
  {
    icon: MapPin,
    title: 'One Contract End to End',
    body: 'Design to Handover under a single accountable team. No vendor blame-game, no gaps in responsibility.',
  },
  {
    icon: ShieldCheck,
    title: 'Certified & Compliant',
    body: 'ISO 9001 · ISO 14001 · ISO 45001 · ICV Certified · IQNET · NCAGE registered. Built on trust, governed by standards.',
  },
  {
    icon: Award,
    title: 'Proven on National Projects',
    body: 'Amiri Diwan, Qatar Foundation, Ashghal, Tekfen, Domopan. Repeat clients are our strongest reference.',
  },
  {
    icon: Globe,
    title: 'Safety-First Delivery',
    body: '2M+ LTI-free hours. Zero safety incidents across all published case studies. Safety is not a department — it is our culture.',
  },
]

const milestones = [
  { year: '2021', event: 'iSteel Engineering founded in Doha, Qatar' },
  { year: '2022', event: 'ISO 9001 & ISO 14001 certifications achieved — CNC plasma cutting and heavy fabrication capability commissioned' },
  { year: '2023', event: 'ISO 45001:2018 occupational health & safety accreditation — in-house blasting and painting facility opened' },
  { year: '2024', event: 'ICV certification and NCAGE registration (Qatar National Codification Bureau) achieved' },
  { year: '2025', event: 'Al Waab City Mall — one of Qatar\'s most complex steel structures, delivered on schedule' },
  { year: '2026', event: '45+ skilled professionals, 52+ projects delivered, 3,000+ tonnes fabricated annually' },
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
                  5+ years building Qatar&apos;s industrial &amp; commercial infrastructure
                </h1>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <p className="text-body text-mute">
                iSteel Engineering Trading &amp; Contracting W.L.L is a Qatar-based Structural Steel
                and Construction Specialist — combining an integrated workshop, in-house engineering,
                and experienced site execution crews under a single contract from drawing to Final Handover.
              </p>
            </Reveal>
          </div>
        </Container>
      </div>

      {/* Stats */}
      <div className="bg-white border-b border-[#E0E8F5] py-14">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y-0 md:divide-x md:divide-[#E0E8F5]">
            <Stat value={company.stats.yearsExperience} label="Years of experience" dark />
            <Stat value={company.stats.projectsDelivered} label="Projects delivered" className="md:pl-8" dark />
            <Stat value={company.stats.skilledWorkers} label="Skilled workers" className="md:pl-8" dark />
            <Stat value={company.stats.tonnesFabricated} label="Tonnes fabricated annually" className="md:pl-8" dark />
          </div>
        </Container>
      </div>

      {/* Story */}
      <Section className="bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <Reveal>
              <div>
                <Eyebrow className="mb-4">Our story</Eyebrow>
                <h2 className="text-h2 font-heading text-[#04091E] mb-6">
                  5+ years of steel expertise in Qatar
                </h2>
                <p className="text-body text-[#3A4A60] mb-4">
                  Founded in 2021 and headquartered in Doha, iSteel has grown from a focused steel
                  fabrication shop into a fully integrated contractor serving the industrial, commercial,
                  and government construction sectors across Qatar — with 45+ skilled workers and 52+
                  projects delivered.
                </p>
                <p className="text-body text-[#3A4A60]">
                  This integration lets us move faster, control quality tighter, and take on complex
                  multi-discipline scopes that a traditional subcontract chain cannot match. Today we
                  work with Amiri Diwan, Qatar Foundation, Ashghal, Tekfen, and other leading clients
                  across Qatar.
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

      {/* Why Choose Us */}
      <div className="relative overflow-hidden py-20">
        <Image
          src="/assets/envato/Images/20.jpeg"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(4,9,30,0.97) 0%, rgba(10,21,71,0.95) 100%)' }}
        />
        <div className="absolute right-0 top-0 bottom-0 opacity-[0.04] pointer-events-none">
          <SteelIcon name="016-steel" size={320} color="white" />
        </div>

        <Container className="relative z-10">
          <Reveal className="text-center mb-12">
            <Eyebrow className="mb-4">Why iSteel</Eyebrow>
            <h2 className="text-h2 font-heading text-paper mb-3">Why Clients Choose Us</h2>
            <p className="text-mute text-body max-w-lg mx-auto">
              Built on trust. Driven by performance. Delivered with integrity.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {whyUs.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.07}>
                <div className="flex items-start gap-4 p-6 rounded-xl border border-white/10 bg-white/5">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 border border-accent/30 flex items-center justify-center shrink-0">
                    <item.icon size={18} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-h3 font-heading text-paper mb-1">{item.title}</h3>
                    <p className="text-sm text-mute leading-relaxed">{item.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </div>

      {/* Mission / Vision / Values */}
      <Section className="bg-white">
        <Container>
          <Reveal className="text-center mb-10">
            <Eyebrow className="mb-4">How we work</Eyebrow>
            <h2 className="text-h2 font-heading text-[#04091E]">Our core values</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.07}>
                <div className="flex items-start gap-4 p-6 rounded-xl border border-[#E0E8F5] bg-[#F8FAFD]">
                  <div className="w-10 h-10 rounded-lg bg-[#0A1547]/8 border border-[#0A1547]/12 flex items-center justify-center shrink-0">
                    <v.icon size={18} className="text-[#0A1547]" />
                  </div>
                  <div>
                    <h3 className="text-h3 font-heading text-[#04091E] mb-1">{v.title}</h3>
                    <p className="text-sm text-[#3A4A60] leading-relaxed">{v.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Timeline */}
      <div className="bg-[#04091E] border-y border-[#1B2F8A]/60 py-16">
        <Container>
          <Reveal>
            <Eyebrow className="mb-4">Our journey</Eyebrow>
            <h2 className="text-h2 font-heading text-paper mb-12">Key milestones</h2>
          </Reveal>
          <div className="relative">
            <div className="absolute left-[19px] top-2 bottom-2 w-px bg-[#1B2F8A]/60" />
            <div className="flex flex-col gap-8">
              {milestones.map((m, i) => (
                <Reveal key={m.year} delay={i * 0.06}>
                  <div className="flex items-start gap-6 pl-2">
                    <div className="relative flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#D4A020] bg-[#04091E] shrink-0 z-10">
                      <div className="w-2 h-2 rounded-full bg-[#D4A020]" />
                    </div>
                    <div className="pt-2">
                      <div className="text-xs font-heading font-semibold text-[#D4A020] uppercase tracking-widest mb-1">{m.year}</div>
                      <p className="text-mute">{m.event}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </div>

      <CTABanner />
    </>
  )
}
