import { cn } from '@/lib'
import type { Heading } from '@/types'
import { FadeUp } from './FadeUp'

export type SectionHeaderProps = Heading & {
    align?: 'left' | 'center'
    tone?: 'light' | 'dark'
    as?: 'h1' | 'h2'
    className?: string
}

export function SectionHeader({ eyebrow, title, accent, body, align = 'left', tone = 'light', as: Tag = 'h2', className }: SectionHeaderProps) {
    const isDark = tone === 'dark'

    return (
        <FadeUp className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center', className)}>
            {eyebrow && (
                <p className={cn('text-sm', isDark ? 'text-white/60' : 'text-muted')}>
                    <span className="opacity-50">| </span>

                    {eyebrow}

                    <span className="opacity-50"> |</span>
                </p>
            )}

            <Tag
                className={cn(
                    'mt-3 font-medium tracking-[-0.03em] text-balance',
                    Tag === 'h1' ? 'text-[2.75rem] leading-[1.02] sm:text-6xl lg:text-7xl' : 'text-[2.1rem] leading-[1.08] sm:text-5xl',
                )}>
                {title}

                {accent && <span className={cn('block', isDark ? 'text-white/45' : 'text-muted/70')}>{accent}</span>}
            </Tag>

            {body && <p className={cn('mt-4 text-[17px] leading-relaxed', isDark ? 'text-white/70' : 'text-muted')}>{body}</p>}
        </FadeUp>
    )
}
