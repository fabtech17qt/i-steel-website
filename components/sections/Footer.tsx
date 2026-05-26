import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, ArrowRight, Linkedin, Instagram } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { company } from '@/lib/content/company'

const navColumns = [
  {
    heading: 'Company',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About iSteel', href: '/about' },
      { label: 'Services', href: '/services' },
      { label: 'Projects', href: '/projects' },
      { label: 'Certifications', href: '/certifications' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
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
      { label: 'All Services →', href: '/services' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-[#04091E] border-t border-[#1B2F8A]/60">
      <Container className="py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <Image
                src="/assets/logos/iSTEEL-Logo.png"
                alt="iSteel Engineering"
                width={52}
                height={52}
                className="object-contain"
              />
              <div>
                <div className="font-heading font-semibold text-paper text-sm leading-tight">iSteel Engineering</div>
                <div className="text-mute text-[9px] tracking-[0.15em] uppercase mt-0.5">Trading & Contracting W.L.L</div>
              </div>
            </div>
            <p className="text-mute text-sm leading-relaxed mb-6">
              Engineered steel. Delivered turnkey.<br />
              Serving Qatar since {company.established}.
            </p>

            {/* Gold divider */}
            <div className="h-px bg-gradient-to-r from-accent/60 to-transparent mb-6" />

            <div className="flex items-center gap-3">
              {company.social.linkedin && (
                <a
                  href={company.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 border border-[#1B2F8A] rounded flex items-center justify-center text-mute hover:text-paper hover:border-accent transition-colors duration-200"
                >
                  <Linkedin size={15} />
                </a>
              )}
              {company.social.instagram && (
                <a
                  href={company.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 border border-[#1B2F8A] rounded flex items-center justify-center text-mute hover:text-paper hover:border-accent transition-colors duration-200"
                >
                  <Instagram size={15} />
                </a>
              )}
            </div>
          </div>

          {/* Nav columns */}
          {navColumns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-eyebrow mb-5">{col.heading}</h3>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-mute hover:text-paper transition-colors duration-200 hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h3 className="text-eyebrow mb-5">Contact</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href={`tel:${company.phone}`}
                  className="flex items-start gap-3 text-sm text-mute hover:text-paper transition-colors duration-200 group"
                >
                  <Phone size={14} className="text-accent mt-0.5 shrink-0" />
                  {company.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-start gap-3 text-sm text-mute hover:text-paper transition-colors duration-200 group"
                >
                  <Mail size={14} className="text-accent mt-0.5 shrink-0" />
                  {company.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-mute">
                <MapPin size={14} className="text-accent mt-0.5 shrink-0" />
                <span>{company.address.line2}</span>
              </li>
            </ul>
            <a
              href={company.companyProfilePdf}
              download
              className="mt-6 inline-flex items-center gap-2 text-sm text-accent hover:text-accent-2 transition-colors duration-200"
            >
              Download Company Profile
              <ArrowRight size={13} />
            </a>
          </div>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-[#1B2F8A]/40">
        <Container className="py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-mute">
            <span>© {new Date().getFullYear()} {company.name}. All rights reserved.</span>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="hover:text-paper transition-colors duration-200">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-paper transition-colors duration-200">Terms</Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  )
}
