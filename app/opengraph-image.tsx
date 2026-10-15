import { ImageResponse } from 'next/og'
import { OG_IMAGE_ALT } from '@/constants'
import { OG_SIZE, OgCard, ogFonts } from '@/lib/og'

export const alt = OG_IMAGE_ALT
export const size = OG_SIZE
export const contentType = 'image/png'

export default async function OpengraphImage() {
    return new ImageResponse(<OgCard />, { ...size, fonts: await ogFonts() })
}
