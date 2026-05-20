import { useMemo } from 'react'
import { deck } from '@/data/deck/deck'

type DrawnCard = {
  card: typeof deck[0]
  reversed: boolean
}

export const useDrawCards = (count: number): DrawnCard[] => {
  return useMemo(() => {
    const copy = [...deck]

    // Fisher–Yates shuffle
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[copy[i], copy[j]] = [copy[j], copy[i]]
    }

    return copy.slice(0, count).map(card => ({
      card,
      reversed: Math.random() < 0.5,
    }))
  }, [count])
}
