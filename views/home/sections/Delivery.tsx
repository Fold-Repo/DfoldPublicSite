import { Container, FadeUp, SectionHeader } from '@/components'
import { HOME } from '@/data'
import { ProjectTracker } from '../components/ProjectTracker'

export function Delivery() {
    const { steps, project, ...heading } = HOME.delivery

    return (
        <section className="px-2 sm:px-4">
            <div className="rounded-4xl bg-night py-20 text-white ring-1 ring-white/5 sm:py-28 lg:rounded-[2.5rem]">
                <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
                    <div>
                        <SectionHeader {...heading} tone="dark" />

                        <ol className="mt-12 grid gap-8 sm:grid-cols-2">
                            {steps.map((step, index) => (
                                <FadeUp key={step.id} delay={index * 0.08}>
                                    <li className="border-t border-white/15 pt-5">
                                        <span className="text-sm text-sky">0{index + 1}</span>

                                        <h3 className="mt-3 text-lg font-medium">{step.title}</h3>

                                        <p className="mt-1.5 text-sm/relaxed text-white/60">{step.description}</p>
                                    </li>
                                </FadeUp>
                            ))}
                        </ol>
                    </div>

                    <FadeUp delay={0.15}>
                        <ProjectTracker project={project} />
                    </FadeUp>
                </Container>
            </div>
        </section>
    )
}
