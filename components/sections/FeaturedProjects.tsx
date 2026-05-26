'use client'
import React, { useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Reveal } from '@/components/motion/Reveal'
import { Button } from '@/components/ui/Button'
import { projects } from '@/lib/content/projects'

const featured = projects.filter((p) => p.featured)

export function FeaturedProjects() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    dragFree: true,
    containScroll: 'trimSnaps',
  })

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <Section className="bg-white">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <Reveal>
            <Eyebrow className="mb-3">Selected work</Eyebrow>
            <h2 className="text-h1 font-heading text-[#04091E]">
              Excellence in every build
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex items-center gap-3">
              <button
                onClick={scrollPrev}
                aria-label="Previous project"
                className="w-10 h-10 rounded-full border border-[#C8D8EC] flex items-center justify-center text-[#6080A0] hover:border-[#0A1547] hover:text-[#0A1547] hover:bg-[#F0F4FA] transition-all duration-200"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={scrollNext}
                aria-label="Next project"
                className="w-10 h-10 rounded-full border border-[#C8D8EC] flex items-center justify-center text-[#6080A0] hover:border-[#0A1547] hover:text-[#0A1547] hover:bg-[#F0F4FA] transition-all duration-200"
              >
                <ChevronRight size={18} />
              </button>
              <Button
                href="/projects"
                className="group shrink-0 bg-[#0A1547] text-white hover:bg-[#10206A]"
              >
                View all projects
                <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>

      {/* Full-bleed embla viewport — left padding aligns first card with page content */}
      <div
        className="overflow-hidden"
        ref={emblaRef}
        style={{ paddingLeft: 'clamp(20px, 4vw, 56px)' }}
      >
        <div className="flex gap-5">
          {featured.map((project, i) => (
            <motion.div
              key={project.slug}
              className="flex-none w-[270px] sm:w-[320px] md:w-[380px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, ease: [0.16, 1, 0.3, 1], duration: 0.6 }}
            >
              <Link href={`/projects/${project.slug}`} className="group block">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-[0_8px_32px_-8px_rgba(10,21,71,0.18)] mb-4">
                  <Image
                    src={project.coverImage}
                    alt={project.name}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 270px, (max-width: 768px) 320px, 380px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#04091E]/85 via-[#04091E]/20 to-transparent" />

                  <div className="absolute top-4 left-4 z-[2] px-3 py-1 rounded-full border border-accent/50 bg-[#04091E]/60 backdrop-blur-sm">
                    <span className="text-eyebrow text-accent">{project.sector}</span>
                  </div>

                  <div className="absolute bottom-4 right-4 z-[2] w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:border-accent/60 group-hover:text-accent transition-all duration-300 bg-white/10 backdrop-blur-sm">
                    <ArrowUpRight size={15} />
                  </div>

                  <div className="absolute bottom-4 left-4 right-12 z-[2]">
                    <div className="text-xs text-white/50">{project.year} · {project.location}</div>
                  </div>
                </div>

                <h3 className="text-h3 font-heading text-[#04091E] mb-1 group-hover:text-accent transition-colors duration-200">
                  {project.name}
                </h3>
                <p className="text-sm text-[#6080A0] leading-relaxed">{project.scope.substring(0, 80)}…</p>
              </Link>
            </motion.div>
          ))}
          {/* Right-edge breathing room */}
          <div className="flex-none w-8" />
        </div>
      </div>
    </Section>
  )
}
