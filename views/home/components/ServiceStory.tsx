'use client'

import { useRef, useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { cn, EASE } from '@/lib'
import type { Service } from '@/types'
import { ServiceFrame } from './ServiceFrame'

export function ServiceStory({ items }: { items: Service[] }) {
    const ref = useRef<HTMLDivElement>(null)
    const [active, setActive] = useState(0)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end end'],
    })

    useMotionValueEvent(scrollYProgress, 'change', (progress) => {
        const next = Math.min(items.length - 1, Math.floor(progress * items.length))

        if (next !== active) setActive(next)
    })

    const service = items[active]

    return (
        <div ref={ref} style={{ height: `${items.length * 70}vh` }} className="relative mt-16 hidden lg:block">
            <div className="sticky top-[calc(50vh-17rem)] grid h-136 grid-cols-[15rem_1fr_19rem] items-center gap-12">
                <ol className="space-y-1 border-l border-line">
                    {items.map((item, index) => (
                        <li key={item.id} className="relative pl-5">
                            {index === active && (
                                <motion.span
                                    layoutId="service-indicator"
                                    className="absolute top-0 -left-px h-full w-0.5 rounded-full bg-primary"
                                    transition={{ duration: 0.4, ease: EASE }}
                                />
                            )}

                            <span className={cn('block py-1.5 text-[15px] transition-colors', index === active ? 'text-ink' : 'text-muted/70')}>
                                {item.title}
                            </span>
                        </li>
                    ))}
                </ol>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={service.id}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.45, ease: EASE }}
                        className="h-full">
                        <ServiceFrame service={service} className="h-full" />
                    </motion.div>
                </AnimatePresence>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={service.id}
                        initial={{ opacity: 0, filter: 'blur(6px)', y: 12 }}
                        animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                        exit={{ opacity: 0, filter: 'blur(6px)', y: -12 }}
                        transition={{ duration: 0.45, ease: EASE }}>
                        <p className="text-sm text-muted">
                            0{active + 1} / 0{items.length}
                        </p>

                        <h3 className="mt-3 text-2xl font-medium tracking-tight">{service.title}</h3>

                        <p className="mt-3 text-muted">{service.description}</p>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    )
}
