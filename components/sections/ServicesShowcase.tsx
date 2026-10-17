'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/motion/Reveal'
import { SplitText } from '@/components/motion/SplitText'
import { services } from '@/lib/content/services'
import { cn } from '@/lib/utils'

const EASE = [0.16, 1, 0.3, 1] as const
const INTERVAL = 6000
const featured = services.slice(0, 6)

export function ServicesShowcase() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const t = setTimeout(() => setActive((a) => (a + 1) % featured.length), INTERVAL)
    return () => clearTimeout(t)
  }, [active, paused])

  const svc = featured[active]
  const isRender = svc.image.endsWith('.png')

  return (
    <section className="pb-[clamp(80px,10vw,150px)] overflow-hidden">
      <Container className="text-center mb-14 lg:mb-20">
        <Reveal>
          <Eyebrow className="mb-5">iSteel integrated services</Eyebrow>
        </Reveal>
        <h2 className="h-mix text-display text-ink max-w-5xl mx-auto">
          <SplitText text="Steel expertise" className="font-extrabold" />{' '}
          <SplitText text="across every discipline" delay={0.12} />
        </h2>
      </Container>

      <div
        className="grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-10 lg:gap-16 items-stretch"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Image — bleeds to the left edge */}
        <Reveal y={30} className="relative min-h-[360px] sm:min-h-[460px] lg:min-h-[620px] mx-[clamp(8px,1.2vw,16px)] lg:ml-0 lg:mr-0">
          <div className="absolute inset-0 rounded-[28px] lg:rounded-l-none lg:rounded-r-[36px] overflow-hidden bg-steel">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div
                key={svc.slug}
                initial={{ clipPath: 'inset(0 0 0 100%)', scale: 1.1 }}
                animate={{ clipPath: 'inset(0 0 0 0%)', scale: 1 }}
                exit={{ opacity: 0.4 }}
                transition={{ duration: 1.1, ease: EASE }}
                className={cn(
                  'absolute inset-0',
                  isRender && 'bg-[radial-gradient(circle_at_60%_40%,#1B2F8A_0%,#0A1547_55%,#04091E_100%)]'
                )}
              >
                <Image
                  src={svc.image}
                  alt={svc.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className={isRender ? 'object-contain p-10 lg:p-16' : 'object-cover'}
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute left-6 bottom-6 right-6 lg:left-[clamp(20px,4vw,56px)] flex items-end justify-between gap-4 text-white">
              <AnimatePresence mode="wait">
                <motion.div
                  key={svc.slug}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5, ease: EASE }}
                >
                  <div className="font-heading text-[clamp(4rem,9vw,8rem)] font-extrabold leading-none text-white/15">
                    {svc.number}
                  </div>
                </motion.div>
              </AnimatePresence>
              <div className="text-[10px] font-heading tracking-[0.22em] uppercase text-white/60 pb-3">
                {String(active + 1).padStart(2, '0')} / {String(featured.length).padStart(2, '0')}
              </div>
            </div>
          </div>
        </Reveal>

        {/* List */}
        <div className="container-px lg:pl-0 lg:pr-[clamp(20px,6vw,96px)] flex flex-col justify-center">
          <ul className="relative">
            {featured.map((s, i) => {
              const on = i === active
              return (
                <li key={s.slug} className="relative border-b border-ink/10">
                  {/* progress rail */}
                  <span className="absolute left-0 top-0 bottom-0 w-[2px] bg-ink/5" />
                  {on && (
                    <motion.span
                      key={`${s.slug}-${paused}`}
                      className="absolute left-0 top-0 w-[2px] bg-accent origin-top"
                      initial={{ height: paused ? '100%' : '0%' }}
                      animate={{ height: '100%' }}
                      transition={{ duration: paused ? 0 : INTERVAL / 1000, ease: 'linear' }}
                    />
                  )}
                  <button
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    aria-expanded={on}
                    className="w-full text-left pl-6 py-5 flex items-center gap-4"
                  >
                    <span className={cn('text-[11px] font-heading font-bold transition-colors', on ? 'text-accent' : 'text-ink/30')}>
                      {s.number}
                    </span>
                    <span
                      className={cn(
                        'font-heading text-[clamp(1.15rem,1.8vw,1.6rem)] transition-all duration-500',
                        on ? 'text-ink font-semibold' : 'text-ink/40 font-normal'
                      )}
                    >
                      {s.title}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {on && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: EASE }}
                        className="overflow-hidden"
                      >
                        <div className="pl-[3.25rem] pb-6 pr-2">
                          <p className="text-copy text-sm leading-relaxed max-w-md">{s.shortDescription}</p>
                          <Link
                            href={`/services/${s.slug}`}
                            className="mt-4 inline-flex items-center gap-1.5 text-sm font-heading font-semibold text-ink group"
                          >
                            <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat group-hover:bg-[length:100%_1px] transition-[background-size] duration-500">
                              Explore service
                            </span>
                            <ArrowUpRight size={15} className="text-accent transition-transform duration-300 group-hover:rotate-45" />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              )
            })}
          </ul>
          <Reveal delay={0.1} className="mt-10">
            <Button href="/services" variant="navy" arrow>
              See all 12 services
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
