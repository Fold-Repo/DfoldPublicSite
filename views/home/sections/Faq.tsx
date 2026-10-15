import { Plus } from 'lucide-react'
import { Section, SectionHeader } from '@/components'
import { HOME } from '@/data'

export function Faq() {
    const { items, ...heading } = HOME.faq

    return (
        <Section id="faq">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
                <SectionHeader {...heading} />

                <div className="space-y-2.5">
                    {items.map((item) => (
                        <details key={item.id} className="group rounded-2xl bg-paper px-6 transition-colors open:bg-raised open:shadow-card">
                            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 font-medium">
                                {item.question}

                                <Plus aria-hidden className="size-5 shrink-0 text-muted transition-transform group-open:rotate-45" />
                            </summary>

                            <p className="-mt-1 pr-10 pb-5 text-muted">{item.answer}</p>
                        </details>
                    ))}
                </div>
            </div>
        </Section>
    )
}
