'use client'
import React from 'react'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  asChild?: boolean
  href?: string
  download?: boolean | string
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  href,
  download,
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 font-heading font-500 tracking-tight transition-all duration-200 cursor-pointer select-none rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-steel disabled:opacity-50 disabled:pointer-events-none min-h-[44px] min-w-[44px]'

  const variants = {
    primary:
      'bg-accent text-white hover:bg-accent-2 active:scale-[0.98] shadow-sm',
    secondary:
      'bg-steel-2 text-paper border border-line hover:border-accent hover:text-white active:scale-[0.98]',
    ghost: 'text-mute hover:text-paper active:scale-[0.98]',
    outline:
      'border border-paper/30 text-paper hover:border-accent hover:text-accent active:scale-[0.98]',
  }

  const sizes = {
    sm: 'text-sm px-4 py-2',
    md: 'text-sm px-6 py-3',
    lg: 'text-base px-8 py-4',
  }

  const classes = cn(base, variants[variant], sizes[size], className)

  if (href) {
    return (
      <a href={href} className={classes} download={download}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
}

export function IconButton({ label, className, children, ...props }: IconButtonProps) {
  return (
    <button
      aria-label={label}
      className={cn(
        'inline-flex items-center justify-center w-11 h-11 rounded transition-colors duration-200 text-mute hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
