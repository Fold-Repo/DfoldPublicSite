import Link from 'next/link'
import { ArrowUpRight, Calendar, Tag } from 'lucide-react'
import { Media, Section, SectionHeader } from '@/components'
import { HOME, PROJECTS } from '@/data'

const SHOWN = 3

export function Work() {
    const { body, cta, ...heading } = HOME.work

    return (
        <Section id="work">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
                <SectionHeader {...heading} />

                <p className="max-w-sm text-muted">{body}</p>
            </div>

            <div className="mt-14 flex flex-col gap-4 lg:h-144 lg:flex-row [&:has(>a:hover)>a]:lg:flex-1 [&>a:first-child]:lg:flex-[1.8]">
                {PROJECTS.slice(0, SHOWN).map((project) => (
                    <Link
                        key={project.slug}
                        href={cta.href}
                        className="group relative isolate flex min-h-120 flex-1 flex-col justify-between overflow-hidden rounded-4xl p-6 text-white transition-[flex-grow] duration-700 ease-out sm:p-8 hover:lg:flex-[1.8]!">
                        <Media
                            src={project.image}
                            alt={project.imageAlt}
                            rounded="none"
                            sizes="(min-width: 1024px) 50vw, 100vw"
                            className="absolute inset-0 -z-10"
                            imageClassName="transition-transform duration-700 group-hover:scale-105"
                        />

                        <div aria-hidden className="absolute inset-0 -z-10 bg-linear-to-t from-black/80 via-black/20 to-black/10" />

                        <div className="flex items-start justify-between gap-4">
                            <div className="flex flex-wrap gap-2 text-xs">
                                <span className="inline-flex items-center gap-1.5 rounded-full bg-black/30 px-3 py-1.5 backdrop-blur-sm">
                                    <Calendar aria-hidden className="size-3.5" />

                                    {project.year}
                                </span>

                                <span className="inline-flex items-center gap-1.5 rounded-full bg-black/30 px-3 py-1.5 backdrop-blur-sm">
                                    <Tag aria-hidden className="size-3.5" />

                                    {project.category}
                                </span>
                            </div>

                            <span className="grid size-11 shrink-0 place-items-center rounded-full bg-white text-night transition-transform group-hover:rotate-45">
                                <ArrowUpRight aria-hidden className="size-5" />
                            </span>
                        </div>

                        <div>
                            <h3 className="max-w-md text-3xl leading-[1.05] font-medium tracking-[-0.03em] sm:text-4xl">{project.client}</h3>

                            <p className="mt-3 max-w-sm text-white/75">{project.summary}</p>

                            <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-night">
                                {cta.label}
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </Section>
    )
}
