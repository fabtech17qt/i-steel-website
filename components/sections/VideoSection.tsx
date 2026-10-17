'use client'
import React, { useRef, useState, useEffect, useCallback } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Play, Pause, Volume2, VolumeX, Maximize2 } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Reveal } from '@/components/motion/Reveal'
import { SplitText } from '@/components/motion/SplitText'

export function VideoSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(false)
  const [progress, setProgress] = useState(0)
  const [started, setStarted] = useState(false)
  const [duration, setDuration] = useState(0)
  const [current, setCurrent] = useState(0)

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'center center'] })
  const scale = useTransform(scrollYProgress, [0, 1], [0.86, 1])
  const radius = useTransform(scrollYProgress, [0, 1], [60, 32])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    const obs = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting && !video.paused) {
          video.pause()
          setPlaying(false)
        }
      },
      { threshold: 0.25 }
    )
    obs.observe(video)
    return () => obs.disconnect()
  }, [])

  const togglePlay = useCallback(() => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) {
      v.play()
      setPlaying(true)
      setStarted(true)
    } else {
      v.pause()
      setPlaying(false)
    }
  }, [])

  const toggleMute = useCallback(() => {
    const v = videoRef.current
    if (!v) return
    v.muted = !v.muted
    setMuted(v.muted)
  }, [])

  const handleTimeUpdate = useCallback(() => {
    const v = videoRef.current
    if (!v || !v.duration) return
    setCurrent(v.currentTime)
    setProgress((v.currentTime / v.duration) * 100)
  }, [])

  const handleSeek = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const v = videoRef.current
    if (!v || !v.duration) return
    const rect = e.currentTarget.getBoundingClientRect()
    v.currentTime = ((e.clientX - rect.left) / rect.width) * v.duration
  }, [])

  const fmt = (s: number) => `${Math.floor(s / 60)}:${Math.floor(s % 60).toString().padStart(2, '0')}`

  return (
    <section ref={sectionRef} className="section-py !pt-0">
      <Container>
        <div className="text-center mb-12">
          <Reveal>
            <Eyebrow className="mb-5">Company overview</Eyebrow>
          </Reveal>
          <h2 className="h-mix text-h1 text-ink max-w-4xl mx-auto">
            <SplitText text="See iSteel in action:" />
            <br />
            <SplitText text="from workshop to skyline" className="font-extrabold" delay={0.12} />
          </h2>
          <Reveal delay={0.15}>
            <p className="text-copy text-[15px] mt-5 max-w-xl mx-auto leading-relaxed">
              From our fabrication workshop in Doha to landmark sites across Qatar — one integrated team, one point of
              accountability.
            </p>
          </Reveal>
        </div>

        <motion.div
          style={{ scale, borderRadius: radius }}
          className="relative overflow-hidden bg-ink shadow-[0_50px_100px_-40px_rgba(4,9,30,0.6)] will-change-transform"
        >
          <video
            ref={videoRef}
            src="/assets/envato/company-video%20(720p).mp4"
            className="w-full aspect-video object-cover block"
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={() => setDuration(videoRef.current?.duration ?? 0)}
            onEnded={() => setPlaying(false)}
            playsInline
            preload="metadata"
          />

          <button
            onClick={togglePlay}
            aria-label={playing ? 'Pause video' : 'Play company video'}
            className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 bg-gradient-to-br from-ink/75 to-steel/50 group ${
              playing ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
          >
            <span className="relative flex items-center justify-center">
              <span className="absolute w-32 h-32 rounded-full border border-accent/40 animate-ping" />
              <span className="w-24 h-24 rounded-full bg-accent flex items-center justify-center transition-transform duration-500 ease-out-expo group-hover:scale-110">
                <Play size={30} className="text-ink ml-1" fill="currentColor" />
              </span>
            </span>
            <span className="mt-6 font-heading text-xs tracking-[0.25em] uppercase text-white/80">Watch the film</span>
          </button>

          <div
            className={`absolute bottom-0 inset-x-0 px-5 py-4 bg-gradient-to-t from-ink/95 to-transparent transition-opacity duration-300 ${
              started ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <div className="w-full h-1 bg-white/15 rounded-full mb-3 cursor-pointer" onClick={handleSeek}>
              <div className="h-full rounded-full bg-accent" style={{ width: `${progress}%` }} />
            </div>
            <div className="flex items-center gap-4 text-white">
              <button onClick={togglePlay} aria-label={playing ? 'Pause' : 'Play'} className="hover:text-accent transition-colors">
                {playing ? <Pause size={18} className="fill-current" /> : <Play size={18} className="fill-current" />}
              </button>
              <span className="text-xs text-white/60 font-heading tabular-nums">
                {fmt(current)} / {fmt(duration)}
              </span>
              <span className="flex-1" />
              <button onClick={toggleMute} aria-label={muted ? 'Unmute' : 'Mute'} className="text-white/70 hover:text-accent transition-colors">
                {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
              </button>
              <button
                onClick={() => videoRef.current?.requestFullscreen?.()}
                aria-label="Fullscreen"
                className="text-white/70 hover:text-accent transition-colors"
              >
                <Maximize2 size={15} />
              </button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
