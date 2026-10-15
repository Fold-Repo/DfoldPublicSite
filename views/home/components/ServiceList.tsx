import { FadeUp } from '@/components'
import type { Service } from '@/types'
import { ServiceFrame } from './ServiceFrame'

export function ServiceList({ items }: { items: Service[] }) {
    return (
        <div className="mt-12 space-y-14 lg:hidden">
            {items.map((service) => (
                <FadeUp key={service.id}>
                    <ServiceFrame service={service} className="aspect-4/5 sm:aspect-4/3" />

                    <h3 className="mt-5 text-xl font-medium tracking-tight">{service.title}</h3>

                    <p className="mt-2 text-muted">{service.description}</p>
                </FadeUp>
            ))}
        </div>
    )
}
