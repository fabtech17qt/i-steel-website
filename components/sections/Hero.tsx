'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { SplitText } from '@/components/motion/SplitText'
import { Magnetic } from '@/components/motion/Magnetic'
import { company } from '@/lib/content/company'

export function Hero() {
  return (
    <section
      className="relative min-h-[100svh] flex flex-col justify-end pb-16 md:pb-24 overflow-hidden bg-[#04091E]"
      aria-label="Hero"
    >
      {/* Envato background photo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/envato/Images/18.jpeg"
          alt="iSteel Engineering site supervisor on Qatar construction project"
          fill
          className="object-cover object-center"
          priority
          quality={80}
          sizes="100vw"
        />
      </div>

      {/* Multi-layer overlay — deep navy tint to match logo palette */}
      <div className="absolute inset-0 z-[1]"
        style={{
          background: 'linear-gradient(135deg, rgba(4,9,30,0.93) 0%, rgba(4,9,30,0.55) 55%, rgba(10,21,71,0.80) 100%)',
        }}
      />

      {/* Metal texture overlay — subtle depth */}
      <div className="absolute inset-0 z-[2] opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage: 'url(/assets/envato/Metal\\ Textures\\ 3.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Logo-blue left accent strip */}
      <div className="absolute top-0 left-0 w-1 h-full z-[3]"
        style={{ background: 'linear-gradient(to bottom, #D4A020 0%, #1B2F8A 40%, transparent 100%)' }}
      />

      {/* Diagonal gold line */}
      <div className="absolute top-0 left-0 w-px h-full z-[3] origin-top"
        style={{
          background: 'linear-gradient(to bottom, rgba(212,160,32,0.6) 0%, transparent 60%)',
          transform: 'translateX(calc(clamp(20px,4vw,56px) + 1px))',
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1320px] mx-auto container-px">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl"
        >
          {/* iSteel logo mark above eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-5"
          >
            <Image
              src="/assets/logos/iSTEEL-Logo.png"
              alt="iSteel Engineering"
              width={72}
              height={72}
              className="object-contain"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <Eyebrow className="mb-5">Est. {company.established} — Doha, Qatar</Eyebrow>
          </motion.div>

          <h1 className="text-display font-heading text-paper mb-6">
            <SplitText
              text="Engineered steel."
              className="block"
              delay={0.3}
            />
            <SplitText
              text="Delivered turnkey."
              className="block text-gold-gradient"
              delay={0.45}
            />
          </h1>

          <motion.p
            className="text-body text-paper/70 max-w-xl mb-10"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            Structural steel design, fabrication, and turnkey civil + MEP for industrial,
            commercial, and oil & gas projects across Qatar.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            <Magnetic>
              <Button
                href="/projects"
                size="lg"
                className="group bg-accent text-ink hover:bg-accent-2 font-semibold"
              >
                View Our Projects
                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Button>
            </Magnetic>
            <Magnetic>
              <Button
                href={company.companyProfilePdf}
                variant="outline"
                size="lg"
                className="group border-paper/30 text-paper hover:border-accent hover:text-accent"
                download
              >
                <Download size={16} />
                Company Profile
              </Button>
            </Magnetic>
          </motion.div>

          {/* Trust strip — under CTAs */}
          <motion.div
            className="flex flex-wrap items-center gap-6 mt-12 pt-8 border-t border-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            {['ISO 9001 Certified', 'ISO 45001 H&S', 'QCD Registered', 'Est. 2013'].map((badge) => (
              <span key={badge} className="flex items-center gap-2 text-xs text-paper/60">
                <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                {badge}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-[clamp(20px,4vw,56px)] z-10 flex flex-col items-center gap-2">
        <motion.div
          className="text-[9px] tracking-[0.25em] uppercase text-paper/40 [writing-mode:vertical-rl]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          Scroll
        </motion.div>
        <div className="relative w-px h-16 bg-white/10 overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 right-0 h-8 bg-accent"
            animate={{ y: ['-100%', '200%'] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'linear' }}
          />
        </div>
      </div>
    </section>
  )
}
