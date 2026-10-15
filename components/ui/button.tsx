import Link from 'next/link'
import type { ComponentProps, ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib'

type Appearance = 'primary' | 'outline' | 'ghost' | 'light' | 'glass'
type Size = 'sm' | 'md' | 'lg'

type ButtonStyleOptions = {
    appearance?: Appearance
    size?: Size
    fullWidth?: boolean
}

type ArrowOption = {
    arrow?: boolean
}

const APPEARANCES: Record<Appearance, string> = {
    primary: 'bg-primary text-on-primary hover:bg-primary-dark',
    outline: 'border border-line bg-raised text-ink hover:border-ink/30',
    ghost: 'text-ink hover:bg-paper',
    light: 'bg-white text-night hover:bg-white/90',
    glass: 'border border-white/20 bg-white/10 text-white backdrop-blur hover:bg-white/20',
}

const SIZES: Record<Size, string> = {
    sm: 'h-9 px-4 text-sm',
    md: 'h-11 px-5 text-sm',
    lg: 'h-12 px-6 text-[15px]',
}

export function buttonStyles({ appearance = 'primary', size = 'md', fullWidth }: ButtonStyleOptions = {}) {
    return cn(
        'group inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:pointer-events-none disabled:opacity-50',
        APPEARANCES[appearance],
        SIZES[size],
        fullWidth && 'w-full',
    )
}

function Content({ arrow, children }: ArrowOption & { children: ReactNode }) {
    return (
        <>
            {children}

            {arrow && <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />}
        </>
    )
}

export type ButtonLinkProps = ComponentProps<typeof Link> & ButtonStyleOptions & ArrowOption

export function ButtonLink({ appearance, size, fullWidth, arrow, className, children, ...props }: ButtonLinkProps) {
    return (
        <Link className={cn(buttonStyles({ appearance, size, fullWidth }), className)} {...props}>
            <Content arrow={arrow}>{children}</Content>
        </Link>
    )
}

export type ButtonProps = ComponentProps<'button'> & ButtonStyleOptions & ArrowOption

export function Button({ appearance, size, fullWidth, arrow, className, children, type = 'button', ...props }: ButtonProps) {
    return (
        <button type={type} className={cn(buttonStyles({ appearance, size, fullWidth }), className)} {...props}>
            <Content arrow={arrow}>{children}</Content>
        </button>
    )
}
