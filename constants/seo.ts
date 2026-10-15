import { SITE } from './site'

export const SEO_TITLE = `${SITE.name} — Web, Mobile & E-commerce Development Studio in London`

export const SEO_DESCRIPTION =
    'Dfoldlab designs and builds websites, web apps, mobile apps and Shopify themes for startups and growing businesses. Fixed quotes, weekly progress reviews and support long after launch.'

export const APP_KEYWORDS = [
    SITE.name,
    'software development company London',
    'web development agency UK',
    'Next.js development agency',
    'mobile app development UK',
    'Shopify theme developer',
    'WordPress theme development',
    'product design studio',
    'Stripe integration',
    'SaaS development',
    SITE.domain,
]

export const APP_AUTHORS = [{ name: SITE.name }]

export const OG_IMAGE_ALT = `${SITE.name} — software that moves your business forward`

export const APP_OPEN_GRAPH = {
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    url: '/',
    siteName: SITE.name,
    locale: 'en_GB',
    type: 'website' as const,
}

export const APP_TWITTER = {
    card: 'summary_large_image' as const,
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    creator: SITE.twitter,
}

export const APP_ROBOTS = {
    index: true,
    follow: true,
    googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large' as const,
        'max-snippet': -1,
    },
}

export const APP_THEME_COLOR = [
    { media: '(prefers-color-scheme: light)', color: '#f7f8fa' },
    { media: '(prefers-color-scheme: dark)', color: '#08090d' },
]
