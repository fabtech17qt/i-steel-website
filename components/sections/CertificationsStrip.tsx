import React from 'react'
import { ShieldCheck } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/motion/Reveal'
import { SplitText } from '@/components/motion/SplitText'

const certs = [
  { name: 'ISO 9001', year: '2015', sub: 'Quality management' },
  { name: 'ISO 14001', year: '2015', sub: 'Environmental management' },
  { name: 'ISO 45001', year: '2018', sub: 'Occupational health & safety' },
  { name: 'ICV', year: 'Qatar', sub: 'In-Country Value certified' },
]

export function CertificationsStrip() {
  return (
    <section className="section-py">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.4fr] gap-12 lg:gap-20 items-end">
          <div>
            <Reveal>
              <Eyebrow className="mb-5">Quality &amp; compliance</Eyebrow>
            </Reveal>
            <h2 className="h-mix text-h1 text-ink">
              <SplitText text="Certified." />
              <br />
              <SplitText text="Trusted." className="font-extrabold" delay={0.1} />
            </h2>
            <Reveal delay={0.15}>
              <p className="mt-5 text-copy text-[15px] leading-relaxed max-w-sm">
                Audited by Quality Austria / IQNET and registered with the Qatar National Codification Bureau (NCAGE BSW0A).
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <div className="mt-7">
                <Button href="/certifications" variant="outline" arrow>
                  View certifications
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {certs.map((c, i) => (
              <Reveal key={c.name} delay={i * 0.07}>
                <div className="group relative rounded-[24px] bg-white p-5 sm:p-7 shadow-card overflow-hidden h-full">
                  <span className="absolute inset-0 bg-steel translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out-expo" />
                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <ShieldCheck size={22} className="text-accent" />
                      <span className="text-[10px] font-heading tracking-[0.2em] uppercase text-copy/60 group-hover:text-white/50 transition-colors">
                        {c.year}
                      </span>
                    </div>
                    <div className="mt-8 font-heading text-[clamp(1.5rem,3vw,2.25rem)] font-extrabold text-ink group-hover:text-white transition-colors leading-none">
                      {c.name}
                    </div>
                    <div className="mt-2 text-xs sm:text-sm text-copy group-hover:text-white/60 transition-colors">{c.sub}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
