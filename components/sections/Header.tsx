'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Phone, Menu, X, ChevronDown, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { LangSwitcher } from '@/components/ui/LangSwitcher'
import { SteelIcon } from '@/components/ui/SteelIcon'
import { services } from '@/lib/content/services'
import { company } from '@/lib/content/company'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services', hasMega: true },
  { label: 'Projects', href: '/projects' },
  { label: 'Certifications', href: '/certifications' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setMegaOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const isHome = pathname === '/'

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled || !isHome
            ? 'bg-[#04091E]/95 backdrop-blur-md border-b border-[#1B2F8A]/60'
            : 'bg-transparent'
        )}
      >
        <div className="w-full max-w-[1320px] mx-auto container-px">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0 group" aria-label="iSteel home">
              <Image
                src="/assets/logos/iSTEEL-Logo.png"
                alt="iSteel Engineering Trading & Contracting"
                width={44}
                height={44}
                className="object-contain shrink-0"
                priority
              />
              <div className="hidden sm:flex flex-col min-w-0">
                <span className="font-heading font-semibold text-paper text-sm leading-none whitespace-nowrap">iSteel Engineering</span>
                <span className="text-mute text-[9px] tracking-[0.12em] uppercase mt-0.5 whitespace-nowrap">Trading &amp; Contracting W.L.L</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {navLinks.map((link) =>
                link.hasMega ? (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setMegaOpen(true)}
                    onMouseLeave={() => setMegaOpen(false)}
                  >
                    <button
                      className={cn(
                        'flex items-center gap-1 px-4 py-2 text-sm font-heading font-medium rounded transition-colors duration-200',
                        pathname.startsWith('/services')
                          ? 'text-accent'
                          : 'text-mute hover:text-paper'
                      )}
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        className={cn('transition-transform duration-200', megaOpen && 'rotate-180')}
                      />
                    </button>

                    <AnimatePresence>
                      {megaOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[720px] bg-[#04091E] border border-[#1B2F8A]/60 rounded-lg shadow-[0_24px_64px_-12px_rgba(0,0,0,0.9)] p-6"
                        >
                          <div className="grid grid-cols-3 gap-2">
                            {services.map((svc) => (
                              <Link
                                key={svc.slug}
                                href={`/services/${svc.slug}`}
                                className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#10206A]/60 transition-colors duration-200 group/item"
                              >
                                <SteelIcon name={svc.icon} size={20} color="gold" className="mt-0.5 shrink-0 opacity-80 group-hover/item:opacity-100 transition-opacity" />
                                <div>
                                  <div className="text-[10px] text-accent mb-0.5 tracking-widest uppercase">{svc.number}</div>
                                  <div className="text-sm text-paper group-hover/item:text-accent transition-colors duration-200 leading-snug">
                                    {svc.title}
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                          <div className="mt-4 pt-4 border-t border-[#1B2F8A]/60">
                            <Link
                              href="/services"
                              className="flex items-center gap-2 text-sm text-mute hover:text-accent transition-colors duration-200"
                            >
                              View all services <ArrowRight size={13} />
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
                      'px-4 py-2 text-sm font-heading font-medium rounded transition-colors duration-200',
                      pathname === link.href
                        ? 'text-accent'
                        : 'text-mute hover:text-paper'
                    )}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-3">
              <a
                href={`tel:${company.phone}`}
                className="hidden md:flex items-center gap-2 text-sm text-mute hover:text-paper transition-colors duration-200"
              >
                <Phone size={14} className="text-accent" />
                <span className="font-heading">{company.phone}</span>
              </a>
              <LangSwitcher className="hidden md:flex" />
              <Button
                href="/contact"
                size="sm"
                className="hidden md:inline-flex rounded-full bg-accent text-ink hover:bg-accent-2 font-semibold"
              >
                Get a Quote
              </Button>
              <button
                className="lg:hidden p-2 text-mute hover:text-paper transition-colors duration-200"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#04091E] flex flex-col"
          >
            {/* Mobile header */}
            <div className="flex items-center justify-between h-[72px] container-px border-b border-[#1B2F8A]/60">
              <Link href="/" aria-label="iSteel home">
                <Image
                  src="/assets/logos/iSTEEL-Logo.png"
                  alt="iSteel"
                  width={44}
                  height={44}
                  className="object-contain"
                />
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 text-mute hover:text-paper"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto pb-12 container-px pt-4">
              <nav className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        'block py-4 text-h2 font-heading font-semibold border-b border-[#1B2F8A]/40 transition-colors duration-200',
                        pathname === link.href || pathname.startsWith(link.href + '/')
                          ? 'text-accent'
                          : 'text-paper hover:text-accent'
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="mt-8 flex flex-col gap-4"
              >
                <Button href="/contact" size="lg" className="w-full justify-center bg-accent text-ink hover:bg-accent-2 font-semibold">
                  Get a Quote
                </Button>
                <a
                  href={`tel:${company.phone}`}
                  className="flex items-center justify-center gap-2 py-3 border border-[#1B2F8A] rounded text-paper"
                >
                  <Phone size={16} className="text-accent" />
                  {company.phone}
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
