'use client'
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

interface ImageRevealProps {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  className?: string
  priority?: boolean
  delay?: number
}

export function ImageReveal({
  src,
  alt,
  width,
  height,
  fill,
  className,
  priority,
  delay = 0,
}: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <div ref={ref} className="overflow-hidden relative" style={fill ? { height: '100%' } : undefined}>
      <motion.div
        initial={{ clipPath: 'inset(0 100% 0 0)' }}
        animate={isInView ? { clipPath: 'inset(0 0% 0 0)' } : { clipPath: 'inset(0 100% 0 0)' }}
        transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
        className="w-full h-full"
      >
        {fill ? (
          <Image src={src} alt={alt} fill className={className} priority={priority} />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={width!}
            height={height!}
            className={className}
            priority={priority}
          />
        )}
      </motion.div>
    </div>
  )
}
