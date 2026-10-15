import Link from 'next/link'
import { SITE } from '@/constants'
import { cn } from '@/lib'
import { LogoMark } from './LogoMark'

export function Logo({ className }: { className?: string }) {
    return (
        <Link href="/" aria-label={`${SITE.name} home`} className={cn('inline-flex items-center gap-2.5', className)}>
            <LogoMark />

            <span className="text-[22px] leading-none tracking-[-0.045em]">
                <span className="font-semibold">dfold</span>

                <span className="font-normal text-muted">lab</span>
            </span>
        </Link>
    )
}
