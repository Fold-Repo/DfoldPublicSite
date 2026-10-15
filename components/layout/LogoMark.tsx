import { cn } from '@/lib'

export const LOGO_PATHS = {
    body: 'M0 0H19L32 13V19L19 32H0ZM8 8V24H16L23 17V15L16 8Z',
    foldTop: 'M19 0L32 13L23 15L16 8Z',
    foldBottom: 'M32 19L19 32L16 24L23 17Z',
}

export const LOGO_COLORS = {
    body: '#1d4ed8',
    foldTop: '#7aa2ff',
    foldBottom: '#1638a8',
}

export function LogoMark({ className }: { className?: string }) {
    return (
        <svg aria-hidden viewBox="0 0 32 32" className={cn('size-7 shrink-0', className)}>
            <path d={LOGO_PATHS.body} fill={LOGO_COLORS.body} fillRule="evenodd" />

            <path d={LOGO_PATHS.foldTop} fill={LOGO_COLORS.foldTop} />

            <path d={LOGO_PATHS.foldBottom} fill={LOGO_COLORS.foldBottom} />
        </svg>
    )
}
