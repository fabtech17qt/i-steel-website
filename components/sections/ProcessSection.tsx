'use client'
import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Reveal } from '@/components/motion/Reveal'
import { SteelIcon } from '@/components/ui/SteelIcon'

const steps = [
  { number: '01', title: 'Consult & Survey', description: 'We assess your requirements, site conditions, and project brief.', icon: '007-tools' },
  { number: '02', title: 'Design & Detail (BIM)', description: 'Structural engineering and 3D Tekla modelling to buildable detail.', icon: '048-grid' },
  { number: '03', title: 'Fabricate (Workshop)', description: 'Precision cutting, welding, and assembly in our Doha workshop.', icon: '019-factory' },
  { number: '04', title: 'Coat & Finish', description: 'Shot blasting, painting, intumescent fire-rating to specification.', icon: '021-welder' },
  { number: '05', title: 'Install & Handover', description: 'Safe erection, QA documentation, and full project handover.', icon: '011-beam' },
]

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const scaleX = useTransform(scrollYProgress, [0.1, 0.7], [0, 1])

  return (
    <section ref={sectionRef} className="relative section-py overflow-hidden">
      {/* Chrome texture background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/envato/Images/20.jpeg"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          aria-hidden="true"
        />
      </div>
      {/* Deep navy overlay */}
      <div className="absolute inset-0 z-[1]"
        style={{ background: 'linear-gradient(135deg, rgba(4,9,30,0.97) 0%, rgba(10,21,71,0.95) 100%)' }}
      />
      {/* Large steel bar icon watermark — left */}
      <div className="absolute left-[-5%] top-1/2 -translate-y-1/2 z-[2] opacity-[0.04] pointer-events-none rotate-12">
        <SteelIcon name="038-bars" size={400} color="white" />
      </div>
      {/* Large beam icon watermark — right */}
      <div className="absolute right-[-8%] bottom-0 z-[2] opacity-[0.04] pointer-events-none -rotate-6">
        <SteelIcon name="011-beam" size={380} color="white" />
      </div>

      {/* Gold hairlines top + bottom */}
      <div className="absolute top-0 left-0 right-0 h-px z-[3] bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px z-[3] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <Container className="relative z-10">
        <Reveal className="text-center mb-14">
          <Eyebrow className="mb-4">How we deliver</Eyebrow>
          <h2 className="text-h1 font-heading text-white max-w-xl mx-auto">
            Five steps from brief to handover
          </h2>
        </Reveal>

        {/* Desktop: horizontal */}
        <div className="hidden lg:block relative">
          <div className="absolute top-[44px] left-0 right-0 h-px bg-[#1B2F8A]/60" />
          <motion.div
            className="absolute top-[44px] left-0 h-px bg-accent origin-left"
            style={{ scaleX, right: 0 }}
          />

          <div className="grid grid-cols-5 gap-6">
            {steps.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.08}>
                <div className="flex flex-col items-center text-center group">
                  <div className="relative z-10 w-[88px] h-[88px] rounded-full border-2 border-[#1B2F8A]/80 bg-[#0A1547]/80 backdrop-blur-sm flex flex-col items-center justify-center mb-6 transition-all duration-300 group-hover:border-accent group-hover:shadow-[0_0_32px_rgba(212,160,32,0.3)]">
                    <SteelIcon name={step.icon} size={32} color="gold" className="mb-1 opacity-80 group-hover:opacity-100 transition-opacity" />
                    <span className="text-[9px] text-accent tracking-widest">{step.number}</span>
                  </div>
                  <h3 className="text-h3 font-heading text-white mb-2 group-hover:text-accent transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Mobile: vertical */}
        <div className="lg:hidden flex flex-col gap-8 relative pl-16">
          <div className="absolute left-[34px] top-0 bottom-0 w-px bg-[#1B2F8A]/60" />
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.06}>
              <div className="relative flex gap-4">
                <div className="absolute -left-[46px] w-[56px] h-[56px] rounded-full border-2 border-[#1B2F8A] bg-[#0A1547] flex flex-col items-center justify-center shrink-0">
                  <SteelIcon name={step.icon} size={22} color="gold" />
                </div>
                <div className="pt-2">
                  <span className="text-eyebrow block mb-1">{step.number}</span>
                  <h3 className="text-h3 font-heading text-white mb-1">{step.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
