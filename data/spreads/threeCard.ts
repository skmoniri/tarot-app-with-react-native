import type { Spread } from "@/types/spreads"

export const threeCardSpread: Spread = {
  id: "three-card",
  name: "Three Card Spread",
  description: "Past, Present, Future.",
  layout: "row",
  positions: [
    {
      id: "past",
      label: "Past",
      description: "What from the past influences this situation?"
    },
    {
      id: "present",
      label: "Present",
      description: "What is happening right now?"
    },
    {
      id: "future",
      label: "Future",
      description: "Where is this heading?"
    }
  ]
}
