'use client'
import React from 'react'
import { cn } from '@/lib/utils'

interface MarqueeProps {
  children: React.ReactNode
  speed?: number
  className?: string
  reverse?: boolean
}

export function Marquee({ children, speed = 40, className, reverse = false }: MarqueeProps) {
  return (
    <div
      className={cn('overflow-hidden flex select-none', className)}
      style={{
        maskImage:
          'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)',
        WebkitMaskImage:
          'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)',
      }}
    >
      <div
        className={cn(
          'flex gap-12 items-center shrink-0 animate-marquee hover:[animation-play-state:paused]',
          reverse && '[animation-direction:reverse]'
        )}
        style={{ '--marquee-duration': `${speed}s` } as React.CSSProperties}
        aria-hidden="true"
      >
        {children}
        {children}
      </div>
    </div>
  )
}
