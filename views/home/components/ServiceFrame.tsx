import { Media } from '@/components'
import { cn } from '@/lib'
import type { Service } from '@/types'
import { Screen } from './screens'

export function ServiceFrame({ service, className }: { service: Service; className?: string }) {
    return (
        <div className={cn('relative overflow-hidden rounded-4xl', className)}>
            <Media src={service.image} alt={service.imageAlt} rounded="none" className="absolute inset-0" />

            <div aria-hidden className="absolute inset-0 bg-linear-to-t from-black/45 via-black/5 to-transparent" />

            <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8">
                <Screen kind={service.screen} />
            </div>
        </div>
    )
}
