'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { AnimatePresence, motion } from 'framer-motion'
import { Phone, Mail, MapPin, CheckCircle2, ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/motion/Reveal'
import { SplitText } from '@/components/motion/SplitText'
import { company } from '@/lib/content/company'
import { cn } from '@/lib/utils'

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  company: z.string().optional(),
  email: z.string().email('Valid email required'),
  phone: z.string().optional(),
  projectType: z.string().min(1, 'Please select a project type'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type FormValues = z.infer<typeof schema>

const projectTypes = [
  'Industrial / Warehouse',
  'Commercial Building',
  'Oil & Gas / Petrochemical',
  'Civil Infrastructure',
  'MEP Works',
  'Steel Fabrication Only',
  'Fit-Out & Renovation',
  'Other',
]

interface ContactSectionProps {
  /** Contact page: renders as page hero (h1) and shows office details */
  asPage?: boolean
}

export function ContactSection({ asPage = false }: ContactSectionProps) {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormValues) => {
    setSubmitting(true)
    setError(false)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) setSubmitted(true)
      else setError(true)
    } catch {
      setError(true)
    } finally {
      setSubmitting(false)
    }
  }

  const Heading = asPage ? 'h1' : 'h2'

  return (
    <section
      id="contact"
      className={cn(
        'frame relative bg-ink text-white overflow-hidden',
        asPage && 'mt-[clamp(8px,1.2vw,16px)] pt-[90px]'
      )}
    >
      <div className="absolute inset-0">
        <Image src="/assets/envato/Images/4.jpeg" alt="" fill sizes="100vw" className="object-cover opacity-25 grayscale" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/85 to-ink" />
      </div>

      <Container className="relative py-[clamp(64px,8vw,120px)]">
        <div className="text-center">
          <Heading className="h-mix text-mega text-accent">
            <SplitText text="Ready to" />{' '}
            <SplitText text="build?" className="font-extrabold" delay={0.12} />
          </Heading>
          <Reveal delay={0.2}>
            <p className="mt-6 text-white/70 max-w-lg mx-auto text-[15px] leading-relaxed">
              Whether you&rsquo;re ready to break ground or need expert steel advice, our engineers are here to help.
              <strong className="text-white font-semibold"> We reply within one business day.</strong>
            </p>
          </Reveal>
        </div>

        <div className={cn('mt-14 grid gap-5 items-start', asPage ? 'lg:grid-cols-[1fr_1.5fr]' : 'max-w-3xl mx-auto')}>
          {asPage && (
            <Reveal className="flex flex-col gap-3 order-2 lg:order-1">
              {[
                { icon: Phone, label: 'Call us', value: company.phone, href: `tel:${company.phone}` },
                { icon: Mail, label: 'Email us', value: company.email, href: `mailto:${company.email}` },
                {
                  icon: MapPin,
                  label: 'Visit us',
                  value: `${company.address.line1}, ${company.address.line2} · ${company.address.poBox}`,
                  href: company.address.mapLink,
                },
              ].map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 rounded-[22px] border border-white/10 bg-white/5 backdrop-blur p-5 hover:border-accent/60 transition-colors"
                >
                  <span className="w-11 h-11 rounded-full bg-accent/15 text-accent flex items-center justify-center shrink-0">
                    <Icon size={17} />
                  </span>
                  <span className="flex-1">
                    <span className="block text-[10px] font-heading uppercase tracking-[0.2em] text-white/50">{label}</span>
                    <span className="block mt-1 text-white font-heading font-medium leading-snug">{value}</span>
                  </span>
                  <ArrowUpRight size={16} className="text-white/30 group-hover:text-accent group-hover:rotate-45 transition-all duration-300" />
                </a>
              ))}
            </Reveal>
          )}

          <Reveal delay={0.1} y={40} className="order-1 lg:order-2">
            <div className="bg-white text-ink rounded-[28px] p-6 sm:p-9 shadow-[0_50px_100px_-30px_rgba(0,0,0,0.6)]">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="done"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center text-center gap-4 py-12"
                  >
                    <motion.span
                      initial={{ scale: 0, rotate: -45 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 14 }}
                      className="w-16 h-16 rounded-full bg-accent flex items-center justify-center"
                    >
                      <CheckCircle2 size={30} className="text-ink" />
                    </motion.span>
                    <h3 className="h-mix text-h2">
                      Message <strong>sent</strong>
                      <span className="text-accent font-extrabold">.</span>
                    </h3>
                    <p className="text-copy">Thank you. Our team will be in touch within one business day.</p>
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-4" exit={{ opacity: 0 }}>
                    <p className="font-heading font-semibold text-sm mb-1">Tell us about your project</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field id="name" label="Your name *" error={errors.name?.message}>
                        <input id="name" type="text" autoComplete="name" {...register('name')} className={inputClass(!!errors.name)} />
                      </Field>
                      <Field id="company" label="Company">
                        <input id="company" type="text" autoComplete="organization" {...register('company')} className={inputClass(false)} />
                      </Field>
                      <Field id="email" label="Email *" error={errors.email?.message}>
                        <input id="email" type="email" autoComplete="email" {...register('email')} className={inputClass(!!errors.email)} />
                      </Field>
                      <Field id="phone" label="Phone">
                        <input id="phone" type="tel" autoComplete="tel" placeholder="+974" {...register('phone')} className={inputClass(false)} />
                      </Field>
                    </div>
                    <Field id="projectType" label="Project type *" error={errors.projectType?.message}>
                      <select id="projectType" {...register('projectType')} className={inputClass(!!errors.projectType)} defaultValue="">
                        <option value="" disabled>
                          Select project type
                        </option>
                        {projectTypes.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </Field>
                    <Field id="message" label="Message *" error={errors.message?.message}>
                      <textarea id="message" rows={4} {...register('message')} className={cn(inputClass(!!errors.message), 'resize-none py-3 h-auto')} />
                    </Field>
                    {error && (
                      <p role="alert" className="text-sm text-red-600">
                        Something went wrong sending your message. Please call us on {company.phone}.
                      </p>
                    )}
                    <div className="flex items-center justify-between gap-4 mt-2">
                      <span className="text-xs text-copy/70 hidden sm:block">* Required fields</span>
                      <Button type="submit" size="lg" disabled={submitting} arrow={!submitting}>
                        {submitting ? 'Sending…' : 'Submit'}
                      </Button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

function inputClass(hasError: boolean) {
  return cn(
    'w-full h-12 bg-paper rounded-xl px-4 text-sm text-ink placeholder:text-copy/40 border',
    'focus:outline-none focus:bg-white focus:border-accent focus:ring-4 focus:ring-accent/15 transition-all duration-200',
    hasError ? 'border-red-400' : 'border-transparent hover:border-ink/10'
  )
}

function Field({ label, id, error, children }: { label: string; id: string; error?: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-[11px] text-copy font-heading font-semibold uppercase tracking-[0.14em]">
        {label}
      </label>
      {children}
      {error && (
        <span role="alert" className="text-xs text-red-600">
          {error}
        </span>
      )}
    </div>
  )
}
