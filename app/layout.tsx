import type { Metadata, Viewport } from 'next'
import { GoogleAnalytics } from '@/components'
import { StructuredData } from '@/components/seo/StructuredData'
import {
    APP_AUTHORS,
    APP_KEYWORDS,
    APP_OPEN_GRAPH,
    APP_ROBOTS,
    APP_THEME_COLOR,
    APP_TWITTER,
    SEO_DESCRIPTION,
    SEO_TITLE,
    SITE,
    THEME_SCRIPT,
} from '@/constants'
import { instrument } from '@/lib'
import { getOrigin } from '@/lib/seo'
import './globals.css'

const googleVerification = process.env.GOOGLE_SITE_VERIFICATION?.trim()

export async function generateMetadata(): Promise<Metadata> {
    return {
        metadataBase: new URL(await getOrigin()),
        title: {
            template: `%s | ${SITE.name}`,
            default: SEO_TITLE,
        },
        description: SEO_DESCRIPTION,
        applicationName: SITE.name,
        keywords: APP_KEYWORDS,
        authors: APP_AUTHORS,
        creator: SITE.name,
        alternates: { canonical: '/' },
        openGraph: APP_OPEN_GRAPH,
        twitter: APP_TWITTER,
        robots: APP_ROBOTS,
        formatDetection: { telephone: false },
        ...(googleVerification ? { verification: { google: googleVerification } } : {}),
    }
}

export const viewport: Viewport = {
    themeColor: APP_THEME_COLOR,
    width: 'device-width',
    initialScale: 1,
    colorScheme: 'light dark',
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
    return (
        <html lang="en" className={`${instrument.variable} h-full`} suppressHydrationWarning>
            <head>
                <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
            </head>

            <body className="flex min-h-full flex-col">
                <a
                    href="#main-content"
                    className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-100 focus:rounded-md focus:bg-surface focus:px-3 focus:py-2 focus:text-sm">
                    Skip to content
                </a>

                <StructuredData />

                <GoogleAnalytics />

                {children}
            </body>
        </html>
    )
}
