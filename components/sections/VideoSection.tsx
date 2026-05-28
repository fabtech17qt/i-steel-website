'use client'
import React, { useRef, useState, useEffect, useCallback } from 'react'
import { Play, Pause, Volume2, VolumeX, Maximize2 } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Reveal } from '@/components/motion/Reveal'

export function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(false)
  const [progress, setProgress] = useState(0)
  const [started, setStarted] = useState(false)
  const [duration, setDuration] = useState(0)
  const [current, setCurrent] = useState(0)

  // Pause when scrolled out of view
  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    const obs = new IntersectionObserver(
      ([e]) => { if (!e.isIntersecting && !video.paused) { video.pause(); setPlaying(false) } },
      { threshold: 0.25 }
    )
    obs.observe(video)
    return () => obs.disconnect()
  }, [])

  const togglePlay = useCallback(() => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) { v.play(); setPlaying(true); setStarted(true) }
    else { v.pause(); setPlaying(false) }
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

  const handleFullscreen = useCallback(() => {
    const v = videoRef.current
    if (!v) return
    if (v.requestFullscreen) v.requestFullscreen()
  }, [])

  const fmt = (s: number) => {
    const m = Math.floor(s / 60)
    const sec = Math.floor(s % 60)
    return `${m}:${sec.toString().padStart(2, '0')}`
  }

  return (
    <section className="relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #04091E 0%, #050D28 100%)' }}>
      {/* Decorative grid lines */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(#D4A020 1px, transparent 1px), linear-gradient(90deg, #D4A020 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

      <div className="relative z-10 py-20 lg:py-28">
        <Container>
          {/* Header */}
          <Reveal className="text-center mb-12">
            <Eyebrow className="mb-4">Company overview</Eyebrow>
            <h2 className="text-h1 font-heading text-white max-w-2xl mx-auto leading-tight">
              See iSteel in action
            </h2>
            <p className="text-mute text-body mt-4 max-w-xl mx-auto">
              From our fabrication workshop in Doha to landmark project sites across Qatar —
              one integrated team, one point of accountability.
            </p>
          </Reveal>

          {/* Video container */}
          <Reveal delay={0.12}>
            <div className="relative rounded-2xl overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]"
              style={{ border: '1px solid rgba(212,160,32,0.25)', background: '#000' }}>

              {/* Gold corner accents */}
              {['top-0 left-0 border-t-2 border-l-2 rounded-tl-2xl',
                'top-0 right-0 border-t-2 border-r-2 rounded-tr-2xl',
                'bottom-12 left-0 border-b-2 border-l-2 rounded-bl-2xl',
                'bottom-12 right-0 border-b-2 border-r-2 rounded-br-2xl',
              ].map((cls, i) => (
                <div key={i} className={`absolute w-10 h-10 border-[#D4A020] z-20 pointer-events-none ${cls}`} />
              ))}

              {/* Video element */}
              <video
                ref={videoRef}
                src="/assets/envato/company-video%20(720p).mp4"
                className="w-full aspect-video object-cover block"
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={() => setDuration(videoRef.current?.duration ?? 0)}
                onEnded={() => setPlaying(false)}
                playsInline
              />

              {/* Play overlay — fades out once playing */}
              <div
                onClick={togglePlay}
                className={`absolute inset-0 flex flex-col items-center justify-center cursor-pointer transition-opacity duration-500 ${
                  playing ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
                style={{ background: 'linear-gradient(135deg, rgba(4,9,30,0.80) 0%, rgba(10,21,71,0.65) 100%)' }}
              >
                {/* Outer pulse ring */}
                <div className="relative flex items-center justify-center">
                  <div className="absolute w-28 h-28 rounded-full border border-[#D4A020]/30 animate-ping" />
                  <div className="absolute w-24 h-24 rounded-full border border-[#D4A020]/20" />
                  <div className="w-20 h-20 rounded-full border-2 border-[#D4A020] flex items-center justify-center bg-[#D4A020]/15 backdrop-blur-sm hover:bg-[#D4A020]/30 hover:scale-105 transition-all duration-300">
                    <Play size={30} className="text-[#D4A020] ml-1.5" fill="#D4A020" />
                  </div>
                </div>
                <p className="text-white/60 text-sm mt-6 font-heading tracking-[0.12em] uppercase text-xs">
                  Watch company video
                </p>
              </div>

              {/* Controls bar */}
              <div className={`absolute bottom-0 left-0 right-0 px-5 py-4 transition-opacity duration-300 ${started ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                style={{ background: 'linear-gradient(to top, rgba(4,9,30,0.95) 0%, transparent 100%)' }}>

                {/* Progress bar */}
                <div
                  className="w-full h-1 bg-white/15 rounded-full mb-3 cursor-pointer group"
                  onClick={handleSeek}
                >
                  <div className="relative h-full rounded-full bg-[#D4A020] transition-all duration-100" style={{ width: `${progress}%` }}>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#D4A020] opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-md" />
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  {/* Play / Pause */}
                  <button onClick={togglePlay} className="text-white hover:text-[#D4A020] transition-colors duration-200">
                    {playing
                      ? <Pause size={18} className="fill-current" />
                      : <Play size={18} className="fill-current ml-0.5" />}
                  </button>

                  {/* Time */}
                  <span className="text-xs text-white/50 font-heading tabular-nums">
                    {fmt(current)} / {fmt(duration)}
                  </span>

                  <div className="flex-1" />

                  {/* Mute */}
                  <button onClick={toggleMute} className="text-white/70 hover:text-[#D4A020] transition-colors duration-200">
                    {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                  </button>

                  {/* Fullscreen */}
                  <button onClick={handleFullscreen} className="text-white/70 hover:text-[#D4A020] transition-colors duration-200">
                    <Maximize2 size={15} />
                  </button>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Stats row below video */}
          <Reveal delay={0.2}>
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-white/8 max-w-lg mx-auto text-center">
              {[
                { value: '12+', label: 'Years delivering in Qatar' },
                { value: '500+', label: 'Projects completed' },
                { value: '850T', label: 'Steel fabricated annually' },
              ].map(({ value, label }) => (
                <div key={label}>
                  <div className="text-2xl font-heading font-bold text-[#D4A020] mb-1">{value}</div>
                  <div className="text-[11px] text-white/40 uppercase tracking-widest leading-snug">{label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </div>
    </section>
  )
}
