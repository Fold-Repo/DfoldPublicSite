'use client'

import { cn } from '@/lib'

export type FilterTabsProps = {
    options: string[]
    value: string
    onChange: (value: string) => void
    label: string
}

export function FilterTabs({ options, value, onChange, label }: FilterTabsProps) {
    return (
        <div role="tablist" aria-label={label} className="flex flex-wrap gap-2">
            {options.map((option) => {
                const active = option === value

                return (
                    <button
                        key={option}
                        type="button"
                        role="tab"
                        aria-selected={active}
                        onClick={() => onChange(option)}
                        className={cn(
                            'h-10 rounded-full border px-4 text-sm font-medium transition-colors',
                            active ? 'border-ink bg-ink text-surface' : 'border-line text-muted hover:text-ink',
                        )}>
                        {option}
                    </button>
                )
            })}
        </div>
    )
}
