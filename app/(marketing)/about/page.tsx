import type { Metadata } from 'next'
import Image from 'next/image'
import { ShieldCheck, Clock, HardHat, Award, Layers, BadgeCheck, Building2 } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Stat } from '@/components/ui/Stat'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/motion/Reveal'
import { SplitText } from '@/components/motion/SplitText'
import { Parallax } from '@/components/motion/Parallax'
import { PageHero } from '@/components/sections/PageHero'
import { TickerBand } from '@/components/sections/TickerBand'
import { CTABanner } from '@/components/sections/CTABanner'
import { company } from '@/lib/content/company'

export const metadata: Metadata = {
  title: 'About iSteel Engineering | Qatar Steel Contractor',
  description:
    'iSteel Engineering Trading & Contracting W.L.L — 5+ years of structural steel and turnkey construction across Qatar. ISO certified, ICV certified.',
}

const values = [
  {
    icon: ShieldCheck,
    title: 'Quality first',
    body: 'All fabrication and construction follows ISO 9001:2015 procedures with full documentation and ITP sign-off at every stage.',
  },
  {
    icon: Clock,
    title: 'On-time delivery',
    body: 'We invest in planning, procurement and programme management — with a record of delivering ahead of schedule.',
  },
  {
    icon: HardHat,
    title: 'Safety without compromise',
    body: 'ISO 45001:2018 H&S management. 2M+ LTI-free safe work hours. Zero tolerance for unsafe acts.',
  },
  {
    icon: Award,
    title: 'Integrated capability',
    body: 'Design, fabricate, coat, erect — one contract, one team, one point of accountability through to handover.',
  },
]

const whyUs = [
  {
    icon: Layers,
    title: 'One contract, end to end',
    body: 'Design to handover under a single accountable team. No vendor blame-game, no gaps in responsibility.',
  },
  {
    icon: BadgeCheck,
    title: 'Certified & compliant',
    body: 'ISO 9001 · ISO 14001 · ISO 45001 · ICV · IQNET · NCAGE registered. Governed by standards.',
  },
  {
    icon: Building2,
    title: 'Proven on national projects',
    body: 'Amiri Diwan, Qatar Foundation, Ashghal, Tekfen, Domopan. Repeat clients are our strongest reference.',
  },
  {
    icon: HardHat,
    title: 'Safety-first delivery',
    body: '2M+ LTI-free hours. Safety is not a department at iSteel — it is the culture on every site.',
  },
]

