import React from 'react'
import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/motion/Reveal'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { SteelIcon } from '@/components/ui/SteelIcon'

const certs = [
  { name: 'ISO 9001:2015', sub: 'Quality Management', icon: '016-steel' },
  { name: 'ISO 14001:2015', sub: 'Environmental Management', icon: '019-factory' },
  { name: 'ISO 45001:2018', sub: 'Occupational H&S', icon: '007-tools' },
  { name: 'QCD Registered', sub: 'Qatar Chemical & Petroleum', icon: '036-chain' },
]

export function CertificationsStrip() {
  return (
    <div className="relative overflow-hidden py-16">
      {/* Metal texture 3 background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/envato/Metal Textures 3.jpg"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          aria-hidden="true"
        />
      </div>
      {/* Navy + white overlay */}
      <div className="absolute inset-0 z-[1]"
        style={{ background: 'linear-gradient(135deg, rgba(4,9,30,0.96) 0%, rgba(16,32,106,0.93) 100%)' }}
      />
      {/* Watermark icon */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-[2] opacity-[0.05] pointer-events-none">
        <SteelIcon name="046-screws" size={280} color="white" />
      </div>

      <Container className="relative z-10">
        <Reveal>
          <Eyebrow className="text-center mb-10">Certified & Accredited</Eyebrow>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {certs.map((cert, i) => (
            <Reveal key={cert.name} delay={i * 0.07}>
              <div className="group flex flex-col items-center text-center gap-3 p-5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-accent/40 hover:bg-white/8 transition-all duration-300">
                {/* TODO: Replace with real ISO badge */}
                <div className="w-16 h-16 rounded-full border-2 border-accent/30 bg-white/5 flex items-center justify-center group-hover:border-accent/60 transition-colors duration-300">
                  <SteelIcon name={cert.icon} size={28} color="gold" />
                </div>
                <div>
                  <div className="text-sm font-heading font-medium text-white">{cert.name}</div>
                  <div className="text-xs text-white/50 mt-0.5">{cert.sub}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </div>
  )
}
