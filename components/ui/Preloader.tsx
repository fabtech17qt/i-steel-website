'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'

const EASE = [0.76, 0, 0.24, 1] as const

/**
 * Brand intro: logo + counter on navy, then the panel lifts away.
 * Shown once per browser session.
 */
export function Preloader() {
  const [show, setShow] = useState(false)
  const [count, setCount] = useState(0)

  useEffect(() => {
    let seen = false
    try {
      seen = sessionStorage.getItem('isteel-intro') === '1'
      sessionStorage.setItem('isteel-intro', '1')
    } catch {}
    if (seen || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    setShow(true)
    document.documentElement.style.overflow = 'hidden'
    const start = performance.now()
    let raf = 0
    const tick = (now: number) => {
      const p = Math.min((now - start) / 1500, 1)
      setCount(Math.round((1 - Math.pow(1 - p, 3)) * 100))
      if (p < 1) raf = requestAnimationFrame(tick)
      else
        setTimeout(() => {
          setShow(false)
          document.documentElement.style.overflow = ''
        }, 250)
    }
    raf = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(raf)
      document.documentElement.style.overflow = ''
    }
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[9999] bg-ink flex flex-col items-center justify-center"
          exit={{ y: '-100%', borderBottomLeftRadius: '40%', borderBottomRightRadius: '40%' }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <motion.div
            initial={{ scale: 0.6, opacity: 0, rotate: -20 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image src="/assets/logos/iSTEEL-Logo.png" alt="iSteel" width={96} height={96} priority />
          </motion.div>
          <div className="mt-8 overflow-hidden">
            <motion.p
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="h-mix text-white text-2xl tracking-[0.12em]"
            >
              Redefinition <strong>for steel</strong>
              <span className="text-accent font-extrabold">.</span>
            </motion.p>
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[min(320px,70vw)]">
            <div className="h-px bg-white/10 overflow-hidden">
              <div className="h-full bg-accent origin-left" style={{ transform: `scaleX(${count / 100})` }} />
            </div>
            <div className="mt-3 flex justify-between text-[10px] font-heading tracking-[0.25em] uppercase text-white/40">
              <span>Doha · Qatar</span>
              <span className="tabular-nums text-accent">{count}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
