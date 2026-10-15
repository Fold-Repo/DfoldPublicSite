import type { Photo, StatItem } from './common.type'

export type Project = Photo & {
    slug: string
    title: string
    client: string
    category: string
    year: string
    summary: string
    challenge: string
    solution: string
    stack: string[]
    services: string[]
    results: StatItem[]
}

export type Product = Photo & {
    slug: string
    name: string
    category: string
    platform: string
    href: string
    docs: string
    summary: string
    description: string
    features: string[]
    includes: string[]
}
