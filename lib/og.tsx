import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { LOGO_COLORS, LOGO_PATHS } from '@/components/layout/LogoMark'
import { SITE } from '@/constants'

export const OG_SIZE = { width: 1200, height: 630 }

export async function ogFonts() {
    const dir = join(process.cwd(), 'assets/fonts')
    const [regular, medium, semibold] = await Promise.all([
        readFile(join(dir, 'instrument-sans-400.woff')),
        readFile(join(dir, 'instrument-sans-500.woff')),
        readFile(join(dir, 'instrument-sans-600.woff')),
    ])

    return [
        {
            name: 'Instrument Sans',
            data: regular,
            weight: 400 as const,
            style: 'normal' as const,
        },
        {
            name: 'Instrument Sans',
            data: medium,
            weight: 500 as const,
            style: 'normal' as const,
        },
        {
            name: 'Instrument Sans',
            data: semibold,
            weight: 600 as const,
            style: 'normal' as const,
        },
    ]
}

function Mark({ size, colors = LOGO_COLORS }: { size: number; colors?: typeof LOGO_COLORS }) {
    return (
        <svg width={size} height={size} viewBox="0 0 32 32">
            <path d={LOGO_PATHS.body} fill={colors.body} fillRule="evenodd" />

            <path d={LOGO_PATHS.foldTop} fill={colors.foldTop} />

            <path d={LOGO_PATHS.foldBottom} fill={colors.foldBottom} />
        </svg>
    )
}

const PANEL_MARK = {
    body: 'rgba(255,255,255,0.16)',
    foldTop: 'rgba(255,255,255,0.42)',
    foldBottom: 'rgba(255,255,255,0.06)',
}

export function OgCard() {
    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                backgroundColor: '#f7f8fa',
                fontFamily: 'Instrument Sans',
                color: '#0b1220',
            }}>
            <div
                style={{
                    width: 780,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '72px 64px 72px 80px',
                }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                    <Mark size={52} />

                    <div
                        style={{
                            display: 'flex',
                            fontSize: 40,
                            letterSpacing: '-0.045em',
                        }}>
                        <span style={{ fontWeight: 600 }}>dfold</span>

                        <span style={{ fontWeight: 400, color: '#5b6475' }}>lab</span>
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            fontSize: 66,
                            fontWeight: 500,
                            lineHeight: 1.06,
                            letterSpacing: '-0.04em',
                        }}>
                        <span>{SITE.og.title}</span>

                        <span style={{ color: '#1d4ed8' }}>{SITE.og.accent}</span>
                    </div>

                    <div
                        style={{
                            display: 'flex',
                            marginTop: 28,
                            fontSize: 28,
                            color: '#5b6475',
                        }}>
                        {SITE.og.subtitle}
                    </div>
                </div>
            </div>

            <div
                style={{
                    flex: 1,
                    display: 'flex',
                    position: 'relative',
                    overflow: 'hidden',
                    backgroundColor: '#1d4ed8',
                    backgroundImage: 'linear-gradient(160deg, #3b6ff5 0%, #1d4ed8 45%, #0b2463 100%)',
                }}>
                <div
                    style={{
                        display: 'flex',
                        position: 'absolute',
                        top: 90,
                        left: 70,
                    }}>
                    <Mark size={500} colors={PANEL_MARK} />
                </div>
            </div>
        </div>
    )
}
