import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, MapPin, Calendar, Building2, Layers } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Reveal } from '@/components/motion/Reveal'
import { Button } from '@/components/ui/Button'
import { CTABanner } from '@/components/sections/CTABanner'
import { SteelIcon } from '@/components/ui/SteelIcon'
import { projects } from '@/lib/content/projects'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) return {}
  return {
    title: `${project.name} | iSteel Projects`,
    description: project.description,
  }
}

export default function ProjectDetailPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) notFound()

  const meta = [
    { icon: Building2, label: 'Client', value: project.client },
    { icon: Layers, label: 'Sector', value: project.sector },
    { icon: MapPin, label: 'Location', value: project.location },
    { icon: Calendar, label: 'Year', value: project.year },
  ]

  return (
    <>
      {/* Dark hero header */}
      <div className="relative pt-[120px] pb-20 overflow-hidden">
        <Image
          src={project.coverImage}
          alt={project.name}
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(4,9,30,0.95) 0%, rgba(10,21,71,0.92) 100%)' }}
        />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.04] pointer-events-none">
          <SteelIcon name="036-chain" size={320} color="white" />
        </div>

        <Container className="relative z-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-mute hover:text-paper transition-colors duration-200 mb-8"
          >
            <ArrowLeft size={14} />
            All projects
          </Link>
          <Reveal>
            <Eyebrow className="mb-3">{project.sector} · {project.year}</Eyebrow>
            <h1 className="text-h1 font-heading text-paper">{project.name}</h1>
          </Reveal>
        </Container>
      </div>

      {/* White content */}
      <div className="bg-white py-16 lg:py-24">
        <Container>
          {/* Hero image */}
          <Reveal>
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-12 shadow-[0_4px_32px_-8px_rgba(10,21,71,0.18)]">
              <Image
                src={project.coverImage}
                alt={project.name}
                fill
                className="object-cover"
                sizes="(max-width: 1320px) 100vw, 1320px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#04091E]/30 to-transparent" />
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Description */}
            <div className="lg:col-span-2">
              <Reveal>
                <h2 className="text-h2 font-heading text-[#04091E] mb-4">Project overview</h2>
                <p className="text-body text-[#3A4A60] mb-6">{project.description}</p>
                <div className="p-5 bg-[#F8FAFF] border border-[#E0E8F5] rounded-xl mb-8">
                  <h3 className="text-h3 font-heading text-[#04091E] mb-2">Scope of work</h3>
                  <p className="text-sm text-[#3A4A60] leading-relaxed">{project.scope}</p>
                </div>
              </Reveal>

              {/* Gallery */}
              <Reveal delay={0.08}>
                <h3 className="text-h3 font-heading text-[#04091E] mb-4">Gallery</h3>
                <div className="grid grid-cols-2 gap-4">
                  {project.images.slice(0, 4).map((img, i) => (
                    <div key={i} className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[#E0E8F5] shadow-[0_2px_12px_-4px_rgba(10,21,71,0.1)]">
                      <Image
                        src={img}
                        alt={`${project.name} — photo ${i + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 1024px) 50vw, 300px"
                      />
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Meta sidebar */}
            <Reveal delay={0.1}>
              <div className="bg-[#F8FAFF] border border-[#E0E8F5] rounded-xl p-6 h-fit shadow-[0_2px_16px_-4px_rgba(10,21,71,0.06)]">
                <h3 className="text-h3 font-heading text-[#04091E] mb-5">Project details</h3>
                <ul className="flex flex-col gap-4">
                  {meta.map(({ icon: Icon, label, value }) => (
                    <li key={label} className="flex items-start gap-3">
                      <Icon size={15} className="text-[#D4A020] mt-0.5 shrink-0" />
                      <div>
                        <div className="text-xs text-[#8090B0] uppercase tracking-widest mb-0.5">{label}</div>
                        <div className="text-sm text-[#04091E] font-medium">{value}</div>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-[#E0E8F5]">
                  <Button
                    href="/contact"
                    className="w-full justify-center bg-[#0A1547] text-white hover:bg-[#D4A020] hover:text-[#04091E]"
                  >
                    Discuss a similar project
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </div>

      <CTABanner />
    </>
  )
}
