'use client'
import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Magnetic } from '@/components/motion/Magnetic'
import { company } from '@/lib/content/company'

const EASE = [0.16, 1, 0.3, 1] as const
const R = 32 // inverted-corner radius (px)

/** Concave corner piece — fills the outside of a quarter circle with the card colour. */
function Notch({ className, at }: { className: string; at: string }) {
  return (
    <span
      aria-hidden="true"
      className={`absolute hidden lg:block ${className}`}
      style={{
        width: R,
        height: R,
        background: `radial-gradient(circle at ${at}, transparent ${R - 0.5}px, var(--brand-ink) ${R}px)`,
      }}
    />
  )
}

function Line({ children, delay, className }: { children: React.ReactNode; delay: number; className?: string }) {
  return (
    <span className="block overflow-hidden pb-[0.04em]">
      <motion.span
        className={`block ${className ?? ''}`}
        initial={{ y: '105%' }}
        animate={{ y: 0 }}
        transition={{ duration: 1.1, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  )
}

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.2])
  const panelY = useTransform(scrollYProgress, [0, 1], ['0%', '-25%'])

  return (
    <section
      ref={ref}
      aria-label="Hero"
      className="frame mt-[clamp(8px,1.2vw,16px)] relative bg-ink text-white overflow-hidden flex flex-col
                 min-h-[calc(100svh-clamp(16px,2.4vw,32px))] p-[clamp(10px,1.4vw,18px)] pt-[96px] lg:pt-[104px]"
    >
      <div className="relative flex-1 flex flex-col lg:block">
        {/* Title panel — sits in the image's top-left notch on desktop */}
        <motion.div
          style={{ y: panelY }}
          className="relative z-20 bg-ink lg:absolute lg:top-0 lg:left-0 lg:rounded-br-[36px] px-2 pb-8 lg:pl-[clamp(20px,3vw,44px)] lg:pr-14 lg:pb-12 lg:pt-6 lg:max-w-[min(56vw,840px)]"
        >
          <Notch className="top-0 left-full" at="100% 100%" />
          <Notch className="top-full left-0" at="100% 100%" />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
            className="text-eyebrow mb-5 flex items-center gap-3"
          >
            <span className="w-8 h-px bg-accent" />
            Est. {company.established} — Doha, Qatar
          </motion.p>

          <h1 className="h-mix text-mega">
            <Line delay={0.3}>Redefining</Line>
            <Line delay={0.42} className="font-extrabold">
              Steel<span className="text-accent">.</span>
            </Line>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75, ease: EASE }}
            className="mt-6 text-white/70 text-[15px] leading-relaxed max-w-[420px]"
          >
            Design, fabrication, blasting, painting and erection — <strong className="text-white font-semibold">all under one roof</strong>.
            What can we build for you?
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: EASE }}
            className="mt-7 flex flex-wrap gap-3"
          >
            <Magnetic>
              <Button href="/contact" size="lg" arrow>
                Let&rsquo;s discuss your project
              </Button>
            </Magnetic>
            <Button href="/projects" variant="outline-light" size="lg">
              Our work
            </Button>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ clipPath: 'inset(8% 8% 8% 8% round 28px)', opacity: 0 }}
          animate={{ clipPath: 'inset(0% 0% 0% 0% round 28px)', opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.1, ease: EASE }}
          className="relative flex-1 min-h-[420px] lg:absolute lg:inset-0 rounded-[28px] overflow-hidden"
        >
          <motion.div style={{ y: imgY, scale: imgScale }} className="absolute inset-0">
            <Image
              src="/assets/envato/Images/18.jpeg"
              alt="iSteel site engineer overseeing a steel lift on a Doha construction site"
              fill
              priority
              quality={85}
              sizes="100vw"
              className="object-cover object-[50%_35%]"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/40 via-transparent to-transparent hidden lg:block" />
        </motion.div>

        {/* Floating stats */}
        <div className="absolute z-20 right-3 bottom-3 sm:right-5 sm:bottom-5 flex gap-2 sm:gap-3">
          {[
            { v: company.stats.projectsDelivered, l: 'Projects delivered' },
            { v: company.stats.tonnesFabricated, l: 'Tonnes / year' },
          ].map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.1 + i * 0.12, ease: EASE }}
              className="rounded-[18px] bg-ink/55 backdrop-blur-xl border border-white/15 px-4 py-3 sm:px-5 sm:py-4 min-w-[120px]"
            >
              <div className="font-heading text-2xl sm:text-3xl font-light leading-none">
                {s.v.replace('+', '')}
                <span className="text-accent font-bold">+</span>
              </div>
              <div className="mt-1.5 text-[10px] uppercase tracking-[0.18em] text-white/60 font-heading">{s.l}</div>
            </motion.div>
          ))}
        </div>

        {/* Rotating badge */}
        <motion.a
          href="#mission"
          aria-label="Scroll to content"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 1.3, ease: EASE }}
          className="hidden md:flex absolute z-20 left-5 bottom-5 w-[118px] h-[118px] items-center justify-center group"
        >
          <svg viewBox="0 0 120 120" className="absolute inset-0 animate-spin-slow">
            <defs>
              <path id="circle" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" />
            </defs>
            <text className="fill-white/80 font-heading" fontSize="9.5" letterSpacing="3.2">
              <textPath href="#circle">ISTEEL ENGINEERING • DOHA QATAR •</textPath>
            </text>
          </svg>
          <span className="w-12 h-12 rounded-full bg-accent text-ink flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </span>
        </motion.a>
      </div>
    </section>
  )
}
