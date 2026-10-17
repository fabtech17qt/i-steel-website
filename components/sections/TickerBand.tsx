import React from 'react'
import { Marquee } from '@/components/ui/Marquee'

const words = [
  'Structural Steel',
  'Fabrication',
  'Blasting & Painting',
  'Fireproofing',
  'Steel Erection',
  'Civil Works',
  'MEP',
  'Turnkey Delivery',
]

/** Large alternating solid / outlined service ticker. */
export function TickerBand() {
  return (
    <div className="py-10 md:py-14 overflow-hidden" aria-hidden="true">
      <Marquee speed={45}>
        {words.map((w, i) => (
          <span key={w} className="flex items-center gap-12 shrink-0">
            <span
              className={
                'font-heading uppercase whitespace-nowrap text-[clamp(2.25rem,5vw,4.5rem)] leading-none ' +
                (i % 2 === 0 ? 'font-extrabold text-ink' : 'font-light text-transparent [-webkit-text-stroke:1.5px_rgba(4,9,30,0.45)]')
              }
            >
              {w}
            </span>
            <svg width="28" height="28" viewBox="0 0 24 24" className="text-accent shrink-0">
              <path fill="currentColor" d="M12 0l2.6 9.4L24 12l-9.4 2.6L12 24l-2.6-9.4L0 12l9.4-2.6z" />
            </svg>
          </span>
        ))}
      </Marquee>
    </div>
  )
}
