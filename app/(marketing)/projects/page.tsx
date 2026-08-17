'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Reveal } from '@/components/motion/Reveal'
import { CTABanner } from '@/components/sections/CTABanner'
import { ClientsStrip } from '@/components/sections/ClientsStrip'
import { SteelIcon } from '@/components/ui/SteelIcon'
import { projects, type Sector } from '@/lib/content/projects'

const sectors: ('All' | Sector)[] = ['All', 'Industrial', 'Commercial', 'Oil & Gas', 'Civil', 'MEP']

export default function ProjectsPage() {
  const [active, setActive] = useState<'All' | Sector>('All')

  const filtered = active === 'All' ? projects : projects.filter((p) => p.sector === active)

  return (
    <>
      {/* Dark hero header */}
      <div className="relative pt-[120px] pb-24 overflow-hidden">
        <Image
          src="/assets/envato/Images/18.jpeg"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          aria-hidden="true"
          priority
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(4,9,30,0.95) 0%, rgba(10,21,71,0.90) 100%)' }}
        />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.04] pointer-events-none">
          <SteelIcon name="028-forge" size={360} color="white" />
        </div>

        <Container className="relative z-10">
          <Reveal>
            <Eyebrow className="mb-4">Our work</Eyebrow>
            <h1 className="text-h1 font-heading text-paper max-w-2xl">Project gallery</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-body text-mute mt-6 max-w-xl">
              A selection of delivered projects across industrial, commercial, oil &amp; gas, and
              civil sectors throughout Qatar.
            </p>
          </Reveal>
        </Container>
      </div>

      {/* White grid section */}
      <div className="bg-white py-16 lg:py-20">
        <Container>
          {/* Filter tabs */}
          <div
            className="flex flex-wrap gap-2 mb-10"
            role="group"
            aria-label="Filter projects by sector"
          >
            {sectors.map((sector) => (
              <button
                key={sector}
                onClick={() => setActive(sector)}
                className={[
                  'px-4 py-2 text-sm font-heading rounded-full border transition-all duration-200',
                  active === sector
                    ? 'bg-[#0A1547] text-white border-[#0A1547]'
                    : 'border-[#C8D8EC] text-[#6080A0] hover:text-[#04091E] hover:border-[#0A1547]/40',
                ].join(' ')}
                aria-pressed={active === sector}
              >
                {sector}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link href={`/projects/${project.slug}`} className="group block">
                    <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-[#F0F4FA] border border-[#E0E8F5] mb-4 shadow-[0_2px_16px_-4px_rgba(10,21,71,0.08)] group-hover:shadow-[0_8px_32px_-8px_rgba(10,21,71,0.16)] transition-shadow duration-300">
                      <Image
                        src={project.coverImage}
                        alt={project.name}
                        fill
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#04091E]/70 via-transparent to-transparent z-[1]" />

                      {/* Sector tag */}
                      <div className="absolute top-4 left-4 z-[2]">
                        <span className="px-2.5 py-1 text-[10px] font-heading font-semibold uppercase tracking-widest text-[#D4A020] bg-[#04091E]/80 border border-[#D4A020]/30 rounded-full">
                          {project.sector}
                        </span>
                      </div>

                      {/* Arrow hover */}
                      <div className="absolute bottom-4 right-4 z-[2] w-9 h-9 rounded-full border border-white/0 flex items-center justify-center text-white opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:border-white/40 group-hover:bg-[#D4A020] transition-all duration-300">
                        <ArrowUpRight size={15} />
                      </div>
                    </div>
                    <h2 className="text-h3 font-heading text-[#04091E] mb-1 group-hover:text-[#D4A020] transition-colors duration-200">
                      {project.name}
                    </h2>
                    <p className="text-sm text-[#6080A0]">{project.location} · {project.year}</p>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <p className="text-[#8090B0] text-center py-20">
              No projects found in this category yet.
            </p>
          )}
        </Container>
      </div>

      <ClientsStrip />

      <CTABanner />
    </>
  )
}
