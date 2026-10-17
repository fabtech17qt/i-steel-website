import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/motion/Reveal'
import { PageHero } from '@/components/sections/PageHero'
import { ProcessSection } from '@/components/sections/ProcessSection'
import { CTABanner } from '@/components/sections/CTABanner'
import { SteelIcon } from '@/components/ui/SteelIcon'
import { services } from '@/lib/content/services'

export const metadata: Metadata = {
  title: 'Our Services | iSteel Engineering Qatar',
  description:
    'Structural steel fabrication, civil construction, MEP, oil & gas, and 8 more integrated services — all from a single main contractor in Qatar.',
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        bold="12 services"
        light="One partner"
        boldFirst
        description={
          <>
            From structural steel fabrication to turnkey civil, MEP and oil &amp; gas works — we{' '}
            <strong className="text-white">self-perform every scope</strong> under a single contract and point of responsibility.
          </>
        }
        image="/assets/envato/Industrial Catwalk Long Corner.H03.2k.png"
        imageAlt="3D render of an industrial steel catwalk"
        contain
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
      />

      <section className="section-py">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-5">
            {services.map((svc, i) => {
              const isRender = svc.image.endsWith('.png')
              return (
                <Reveal key={svc.slug} delay={(i % 3) * 0.08}>
                  <Link
                    href={`/services/${svc.slug}`}
                    className="group relative flex flex-col h-full rounded-[28px] bg-white overflow-hidden shadow-card"
                  >
                    <div className={`relative aspect-[16/10] overflow-hidden ${isRender ? 'bg-gradient-to-br from-paper to-paper-2' : 'bg-steel'}`}>
                      <Image
                        src={svc.image}
                        alt={svc.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        className={`${isRender ? 'object-contain p-6' : 'object-cover'} transition-transform duration-[1.2s] ease-out-expo group-hover:scale-110`}
                      />
                      <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/85 backdrop-blur font-heading text-[11px] font-bold text-ink">
                        {svc.number}
                      </span>
                      <span className="absolute top-4 right-4 w-10 h-10 rounded-full bg-accent text-ink flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500 ease-out-expo">
                        <ArrowUpRight size={16} />
                      </span>
                    </div>
                    <div className="relative flex flex-col flex-1 p-7">
                      {/* navy wipe on hover */}
                      <span className="absolute inset-0 bg-steel origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out-expo" />
                      <div className="relative flex items-start justify-between gap-4">
                        <h2 className="h-mix text-h3 !font-bold text-ink group-hover:text-white transition-colors duration-500">
                          {svc.title}
                        </h2>
                        <SteelIcon name={svc.icon} size={26} color="gold" className="shrink-0" />
                      </div>
                      <p className="relative mt-3 text-sm text-copy leading-relaxed group-hover:text-white/65 transition-colors duration-500">
                        {svc.shortDescription}
                      </p>
                      <ul className="relative pt-5 border-t border-ink/10 group-hover:border-white/15 flex flex-col gap-1.5 mt-auto">
                        {svc.capabilities.slice(0, 3).map((cap) => (
                          <li key={cap} className="flex items-center gap-2 text-xs text-copy group-hover:text-white/70 transition-colors duration-500">
                            <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
                            {cap}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </Container>
      </section>

      <ProcessSection />
      <CTABanner />
    </>
  )
}
