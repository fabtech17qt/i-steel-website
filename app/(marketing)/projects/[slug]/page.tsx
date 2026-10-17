import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/motion/Reveal'
import { SplitText } from '@/components/motion/SplitText'
import { PageHero } from '@/components/sections/PageHero'
import { CTABanner } from '@/components/sections/CTABanner'
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

function splitName(name: string) {
  const words = name.split(' ')
  if (words.length < 3) return { light: undefined, bold: name }
  const cut = Math.ceil(words.length / 2)
  return { light: words.slice(0, cut).join(' '), bold: words.slice(cut).join(' ') }
}

export default function ProjectDetailPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) notFound()

  const { light, bold } = splitName(project.name)
  const meta = [
    { label: 'Client', value: project.client },
    { label: 'Sector', value: project.sector },
    { label: 'Location', value: project.location },
    { label: 'Year', value: project.year },
  ]
  const more = projects.filter((p) => p.slug !== project.slug).slice(0, 3)
  const gallery = project.images.slice(0, 5)

  return (
    <>
      <PageHero
        eyebrow={`${project.sector} · ${project.year}`}
        light={light}
        bold={bold}
        size="h1"
        description={project.scope}
        image={project.coverImage}
        imageAlt={project.name}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Projects', href: '/projects' },
          { label: project.name },
        ]}
      />

      {/* Meta strip */}
      <section className="pt-10">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-ink/10 rounded-[28px] shadow-card overflow-hidden">
            {meta.map((m, i) => (
              <Reveal key={m.label} delay={i * 0.06} className="bg-white p-6 sm:p-8">
                <div className="text-[10px] font-heading uppercase tracking-[0.2em] text-accent">{m.label}</div>
                <div className="mt-2 font-heading font-semibold text-ink leading-snug">{m.value}</div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-py">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20">
            <div className="lg:sticky lg:top-28 self-start">
              <Reveal>
                <Eyebrow className="mb-5">Project overview</Eyebrow>
              </Reveal>
              <h2 className="h-mix text-h1 text-ink">
                <SplitText text="The" /> <SplitText text="story" className="font-extrabold" delay={0.06} />
                <span className="text-accent font-extrabold">.</span>
              </h2>
              <Reveal delay={0.12}>
                <p className="mt-6 text-copy leading-relaxed">{project.description}</p>
              </Reveal>
              {project.stats && project.stats.length > 0 && (
                <Reveal delay={0.18}>
                  <div className="mt-8 grid grid-cols-2 gap-3">
                    {project.stats.map((s) => (
                      <div key={s.label} className="rounded-[20px] bg-white p-5 shadow-card">
                        <div className="font-heading text-2xl font-light text-ink">{s.value}</div>
                        <div className="mt-1 text-[10px] font-heading uppercase tracking-[0.16em] text-copy">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </Reveal>
              )}
              <Reveal delay={0.22}>
                <div className="mt-8">
                  <Button href="/contact" variant="navy" arrow>
                    Discuss a similar project
                  </Button>
                </div>
              </Reveal>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {gallery.map((img, i) => (
                <Reveal key={img + i} delay={(i % 2) * 0.08} y={40} className={i % 3 === 0 ? 'col-span-2' : ''}>
                  <div className={`relative overflow-hidden rounded-[24px] bg-steel ${i % 3 === 0 ? 'aspect-[16/10]' : 'aspect-[4/5]'}`}>
                    <Image
                      src={img}
                      alt={`${project.name} — photo ${i + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* More projects */}
      <section className="pb-6">
        <Container>
          <div className="flex items-end justify-between gap-6 mb-8">
            <h2 className="h-mix text-h2 text-ink">
              More <strong>projects</strong>
            </h2>
            <Link href="/projects" className="group inline-flex items-center gap-1.5 font-heading text-sm font-semibold text-ink">
              View all <ArrowUpRight size={15} className="text-accent group-hover:rotate-45 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {more.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <Link href={`/projects/${p.slug}`} className="group block relative aspect-[4/3] rounded-[24px] overflow-hidden bg-steel">
                  <Image src={p.coverImage} alt={p.name} fill sizes="33vw" className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                    <div className="text-[10px] font-heading uppercase tracking-[0.16em] text-accent">{p.sector}</div>
                    <div className="mt-1 font-heading font-bold uppercase">{p.name}</div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  )
}
