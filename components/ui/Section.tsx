import React from 'react'
import { cn } from '@/lib/utils'

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  as?: React.ElementType
  noPadding?: boolean
}

export function Section({
  children,
  className,
  id,
  as: Tag = 'section',
  noPadding = false,
}: SectionProps) {
  return (
    <Tag id={id} className={cn(!noPadding && 'section-py', className)}>
      {children}
    </Tag>
  )
}
