import type { Metadata } from 'next'
import { ShieldCheck, Award, Quote } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Reveal } from '@/components/motion/Reveal'
import { SplitText } from '@/components/motion/SplitText'
import { PageHero } from '@/components/sections/PageHero'
import { CTABanner } from '@/components/sections/CTABanner'
import { certifications } from '@/lib/content/certifications'

export const metadata: Metadata = {
  title: 'Certifications & Accreditations | iSteel Engineering Qatar',
  description:
    'ISO 9001, ISO 14001, ISO 45001 certified. ICV certified. View all iSteel Engineering certifications, quality accreditations, and client appreciation letters.',
}

const isoCerts = certifications.filter((c) => c.type === 'certification')
const awards = certifications.filter((c) => c.type === 'award')
const appreciations = certifications.filter((c) => c.type === 'appreciation')

export default function CertificationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Quality & compliance"
        light="Certified to"
        bold="Global standards"
        description={
          <>
            Verified quality, environmental and safety management at every production stage — and full compliance with{' '}
            <strong className="text-white">Qatar&rsquo;s In-Country Value programme</strong>.
          </>
        }
        image="/assets/envato/Steel Pipes.H03.2k.png"
        imageAlt="3D render of steel pipes"
        contain
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Certifications' }]}
      />

      {/* Certifications */}
      <section className="section-py">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <Reveal>
                <Eyebrow className="mb-5">Accreditations</Eyebrow>
              </Reveal>
              <h2 className="h-mix text-h1 text-ink">
                <SplitText text="Our" /> <SplitText text="certifications" className="font-extrabold" delay={0.06} />
                <span className="text-accent font-extrabold">.</span>
              </h2>
            </div>
            <Reveal delay={0.1}>
              <p className="text-copy max-w-sm text-sm leading-relaxed">
                Audited by Quality Austria and IQNET. Each certificate covers design, fabrication, supply and installation of
                steel structures.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {isoCerts.map((cert, i) => (
              <Reveal key={cert.id} delay={(i % 3) * 0.08}>
                <article className="group relative h-full rounded-[28px] bg-white p-7 shadow-card overflow-hidden">
                  <span className="absolute inset-0 bg-steel translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out-expo" />
                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <span className="w-12 h-12 rounded-2xl bg-accent/15 flex items-center justify-center">
                        <ShieldCheck size={22} className="text-accent" />
                      </span>
                      {cert.year && (
                        <span className="text-[10px] font-heading uppercase tracking-[0.2em] text-copy/60 group-hover:text-white/50">
                          {cert.year}
                        </span>
                      )}
                    </div>
                    <h3 className="mt-8 font-heading text-2xl font-extrabold text-ink group-hover:text-white transition-colors">
                      {cert.name}
                    </h3>
                    <p className="mt-1 text-sm font-heading font-medium text-accent">{cert.standard}</p>
                    {cert.detail && (
                      <p className="mt-4 text-sm text-copy leading-relaxed group-hover:text-white/60 transition-colors">{cert.detail}</p>
                    )}
                    <p className="mt-5 pt-4 border-t border-ink/10 group-hover:border-white/15 text-xs text-copy/70 group-hover:text-white/45 transition-colors">
                      {cert.issuer}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Awards */}
      {awards.length > 0 && (
        <section className="frame bg-accent text-ink relative overflow-hidden grain">
          <Container className="py-[clamp(56px,7vw,100px)]">
            {awards.map((a) => (
              <div key={a.id} className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 lg:gap-14 items-center">
                <Reveal>
                  <div className="w-28 h-28 lg:w-36 lg:h-36 rounded-full bg-ink flex items-center justify-center">
                    <Award size={52} className="text-accent" />
                  </div>
                </Reveal>
                <div>
                  <Reveal>
                    <p className="text-eyebrow !text-ink/70">{a.year} · {a.client}</p>
                  </Reveal>
                  <h2 className="mt-3 h-mix text-h1">
                    <SplitText text={a.standard} className="font-extrabold" />
                  </h2>
                  <Reveal delay={0.1}>
                    <p className="mt-4 text-ink/75 max-w-2xl leading-relaxed">{a.detail}</p>
                  </Reveal>
                </div>
              </div>
            ))}
          </Container>
        </section>
      )}

      {/* Appreciation letters */}
      <section className="section-py">
        <Container>
          <div className="text-center mb-12">
            <Reveal>
              <Eyebrow className="mb-5">In our clients&rsquo; words</Eyebrow>
            </Reveal>
            <h2 className="h-mix text-h1 text-ink">
              <SplitText text="Letters of" /> <SplitText text="appreciation" className="font-extrabold" delay={0.08} />
              <span className="text-accent font-extrabold">.</span>
            </h2>
          </div>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [&>*]:mb-4">
            {appreciations.map((cert, i) => (
              <Reveal key={cert.id} delay={(i % 3) * 0.08} className="break-inside-avoid">
                <article className="rounded-[26px] bg-white p-7 shadow-card">
                  <Quote size={26} className="text-accent" fill="currentColor" />
                  <p className="mt-5 text-ink leading-relaxed">{cert.detail}</p>
                  <div className="mt-6 pt-5 border-t border-ink/10 flex items-center justify-between gap-3">
                    <div>
                      <div className="font-heading font-bold text-ink">{cert.client}</div>
                      <div className="text-xs text-copy">{cert.name}</div>
                    </div>
                    {cert.year && <span className="text-[10px] font-heading uppercase tracking-[0.18em] text-copy/60">{cert.year}</span>}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  )
}
