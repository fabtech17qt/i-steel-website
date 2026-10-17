'use client'
import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Button } from '@/components/ui/Button'
import { Stat } from '@/components/ui/Stat'
import { Reveal } from '@/components/motion/Reveal'
import { Parallax } from '@/components/motion/Parallax'
import { company } from '@/lib/content/company'

const EASE = [0.16, 1, 0.3, 1] as const
const words = [
  { w: 'Precision', weight: 'font-light' },
  { w: 'Integrity', weight: 'font-medium' },
  { w: 'Delivery', weight: 'font-extrabold' },
]

function TiltRender() {
  const ref = useRef<HTMLDivElement>(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), { stiffness: 120, damping: 14 })
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-14, 14]), { stiffness: 120, damping: 14 })

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect()
    if (!r) return
    mx.set((e.clientX - r.left) / r.width - 0.5)
    my.set((e.clientY - r.top) / r.height - 0.5)
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => {
        mx.set(0)
        my.set(0)
      }}
      className="relative aspect-[4/4.4] rounded-[32px] overflow-hidden bg-gradient-to-br from-white via-paper-2 to-[#DCD6C6] [perspective:1200px]"
    >
      {/* Blueprint grid */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(27,47,138,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(27,47,138,0.12) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
          maskImage: 'radial-gradient(circle at 50% 55%, black 20%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(circle at 50% 55%, black 20%, transparent 75%)',
        }}
      />
      {/* Gold sphere — echoes the logo's "i" dot */}
      <Parallax offset={-40} className="absolute top-[14%] right-[16%]">
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-gold-light to-accent-2 shadow-[0_30px_60px_-20px_rgba(184,136,16,0.7)]" />
      </Parallax>
      <motion.div style={{ rotateX: rx, rotateY: ry }} className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[118%] aspect-square -ml-[6%] mt-[8%] animate-float">
          <Image
            src="/assets/envato/Steel Beams.H03.2k.png"
            alt="3D render of fabricated hollow steel sections"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-contain drop-shadow-[0_40px_40px_rgba(4,9,30,0.35)]"
          />
        </div>
      </motion.div>
      <div className="absolute left-5 bottom-5 right-5 flex items-end justify-between">
        <span className="px-3 py-1.5 rounded-full bg-white/80 backdrop-blur text-[10px] font-heading font-semibold tracking-[0.18em] uppercase text-ink">
          Fabricated in Doha
        </span>
        <span className="text-[10px] font-heading tracking-[0.2em] uppercase text-ink/40">AISC · BS · EN</span>
      </div>
    </div>
  )
}

export function Mission() {
  const ref = useRef<HTMLHeadingElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="mission" className="pt-[clamp(40px,6vw,96px)] pb-[clamp(80px,10vw,150px)] scroll-mt-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-14 lg:gap-20 items-center">
          <div>
            <Reveal>
              <Eyebrow className="mb-6">Our promise</Eyebrow>
            </Reveal>
            <h2 ref={ref} className="h-mix text-display text-ink">
              {words.map((item, i) => (
                <span key={item.w} className="block overflow-hidden pb-[0.06em]">
                  <motion.span
                    className={`block ${item.weight}`}
                    initial={{ y: '105%' }}
                    animate={inView ? { y: 0 } : {}}
                    transition={{ duration: 1, delay: i * 0.14, ease: EASE }}
                  >
                    {item.w}
                    <motion.span
                      className="text-accent font-extrabold inline-block"
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.5 + i * 0.14, type: 'spring', stiffness: 400, damping: 12 }}
                    >
                      .
                    </motion.span>
                  </motion.span>
                </span>
              ))}
            </h2>

            <Reveal delay={0.2}>
              <p className="mt-8 text-accent-2 font-heading font-semibold text-lg leading-snug max-w-md">
                From warehouses to high-rises, iSteel has the in-house capability to take your steel from
                drawing to final bolt.
              </p>
            </Reveal>
            <Reveal delay={0.28}>
              <p className="mt-5 text-copy text-[15px] leading-relaxed max-w-lg">
                Founded in {company.established}, <strong className="text-ink">iSteel Engineering has grown into a fully integrated
                structural steel and turnkey contractor</strong>, trusted by Amiri Diwan, Qatar Foundation and Ashghal.
                Most steel jobs split design, fabrication and erection across separate vendors — the gaps cause delays.
                <strong className="text-ink"> We own every stage</strong>, so accountability never changes hands.
              </p>
            </Reveal>
            <Reveal delay={0.36}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/about" arrow>
                  Our story
                </Button>
                <Button href="/projects" variant="outline">
                  Explore our portfolio
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} y={40}>
            <TiltRender />
          </Reveal>
        </div>

        {/* Stats */}
        <div className="mt-20 lg:mt-28 grid grid-cols-2 lg:grid-cols-4 gap-y-10 border-t border-ink/10 pt-10">
          {[
            { v: company.stats.yearsExperience, l: 'Years in Qatar' },
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
  )
}
