import { HOME } from '@/data'

const BARS = [38, 52, 44, 70, 58, 84, 76]

export function DashboardScreen() {
    const { label, value, change } = HOME.mockups.dashboard

    return (
        <div className="w-64 rounded-2xl bg-white p-4 text-[#0b1220] shadow-float">
            <p className="text-xs text-[#5b6475]">{label}</p>

            <div className="mt-1 flex items-baseline gap-2">
                <p className="text-2xl font-medium tracking-tight">{value}</p>

                <span className="rounded-full bg-[#e6eeff] px-2 py-0.5 text-xs font-medium text-[#1d4ed8]">{change}</span>
            </div>

            <div className="mt-4 flex h-20 items-end gap-2">
                {BARS.map((height, index) => (
                    <span
                        key={index}
                        style={{ height: `${height}%` }}
                        className={index === BARS.length - 2 ? 'flex-1 rounded-md bg-[#1d4ed8]' : `flex-1 rounded-md bg-[#e6eeff]`}
                    />
                ))}
            </div>
        </div>
    )
}
