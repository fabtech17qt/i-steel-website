'use client'
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface SplitTextProps {
  text: string
  className?: string
  delay?: number
  /** seconds between words */
  stagger?: number
  as?: React.ElementType
}

/**
 * Masked word reveal — each word slides up from behind a clip line.
 * Renders inline so it can be mixed with other spans inside a heading.
 */
export function SplitText({ text, className, delay = 0, stagger = 0.06, as: Tag = 'span' }: SplitTextProps) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-40px' })
  const words = text.split(' ')

  return (
    <Tag ref={ref} className={className}>
      <span className="sr-only">{text}</span>
      {words.map((word, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="inline-block overflow-hidden align-bottom pb-[0.08em] -mb-[0.08em] mr-[0.24em] last:mr-0"
        >
          <motion.span
            className="inline-block will-change-transform"
            initial={{ y: '110%' }}
            animate={isInView ? { y: '0%' } : { y: '110%' }}
            transition={{ duration: 0.9, delay: delay + i * stagger, ease: [0.16, 1, 0.3, 1] }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}
