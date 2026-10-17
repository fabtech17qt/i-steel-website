'use client'
import React, { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { MapPin, ArrowUp, Linkedin, Instagram, Facebook, ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { company } from '@/lib/content/company'

const columns = [
  {
    heading: 'Menu',
    links: [
      { label: 'About iSteel', href: '/about' },
      { label: 'Services', href: '/services' },
      { label: 'Projects', href: '/projects' },
      { label: 'Certifications', href: '/certifications' },
      { label: 'Insights', href: '/blog' },
    ],
  },
  {
    heading: 'Services',
    links: [
      { label: 'Structural Steel', href: '/services/structural-steel-fabrication' },
      { label: 'Steel Erection', href: '/services/steel-erection' },
      { label: 'Civil Construction', href: '/services/civil-construction' },
      { label: 'MEP Contracting', href: '/services/mep-contracting' },
      { label: 'Oil & Gas', href: '/services/oil-gas-construction' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Request a Quote', href: '/contact' },
      { label: 'Company Profile', href: company.companyProfilePdf },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
    ],
  },
]

const socials = [
  { icon: Linkedin, href: company.social.linkedin, label: 'LinkedIn' },
  { icon: Instagram, href: company.social.instagram, label: 'Instagram' },
  { icon: Facebook, href: company.social.facebook, label: 'Facebook' },
].filter((s) => s.href)

export function Footer() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end end'] })
  const wordY = useTransform(scrollYProgress, [0.3, 1], ['60%', '0%'])

  return (
    <footer ref={ref} className="frame mt-[clamp(8px,1.2vw,16px)] mb-[clamp(8px,1.2vw,16px)] relative bg-ink text-white overflow-hidden">
      <Container className="relative pt-16 lg:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_2fr] gap-12 lg:gap-16">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3" aria-label="iSteel home">
              <Image src="/assets/logos/iSTEEL-Logo.png" alt="iSteel Engineering" width={56} height={56} />
              <span className="flex flex-col leading-none">
                <span className="font-heading font-extrabold text-2xl tracking-tight">
                  iSTEEL<span className="text-accent">.</span>
                </span>
                <span className="font-heading text-white/50 text-[9px] tracking-[0.22em] uppercase mt-1.5">
                  Engineering Trading &amp; Contracting
                </span>
              </span>
            </Link>
            <p className="mt-6 text-white/60 text-sm leading-relaxed max-w-sm">
              {company.name} is Qatar&rsquo;s integrated structural steel and turnkey construction specialist — warehouses,
              schools, malls, high-rises and industrial facilities.
            </p>
            <p className="mt-5 flex items-start gap-2.5 text-sm text-white/60">
              <MapPin size={15} className="text-accent mt-0.5 shrink-0" />
              <span>
                {company.address.line1}, {company.address.line2}
                <br />
                {company.address.poBox}
              </span>
            </p>
          </div>

          {/* Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            {columns.map((col) => (
              <div key={col.heading}>
                <h3 className="font-heading font-semibold text-sm mb-5">{col.heading}</h3>
                <ul className="flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="group inline-flex items-center gap-1 text-sm text-white/55 hover:text-accent transition-colors duration-300"
                      >
                        <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 text-accent">—</span>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Call / email row */}
        <div className="mt-14 pt-10 border-t border-white/10 grid grid-cols-1 sm:grid-cols-[1fr_1fr_auto] gap-8 items-end">
          <a href={`tel:${company.phone}`} className="group">
            <span className="block text-[11px] font-heading uppercase tracking-[0.2em] text-white/45">Call us</span>
            <span className="mt-2 flex items-center gap-2 font-heading text-[clamp(1.25rem,2.4vw,1.9rem)] font-light group-hover:text-accent transition-colors">
              {company.phone}
              <ArrowUpRight size={20} className="text-accent transition-transform duration-300 group-hover:rotate-45" />
            </span>
          </a>
          <a href={`mailto:${company.email}`} className="group">
            <span className="block text-[11px] font-heading uppercase tracking-[0.2em] text-white/45">Email us</span>
            <span className="mt-2 flex items-center gap-2 font-heading text-[clamp(1.25rem,2.4vw,1.9rem)] font-light group-hover:text-accent transition-colors break-all">
              {company.email}
              <ArrowUpRight size={20} className="text-accent shrink-0 transition-transform duration-300 group-hover:rotate-45" />
            </span>
          </a>
          <div className="flex items-center gap-2">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-11 h-11 rounded-xl border border-white/15 flex items-center justify-center text-accent hover:bg-accent hover:text-ink transition-colors"
              >
                <Icon size={17} />
              </a>
            ))}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Back to top"
              className="w-11 h-11 rounded-xl bg-accent text-ink flex items-center justify-center hover:-translate-y-1 transition-transform"
            >
              <ArrowUp size={17} />
            </button>
          </div>
        </div>
      </Container>

      {/* Giant wordmark */}
      <div className="relative overflow-hidden mt-10 select-none pointer-events-none" aria-hidden="true">
        <motion.div
          style={{ y: wordY }}
          className="text-center font-heading font-extrabold leading-[0.78] tracking-tighter text-[clamp(5rem,24vw,22rem)] bg-gradient-to-b from-white/[0.14] to-white/[0.02] bg-clip-text text-transparent"
        >
          iSTEEL<span className="text-accent/60">.</span>
        </motion.div>
      </div>

      <div className="relative border-t border-white/10">
        <Container className="py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/40">
          <span>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </span>
          <span className="font-heading tracking-[0.2em] uppercase">Redefinition for steel</span>
        </Container>
      </div>
    </footer>
  )
}
