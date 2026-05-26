import React from 'react'
import { cn } from '@/lib/utils'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
}

export function Container({ children, className, as: Tag = 'div' }: ContainerProps) {
  return (
    <Tag
      className={cn(
        'w-full max-w-[1320px] mx-auto container-px',
        className
      )}
    >
      {children}
    </Tag>
  )
}
