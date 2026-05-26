'use client'
import React from 'react'
import { cn } from '@/lib/utils'

export function LangSwitcher({ className }: { className?: string }) {
  return (
    <button
      className={cn(
        'text-xs font-heading font-500 tracking-widest uppercase text-mute hover:text-paper transition-colors duration-200 px-2 py-1 border border-line rounded hover:border-accent',
        className
      )}
      aria-label="Switch language (Arabic coming soon)"
      title="Arabic version coming soon"
      disabled
    >
      EN
    </button>
  )
}
