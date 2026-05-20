import type { Spread } from "@/types/spreads"

export const singleSpread: Spread = {
  id: "single",
  name: "Single Card",
  description: "A simple pull for clarity and daily guidance.",
  layout: "column",
  positions: [
    {
      id: "focus",
      label: "Guidance",
      description: "What energy surrounds you right now?"
    }
  ]
}
