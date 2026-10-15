import { Section, SectionHeader } from '@/components'
import { HOME } from '@/data'
import { TestimonialCarousel } from '../components/TestimonialCarousel'

export function Testimonials() {
    const { items, ...heading } = HOME.testimonials

    return (
        <Section className="overflow-hidden pt-0 sm:pt-0">
            <SectionHeader {...heading} align="center" />

            <TestimonialCarousel items={items} />
        </Section>
    )
}
