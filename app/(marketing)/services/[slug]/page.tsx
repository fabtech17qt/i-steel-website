import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, CheckCircle, ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Reveal } from '@/components/motion/Reveal'
import { Button } from '@/components/ui/Button'
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

export default function ServiceDetailPage({ params }: Props) {
  const svc = services.find((s) => s.slug === params.slug)
  if (!svc) notFound()

  const isRender = svc.image.endsWith('.png')

  const currentIndex = services.findIndex((s) => s.slug === params.slug)
  const prev = services[currentIndex - 1]
  const next = services[currentIndex + 1]

  return (
    <>
      {/* Dark hero header */}
      <div className="relative pt-[120px] pb-20 overflow-hidden">
        <Image
          src={svc.image}
          alt={svc.title}
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
          <SteelIcon name={svc.icon} size={320} color="white" />
        </div>

        <Container className="relative z-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-mute hover:text-paper transition-colors duration-200 mb-8"
          >
            <ArrowLeft size={14} />
            All services
          </Link>
          <Reveal>
            <Eyebrow className="mb-4">{svc.number}</Eyebrow>
            <h1 className="text-h1 font-heading text-paper max-w-2xl">{svc.title}</h1>
          </Reveal>
        </Container>
      </div>

      {/* White content section */}
      <div className="bg-white py-16 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Main content */}
            <div>
              <Reveal>
                <p className="text-body text-[#3A4A60] leading-relaxed mb-8">{svc.fullDescription}</p>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="text-h3 font-heading text-[#04091E] mb-5">Our capabilities</h2>
                <ul className="flex flex-col gap-3 mb-8">
                  {svc.capabilities.map((cap) => (
                    <li key={cap} className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-[#D4A020] mt-0.5 shrink-0" />
                      <span className="text-[#3A4A60]">{cap}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={0.18}>
                <Button
                  href="/contact"
                  className="bg-[#0A1547] text-white hover:bg-[#D4A020] hover:text-[#04091E]"
                >
                  Request a quote for this service
                  <ArrowRight size={14} />
                </Button>
              </Reveal>
            </div>

            {/* Service photo + related services */}
            <Reveal delay={0.1}>
              <div className="flex flex-col gap-5">
              <div className={`relative aspect-[4/3] rounded-xl overflow-hidden shadow-[0_4px_24px_-8px_rgba(10,21,71,0.18)] ${isRender ? 'bg-[#F0F4FA]' : ''}`}>
                <Image
                  src={svc.image}
                  alt={svc.title}
                  fill
                  className={isRender ? 'object-contain p-6' : 'object-cover'}
                  sizes="(max-width: 1024px) 100vw, 400px"
                />
                {!isRender && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#04091E]/50 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="text-[10px] text-[#D4A020] tracking-widest uppercase font-heading">iSteel Engineering</span>
                    </div>
                  </>
                )}
              </div>
              <div className="bg-[#F8FAFF] border border-[#E0E8F5] rounded-xl p-6 shadow-[0_2px_16px_-4px_rgba(10,21,71,0.06)]">
                <h3 className="text-h3 font-heading text-[#04091E] mb-5">Related services</h3>
                <div className="flex flex-col gap-3">
                  {services
                    .filter((s) => s.slug !== svc.slug)
                    .slice(0, 5)
                    .map((related) => (
                      <Link
                        key={related.slug}
                        href={`/services/${related.slug}`}
                        className="flex items-center gap-3 py-3 border-b border-[#E0E8F5] last:border-0 group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#0A1547]/8 border border-[#1B2F8A]/15 flex items-center justify-center shrink-0">
                          <SteelIcon name={related.icon} size={16} color="gold" />
                        </div>
                        <span className="text-sm text-[#3A4A60] group-hover:text-[#D4A020] transition-colors duration-200 flex-1">
                          {related.title}
                        </span>
                        <ArrowRight size={12} className="text-[#B0C0D8] group-hover:text-[#D4A020] transition-colors duration-200" />
                      </Link>
                    ))}
                </div>
              </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </div>

      {/* Prev / Next navigation — light border bar */}
      <div className="border-t border-[#E0E8F5] bg-[#F8FAFF]">
        <Container className="py-8">
          <div className="flex justify-between gap-4">
            {prev ? (
              <Link href={`/services/${prev.slug}`} className="flex flex-col gap-1 group max-w-[240px]">
                <span className="text-xs text-[#8090B0] flex items-center gap-1">
                  <ArrowLeft size={12} />
                  Previous
                </span>
                <span className="text-sm text-[#04091E] group-hover:text-[#D4A020] transition-colors duration-200">
                  {prev.title}
                </span>
              </Link>
            ) : <div />}
            {next && (
              <Link href={`/services/${next.slug}`} className="flex flex-col items-end gap-1 group max-w-[240px] text-right">
                <span className="text-xs text-[#8090B0] flex items-center gap-1">
                  Next
                  <ArrowRight size={12} />
                </span>
                <span className="text-sm text-[#04091E] group-hover:text-[#D4A020] transition-colors duration-200">
                  {next.title}
                </span>
              </Link>
            )}
          </div>
        </Container>
      </div>

      <CTABanner />
    </>
  )
}
