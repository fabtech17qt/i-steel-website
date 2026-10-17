'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { ChevronDown, ArrowUpRight, Phone } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'
import { SteelIcon } from '@/components/ui/SteelIcon'
import { services } from '@/lib/content/services'
import { company } from '@/lib/content/company'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services', hasMega: true },
  { label: 'Projects', href: '/projects' },
  { label: 'Certifications', href: '/certifications' },
  { label: 'Insights', href: '/blog' },
]

export function Header() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (y) => {
    const prev = scrollY.getPrevious() ?? 0
    setScrolled(y > 60)
    setHidden(y > 400 && y > prev && !megaOpen)
  })

  useEffect(() => {
    setMobileOpen(false)
    setMegaOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href))

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: hidden && !mobileOpen ? -120 : 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 inset-x-0 z-50 pt-[clamp(8px,1.2vw,16px)] px-[clamp(8px,1.2vw,16px)]"
      >
        <div
          className={cn(
            'mx-auto transition-all duration-500 ease-out-expo rounded-[22px]',
            scrolled
              ? 'max-w-[1240px] bg-ink/80 backdrop-blur-xl shadow-[0_20px_50px_-20px_rgba(4,9,30,0.6)] border border-white/10 mt-2'
              : 'max-w-full bg-transparent border border-transparent'
          )}
        >
          <div
            className={cn(
              'flex items-center justify-between transition-all duration-500',
              scrolled ? 'h-[64px] px-4 sm:px-5' : 'h-[84px] container-px'
            )}
          >
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0" aria-label="iSteel home">
              <motion.span whileHover={{ rotate: 12 }} className="block">
                <Image
                  src="/assets/logos/iSTEEL-Logo.png"
                  alt="iSteel Engineering Trading & Contracting"
                  width={scrolled ? 40 : 48}
                  height={scrolled ? 40 : 48}
                  className="object-contain transition-all duration-500"
                  priority
                />
              </motion.span>
              <span className="hidden sm:flex flex-col leading-none">
                <span className="font-heading font-extrabold text-white text-[17px] tracking-tight">
                  iSTEEL<span className="text-accent">.</span>
                </span>
                <span className="font-heading text-white/50 text-[8.5px] tracking-[0.22em] uppercase mt-1">
                  Engineering · Qatar
                </span>
              </span>
            </Link>

            {/* Desktop nav — Atlas-style ruled links */}
            <nav className="hidden xl:flex items-center gap-5" aria-label="Main navigation">
              {navLinks.map((link) =>
                link.hasMega ? (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setMegaOpen(true)}
                    onMouseLeave={() => setMegaOpen(false)}
                  >
                    <Link
                      href={link.href}
                      aria-expanded={megaOpen}
                      className={cn(
                        'flex items-center justify-between gap-6 w-[112px] pt-2 pb-1.5 border-t text-[13px] font-heading font-medium text-white transition-colors duration-300',
                        isActive(link.href) || megaOpen ? 'border-accent text-accent' : 'border-white/40 hover:border-accent'
                      )}
                    >
                      {link.label}
                      <ChevronDown size={13} className={cn('transition-transform duration-300', megaOpen && 'rotate-180')} />
                    </Link>
                    <AnimatePresence>
                      {megaOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 12, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.98 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[760px]"
                        >
                          <div className="bg-paper rounded-[24px] p-3 shadow-[0_40px_80px_-24px_rgba(4,9,30,0.55)] grid grid-cols-[1fr_220px] gap-3">
                            <div className="grid grid-cols-2 gap-1 p-2">
                              {services.map((svc) => (
                                <Link
                                  key={svc.slug}
                                  href={`/services/${svc.slug}`}
                                  className="group/item flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white transition-colors duration-200"
                                >
                                  <span className="text-[10px] font-heading font-bold text-accent w-5">{svc.number}</span>
                                  <span className="text-[13px] text-ink font-medium leading-snug flex-1">{svc.title}</span>
                                  <ArrowUpRight
                                    size={13}
                                    className="text-accent opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300"
                                  />
                                </Link>
                              ))}
                            </div>
                            <Link
                              href="/services"
                              className="relative rounded-[18px] overflow-hidden flex flex-col justify-end p-5 group/card"
                            >
                              <Image
                                src="/assets/envato/Images/21.jpeg"
                                alt=""
                                fill
                                sizes="220px"
                                className="object-cover transition-transform duration-700 group-hover/card:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
                              <div className="relative">
                                <div className="h-mix text-white text-xl">
                                  <strong>12</strong> services
                                </div>
                                <div className="mt-2 flex items-center gap-1.5 text-accent text-xs font-heading font-semibold">
                                  View all <ArrowUpRight size={13} />
                                </div>
                              </div>
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'w-[112px] pt-2 pb-1.5 border-t text-[13px] font-heading font-medium transition-colors duration-300',
                      isActive(link.href)
                        ? 'border-accent text-accent'
                        : 'border-white/40 text-white hover:border-accent'
                    )}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            <div className="flex items-center gap-2">
              <Button href="/contact" variant="outline-light" size="sm" arrow className="hidden md:inline-flex">
                Contact us
              </Button>
              <button
                className="xl:hidden relative w-11 h-11 rounded-full bg-white/10 backdrop-blur flex items-center justify-center"
                onClick={() => setMobileOpen((o) => !o)}
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileOpen}
              >
                <span className="relative w-5 h-3">
                  <span
                    className={cn(
                      'absolute left-0 right-0 h-[2px] bg-white rounded transition-all duration-300',
                      mobileOpen ? 'top-[5px] rotate-45' : 'top-0'
                    )}
                  />
                  <span
                    className={cn(
                      'absolute left-0 h-[2px] bg-accent rounded transition-all duration-300',
                      mobileOpen ? 'top-[5px] right-0 -rotate-45 bg-white' : 'top-[10px] right-1.5'
                    )}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 40px) 40px)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-ink flex flex-col pt-[110px] pb-10 container-px overflow-y-auto"
            data-lenis-prevent
          >
            <nav className="flex flex-col">
              {[...navLinks, { label: 'Contact', href: '/contact' }].map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 + i * 0.05, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      'flex items-center justify-between py-4 border-b border-white/10 h-mix text-[clamp(1.75rem,7vw,2.5rem)]',
                      isActive(link.href) ? 'text-accent !font-bold' : 'text-white'
                    )}
                  >
                    {link.label}
                    <ArrowUpRight size={22} className="text-accent" />
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-auto pt-10 flex flex-col gap-3"
            >
              <Button href="/contact" size="lg" arrow className="w-full">
                Let&rsquo;s discuss your project
              </Button>
              <a
                href={`tel:${company.phone}`}
                className="flex items-center justify-center gap-2 h-[52px] rounded-full border border-white/20 text-white text-sm font-heading"
              >
                <Phone size={15} className="text-accent" />
                {company.phone}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
