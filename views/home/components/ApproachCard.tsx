import Image from 'next/image'
import { HOME } from '@/data'
import { cn } from '@/lib'
import type { ApproachCard as Card } from '@/types'

const TONES: Record<Card['tone'], string> = {
    sky: 'bg-tint-sky',
    sand: 'bg-tint-sand',
    mist: 'bg-tint-mist',
}

export function ApproachCard({ card }: { card: Card }) {
    return (
        <article className={cn('flex h-full flex-col overflow-hidden rounded-4xl p-7', TONES[card.tone])}>
            <h3 className="text-xl font-medium tracking-tight">{card.title}</h3>

            <p className="mt-2 text-muted">{card.description}</p>

            <div className="mt-10 -mr-7 -mb-7 flex-1 rounded-tl-3xl bg-raised p-5 text-ink shadow-card dark:shadow-none dark:ring-1 dark:ring-line">
                {card.id === 'quote' && <QuoteUi />}

                {card.id === 'demo' && <DemoUi />}

                {card.id === 'preview' && <PreviewUi />}
            </div>
        </article>
    )
}

function QuoteUi() {
    const { title, lines, totalLabel, total } = HOME.mockups.quote

    return (
        <div className="text-sm">
            <p className="text-xs text-muted">{title}</p>

            <ul className="mt-3 space-y-2">
                {lines.map(([label, price]) => (
                    <li key={label} className="flex justify-between">
                        <span className="text-muted">{label}</span>

                        <span>{price}</span>
                    </li>
                ))}
            </ul>

            <p className="mt-3 flex justify-between border-t border-line pt-3 font-medium">
                <span>{totalLabel}</span>

                <span>{total}</span>
            </p>
        </div>
    )
}

function DemoUi() {
    const { time, title, team, action } = HOME.mockups.demo

    return (
        <div>
            <p className="text-xs text-muted">{time}</p>

            <p className="mt-1 font-medium">{title}</p>

            <div className="mt-4 flex items-center gap-3">
                <div className="flex -space-x-2">
                    {team.map((name) => (
                        <Image
                            key={name}
                            src={`/images/team/${name}.jpg`}
                            alt=""
                            width={32}
                            height={32}
                            className="size-8 rounded-full border-2 border-raised object-cover"
                        />
                    ))}
                </div>

                <span className="rounded-full bg-primary px-3 py-1.5 text-xs font-medium text-on-primary">{action}</span>
            </div>
        </div>
    )
}

function PreviewUi() {
    const { url, updates } = HOME.mockups.preview

    return (
        <div>
            <div className="flex items-center gap-2 rounded-full bg-paper px-3 py-2 text-xs text-muted">
                <span className="size-2 rounded-full bg-emerald-500" />

                {url}
            </div>

            <ul className="mt-4 space-y-2 text-sm">
                {updates.map(([label, time]) => (
                    <li key={label} className="flex justify-between">
                        <span>{label}</span>

                        <span className="text-xs text-muted">{time}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
