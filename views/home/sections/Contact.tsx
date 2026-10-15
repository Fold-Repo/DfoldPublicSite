import { ArrowUpRight } from 'lucide-react'
import { Section, SectionHeader } from '@/components'
import { HOME } from '@/data'
import type { ContactDetail } from '@/types'
import { ContactForm } from '../components/ContactForm'

export function Contact() {
    const { details, ...heading } = HOME.contact

    return (
        <Section id="contact" tone="paper" className="mx-2 rounded-4xl sm:mx-4 lg:rounded-[2.5rem]">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.25fr] lg:gap-16">
                <div>
                    <SectionHeader eyebrow={heading.eyebrow} title={heading.title} accent={heading.accent} body={heading.body} />

                    <dl className="mt-12 border-t border-line">
                        {details.map((detail) => (
                            <DetailRow key={detail.id} detail={detail} />
                        ))}
                    </dl>
                </div>

                <ContactForm />
            </div>
        </Section>
    )
}

function DetailRow({ detail }: { detail: ContactDetail }) {
    const { label, value, href } = detail

    return (
        <div className="grid gap-1 border-b border-line py-5 sm:grid-cols-[9rem_1fr] sm:items-baseline">
            <dt className="text-sm text-muted">{label}</dt>

            <dd className="text-lg font-medium">
                {href ? (
                    <a href={href} className="group inline-flex items-center gap-1.5 hover:text-primary">
                        {value}

                        <ArrowUpRight
                            aria-hidden
                            className="size-4 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary"
                        />
                    </a>
                ) : (
                    value
                )}
            </dd>
        </div>
    )
}
