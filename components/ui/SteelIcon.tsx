import Image from 'next/image'
import { cn } from '@/lib/utils'

interface SteelIconProps {
  /** Filename without extension, e.g. "011-beam" */
  name: string
  size?: number
  /** 'white' = bright on dark bg | 'gold' = brand accent | 'mute' = subtle */
  color?: 'white' | 'gold' | 'mute'
  className?: string
}

export function SteelIcon({ name, size = 32, color = 'white', className }: SteelIconProps) {
  const filterClass = {
    white: 'icon-white',
    gold: 'icon-gold',
    mute: 'icon-mute',
  }[color]

  return (
    <Image
      src={`/assets/envato/steel-icons/${name}.svg`}
      alt=""
      aria-hidden="true"
      width={size}
      height={size}
      className={cn(filterClass, className)}
      unoptimized
    />
  )
}
