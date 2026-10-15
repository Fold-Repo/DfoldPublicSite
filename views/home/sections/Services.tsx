import { Section, SectionHeader } from '@/components'
import { HOME } from '@/data'
import { ServiceList } from '../components/ServiceList'
import { ServiceStory } from '../components/ServiceStory'

export function Services() {
    const { items, ...heading } = HOME.services

    return (
        <Section id="services" className="pb-8 sm:pb-12">
            <SectionHeader {...heading} align="center" />

            <ServiceStory items={items} />

            <ServiceList items={items} />
        </Section>
    )
}
