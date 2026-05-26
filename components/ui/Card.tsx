import React from 'react'
import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        'bg-steel-2 border border-line rounded-lg shadow-card transition-all duration-300 hover:-translate-y-1',
        className
      )}
    >
      {children}
    </div>
  )
}
