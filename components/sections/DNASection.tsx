'use client'
import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/motion/Reveal'
import { SplitText } from '@/components/motion/SplitText'
import { SteelIcon } from '@/components/ui/SteelIcon'

const pillars = [
  {
    icon: '016-steel',
    label: 'Integrated capability',
    sub: 'Design, fabrication, blasting, painting, fireproofing and erection — under one roof.',
  },
  {
    icon: '001-steel',
    label: 'Turnkey delivery',
    sub: 'Complete civil and MEP on one contract, from substructure to superstructure.',
  },
  {
    icon: '038-bars',
    label: 'One accountable partner',
    sub: 'A single team owns the work end to end. No vendor blame-game, fewer delays.',
  },
]

export function DNASection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const wordX = useTransform(scrollYProgress, [0, 1], ['8%', '-22%'])
  const leftY = useTransform(scrollYProgress, [0, 1], [80, -80])
  const rightY = useTransform(scrollYProgress, [0, 1], [-40, 120])
  const sunY = useTransform(scrollYProgress, [0, 1], [140, -140])

  return (
    <section ref={ref} className="relative section-py overflow-hidden">
      {/* Giant wordmark */}
      <motion.div
        aria-hidden="true"
        style={{ x: wordX }}
        className="absolute top-[6%] left-0 whitespace-nowrap font-heading font-extrabold leading-none select-none pointer-events-none
                   text-[clamp(9rem,30vw,30rem)] tracking-tighter bg-gradient-to-b from-ink/[0.07] to-transparent bg-clip-text text-transparent"
      >
        iSTEEL iSTEEL
      </motion.div>

      <Container className="relative">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr_1fr] gap-10 items-center">
          {/* Left image */}
          <motion.div style={{ y: leftY }} className="relative order-2 md:order-1">
            <motion.div
              style={{ y: sunY }}
              className="absolute -top-8 -left-6 w-24 h-24 rounded-full bg-gradient-to-br from-gold-light to-accent"
            />
            <Reveal y={40}>
              <div className="relative aspect-[4/5] rounded-[26px] overflow-hidden shadow-[0_40px_80px_-30px_rgba(4,9,30,0.45)]">
                <Image
                  src="/assets/envato/Images/1.jpeg"
                  alt="iSteel structural steel frame under construction"
                  fill
                  sizes="(max-width: 768px) 100vw, 30vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </motion.div>

          {/* Copy */}
          <div className="text-center order-1 md:order-2">
            <Reveal>
              <Eyebrow className="mb-5">iSteel characteristics</Eyebrow>
            </Reveal>
            <h2 className="h-mix text-display text-ink">
              <SplitText text="Our" /> <SplitText text="DNA" className="font-extrabold" delay={0.08} />
              <span className="text-accent font-extrabold">.</span>
            </h2>
            <Reveal delay={0.15}>
              <div className="mt-6">
                <Button href="/about" size="sm" arrow>
                  Discover the iSteel way
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.22}>
              <p className="mt-6 text-copy text-[15px] leading-relaxed max-w-sm mx-auto">
                Character is what defines us. It&rsquo;s the <strong className="text-ink">quality we document</strong>, the
                safety record we protect — <strong className="text-ink">2M+ LTI-free hours</strong> — and a relentless
                commitment to doing the right thing on every site.
              </p>
            </Reveal>
          </div>

          {/* Right image */}
          <motion.div style={{ y: rightY }} className="order-3">
            <Reveal y={40} delay={0.1}>
              <div className="relative aspect-[4/5] rounded-[26px] overflow-hidden shadow-[0_40px_80px_-30px_rgba(4,9,30,0.45)]">
                <Image
                  src="/assets/envato/Images/21.jpeg"
                  alt="Aerial view of an iSteel industrial project in Qatar"
                  fill
                  sizes="(max-width: 768px) 100vw, 30vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </motion.div>
        </div>

        {/* Pillars */}
        <div className="mt-24 lg:mt-36 grid grid-cols-1 md:grid-cols-3 gap-4">
          {pillars.map((p, i) => (
            <Reveal key={p.label} delay={i * 0.08}>
              <div className="group relative h-full rounded-[26px] bg-white p-7 shadow-card overflow-hidden transition-colors duration-500 hover:bg-steel">
                <span className="absolute -right-6 -bottom-6 opacity-[0.06] group-hover:opacity-[0.12] transition-opacity duration-500">
                  <SteelIcon name={p.icon} size={140} color="gold" />
                </span>
                <span className="w-12 h-12 rounded-2xl bg-paper flex items-center justify-center transition-colors duration-500 group-hover:bg-white/10">
                  <SteelIcon name={p.icon} size={24} color="gold" />
                </span>
                <div className="mt-8 font-heading text-[11px] font-bold text-accent tracking-[0.2em]">0{i + 1}</div>
                <h3 className="mt-2 text-h3 text-ink group-hover:text-white transition-colors duration-500">{p.label}</h3>
                <p className="mt-2 text-sm text-copy group-hover:text-white/60 leading-relaxed transition-colors duration-500">
                  {p.sub}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
