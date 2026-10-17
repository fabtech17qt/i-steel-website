'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/motion/Reveal'
import { SplitText } from '@/components/motion/SplitText'
import { SteelIcon } from '@/components/ui/SteelIcon'
import { cn } from '@/lib/utils'

const EASE = [0.16, 1, 0.3, 1] as const

const steps = [
  {
    number: '01',
    label: 'Stage 01',
    title: 'Design & Engineering',
    description:
      'AutoCAD, Tekla and STAAD Pro. Detailed BIM modelling, connection design and shop drawings — so on-site surprises are rare.',
    points: ['Structural analysis', 'Tekla BIM detailing', 'Shop & erection drawings'],
    icon: '048-grid',
    image: '/assets/envato/Images/8.jpeg',
  },
  {
    number: '02',
    label: 'Stage 02',
    title: 'Fabrication',
    description:
      'CNC and plasma cutting, MIG/TIG and sub-arc welding in our Doha workshop — every member checked against ITPs before it leaves.',
    points: ['CNC plasma cutting', 'Certified welders', 'NDT: UT · MT · PT'],
    icon: '019-factory',
    image: '/assets/envato/New-img/WhatsApp Image 2026-05-26 at 2.15.36 PM.jpeg',
  },
  {
    number: '03',
    label: 'Stage 03',
    title: 'Blast, Paint & Fireproof',
    description:
      'Surface preparation, protective coatings and fire-rated finishes applied in-house — specified for Qatar’s climate.',
    points: ['Sa 2.5 grit blasting', 'Multi-coat systems', 'Intumescent fireproofing'],
    icon: '021-welder',
    image: '/assets/envato/New-img/WhatsApp Image 2026-05-26 at 2.15.37 PM.jpeg',
  },
  {
    number: '04',
    label: 'Stage 04',
    title: 'Erection & Handover',
    description:
      'Our own crews and lifting plan install warehouses, high-rises, domes and industrial structures — then hand over, documented.',
    points: ['Self-performed erection', 'Crane & lift planning', 'QA dossiers & handover'],
    icon: '011-beam',
    image: '/assets/envato/Images/4.jpeg',
  },
]

export function ProcessSection() {
  const [active, setActive] = useState(0)
  const step = steps[active]

  return (
    <section className="frame relative bg-accent text-ink overflow-hidden grain">
      {/* Huge watermark */}
      <div
        aria-hidden="true"
        className="absolute -right-10 -top-10 font-heading font-extrabold text-[clamp(10rem,28vw,26rem)] leading-none text-ink/[0.06] select-none pointer-events-none"
      >
        04
      </div>

      <Container className="relative py-[clamp(64px,8vw,120px)]">
        <Reveal>
          <p className="text-eyebrow !text-ink/70 mb-5">Predictable process. Proven results.</p>
        </Reveal>
        <h2 className="h-mix text-display max-w-4xl">
          <SplitText text="Our" />{' '}
          <SplitText text="4-stage" className="font-extrabold" delay={0.06} />{' '}
          <SplitText text="delivery process" delay={0.12} />
        </h2>
        <Reveal delay={0.15}>
          <p className="mt-6 max-w-2xl text-ink/75 text-[15px] leading-relaxed">
            Behind every iSteel structure is the same system — <strong className="text-ink">one team from the first
            drawing to the final bolt</strong>, with no hand-offs between vendors.
          </p>
        </Reveal>

        {/* Tabs */}
        <div role="tablist" aria-label="Delivery stages" className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-x-6 border-b border-ink/15">
          {steps.map((s, i) => (
            <button
              key={s.number}
              role="tab"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
              className="relative text-left py-5 group"
            >
              <span
                className={cn(
                  'block font-heading text-[clamp(1.25rem,2vw,1.75rem)] uppercase transition-all duration-300',
                  i === active ? 'font-bold' : 'font-light text-ink/60 group-hover:text-ink'
                )}
              >
                {s.label}
              </span>
              <span className={cn('block mt-1 text-xs sm:text-sm transition-colors', i === active ? 'text-ink italic' : 'text-ink/55')}>
                {s.title}
              </span>
              {i === active && (
                <motion.span
                  layoutId="process-underline"
                  className="absolute left-0 right-6 -bottom-px h-[3px] bg-ink rounded-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Panel */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-14 items-center min-h-[340px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: EASE }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="w-14 h-14 rounded-2xl bg-ink flex items-center justify-center">
                  <SteelIcon name={step.icon} size={28} color="gold" />
                </span>
                <span className="font-heading text-6xl font-extrabold text-ink/15 leading-none">{step.number}</span>
              </div>
              <h3 className="h-mix text-h2 !font-bold">{step.title}</h3>
              <p className="mt-4 text-ink/80 leading-relaxed max-w-md">{step.description}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {step.points.map((p) => (
                  <li key={p} className="px-3.5 py-1.5 rounded-full border border-ink/25 text-xs font-heading font-semibold">
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>

          <div className="relative aspect-[16/11] rounded-[28px] overflow-hidden bg-ink shadow-[0_40px_80px_-30px_rgba(4,9,30,0.6)]">
            <AnimatePresence initial={false}>
              <motion.div
                key={step.image}
                initial={{ clipPath: 'inset(100% 0 0 0)' }}
                animate={{ clipPath: 'inset(0% 0 0 0)' }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.9, ease: EASE }}
                className="absolute inset-0"
              >
                <Image src={step.image} alt={step.title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Tagline */}
        <div className="mt-16 pt-8 border-t border-ink/15 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <Reveal>
            <p className="font-heading uppercase text-[clamp(1.25rem,2.4vw,2rem)] font-light">Four stages.</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-heading uppercase text-[clamp(1.25rem,2.4vw,2rem)] font-extrabold">One accountable team.</p>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
