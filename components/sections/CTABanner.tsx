'use client'
import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Phone } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Magnetic } from '@/components/motion/Magnetic'
import { SplitText } from '@/components/motion/SplitText'
import { Reveal } from '@/components/motion/Reveal'
import { company } from '@/lib/content/company'

export function CTABanner() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const scale = useTransform(scrollYProgress, [0, 1], [1.25, 1])

  return (
    <section className="section-py">
      <Container>
        <div ref={ref} className="relative rounded-[32px] overflow-hidden min-h-[460px] flex items-end">
          <motion.div style={{ scale }} className="absolute inset-0">
            <Image
              src="/assets/envato/New-img/WhatsApp Image 2026-05-26 at 2.15.28 PM.jpeg"
              alt=""
              fill
              sizes="(max-width: 1320px) 100vw, 1320px"
              className="object-cover"
              aria-hidden="true"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-tr from-ink via-ink/70 to-steel/30" />

          <div className="relative w-full p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 items-end">
            <div>
              <h2 className="h-mix text-display text-white">
                <SplitText text="Ready to" />
                <br />
                <SplitText text="build?" className="font-extrabold text-accent" delay={0.1} />
              </h2>
              <Reveal delay={0.15}>
                <p className="mt-5 text-white/70 max-w-md leading-relaxed">
                  See the factory and the work for yourself. Our engineers are available for <strong className="text-white">site
                  visits, consultations and quotations</strong> across Qatar.
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.2} className="flex flex-wrap gap-3 lg:justify-end">
              <Magnetic>
                <Button href="/contact" size="lg" arrow>
                  Request a quote
                </Button>
              </Magnetic>
              <Button href={`tel:${company.phone}`} variant="outline-light" size="lg">
                <Phone size={15} className="text-accent" />
                {company.phone}
              </Button>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}
