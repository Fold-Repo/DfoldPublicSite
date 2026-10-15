import Link from 'next/link'
import { ArrowUp } from 'lucide-react'
import { FOOTER_COLUMNS, SITE, SOCIAL_LINKS } from '@/constants'
import { Container, SocialIcon } from '../ui'
import { CtaBand } from './CtaBand'
import { Logo } from './Logo'

const YEAR = new Date().getFullYear()

export function Footer() {
    return (
        <footer className="bg-surface pt-12 sm:pt-20">
            <CtaBand />

            <Container className="grid gap-12 pt-20 pb-14 lg:grid-cols-[1.3fr_2fr]">
                <div className="max-w-sm">
                    <Logo />

                    <p className="mt-5 text-muted">{SITE.description}</p>

                    <ul className="mt-6 flex gap-2">
                        {SOCIAL_LINKS.map((social) => (
                            <li key={social.id}>
                                <a
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={social.label}
                                    className="grid size-10 place-items-center rounded-full border border-line text-muted transition-colors hover:border-ink hover:text-ink">
                                    <SocialIcon id={social.id} className="size-4" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
                    {FOOTER_COLUMNS.map((column) => (
                        <div key={column.title}>
                            <h2 className="text-sm font-medium">{column.title}</h2>

                            <ul className="mt-4 space-y-3 text-sm text-muted">
                                {column.links.map((link) => (
                                    <li key={link.label}>
                                        <Link href={link.href} className="transition-colors hover:text-ink">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    <div>
                        <h2 className="text-sm font-medium">{SITE.footer.contactTitle}</h2>

                        <ul className="mt-4 space-y-3 text-sm text-muted">
                            <li>
                                <a href={`mailto:${SITE.email}`} className="break-all transition-colors hover:text-ink">
                                    {SITE.email}
                                </a>
                            </li>

                            <li>{SITE.phone}</li>

                            <li>{SITE.address}</li>
                        </ul>
                    </div>
                </div>
            </Container>

            <Container className="flex flex-col gap-4 border-t border-line py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
                <p>
                    © {YEAR} {SITE.name}. Made in London.
                </p>

                <a href="#main-content" className="inline-flex items-center gap-2 transition-colors hover:text-ink">
                    Back to top
                    <ArrowUp aria-hidden className="size-4" />
                </a>
            </Container>
        </footer>
    )
}
