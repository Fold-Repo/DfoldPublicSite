import { Section, SectionHeader } from '@/components'
import { HOME } from '@/data'
import { ShopGrid } from '../components/ShopGrid'

export function Shop() {
    return (
        <Section id="shop" tone="paper" className="mx-2 mt-20 rounded-4xl sm:mx-4 sm:mt-28 lg:rounded-[2.5rem]">
            <SectionHeader {...HOME.shop} className="mb-10" />

            <ShopGrid />
        </Section>
    )
}
