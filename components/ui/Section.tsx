import type { ComponentProps } from 'react'
import { cn } from '@/lib'
import { Container } from './Container'

export type SectionProps = ComponentProps<'section'> & {
    tone?: 'surface' | 'paper'
    containerClassName?: string
}

export function Section({ tone = 'surface', className, containerClassName, children, ...props }: SectionProps) {
    return (
        <section className={cn('py-24 sm:py-32', tone === 'surface' ? 'bg-surface' : 'bg-paper', className)} {...props}>
            <Container className={containerClassName}>{children}</Container>
        </section>
    )
}
