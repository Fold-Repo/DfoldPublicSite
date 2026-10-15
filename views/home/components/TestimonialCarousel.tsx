'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useCarousel } from '@/hooks'
import { cn, EASE } from '@/lib'
import type { Testimonial } from '@/types'
import { CarouselArrows } from './CarouselArrows'

export function TestimonialCarousel({ items }: { items: Testimonial[] }) {
    const { next, prev, offsetOf } = useCarousel(items.length)

    return (
        <div>
            <CarouselArrows onPrev={prev} onNext={next} className="mt-8 justify-center" />

            <div className="relative mt-12 h-88 sm:h-80">
                {items.map((item, slide) => {
                    const offset = offsetOf(slide)
                    const isActive = offset === 0

                    return (
                        <motion.figure
                            key={item.id}
                            aria-hidden={!isActive}
                            className="absolute top-0 left-1/2 flex w-[min(30rem,88vw)] flex-col rounded-3xl p-7 sm:p-9"
                            animate={{
                                x: `calc(-50% + ${offset * 105}%)`,
                                opacity: isActive ? 1 : 0.35,
                                scale: isActive ? 1 : 0.92,
                            }}
                            transition={{ duration: 0.6, ease: EASE }}
                            style={{ zIndex: isActive ? 2 : 1 }}>
                            <div className={cn('absolute inset-0 -z-10 rounded-3xl', isActive && 'border border-line bg-raised', 'shadow-card')} />

                            <blockquote className="text-lg/relaxed">“{item.quote}”</blockquote>

                            <figcaption className="mt-8 flex items-center gap-3">
                                <Image src={item.image} alt="" width={44} height={44} className="size-11 rounded-full object-cover" />

                                <div>
                                    <p className="font-medium">{item.name}</p>

                                    <p className="text-sm text-muted">{item.role}</p>
                                </div>
                            </figcaption>
                        </motion.figure>
                    )
                })}
            </div>
        </div>
    )
}
