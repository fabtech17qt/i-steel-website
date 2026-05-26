'use client'
import { useEffect } from 'react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { AlertTriangle } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-ink flex items-center justify-center">
      <Container>
        <div className="flex flex-col items-center text-center gap-6 py-20">
          <div className="w-16 h-16 rounded-full border border-accent/30 bg-accent/10 flex items-center justify-center">
            <AlertTriangle size={24} className="text-accent" />
          </div>
          <div>
            <p className="text-eyebrow mb-3">Error</p>
            <h1 className="text-h1 font-heading text-paper mb-4">Something went wrong</h1>
            <p className="text-body text-mute max-w-sm">
              An unexpected error occurred. Please try again.
            </p>
          </div>
          <Button onClick={reset}>Try again</Button>
        </div>
      </Container>
    </div>
  )
}
