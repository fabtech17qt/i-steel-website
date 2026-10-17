'use client'
import React, { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/motion/Reveal'
import { SplitText } from '@/components/motion/SplitText'
import { projects } from '@/lib/content/projects'

const featured = projects.filter((p) => p.featured).concat(projects.filter((p) => !p.featured)).slice(0, 7)

export function FeaturedProjects() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', dragFree: true, containScroll: 'trimSnaps' })
  const [progress, setProgress] = useState(0)

  const onScroll = useCallback(() => {
    if (!emblaApi) return
    setProgress(Math.max(0, Math.min(1, emblaApi.scrollProgress())))
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onScroll()
    emblaApi.on('scroll', onScroll).on('reInit', onScroll)
  }, [emblaApi, onScroll])

  return (
    <section className="pt-[clamp(40px,5vw,80px)] pb-[clamp(80px,10vw,150px)] overflow-hidden">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <Reveal>
              <Eyebrow className="mb-5">Selected work</Eyebrow>
            </Reveal>
            <h2 className="h-mix text-display text-ink">
              <SplitText text="Excellence in" />
              <br />
              <SplitText text="every build" className="font-extrabold" delay={0.1} />
              <span className="text-accent font-extrabold">.</span>
            </h2>
          </div>
          <Reveal delay={0.1} className="flex items-center gap-3">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              aria-label="Previous project"
              className="w-12 h-12 rounded-full border border-ink/15 flex items-center justify-center text-ink hover:bg-ink hover:text-white transition-colors duration-300"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              aria-label="Next project"
              className="w-12 h-12 rounded-full border border-ink/15 flex items-center justify-center text-ink hover:bg-ink hover:text-white transition-colors duration-300"
            >
              <ArrowRight size={18} />
            </button>
            <Button href="/projects" variant="navy" arrow className="ml-2">
              All projects
            </Button>
          </Reveal>
        </div>
      </Container>

      <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef} style={{ paddingLeft: 'clamp(16px, 4vw, 56px)' }}>
        <div className="flex gap-4 md:gap-5">
          {featured.map((project, i) => (
            <motion.div
              key={project.slug}
              className="flex-none w-[78vw] sm:w-[360px] lg:w-[420px]"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.08, ease: [0.16, 1, 0.3, 1], duration: 0.9 }}
            >
              <Link href={`/projects/${project.slug}`} className="group block" draggable={false}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-steel">
                  <Image
                    src={project.coverImage}
                    alt={project.name}
                    fill
                    draggable={false}
                    className="object-cover transition-transform duration-[1.2s] ease-out-expo group-hover:scale-110"
                    sizes="(max-width: 640px) 78vw, 420px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent opacity-90" />

                  <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
                    <span className="px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-[10px] font-heading font-semibold uppercase tracking-[0.16em] text-white">
                      {project.sector}
                    </span>
                    <span className="font-heading text-xs text-white/70">{project.year}</span>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h3 className="h-mix text-white text-[1.6rem] !font-bold leading-tight">{project.name}</h3>
                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out-expo">
                      <p className="overflow-hidden text-white/70 text-sm leading-relaxed">
                        <span className="block pt-3">{project.scope.slice(0, 110)}…</span>
                      </p>
                    </div>
                    <div className="mt-4 flex items-center justify-between border-t border-white/15 pt-4">
                      <span className="text-[11px] text-white/60 font-heading uppercase tracking-[0.16em]">{project.location}</span>
                      <span className="w-10 h-10 rounded-full bg-accent text-ink flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500 ease-out-expo">
                        <ArrowUpRight size={16} />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
          <div className="flex-none w-4 md:w-10" />
        </div>
      </div>

      <Container>
        <div className="mt-10 h-[2px] bg-ink/10 rounded-full overflow-hidden">
          <div className="h-full bg-accent origin-left transition-transform duration-150" style={{ transform: `scaleX(${0.12 + progress * 0.88})` }} />
        </div>
      </Container>
    </section>
  )
}
