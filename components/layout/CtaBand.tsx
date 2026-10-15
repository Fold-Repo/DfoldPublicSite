import { ArrowRight } from 'lucide-react'
import { SITE } from '@/constants'
import { HOME } from '@/data'
import { Container } from '../ui'

export function CtaBand() {
    const { title, body, placeholder, submit } = HOME.cta

    return (
        <Container>
            <div className="relative overflow-hidden rounded-4xl px-6 py-16 text-center text-white brand-band sm:px-12 sm:py-20">
                <svg aria-hidden viewBox="0 0 400 400" className="absolute -top-24 -left-24 size-96 text-white/10" fill="none" stroke="currentColor">
                    <circle cx="200" cy="200" r="120" />

                    <circle cx="200" cy="200" r="170" />

                    <circle cx="200" cy="200" r="199" />
                </svg>

                <h2 className="relative mx-auto max-w-xl text-3xl leading-[1.1] font-medium tracking-[-0.03em] sm:text-[2.75rem]">{title}</h2>

                <p className="relative mx-auto mt-4 max-w-md text-white/70">{body}</p>

                <form
                    action={`mailto:${SITE.email}?subject=Book%20a%20call`}
                    method="post"
                    encType="text/plain"
                    className="relative mx-auto mt-8 flex max-w-md items-center gap-2 rounded-full bg-white p-1.5">
                    <label htmlFor="cta-email" className="sr-only">
                        Email
                    </label>

                    <input
                        id="cta-email"
                        name="email"
                        type="email"
                        required
                        placeholder={placeholder}
                        className="h-10 min-w-0 flex-1 bg-transparent pl-4 text-sm text-night placeholder:text-night/40 focus:outline-none"
                    />

                    <button
                        type="submit"
                        className="inline-flex h-10 shrink-0 items-center gap-2 rounded-full bg-brand-deep px-5 text-sm font-medium text-white hover:bg-night">
                        {submit}

                        <ArrowRight aria-hidden className="size-4" />
                    </button>
                </form>
            </div>
        </Container>
    )
}
