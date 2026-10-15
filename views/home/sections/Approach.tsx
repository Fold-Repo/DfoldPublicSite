import { FadeUp, Section, SectionHeader } from '@/components'
import { HOME } from '@/data'
import { ApproachCard } from '../components/ApproachCard'

export function Approach() {
    const { cards, ...heading } = HOME.approach

    return (
        <Section>
            <SectionHeader {...heading} align="center" />

            <div className="mt-14 grid gap-4 md:grid-cols-3">
                {cards.map((card, index) => (
                    <FadeUp key={card.id} delay={index * 0.1}>
                        <ApproachCard card={card} />
                    </FadeUp>
                ))}
            </div>
        </Section>
    )
}
