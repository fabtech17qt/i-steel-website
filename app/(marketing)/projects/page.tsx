'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { PageHero } from '@/components/sections/PageHero'
import { CTABanner } from '@/components/sections/CTABanner'
import { ClientsStrip } from '@/components/sections/ClientsStrip'
import { projects, type Sector } from '@/lib/content/projects'
import { cn } from '@/lib/utils'

const sectors: ('All' | Sector)[] = ['All', 'Industrial', 'Commercial', 'Oil & Gas', 'Civil', 'MEP']

export default function ProjectsPage() {
  const [active, setActive] = useState<'All' | Sector>('All')
  const filtered = active === 'All' ? projects : projects.filter((p) => p.sector === active)

  return (
    <>
      <PageHero
        eyebrow="Our work"
        light="Projects that"
        bold="Stand tall"
        description="A selection of delivered projects across industrial, commercial, oil & gas and civil sectors throughout Qatar."
        image="/assets/envato/Images/10.jpeg"
        imageAlt="iSteel project in Doha"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Projects' }]}
      />

      <section className="section-py">
        <Container>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div role="group" aria-label="Filter projects by sector" className="inline-flex flex-wrap gap-1 p-1.5 rounded-full bg-white shadow-card self-start">
              {sectors.map((sector) => {
                const count = sector === 'All' ? projects.length : projects.filter((p) => p.sector === sector).length
                return (
                  <button
                    key={sector}
                    onClick={() => setActive(sector)}
                    aria-pressed={active === sector}
                    className={cn(
                      'relative px-4 sm:px-5 h-10 text-sm font-heading font-medium rounded-full transition-colors duration-300',
                      active === sector ? 'text-white' : 'text-copy hover:text-ink'
                    )}
                  >
                    {active === sector && (
                      <motion.span
                        layoutId="project-filter"
                        className="absolute inset-0 rounded-full bg-steel"
                        transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                      />
                    )}
                    <span className="relative">
                      {sector}
                      <sup className={cn('ml-1 text-[9px]', active === sector ? 'text-accent' : 'text-copy/50')}>{count}</sup>
                    </span>
                  </button>
                )
              })}
            </div>
            <p className="font-heading text-sm text-copy">
              Showing <strong className="text-ink">{filtered.length}</strong> of {projects.length} projects
            </p>
          </div>

          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, y: 30, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ delay: i * 0.05, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className={cn(i % 5 === 0 && active === 'All' && 'lg:col-span-2')}
                >
                  <Link href={`/projects/${project.slug}`} className="group block">
                    <div
                      className={cn(
                        'relative overflow-hidden rounded-[28px] bg-steel',
                        i % 5 === 0 && active === 'All' ? 'aspect-[4/5] lg:aspect-auto lg:h-full' : 'aspect-[4/5]'
                      )}
                    >
                      <Image
                        src={project.coverImage}
                        alt={project.name}
                        fill
                        className="object-cover transition-transform duration-[1.2s] ease-out-expo group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
                      <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
                        <span className="px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-[10px] font-heading font-semibold uppercase tracking-[0.16em] text-white">
                          {project.sector}
                        </span>
                        <span className="w-10 h-10 rounded-full bg-accent text-ink flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500 ease-out-expo">
                          <ArrowUpRight size={16} />
                        </span>
                      </div>
                      <div className="absolute inset-x-0 bottom-0 p-6">
                        <div className="text-[11px] font-heading uppercase tracking-[0.16em] text-accent">
                          {project.year} · {project.location}
                        </div>
                        <h2 className="mt-2 h-mix text-white text-[clamp(1.35rem,2vw,1.75rem)] !font-bold leading-tight">
                          {project.name}
                        </h2>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <p className="text-copy text-center py-20 font-heading">No projects in this category yet — check back soon.</p>
          )}
        </Container>
      </section>

      <ClientsStrip />
      <CTABanner />
    </>
  )
}
