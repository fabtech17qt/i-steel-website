import React from 'react'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Reveal } from '@/components/motion/Reveal'
import { clients } from '@/lib/content/clients'

export function ClientsStrip() {
  return (
    <div className="bg-[#F8FAFD] border-y border-[#E0E8F5] py-16 lg:py-20">
      <Container>
        <Reveal className="text-center mb-10">
          <Eyebrow className="mb-4">Trusted by</Eyebrow>
          <h2 className="text-h2 font-heading text-[#04091E]">Clients we&rsquo;ve worked with</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {clients.map((name) => (
              <div
                key={name}
                className="flex items-center justify-center text-center px-4 py-5 rounded-lg border border-[#E0E8F5] bg-white text-sm font-heading font-medium text-[#3A4A60] leading-snug"
              >
                {name}
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </div>
  )
}
