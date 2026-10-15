import type { CtaLink, FaqItem, Heading, Photo } from './common.type'

export type NodePosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'

export type HeroNode = {
    id: string
    label: string
    value: string
    position: NodePosition
}

export type CountStat = {
    id: string
    value: number
    suffix: string
    label: string
}

export type ScreenKind = 'dashboard' | 'product' | 'notification' | 'palette' | 'payment'

export type Service = Photo & {
    id: string
    screen: ScreenKind
    title: string
    description: string
}

export type ApproachCard = {
    id: 'quote' | 'demo' | 'preview'
    tone: 'sky' | 'sand' | 'mist'
    title: string
    description: string
}

export type ValuePoint = {
    id: string
    title: string
    description: string
}

export type TeamMember = {
    id: string
    name: string
    role: string
    image: string
}

export type Testimonial = {
    id: string
    quote: string
    name: string
    role: string
    image: string
}

export type ContactDetail = {
    id: string
    label: string
    value: string
    href?: string
}

export type Milestone = {
    id: string
    label: string
    date: string
    status: 'done' | 'current' | 'upcoming'
}

export type DeliveryProject = {
    status: string
    progressLabel: string
    updateTag: string
    client: string
    name: string
    progress: number
    milestones: Milestone[]
    manager: {
        name: string
        role: string
        image: string
    }
}

type Field = { label: string; placeholder: string }

export type ContactFormCopy = {
    name: Field
    email: Field
    company: Field & { optional: string }
    service: Field
    message: Field
}

type Pair = [string, string]

export type Mockups = {
    quote: { title: string; lines: Pair[]; totalLabel: string; total: string }
    demo: { time: string; title: string; team: string[]; action: string }
    preview: { url: string; updates: Pair[] }
    dashboard: { label: string; value: string; change: string }
    notification: { appInitial: string; app: string; title: string; body: string; followUp: string }
    palette: { label: string; sample: string; font: string; weight: string }
    payment: { title: string; amount: string; rows: Pair[] }
    product: { tag: string; name: string; price: string; action: string }
}

export type HomePage = {
    hero: {
        badge: string
        badgeTag: string
        title: string
        body: string
        primaryCta: CtaLink
        secondaryCta: CtaLink
        nodes: HeroNode[]
        avatars: string[]
        stats: CountStat[]
    }
    services: Heading & { items: Service[] }
    approach: Heading & { cards: ApproachCard[] }
    delivery: Heading & {
        steps: ValuePoint[]
        project: DeliveryProject
    }
    work: Heading & { cta: CtaLink }
    shop: Heading & { categories: string[]; demo: string; docs: string }
    team: Heading & { members: TeamMember[] }
    testimonials: Heading & { items: Testimonial[] }
    faq: Heading & { items: FaqItem[] }
    contact: Heading & {
        services: string[]
        submit: string
        note: string
        details: ContactDetail[]
        form: ContactFormCopy
    }
    cta: {
        title: string
        body: string
        placeholder: string
        submit: string
    }
    mockups: Mockups
}
