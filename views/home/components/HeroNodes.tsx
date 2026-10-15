'use client'

import { motion } from 'framer-motion'
import { cn, EASE } from '@/lib'
import type { HeroNode, NodePosition } from '@/types'

const LAYOUT: Record<NodePosition, { box: string; line: string }> = {
    'top-left': {
        box: 'top-[18%] left-[6%]',
        line: 'top-1/2 left-full w-24 origin-left',
    },
    'top-right': {
        box: 'top-[22%] right-[6%] text-right',
        line: 'top-1/2 right-full w-24 origin-right',
    },
    'bottom-left': {
        box: 'bottom-[24%] left-[8%]',
        line: 'top-1/2 left-full w-20 origin-left',
    },
    'bottom-right': {
        box: 'bottom-[20%] right-[8%] text-right',
        line: 'top-1/2 right-full w-20 origin-right',
    },
}

export function HeroNodes({ nodes }: { nodes: HeroNode[] }) {
    return (
        <div aria-hidden className="pointer-events-none absolute inset-0 hidden lg:block">
            {nodes.map((node, index) => {
                const layout = LAYOUT[node.position]

                return (
                    <motion.div
                        key={node.id}
                        className={cn('absolute', layout.box)}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: [0, -6, 0] }}
                        transition={{
                            opacity: {
                                duration: 0.8,
                                delay: 0.6 + index * 0.15,
                            },
                            y: {
                                duration: 6,
                                repeat: Infinity,
                                ease: 'easeInOut',
                                delay: index,
                            },
                        }}>
                        <div className="relative">
                            <motion.span
                                className={cn('absolute h-px bg-linear-to-r from-white/40 to-transparent', layout.line)}
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{
                                    duration: 1,
                                    ease: EASE,
                                    delay: 0.9 + index * 0.15,
                                }}
                            />

                            <p className="flex items-center gap-2 text-sm text-white">
                                <span className="size-1.5 rounded-full bg-sky" />

                                {node.label}
                            </p>

                            <p className="mt-0.5 text-xs text-white/50">{node.value}</p>
                        </div>
                    </motion.div>
                )
            })}
        </div>
    )
}
