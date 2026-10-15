import { HOME } from '@/data'

const SWATCHES = ['#1d4ed8', '#0b1220', '#f2cc8f', '#e6eeff']

export function PaletteScreen() {
    const { label, sample, font, weight } = HOME.mockups.palette

    return (
        <div className="w-64 rounded-2xl bg-white p-4 text-[#0b1220] shadow-float">
            <p className="text-xs text-[#5b6475]">{label}</p>

            <div className="mt-3 grid grid-cols-4 gap-2">
                {SWATCHES.map((color) => (
                    <span key={color} style={{ backgroundColor: color }} className="aspect-square rounded-lg ring-1 ring-black/5" />
                ))}
            </div>

            <div className="mt-4 flex items-end justify-between border-t border-[#e2e7ef] pt-3">
                <p className="text-4xl font-medium tracking-tight">{sample}</p>

                <div className="text-right text-xs text-[#5b6475]">
                    <p className="font-medium text-[#0b1220]">{font}</p>

                    <p>{weight}</p>
                </div>
            </div>
        </div>
    )
}
