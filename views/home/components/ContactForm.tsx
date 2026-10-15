'use client'

import type { FormEvent } from 'react'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components'
import { SITE } from '@/constants'
import { HOME } from '@/data'
import { cn } from '@/lib'

const FIELD = cn(
    'h-12 w-full rounded-xl border border-line bg-surface px-4 text-ink transition-colors placeholder:text-muted/60 focus:border-primary focus:bg-raised focus:ring-4 focus:ring-primary/15 focus:outline-none',
)

const LABEL = 'mb-2 block text-sm font-medium'

export function ContactForm() {
    const { services, submit, note, form } = HOME.contact

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const data = new FormData(event.currentTarget)
        const subject = `New project from ${data.get('name')}`
        const body = [
            String(data.get('message') ?? ''),
            `Service: ${data.get('service')}`,
            `${data.get('name')} · ${data.get('company') || '—'} · ${data.get('email')}`,
        ].join('\n\n')

        const params = new URLSearchParams({ subject, body })

        window.location.href = `mailto:${SITE.email}?${params.toString().replace(/\+/g, '%20')}`
    }

    return (
        <form onSubmit={handleSubmit} className="rounded-4xl border border-line bg-raised p-6 shadow-card sm:p-9">
            <div className="grid gap-5 sm:grid-cols-2">
                <div>
                    <label htmlFor="name" className={LABEL}>
                        {form.name.label}
                    </label>

                    <input id="name" name="name" required autoComplete="name" placeholder={form.name.placeholder} className={FIELD} />
                </div>

                <div>
                    <label htmlFor="email" className={LABEL}>
                        {form.email.label}
                    </label>

                    <input id="email" name="email" type="email" required autoComplete="email" placeholder={form.email.placeholder} className={FIELD} />
                </div>

                <div className="sm:col-span-2">
                    <label htmlFor="company" className={LABEL}>
                        {form.company.label}

                        <span className="font-normal text-muted"> {form.company.optional}</span>
                    </label>

                    <input id="company" name="company" autoComplete="organization" placeholder={form.company.placeholder} className={FIELD} />
                </div>
            </div>

            <div className="mt-5">
                <label htmlFor="service" className={LABEL}>
                    {form.service.label}
                </label>

                <div className="relative">
                    <select id="service" name="service" defaultValue="" required className={cn(FIELD, 'appearance-none pr-11 invalid:text-muted/60')}>
                        <option value="" disabled>
                            {form.service.placeholder}
                        </option>

                        {services.map((service) => (
                            <option key={service}>{service}</option>
                        ))}
                    </select>

                    <ChevronDown aria-hidden className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-muted" />
                </div>
            </div>

            <div className="mt-5">
                <label htmlFor="message" className={LABEL}>
                    {form.message.label}
                </label>

                <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder={form.message.placeholder}
                    className={cn(FIELD, 'h-auto resize-none py-3')}
                />
            </div>

            <Button type="submit" size="lg" fullWidth arrow className="mt-7">
                {submit}
            </Button>

            <p className="mt-3 text-center text-xs text-muted">{note}</p>
        </form>
    )
}
