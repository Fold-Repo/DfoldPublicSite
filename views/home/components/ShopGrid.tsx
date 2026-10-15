'use client'

import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { FilterTabs, Media } from '@/components'
import { SITE } from '@/constants'
import { HOME, PRODUCTS } from '@/data'

const ALL = 'All'

const buyLink = (name: string) => `mailto:${SITE.email}?subject=${encodeURIComponent(`Buy ${name}`)}`

export function ShopGrid() {
    const [category, setCategory] = useState(ALL)

    const products = category === ALL ? PRODUCTS : PRODUCTS.filter((product) => product.category === category)

    return (
        <>
            <FilterTabs label="Filter themes" options={HOME.shop.categories} value={category} onChange={setCategory} />

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {products.map((product) => (
                    <a key={product.slug} href={buyLink(product.name)} className="group flex flex-col rounded-[1.75rem] bg-raised p-2.5">
                        <div className="relative">
                            <Media
                                src={product.image}
                                alt={product.imageAlt}
                                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                                className="aspect-4/3 rounded-[1.4rem]"
                                imageClassName="transition-transform duration-500 group-hover:scale-[1.04]"
                            />

                            <span className="absolute top-3 left-3 rounded-full bg-white px-3 py-1 text-xs font-medium text-night">{product.category}</span>

                            <span className="absolute top-3 right-3 grid size-9 place-items-center rounded-full bg-white text-night transition-transform group-hover:rotate-45">
                                <ArrowUpRight aria-hidden className="size-4" />
                            </span>
                        </div>

                        <div className="flex items-end justify-between gap-4 px-3 pt-4 pb-3">
                            <div>
                                <h3 className="text-lg font-medium">{product.name}</h3>

                                <p className="mt-0.5 text-sm text-muted">{product.platform}</p>
                            </div>

                            <p className="rounded-full bg-paper px-3 py-1 text-sm font-medium">{product.price}</p>
                        </div>
                    </a>
                ))}
            </div>
        </>
    )
}
