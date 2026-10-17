import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/motion/Reveal'
import { SplitText } from '@/components/motion/SplitText'
import { PageHero } from '@/components/sections/PageHero'
import { CTABanner } from '@/components/sections/CTABanner'
import { SteelIcon } from '@/components/ui/SteelIcon'
import { services } from '@/lib/content/services'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const svc = services.find((s) => s.slug === params.slug)
  if (!svc) return {}
  return {
    title: `${svc.title} | iSteel Engineering Qatar`,
    description: svc.shortDescription,
  }
}

/** Split a title so the last word is the bold emphasis. */
function splitTitle(title: string) {
  const words = title.split(' ')
  if (words.length < 2) return { light: undefined, bold: title }
  return { light: words.slice(0, -1).join(' '), bold: words[words.length - 1] }
}

export default function ServiceDetailPage({ params }: Props) {
  const svc = services.find((s) => s.slug === params.slug)
  if (!svc) notFound()

  const isRender = svc.image.endsWith('.png')
  const currentIndex = services.findIndex((s) => s.slug === params.slug)
  const prev = services[(currentIndex - 1 + services.length) % services.length]
  const next = services[(currentIndex + 1) % services.length]
  const { light, bold } = splitTitle(svc.title)
  const related = services.filter((s) => s.slug !== svc.slug).slice(0, 5)

  return (
    <>
      <PageHero
        eyebrow={`Service ${svc.number}`}
        light={light}
        bold={bold}
        size="h1"
        description={svc.shortDescription}
        image={svc.image}
        imageAlt={svc.title}
        contain={isRender}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: svc.title },
        ]}
      >
        <Button href="/contact" arrow>
          Request a quote
        </Button>
      </PageHero>

      <section className="section-py">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-14 lg:gap-20">
            <div>
              <Reveal>
                <Eyebrow className="mb-5">Overview</Eyebrow>
              </Reveal>
              <Reveal delay={0.06}>
                <p className="font-heading text-[clamp(1.25rem,2.2vw,1.75rem)] leading-snug text-ink font-light">
                  {svc.fullDescription}
                </p>
              </Reveal>

              <h2 className="h-mix text-h2 text-ink mt-16 mb-8">
                <SplitText text="Our" /> <SplitText text="capabilities" className="font-extrabold" delay={0.06} />
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {svc.capabilities.map((cap, i) => (
                  <Reveal key={cap} delay={i * 0.05}>
                    <div className="flex items-center gap-4 rounded-[20px] bg-white p-5 shadow-card h-full">
                      <span className="w-9 h-9 rounded-full bg-accent text-ink flex items-center justify-center shrink-0">
                        <Check size={16} strokeWidth={3} />
                      </span>
                      <span className="text-ink font-medium text-[15px]">{cap}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <aside className="flex flex-col gap-4 lg:sticky lg:top-28 self-start">
              <Reveal>
                <div className="rounded-[28px] bg-ink text-white p-7 relative overflow-hidden">
                  <span className="absolute -right-6 -bottom-6 opacity-10">
                    <SteelIcon name={svc.icon} size={160} color="gold" />
                  </span>
                  <h3 className="h-mix text-h2 relative">
                    Have a <strong>project?</strong>
                  </h3>
                  <p className="relative mt-3 text-white/60 text-sm leading-relaxed">
                    Talk to our engineers about {svc.title.toLowerCase()} for your next build.
                  </p>
                  <div className="relative mt-6">
                    <Button href="/contact" arrow>
                      Get a quote
                    </Button>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.08}>
                <div className="rounded-[28px] bg-white p-7 shadow-card">
                  <h3 className="font-heading font-semibold text-ink mb-4">Related services</h3>
                  <div className="flex flex-col">
                    {related.map((r) => (
                      <Link
                        key={r.slug}
                        href={`/services/${r.slug}`}
                        className="group flex items-center gap-3 py-3.5 border-b border-ink/10 last:border-0"
                      >
                        <span className="text-[11px] font-heading font-bold text-accent w-6">{r.number}</span>
                        <span className="text-sm text-copy group-hover:text-ink transition-colors flex-1">{r.title}</span>
                        <ArrowUpRight size={14} className="text-ink/30 group-hover:text-accent group-hover:rotate-45 transition-all duration-300" />
                      </Link>
                    ))}
                  </div>
                </div>
              </Reveal>
              {!isRender && (
                <Reveal delay={0.12}>
                  <div className="relative aspect-[4/3] rounded-[28px] overflow-hidden">
                    <Image src={svc.image} alt={svc.title} fill sizes="400px" className="object-cover" />
                  </div>
                </Reveal>
              )}
            </aside>
          </div>
        </Container>
      </section>

      {/* Prev / next */}
      <section>
        <Container>
          <div className="grid grid-cols-2 gap-3">
            <Link href={`/services/${prev.slug}`} className="group rounded-[24px] bg-white p-6 sm:p-8 shadow-card hover:bg-steel transition-colors duration-500">
              <span className="flex items-center gap-2 text-[11px] font-heading uppercase tracking-[0.2em] text-copy group-hover:text-white/50">
                <ArrowLeft size={13} className="transition-transform group-hover:-translate-x-1" /> Previous
              </span>
              <span className="mt-3 block h-mix text-ink group-hover:text-white text-[clamp(1rem,2vw,1.5rem)] !font-semibold transition-colors">
                {prev.title}
              </span>
            </Link>
            <Link href={`/services/${next.slug}`} className="group rounded-[24px] bg-white p-6 sm:p-8 shadow-card text-right hover:bg-steel transition-colors duration-500">
              <span className="flex items-center justify-end gap-2 text-[11px] font-heading uppercase tracking-[0.2em] text-copy group-hover:text-white/50">
                Next <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
              </span>
              <span className="mt-3 block h-mix text-ink group-hover:text-white text-[clamp(1rem,2vw,1.5rem)] !font-semibold transition-colors">
                {next.title}
              </span>
            </Link>
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  )
}
