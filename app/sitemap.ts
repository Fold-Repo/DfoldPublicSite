import type { MetadataRoute } from 'next'
import { getOrigin } from '@/lib/seo'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const origin = await getOrigin()

    return [
        {
            url: origin,
            changeFrequency: 'monthly',
            priority: 1,
        },
    ]
}
