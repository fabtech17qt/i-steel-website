'use client'
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface SplitTextProps {
  text: string
  className?: string
  delay?: number
  as?: React.ElementType
}

export function SplitText({ text, className, delay = 0, as: Tag = 'span' }: SplitTextProps) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-50px' })
  const words = text.split(' ')

  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.25em] last:mr-0"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{
            duration: 0.6,
            delay: delay + i * 0.04,
            ease: [0.16, 1, 0.3, 1],
          }}
          aria-hidden="true"
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  )
}
