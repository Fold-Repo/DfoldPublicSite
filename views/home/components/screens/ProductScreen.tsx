import Image from 'next/image'
import { HOME } from '@/data'

export function ProductScreen() {
    const { tag, name, price, action } = HOME.mockups.product

    return (
        <div className="w-60 rounded-2xl bg-white p-3 text-[#0b1220] shadow-float">
            <div className="relative aspect-4/3 overflow-hidden rounded-xl">
                <Image src="/images/projects/kora.jpg" alt="" fill sizes="240px" className="object-cover" />

                <span className="absolute top-2 left-2 rounded-full bg-white px-2 py-0.5 text-[11px] font-medium">{tag}</span>
            </div>

            <div className="mt-3 flex items-center justify-between px-1">
                <div>
                    <p className="text-sm font-medium">{name}</p>

                    <p className="text-xs text-[#5b6475]">{price}</p>
                </div>

                <span className="rounded-full bg-[#1d4ed8] px-3 py-1.5 text-xs font-medium text-white">{action}</span>
            </div>
        </div>
    )
}
