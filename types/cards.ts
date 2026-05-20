// data/cards.ts

export type ArcanaType = "major" | "minor"

export type Suit = "cups" | "swords" | "wands" | "pentacles" | null

export type TarotCard = {
  id: number
  name: string
  arcana_type: ArcanaType
  suit: Suit
  number: number
  meaning_upright: string
  meaning_reversed: string
  image: string
}
