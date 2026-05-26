'use client'
import React, { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { cn } from '@/lib/utils'

interface StatProps {
  value: string
  label: string
  className?: string
  dark?: boolean  // true = on white bg, needs dark label text
}

function parseNumber(val: string): { num: number; suffix: string; prefix: string } {
  const prefix = ''
  const clean = val.replace(/[^0-9.]/g, '')
  const suffix = val.replace(/[0-9.]/g, '')
  return { num: parseFloat(clean) || 0, suffix, prefix }
}

export function Stat({ value, label, className, dark }: StatProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [displayed, setDisplayed] = useState('0')
  const { num, suffix } = parseNumber(value)
  const isPlaceholder = value.includes('[TODO]')

  useEffect(() => {
    if (!isInView || isPlaceholder) return
    const duration = 1400
    const start = performance.now()
    const frame = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(eased * num)
      setDisplayed(current.toString())
      if (progress < 1) requestAnimationFrame(frame)
      else setDisplayed(num.toString())
    }
    requestAnimationFrame(frame)
  }, [isInView, num, isPlaceholder])

  return (
    <div ref={ref} className={cn('flex flex-col gap-1', className)}>
      {isPlaceholder ? (
        <span className="font-heading text-display text-accent/40 font-semibold">
          —
        </span>
      ) : (
        <span className="font-heading text-display font-semibold text-gold-gradient">
          {displayed}{suffix}
        </span>
      )}
      <span className={cn('text-sm', dark ? 'text-[#6080A0]' : 'text-paper/60')}>{label}</span>
    </div>
  )
}
