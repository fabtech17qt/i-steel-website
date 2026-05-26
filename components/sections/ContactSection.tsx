'use client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/motion/Reveal'
import { company } from '@/lib/content/company'

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

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormValues) => {
    setSubmitting(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) setSubmitted(true)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Section id="contact" className="bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Contact form */}
          <div>
            <Reveal>
              <Eyebrow className="mb-4">Get in touch</Eyebrow>
              <h2 className="text-h1 font-heading text-[#04091E] mb-8">
                Start a project conversation
              </h2>
            </Reveal>

            {submitted ? (
              <Reveal>
                <div className="flex flex-col items-start gap-4 p-8 border border-success/30 bg-success/10 rounded-lg">
                  <CheckCircle size={32} className="text-success" />
                  <h3 className="text-h3 font-heading text-[#04091E]">Message sent!</h3>
                  <p className="text-[#6080A0] text-body">
                    Thank you. Our team will be in touch within one business day.
                  </p>
                </div>
              </Reveal>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field
                    label="Name *"
                    error={errors.name?.message}
                    id="name"
                  >
                    <input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      {...register('name')}
                      className={inputClass(!!errors.name)}
                    />
                  </Field>
                  <Field label="Company" id="company">
                    <input
                      id="company"
                      type="text"
                      placeholder="Company name"
                      {...register('company')}
                      className={inputClass(false)}
                    />
                  </Field>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label="Email *" error={errors.email?.message} id="email">
                    <input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      {...register('email')}
                      className={inputClass(!!errors.email)}
                    />
                  </Field>
                  <Field label="Phone" id="phone">
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+974"
                      {...register('phone')}
                      className={inputClass(false)}
                    />
                  </Field>
                </div>
                <Field label="Project type *" error={errors.projectType?.message} id="projectType">
                  <select id="projectType" {...register('projectType')} className={inputClass(!!errors.projectType)}>
                    <option value="">Select project type</option>
                    {projectTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Message *" error={errors.message?.message} id="message">
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Describe your project briefly…"
                    {...register('message')}
                    className={inputClass(!!errors.message) + ' resize-none'}
                  />
                </Field>
                <Button
                  type="submit"
                  size="lg"
                  disabled={submitting}
                  className="self-start bg-[#0A1547] text-white hover:bg-accent hover:text-ink"
                >
                  {submitting ? 'Sending…' : 'Send message'}
                  {!submitting && <Send size={15} />}
                </Button>
              </form>
            )}
          </div>

          {/* Right: Address card + map */}
          <Reveal delay={0.1}>
            <div className="flex flex-col gap-6">
              <div className="bg-[#F8FAFF] border border-[#E0E8F5] rounded-xl p-6 shadow-[0_2px_16px_-4px_rgba(10,21,71,0.08)]">
                <h3 className="text-h3 font-heading text-[#04091E] mb-6">Our office</h3>
                <ul className="flex flex-col gap-5">
                  <li>
                    <a href={`tel:${company.phone}`} className="flex items-start gap-4 group">
                      <div className="w-10 h-10 rounded-lg bg-[#0A1547]/8 border border-[#1B2F8A]/20 flex items-center justify-center text-accent shrink-0">
                        <Phone size={16} />
                      </div>
                      <div>
                        <div className="text-xs text-[#8090B0] mb-1 uppercase tracking-widest">Phone</div>
                        <div className="text-sm text-[#04091E] group-hover:text-accent transition-colors duration-200 font-heading font-medium">
                          {company.phone}
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${company.email}`} className="flex items-start gap-4 group">
                      <div className="w-10 h-10 rounded-lg bg-[#0A1547]/8 border border-[#1B2F8A]/20 flex items-center justify-center text-accent shrink-0">
                        <Mail size={16} />
                      </div>
                      <div>
                        <div className="text-xs text-[#8090B0] mb-1 uppercase tracking-widest">Email</div>
                        <div className="text-sm text-[#04091E] group-hover:text-accent transition-colors duration-200">
                          {company.email}
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#0A1547]/8 border border-[#1B2F8A]/20 flex items-center justify-center text-accent shrink-0">
                      <MapPin size={16} />
                    </div>
                    <div>
                      <div className="text-xs text-[#8090B0] mb-1 uppercase tracking-widest">Address</div>
                      <div className="text-sm text-[#04091E]">{company.address.line2}</div>
                      <div className="text-xs text-[#8090B0] mt-1">[TODO: Add full street address]</div>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Map placeholder */}
              <div className="aspect-[4/3] rounded-xl bg-[#F0F4FA] border border-[#E0E8F5] overflow-hidden flex items-center justify-center text-[#8090B0] text-sm">
                {/* TODO: Add Google Maps embed URL */}
                <div className="text-center">
                  <MapPin size={24} className="text-accent mx-auto mb-2" />
                  <div>Map coming soon</div>
                  <a
                    href={company.address.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent text-xs mt-1 block hover:underline"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}

function inputClass(hasError: boolean) {
  return [
    'w-full bg-white border rounded-lg px-4 py-3 text-sm text-[#04091E] placeholder:text-[#9EB0C8]',
    'focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent',
    'transition-colors duration-200',
    hasError ? 'border-red-400' : 'border-[#C8D8EC] hover:border-[#1B2F8A]/40',
  ].join(' ')
}

function Field({
  label,
  id,
  error,
  children,
}: {
  label: string
  id: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-xs text-[#6080A0] uppercase tracking-widest font-medium">
        {label}
      </label>
      {children}
      {error && (
        <span role="alert" aria-live="polite" className="text-xs text-red-400">
          {error}
        </span>
      )}
    </div>
  )
}
