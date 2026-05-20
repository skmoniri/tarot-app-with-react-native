import type { TarotCard } from "@/types/cards"
import { majorArcana } from "./majorArcana"
import { minorArcana } from "./minorArcana"

export const deck: TarotCard[] = [
  ...majorArcana,
  ...minorArcana
]
