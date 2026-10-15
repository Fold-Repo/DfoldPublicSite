'use client'

import { useCallback, useState } from 'react'

export function useCarousel(length: number, start = 0) {
    const [index, setIndex] = useState(start)

    const go = useCallback(
        (step: number) => {
            setIndex((current) => (current + step + length) % length)
        },
        [length],
    )

    const offsetOf = useCallback(
        (slide: number) => {
            let offset = slide - index

            if (offset > length / 2) offset -= length
            if (offset < -length / 2) offset += length

            return offset
        },
        [index, length],
    )

    return {
        index,
        setIndex,
        next: () => go(1),
        prev: () => go(-1),
        offsetOf,
    }
}
