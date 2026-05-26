import Link from 'next/link'
import { ArrowLeft, Construction } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-ink flex items-center justify-center">
      <Container>
        <div className="flex flex-col items-center text-center gap-6 py-20">
          <div className="w-16 h-16 rounded-full border border-accent/30 bg-accent/10 flex items-center justify-center">
            <Construction size={24} className="text-accent" />
          </div>
          <div>
            <p className="text-eyebrow mb-3">404</p>
            <h1 className="text-h1 font-heading text-paper mb-4">Page not found</h1>
            <p className="text-body text-mute max-w-sm">
              This page doesn&rsquo;t exist or has been moved. Let&rsquo;s get you back on track.
            </p>
          </div>
          <Button href="/" className="group">
            <ArrowLeft size={15} className="transition-transform duration-200 group-hover:-translate-x-1" />
            Back to home
          </Button>
        </div>
      </Container>
    </div>
  )
}
