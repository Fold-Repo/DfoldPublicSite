'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { cn, EASE, VIEWPORT } from '@/lib'
import type { DeliveryProject } from '@/types'

export function ProjectTracker({ project }: { project: DeliveryProject }) {
    const { client, name, progress, milestones, manager, status, progressLabel, updateTag } = project

    return (
        <div className="rounded-[1.75rem] border border-white/10 bg-white/4 p-6 backdrop-blur-sm sm:p-8">
            <div className="flex items-start justify-between gap-4">
                <div>
                    <p className="text-sm text-white/50">{client}</p>

                    <p className="mt-1 text-xl font-medium tracking-tight">{name}</p>
                </div>

                <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">{status}</span>
            </div>

            <div className="mt-7">
                <div className="flex justify-between text-sm">
                    <span className="text-white/60">{progressLabel}</span>

                    <span className="font-medium">{progress}%</span>
                </div>

                <div className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                        className="h-full rounded-full bg-sky"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${progress}%` }}
                        viewport={VIEWPORT}
                        transition={{ duration: 1.4, ease: EASE }}
                    />
                </div>
            </div>

            <ol className="mt-8 space-y-1">
                {milestones.map((milestone) => (
                    <li key={milestone.id} className={cn('flex items-center gap-4 rounded-xl p-3', milestone.status === 'current' && 'bg-white/[0.06]')}>
                        <span
                            className={cn(
                                'grid size-6 shrink-0 place-items-center rounded-full border',
                                milestone.status === 'done' && 'border-transparent bg-sky text-night',
                                milestone.status === 'current' && 'border-sky',
                                milestone.status === 'upcoming' && 'border-white/20',
                            )}>
                            {milestone.status === 'done' && <Check aria-hidden className="size-3.5" />}

                            {milestone.status === 'current' && <span className="size-2 animate-pulse rounded-full bg-sky" />}
                        </span>

                        <span className={cn('flex-1 text-sm', milestone.status === 'upcoming' ? 'text-white/45' : 'text-white')}>{milestone.label}</span>

                        <span className="text-xs text-white/45">{milestone.date}</span>
                    </li>
                ))}
            </ol>

            <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-6">
                <Image src={manager.image} alt="" width={40} height={40} className="size-10 rounded-full object-cover" />

                <div className="flex-1">
                    <p className="text-sm font-medium">{manager.name}</p>

                    <p className="text-xs text-white/50">{manager.role}</p>
                </div>

                <span className="rounded-full border border-white/15 px-3.5 py-1.5 text-xs text-white/80">{updateTag}</span>
            </div>
        </div>
    )
}
