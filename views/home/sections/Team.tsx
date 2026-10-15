import { FadeUp, Media, Section, SectionHeader } from '@/components'
import { HOME } from '@/data'

export function Team() {
    const { members, ...heading } = HOME.team

    return (
        <Section id="team">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
                <SectionHeader eyebrow={heading.eyebrow} title={heading.title} accent={heading.accent} />

                <p className="max-w-sm text-muted">{heading.body}</p>
            </div>

            <ul className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
                {members.map((member, index) => (
                    <FadeUp key={member.id} delay={index * 0.08}>
                        <li className="relative overflow-hidden rounded-[1.75rem]">
                            <Media
                                src={member.image}
                                alt={`Portrait of ${member.name}`}
                                rounded="none"
                                sizes="(min-width: 1024px) 25vw, 50vw"
                                className="aspect-3/4"
                            />

                            <div className="absolute inset-x-2.5 bottom-2.5 rounded-2xl bg-white/90 px-4 py-3 text-night backdrop-blur-sm">
                                <p className="text-sm font-medium">{member.name}</p>

                                <p className="text-xs text-night/60">{member.role}</p>
                            </div>
                        </li>
                    </FadeUp>
                ))}
            </ul>
        </Section>
    )
}
