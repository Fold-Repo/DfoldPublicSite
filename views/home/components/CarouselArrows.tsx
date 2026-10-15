import { ChevronLeft, ChevronRight } from 'lucide-react'
import { LABELS } from '@/constants'
import { cn } from '@/lib'

type CarouselArrowsProps = {
    onPrev: () => void
    onNext: () => void
    tone?: 'light' | 'dark'
    className?: string
}
export function CarouselArrows({ onPrev, onNext, tone = 'light', className }: CarouselArrowsProps) {
    const isDark = tone === 'dark'

    return (
        <div className={cn('flex items-center gap-3', className)}>
            <button
                type="button"
                onClick={onPrev}
                aria-label={LABELS.previous}
                className={cn(
                    'grid size-11 place-items-center rounded-full border transition-colors',
                    isDark ? 'border-white/25 text-white hover:bg-white/10' : 'border-line text-ink hover:bg-paper',
                )}>
                <ChevronLeft className="size-5" />
            </button>

            <button
                type="button"
                onClick={onNext}
                aria-label={LABELS.next}
                className={cn(
                    'grid size-11 place-items-center rounded-full transition-colors',
                    isDark ? 'bg-white text-night hover:bg-white/90' : 'bg-ink text-surface hover:opacity-90',
                )}>
                <ChevronRight className="size-5" />
            </button>
        </div>
    )
}
