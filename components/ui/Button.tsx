'use client'
import React from 'react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

type Variant = 'gold' | 'navy' | 'outline' | 'outline-light' | 'white' | 'ghost'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: 'sm' | 'md' | 'lg'
  href?: string
  download?: boolean | string
  /** Show the Atlas-style ↗ arrow that tilts on hover */
  arrow?: boolean
}

const variants: Record<Variant, string> = {
  gold: 'bg-accent text-ink hover:bg-gold-light',
  navy: 'bg-steel text-white hover:bg-royal',
  outline: 'border border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-white',
  'outline-light': 'border border-white/30 text-white hover:border-accent hover:text-accent',
  white: 'bg-white text-ink hover:bg-accent',
  ghost: 'text-ink hover:text-accent',
}

const sizes = {
  sm: 'text-xs px-4 h-9',
  md: 'text-sm px-5 h-11',
  lg: 'text-sm px-7 h-[52px]',
}

export function Button({
  variant = 'gold',
  size = 'md',
  className,
  children,
  href,
  download,
  arrow = false,
  ...props
}: ButtonProps) {
  const classes = cn(
    'group/btn relative inline-flex items-center justify-center gap-2 rounded-full font-heading font-semibold tracking-tight',
    'transition-[background-color,color,border-color,transform] duration-300 ease-out-expo active:scale-[0.97]',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
    'disabled:opacity-50 disabled:pointer-events-none select-none whitespace-nowrap',
    variants[variant],
    sizes[size],
    className
  )

  const content = (
    <>
      {children}
      {arrow && (
        <ArrowUpRight
          size={size === 'sm' ? 14 : 16}
          className="transition-transform duration-300 ease-out-expo group-hover/btn:rotate-45"
        />
      )}
    </>
  )

  if (href) {
    const internal = href.startsWith('/') && !download && !href.endsWith('.pdf')
    if (internal) {
      return (
        <Link href={href} className={classes}>
          {content}
        </Link>
      )
    }
    return (
      <a href={href} className={classes} download={download}>
        {content}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  )
}
