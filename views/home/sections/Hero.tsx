import Image from 'next/image'
import { ArrowDown } from 'lucide-react'
import { ButtonLink, Container, FadeUp, RollingNumber } from '@/components'
import { HOME } from '@/data'
import { HeroNodes } from '../components/HeroNodes'

export function Hero() {
    const { badge, title, body, primaryCta, secondaryCta, nodes, avatars, stats } = HOME.hero

    return (
        <section className="pt-2 pb-20 sm:pb-28">
            <div className="px-2 sm:px-4">
                <div className="relative isolate flex min-h-[640px] flex-col overflow-hidden rounded-4xl bg-night text-white sm:min-h-[720px] lg:rounded-[2.5rem]">
                    <Aurora />

                    <HeroNodes nodes={nodes} />

                    <Container className="relative flex flex-1 flex-col items-center justify-center py-24 text-center">
                        <FadeUp>
                            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 py-1 pr-4 pl-1 text-sm text-white/80 backdrop-blur-sm">
                                <span className="rounded-full bg-sky px-2.5 py-0.5 text-xs font-medium text-night">{HOME.hero.badgeTag}</span>

                                {badge}
                            </p>
                        </FadeUp>

                        <FadeUp delay={0.1}>
                            <h1 className="mx-auto mt-7 max-w-4xl text-[2.75rem] leading-[1.02] font-medium tracking-[-0.035em] text-balance sm:text-6xl lg:text-[5rem]">
                                {title}
                            </h1>
                        </FadeUp>

                        <FadeUp delay={0.2}>
                            <p className="mx-auto mt-6 max-w-xl text-lg text-white/65">{body}</p>
                        </FadeUp>

                        <FadeUp delay={0.3} className="mt-10 flex flex-col gap-3 sm:flex-row">
                            <ButtonLink href={primaryCta.href} size="lg" appearance="light" arrow>
                                {primaryCta.label}
                            </ButtonLink>

                            <ButtonLink href={secondaryCta.href} size="lg" appearance="glass">
                                {secondaryCta.label}
                            </ButtonLink>
                        </FadeUp>

                        <FadeUp delay={0.4} className="mt-12 flex items-center gap-3">
                            <div className="flex -space-x-2.5">
                                {avatars.map((avatar) => (
                                    <Image
                                        key={avatar}
                                        src={avatar}
                                        alt=""
                                        width={36}
                                        height={36}
                                        className="size-9 rounded-full border-2 border-night object-cover"
                                    />
                                ))}
                            </div>

                            <p className="text-left text-sm text-white/60">
                                Talk directly to the team
                                <br />
                                who builds your product
                            </p>
                        </FadeUp>
                    </Container>

                    <Container className="relative flex items-end justify-between pb-6 text-xs text-white/50">
                        <a href="#services" className="inline-flex items-center gap-3 hover:text-white">
                            <span className="grid size-8 place-items-center rounded-full border border-white/20">
                                <ArrowDown aria-hidden className="size-3.5" />
                            </span>
                            01 / 05 · Scroll down
                        </a>

                        <span className="hidden items-center gap-3 sm:flex">
                            London · Remote
                            <span className="h-0.5 w-16 overflow-hidden rounded-full bg-white/15">
                                <span className="block h-full w-1/4 bg-white/70" />
                            </span>
                        </span>
                    </Container>
                </div>
            </div>

            <Container className="mt-8">
                <dl className="grid gap-3 sm:grid-cols-3">
                    {stats.map((stat) => (
                        <div key={stat.id} className="flex items-center gap-4 rounded-2xl border border-line bg-raised px-5 py-4">
                            <dd className="text-3xl font-medium tracking-tight">
                                <RollingNumber value={stat.value} suffix={stat.suffix} />
                            </dd>

                            <dt className="text-sm/snug text-muted">{stat.label}</dt>
                        </div>
                    ))}
                </dl>
            </Container>
        </section>
    )
}

function Aurora() {
    return (
        <div aria-hidden className="absolute inset-0 -z-10">
            <div className="absolute -top-1/4 right-[-10%] h-[90%] w-[60%] animate-[aurora_18s_ease-in-out_infinite] rounded-full blur-3xl aurora-light-top" />

            <div className="absolute bottom-[-30%] left-[-10%] h-[80%] w-[55%] animate-[aurora_24s_ease-in-out_infinite_reverse] rounded-full blur-3xl aurora-light-bottom" />

            <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_50%,transparent,rgb(7_11_22/0.6))]" />
        </div>
    )
}
