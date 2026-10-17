'use client'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'

interface ParallaxProps {
  children: React.ReactNode
  /** px of travel across the element's pass through the viewport (negative = moves up faster) */
  offset?: number
  className?: string
}

export function Parallax({ children, offset = 60, className }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset])

  return (
    <motion.div ref={ref} style={reduce ? undefined : { y }} className={className}>
      {children}
    </motion.div>
  )
}
