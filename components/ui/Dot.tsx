import { cn } from '@/lib/utils'

/** The gold full stop — iSteel's signature punctuation on headlines. */
export function Dot({ className }: { className?: string }) {
  return (
    <span aria-hidden="true" className={cn('text-accent font-extrabold', className)}>
      .
    </span>
  )
}
