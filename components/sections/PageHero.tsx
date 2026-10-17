'use client'
import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const EASE = [0.16, 1, 0.3, 1] as const

interface PageHeroProps {
  eyebrow: string
  /** Light-weight part of the headline */
  light?: string
  /** Bold part of the headline */
  bold: string
  /** Put the bold part first ("BOLD light") */
  boldFirst?: boolean
  description?: React.ReactNode
  image?: string
  imageAlt?: string
  /** Render images with transparent backgrounds (3D renders) contained */
  contain?: boolean
  breadcrumbs?: { label: string; href?: string }[]
  /** Headline scale — use 'h1' for long titles */
  size?: 'display' | 'h1'
  children?: React.ReactNode
}

function Line({ children, delay, className }: { children: React.ReactNode; delay: number; className?: string }) {
  return (
    <span className="block overflow-hidden pb-[0.05em]">
      <motion.span
        className={cn('block', className)}
        initial={{ y: '105%' }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  )
}

export function PageHero({
  eyebrow,
  light,
  bold,
  boldFirst,
  description,
  image,
  imageAlt = '',
  contain,
  breadcrumbs,
  size = 'display',
  children,
}: PageHeroProps) {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])

  const lightLine = light ? <Line delay={boldFirst ? 0.32 : 0.2}>{light}</Line> : null
  const boldLine = (
    <Line delay={boldFirst ? 0.2 : 0.32} className="font-extrabold">
      {bold}
      <span className="text-accent">.</span>
    </Line>
  )

  return (
    <section
      ref={ref}
      className="frame mt-[clamp(8px,1.2vw,16px)] relative bg-ink text-white overflow-hidden pt-[110px] lg:pt-[130px] pb-[clamp(16px,2vw,24px)]"
    >
      {/* Faint blueprint grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'linear-gradient(to bottom, black, transparent 80%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black, transparent 80%)',
        }}
      />
      <div className="relative grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-12 items-end px-[clamp(16px,3.5vw,48px)]">
        <div className="pb-6 lg:pb-14">
          {breadcrumbs && (
            <motion.nav
              aria-label="Breadcrumb"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="flex flex-wrap items-center gap-1.5 text-xs text-white/50 mb-8 font-heading"
            >
              {breadcrumbs.map((b, i) => (
                <React.Fragment key={b.label}>
                  {i > 0 && <ChevronRight size={12} className="text-white/30" />}
                  {b.href ? (
                    <Link href={b.href} className="hover:text-accent transition-colors">
                      {b.label}
                    </Link>
                  ) : (
                    <span className="text-white/80">{b.label}</span>
                  )}
                </React.Fragment>
              ))}
            </motion.nav>
          )}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
            className="text-eyebrow mb-5 flex items-center gap-3"
          >
            <span className="w-8 h-px bg-accent" />
            {eyebrow}
          </motion.p>
          <h1 className={cn('h-mix', size === 'display' ? 'text-display' : 'text-h1')}>
            {boldFirst ? (
              <>
                {boldLine}
                {lightLine}
              </>
            ) : (
              <>
                {lightLine}
                {boldLine}
              </>
            )}
          </h1>
          {description && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55, ease: EASE }}
              className="mt-6 text-white/65 text-[15px] leading-relaxed max-w-xl"
            >
              {description}
            </motion.div>
          )}
          {children && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: EASE }}
              className="mt-8"
            >
              {children}
            </motion.div>
          )}
        </div>

        {image && (
          <motion.div
            initial={{ clipPath: 'inset(100% 0 0 0 round 28px)' }}
            animate={{ clipPath: 'inset(0% 0 0 0 round 28px)' }}
            transition={{ duration: 1.3, delay: 0.2, ease: EASE }}
            className={cn(
              'relative aspect-[4/3] lg:aspect-[5/4] rounded-[28px] overflow-hidden -mx-[clamp(0px,1.5vw,24px)] lg:mx-0 lg:-mr-[clamp(0px,2vw,24px)]',
              contain && 'bg-[radial-gradient(circle_at_60%_40%,#1B2F8A_0%,#0A1547_55%,#04091E_100%)]'
            )}
          >
            <motion.div style={{ y: imgY }} className="absolute inset-0 scale-[1.12]">
              <Image
                src={image}
                alt={imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className={contain ? 'object-contain p-10' : 'object-cover'}
              />
            </motion.div>
            {!contain && <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />}
          </motion.div>
        )}
      </div>
    </section>
  )
}
