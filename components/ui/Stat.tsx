'use client'
import React, { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { cn } from '@/lib/utils'

interface StatProps {
  value: string
  label: string
  className?: string
  /** true = on navy background */
  light?: boolean
}

function parseNumber(val: string) {
  const num = parseFloat(val.replace(/[^0-9.]/g, '')) || 0
  const suffix = val.replace(/[0-9.,]/g, '')
  return { num, suffix }
}

export function Stat({ value, label, className, light }: StatProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [displayed, setDisplayed] = useState(0)
  const { num, suffix } = parseNumber(value)

  useEffect(() => {
    if (!isInView) return
    const duration = 1600
    const start = performance.now()
    let raf = 0
    const frame = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      setDisplayed(Math.round((1 - Math.pow(1 - p, 4)) * num))
      if (p < 1) raf = requestAnimationFrame(frame)
    }
    raf = requestAnimationFrame(frame)
    return () => cancelAnimationFrame(raf)
  }, [isInView, num])

  return (
    <div ref={ref} className={cn('flex flex-col gap-2', className)}>
      <span
        className={cn(
          'font-heading font-light tabular-nums leading-none text-[clamp(2.5rem,4.5vw,4rem)] tracking-tight',
          light ? 'text-white' : 'text-ink'
        )}
      >
        {displayed.toLocaleString('en-US')}
        <span className="text-accent font-bold">{suffix}</span>
      </span>
      <span
        className={cn(
          'text-[11px] font-heading font-semibold uppercase tracking-[0.18em]',
          light ? 'text-white/50' : 'text-copy/70'
        )}
      >
        {label}
      </span>
    </div>
  )
}
