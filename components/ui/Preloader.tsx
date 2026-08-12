'use client'
import { useState, useEffect, useRef } from 'react'

export function Preloader() {
  const [phase, setPhase] = useState<'visible' | 'fading' | 'done'>('visible')
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    const dismiss = () => {
      setPhase('fading')
      setTimeout(() => {
        setPhase('done')
        document.body.style.overflow = ''
      }, 800)
    }

    const video = videoRef.current
    video?.addEventListener('ended', dismiss)
    const fallback = setTimeout(dismiss, 7000)

    return () => {
      video?.removeEventListener('ended', dismiss)
      clearTimeout(fallback)
      document.body.style.overflow = ''
    }
  }, [])

  if (phase === 'done') return null

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-opacity duration-700 ease-in-out ${
        phase === 'fading' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{ background: '#ffffff' }}
    >
      <video
        ref={videoRef}
        src="/assets/envato/Untitled%20design.mp4"
        autoPlay
        muted
        playsInline
        disablePictureInPicture
        className="w-[280px] sm:w-[360px] md:w-[420px]"
      />
    </div>
  )
}
