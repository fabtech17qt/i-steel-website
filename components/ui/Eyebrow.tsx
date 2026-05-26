import React from 'react'
import { cn } from '@/lib/utils'

interface EyebrowProps {
  children: React.ReactNode
  className?: string
}

export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <span className={cn('text-eyebrow block', className)}>
      {children}
    </span>
  )
}
