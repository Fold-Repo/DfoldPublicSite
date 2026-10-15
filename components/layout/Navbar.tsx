'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { CONTACT_LINK, LABELS, NAV_LINKS } from '@/constants'
import { ButtonLink, Container, ThemeToggle } from '../ui'
import { Logo } from './Logo'

export function Navbar() {
    const [open, setOpen] = useState(false)
    const close = () => setOpen(false)

    return (
        <header className="sticky top-0 z-50 bg-surface/80 backdrop-blur-lg">
            <Container className="grid h-[76px] grid-cols-[1fr_auto] items-center gap-6 lg:grid-cols-[1fr_auto_1fr]">
                <Logo />

                <nav aria-label={LABELS.mainNav} className="hidden items-center gap-1 rounded-full border border-line bg-raised p-1 lg:flex">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="rounded-full px-4 py-2 text-sm text-muted transition-colors hover:bg-paper hover:text-ink">
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center justify-end gap-1">
                    <ThemeToggle />

                    <ButtonLink href={CONTACT_LINK.href} size="sm" arrow className="ml-1 hidden sm:inline-flex">
                        {CONTACT_LINK.label}
                    </ButtonLink>

                    <button
                        type="button"
                        onClick={() => setOpen((value) => !value)}
                        aria-expanded={open}
                        aria-controls="mobile-menu"
                        aria-label={open ? 'Close menu' : 'Open menu'}
                        className="inline-flex size-9 items-center justify-center rounded-full text-ink lg:hidden">
                        {open ? <X className="size-5" /> : <Menu className="size-5" />}
                    </button>
                </div>
            </Container>

            {open && (
                <nav id="mobile-menu" aria-label={LABELS.mobileNav} className="border-t border-line lg:hidden">
                    <Container className="grid py-3">
                        {[...NAV_LINKS, CONTACT_LINK].map((link) => (
                            <Link key={link.href} href={link.href} onClick={close} className="border-b border-line py-4 text-lg font-medium last:border-0">
                                {link.label}
                            </Link>
                        ))}
                    </Container>
                </nav>
            )}
        </header>
    )
}
