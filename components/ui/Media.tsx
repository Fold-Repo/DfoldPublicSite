import Image from 'next/image'
import { cn } from '@/lib'

export type MediaProps = {
    src: string
    alt: string
    sizes?: string
    priority?: boolean
    rounded?: 'media' | 'card' | 'full' | 'none'
    className?: string
    imageClassName?: string
}

const RADII = {
    media: 'rounded-2xl',
    card: 'rounded-xl',
    full: 'rounded-full',
    none: '',
}

export function Media({ src, alt, sizes = '(min-width: 1024px) 50vw, 100vw', priority, rounded = 'media', className, imageClassName }: MediaProps) {
    return (
        <div className={cn('relative overflow-hidden bg-paper', RADII[rounded], className)}>
            <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className={cn('object-cover', imageClassName)} />
        </div>
    )
}
