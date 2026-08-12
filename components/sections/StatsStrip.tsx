import React from 'react'
import { Container } from '@/components/ui/Container'
import { Stat } from '@/components/ui/Stat'
import { company } from '@/lib/content/company'

export function StatsStrip() {
  const stats = [
    { value: company.stats.yearsExperience, label: 'Years of experience' },
    { value: company.stats.projectsDelivered, label: 'Projects delivered' },
    { value: company.stats.skilledWorkers, label: 'Skilled workers' },
    { value: company.stats.tonnesFabricated, label: 'Tonnes fabricated annually' },
  ]

  return (
    <div className="relative z-20 -mt-20">
      <Container>
        <div
          className="rounded-xl p-8 md:p-10 border border-[#1B2F8A]/80"
          style={{
            background: 'linear-gradient(135deg, rgba(16,32,106,0.98) 0%, rgba(10,21,71,0.98) 100%)',
            boxShadow: '0 32px 80px -16px rgba(0,0,0,0.8), 0 0 0 1px rgba(212,160,32,0.1)',
          }}
        >
          {/* Gold top bar */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-accent/60 to-transparent mb-8" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={stat.label} className={`${i > 0 ? 'md:pl-8 md:border-l md:border-[#1B2F8A]/60' : ''}`}>
                <Stat value={stat.value} label={stat.label} />
              </div>
            ))}
          </div>

          {/* Gold bottom bar */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-accent/30 to-transparent mt-8" />
        </div>
      </Container>
    </div>
  )
}
