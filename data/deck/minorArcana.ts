
import type { TarotCard } from '@/types/cards'
import { minorMeanings } from "./minorMeanings"
import { minorImages } from "./minorImages"


const suits = ["cups", "swords", "wands", "pentacles"] as const
const ranks = [
  "Ace", "Two", "Three", "Four", "Five",
  "Six", "Seven", "Eight", "Nine", "Ten",
  "Page", "Knight", "Queen", "King"
] as const

export const minorArcana: TarotCard[] = suits.flatMap((suit, suitIndex) =>
  ranks.map((rank, rankIndex) => {
    const id = 22 + suitIndex * 14 + rankIndex
    const meanings = minorMeanings[rank]
    return {
      id,
      name: `${rank} of ${suit.charAt(0).toUpperCase() + suit.slice(1)}`,
      arcana_type: "minor",
      suit,
      number: rankIndex + 1,
      meaning_upright: meanings.upright,
      meaning_reversed: meanings.reversed,
      image: minorImages[suit][rank] 
    }
  })
)
