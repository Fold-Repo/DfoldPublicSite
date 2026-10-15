'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { EASE } from '@/lib'

const DIGITS = Array.from({ length: 10 }, (_, digit) => digit)

export function RollingNumber({ value, suffix = '' }: { value: number; suffix?: string }) {
    const ref = useRef<HTMLSpanElement>(null)
    const inView = useInView(ref, { once: true, amount: 0.6 })
    const characters = String(value).split('')

    return (
        <span ref={ref} aria-label={`${value}${suffix}`} className="inline-flex leading-none">
            {characters.map((character, index) => (
                <span key={index} aria-hidden className="relative inline-block h-[1em] w-[0.6em] overflow-hidden">
                    <motion.span
                        className="absolute inset-x-0 top-0 flex flex-col"
                        initial={{ y: '0em' }}
                        animate={{
                            y: inView ? `-${Number(character)}em` : '0em',
                        }}
                        transition={{
                            duration: 1.4,
                            ease: EASE,
                            delay: index * 0.08,
                        }}>
                        {DIGITS.map((digit) => (
                            <span key={digit} className="h-[1em] text-center">
                                {digit}
                            </span>
                        ))}
                    </motion.span>
                </span>
            ))}

            {suffix && <span aria-hidden>{suffix}</span>}
        </span>
    )
}
