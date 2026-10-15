import { Check } from 'lucide-react'
import { HOME } from '@/data'

export function PaymentScreen() {
    const { title, amount, rows } = HOME.mockups.payment

    return (
        <div className="w-64 rounded-2xl bg-white p-5 text-center text-[#0b1220] shadow-float">
            <span className="mx-auto grid size-11 place-items-center rounded-full bg-[#e6eeff] text-[#1d4ed8]">
                <Check aria-hidden className="size-5" />
            </span>

            <p className="mt-3 text-sm font-medium">{title}</p>

            <p className="mt-1 text-2xl font-medium tracking-tight">{amount}</p>

            <div className="mt-4 space-y-1.5 rounded-xl bg-[#f7f8fa] p-3 text-left text-xs">
                {rows.map(([label, value]) => (
                    <p key={label} className="flex justify-between">
                        <span className="text-[#5b6475]">{label}</span>

                        <span>{value}</span>
                    </p>
                ))}
            </div>
        </div>
    )
}