const milestones = [
  { year: '2021', event: 'iSteel Engineering founded in Doha, Qatar' },
  { year: '2022', event: 'ISO 9001 & ISO 14001 achieved — CNC plasma cutting and heavy fabrication commissioned' },
  { year: '2023', event: 'ISO 45001:2018 accreditation — in-house blasting and painting facility opened' },
  { year: '2024', event: 'ICV certification and NCAGE registration with the Qatar National Codification Bureau' },
  { year: '2025', event: 'Al Waab City Mall — one of Qatar’s most complex steel structures, delivered on schedule' },
  { year: '2026', event: '45+ skilled professionals, 52+ projects delivered, 3,000+ tonnes fabricated annually' },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About iSteel"
        light="Built in Qatar."
        bold="Built in steel"
        description={
          <>
            iSteel Engineering Trading &amp; Contracting W.L.L combines an integrated workshop, in-house engineering and
            experienced site crews — <strong className="text-white">under a single contract from drawing to final handover</strong>.
          </>
        }
        image="/assets/envato/Images/1.jpeg"
        imageAlt="iSteel structural steel frame under construction"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About' }]}
      />

      {/* Stats */}
      <section className="pt-16 lg:pt-20">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10">
            {[
              { v: company.stats.yearsExperience, l: 'Years of experience' },
              { v: company.stats.projectsDelivered, l: 'Projects delivered' },
              { v: company.stats.skilledWorkers, l: 'Skilled workers' },
              { v: company.stats.tonnesFabricated, l: 'Tonnes fabricated / yr' },
            ].map((s, i) => (
              <Reveal key={s.l} delay={i * 0.08} className={i > 0 ? 'lg:border-l lg:border-ink/10 lg:pl-10' : ''}>
                <Stat value={s.v} label={s.l} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Story */}
      <section className="section-py">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">
            <div>
              <Reveal>
                <Eyebrow className="mb-5">Our story</Eyebrow>
              </Reveal>
              <h2 className="h-mix text-h1 text-ink">
                <SplitText text="From a focused shop" />
                <br />
                <SplitText text="to a full contractor" className="font-extrabold" delay={0.1} />
                <span className="text-accent font-extrabold">.</span>
              </h2>
              <Reveal delay={0.15}>
                <p className="mt-7 text-copy leading-relaxed">
                  Founded in {company.established} and headquartered in Doha, iSteel has grown from a focused steel fabrication
                  shop into a <strong className="text-ink">fully integrated contractor</strong> serving the industrial,
                  commercial and government sectors across Qatar.
                </p>
              </Reveal>
              <Reveal delay={0.22}>
                <p className="mt-4 text-copy leading-relaxed">
                  Integration lets us move faster, control quality tighter and take on complex multi-discipline scopes that a
                  traditional subcontract chain cannot match. Today we work with{' '}
                  <strong className="text-ink">Amiri Diwan, Qatar Foundation, Ashghal and Tekfen</strong>.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="mt-8">
                  <Button href={company.companyProfilePdf} download variant="navy" arrow>
                    Download company profile
                  </Button>
                </div>
              </Reveal>
            </div>
            <div className="relative">
              <Parallax offset={-50} className="absolute -top-10 -right-4 z-10">
                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-gold-light to-accent-2" />
              </Parallax>
              <Reveal y={40}>
                <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden shadow-[0_40px_80px_-30px_rgba(4,9,30,0.45)]">
                  <Image
                    src="/assets/envato/New-img/WhatsApp Image 2026-05-26 at 2.15.37 PM.jpeg"
                    alt="iSteel welder at work in the fabrication workshop"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </Reveal>
              <Reveal delay={0.2} className="absolute -bottom-8 -left-4 sm:-left-10">
                <div className="rounded-[22px] bg-ink text-white p-5 sm:p-6 shadow-float max-w-[240px]">
                  <div className="font-heading text-4xl font-light leading-none">
                    2M<span className="text-accent font-bold">+</span>
                  </div>
                  <div className="mt-2 text-[11px] uppercase tracking-[0.16em] text-white/60 font-heading">LTI-free safe work hours</div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Why us — navy frame */}
      <section className="frame bg-ink text-white relative overflow-hidden">
        <Container className="py-[clamp(64px,8vw,120px)]">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20">
            <div className="lg:sticky lg:top-32 self-start">
              <Reveal>
                <Eyebrow className="mb-5">Why iSteel</Eyebrow>
              </Reveal>
              <h2 className="h-mix text-h1">
                <SplitText text="Why clients" />
                <br />
                <SplitText text="choose us" className="font-extrabold" delay={0.1} />
                <span className="text-accent font-extrabold">.</span>
              </h2>
              <Reveal delay={0.15}>
                <p className="mt-6 text-white/60 max-w-sm">Built on trust. Driven by performance. Delivered with integrity.</p>
              </Reveal>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyUs.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.08}>
                  <div className="group h-full rounded-[24px] border border-white/10 bg-white/[0.04] p-7 hover:bg-accent hover:border-accent transition-colors duration-500">
                    <item.icon size={26} className="text-accent group-hover:text-ink transition-colors duration-500" />
                    <h3 className="mt-10 text-h3 group-hover:text-ink transition-colors duration-500">{item.title}</h3>
                    <p className="mt-2 text-sm text-white/55 leading-relaxed group-hover:text-ink/75 transition-colors duration-500">
                      {item.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <TickerBand />

      {/* Values */}
      <section className="pb-[clamp(80px,10vw,150px)] pt-6">
        <Container>
          <div className="text-center mb-14">
            <Reveal>
              <Eyebrow className="mb-5">How we work</Eyebrow>
            </Reveal>
            <h2 className="h-mix text-h1 text-ink">
              <SplitText text="Our core" /> <SplitText text="values" className="font-extrabold" delay={0.08} />
              <span className="text-accent font-extrabold">.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="group h-full rounded-[24px] bg-white p-7 shadow-card hover:-translate-y-2 transition-transform duration-500 ease-out-expo">
                  <div className="flex items-center justify-between">
                    <span className="w-12 h-12 rounded-2xl bg-paper flex items-center justify-center group-hover:bg-accent transition-colors duration-500">
                      <v.icon size={20} className="text-steel" />
                    </span>
                    <span className="font-heading font-extrabold text-3xl text-ink/10">0{i + 1}</span>
                  </div>
                  <h3 className="mt-8 text-h3 text-ink">{v.title}</h3>
                  <p className="mt-2 text-sm text-copy leading-relaxed">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="pb-6">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-20">
            <div className="lg:sticky lg:top-32 self-start">
              <Reveal>
                <Eyebrow className="mb-5">Our journey</Eyebrow>
              </Reveal>
              <h2 className="h-mix text-h1 text-ink">
                <SplitText text="Key" /> <SplitText text="milestones" className="font-extrabold" delay={0.08} />
                <span className="text-accent font-extrabold">.</span>
              </h2>
            </div>
            <div className="relative border-l border-ink/10">
              {milestones.map((m, i) => (
                <Reveal key={m.year} delay={i * 0.05}>
                  <div className="group relative pl-10 pb-12">
                    <span className="absolute -left-[7px] top-2 w-3.5 h-3.5 rounded-full bg-paper border-2 border-accent group-hover:bg-accent transition-colors" />
                    <div className="font-heading font-extrabold text-[clamp(2rem,4vw,3.25rem)] leading-none text-ink/15 group-hover:text-accent transition-colors duration-500">
                      {m.year}
                    </div>
                    <p className="mt-3 text-ink text-lg leading-snug max-w-xl">{m.event}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  )
}
