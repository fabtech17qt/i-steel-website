import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-paper p-[clamp(8px,1.2vw,16px)] flex">
      <div className="frame !m-0 flex-1 bg-ink text-white flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center font-heading font-extrabold text-[clamp(10rem,40vw,34rem)] leading-none text-white/[0.04] select-none"
        >
          404
        </div>
        <p className="relative text-eyebrow mb-5">Error 404</p>
        <h1 className="relative h-mix text-display">
          Off the
          <br />
          <strong>blueprint</strong>
          <span className="text-accent font-extrabold">.</span>
        </h1>
        <p className="relative mt-6 text-white/60 max-w-sm">
          This page doesn&rsquo;t exist or has been moved. Let&rsquo;s get you back on solid steel.
        </p>
        <div className="relative mt-8 flex flex-wrap gap-3 justify-center">
          <Button href="/" arrow>
            Back to home
          </Button>
          <Button href="/contact" variant="outline-light">
            Contact us
          </Button>
        </div>
        <Link href="/" className="absolute top-8 left-8 font-heading font-extrabold text-xl">
          iSTEEL<span className="text-accent">.</span>
        </Link>
      </div>
    </div>
  )
}
