'use client'
import { useEffect } from 'react'
import { Button } from '@/components/ui/Button'

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-paper p-[clamp(8px,1.2vw,16px)] flex">
      <div className="frame !m-0 flex-1 bg-ink text-white flex flex-col items-center justify-center text-center px-6">
        <p className="text-eyebrow mb-5">Error</p>
        <h1 className="h-mix text-display">
          Something <strong>went wrong</strong>
          <span className="text-accent font-extrabold">.</span>
        </h1>
        <p className="mt-6 text-white/60 max-w-sm">An unexpected error occurred. Please try again.</p>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <Button onClick={reset} arrow>
            Try again
          </Button>
          <Button href="/" variant="outline-light">
            Back to home
          </Button>
        </div>
      </div>
    </div>
  )
}
