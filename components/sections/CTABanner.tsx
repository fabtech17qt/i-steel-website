import React from 'react'
import Image from 'next/image'
import { Phone } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Magnetic } from '@/components/motion/Magnetic'
import { Reveal } from '@/components/motion/Reveal'
import { company } from '@/lib/content/company'

export function CTABanner() {
  return (
    <div className="relative overflow-hidden py-20 md:py-28">
      {/* Metal texture background from Envato */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/envato/Metal Textures 4.jpg"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          aria-hidden="true"
        />
      </div>

      {/* Deep navy overlay so text is readable */}
      <div className="absolute inset-0 z-[1]"
        style={{
          background: 'linear-gradient(135deg, rgba(4,9,30,0.96) 0%, rgba(10,21,71,0.90) 50%, rgba(4,9,30,0.95) 100%)',
        }}
      />

      {/* Gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full bg-accent/8 blur-[100px] z-[2]" />

      {/* Top + bottom gold hairlines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent z-[3]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent z-[3]" />

      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center gap-8">
          <Reveal>
            <h2 className="text-display font-heading text-paper">
              Let&rsquo;s build your vision together.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-body text-paper/60 max-w-lg">
              Ready to discuss your project? Our engineering team is available for site visits,
              consultations, and quotations across Qatar.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="flex flex-wrap gap-4 justify-center">
              <Magnetic>
                <Button
                  href="/contact"
                  size="lg"
                  className="bg-accent text-ink hover:bg-accent-2 font-semibold"
                >
                  Request a Quote
                </Button>
              </Magnetic>
              <Magnetic>
                <Button
                  href={`tel:${company.phone}`}
                  variant="outline"
                  size="lg"
                  className="group border-[#1B2F8A] text-paper hover:border-accent hover:text-accent"
                >
                  <Phone size={16} className="text-accent" />
                  {company.phone}
                </Button>
              </Magnetic>
            </div>
          </Reveal>
        </div>
      </Container>
    </div>
  )
}
