import { singleSpread } from "./singleCard"
import { threeCardSpread } from "./threeCard"
import { loveSpread } from "./loveSpread"
import { celticCrossSpread } from "./celticCross"

import type { Spread } from "@/types/spreads"

export const spreads: Spread[] = [
  singleSpread,
  threeCardSpread,
  loveSpread,
  celticCrossSpread
]
