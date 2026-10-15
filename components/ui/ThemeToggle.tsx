'use client'

import { Moon, Sun } from 'lucide-react'
import { LABELS, THEME_STORAGE_KEY } from '@/constants'
import { cn } from '@/lib'

export function ThemeToggle({ className }: { className?: string }) {
    const toggle = () => {
        const root = document.documentElement
        const next = root.dataset.theme === 'dark' ? 'light' : 'dark'

        root.dataset.theme = next

        try {
            localStorage.setItem(THEME_STORAGE_KEY, next)
        } catch {}
    }

    return (
        <button
            type="button"
            onClick={toggle}
            aria-label={LABELS.toggleTheme}
            className={cn('inline-flex size-9 items-center justify-center rounded-full text-muted transition-colors hover:bg-paper hover:text-ink', className)}>
            <Moon aria-hidden className="size-4 dark:hidden" />

            <Sun aria-hidden className="hidden size-4 dark:block" />
        </button>
    )
}
