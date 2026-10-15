import { SITE, SOCIAL_LINKS } from '@/constants'
import { HOME } from '@/data'

export function buildOrganizationSchema(origin: string) {
    return {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        '@id': `${origin}/#organization`,
        name: SITE.name,
        url: origin,
        logo: `${origin}/icons/icon-512.png`,
        image: `${origin}/opengraph-image`,
        description: SITE.description,
        email: SITE.email,
        telephone: SITE.phone,
        address: {
            '@type': 'PostalAddress',
            addressLocality: SITE.city,
            addressCountry: SITE.country,
        },
        areaServed: 'Worldwide',
        sameAs: SOCIAL_LINKS.map((social) => social.href),
    }
}

export function buildWebSiteSchema(origin: string) {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': `${origin}/#website`,
        name: SITE.name,
        url: origin,
        publisher: { '@id': `${origin}/#organization` },
    }
}

export function buildFaqSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: HOME.faq.items.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: { '@type': 'Answer', text: item.answer },
        })),
    }
}
