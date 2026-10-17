import React from 'react'
import { Marquee } from '@/components/ui/Marquee'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Reveal } from '@/components/motion/Reveal'
import { clients } from '@/lib/content/clients'

const half = Math.ceil(clients.length / 2)

function Row({ items, reverse }: { items: string[]; reverse?: boolean }) {
  return (
    <Marquee speed={55} reverse={reverse}>
      {items.map((name) => (
        <span key={name} className="flex items-center gap-12 shrink-0">
          <span className="font-heading text-[clamp(1.25rem,2.4vw,2rem)] font-light uppercase text-ink/70 whitespace-nowrap hover:text-ink transition-colors">
            {name}
          </span>
          <span className="w-2.5 h-2.5 rounded-full bg-accent shrink-0" />
        </span>
      ))}
    </Marquee>
  )
}

export function ClientsStrip() {
  return (
    <section className="py-16 lg:py-24 border-y border-ink/10">
      <Reveal className="text-center mb-10 container-px">
        <Eyebrow>Trusted by contractors &amp; developers across Qatar</Eyebrow>
      </Reveal>
      <div className="flex flex-col gap-6">
        <Row items={clients.slice(0, half)} />
        <Row items={clients.slice(half)} reverse />
      </div>
    </section>
  )
}
