import type { Spread } from "@/types/spreads"

export const loveSpread: Spread = {
  id: "love",
  name: "Love & Connection",
  description: "Explore emotional dynamics between two people.",
  layout: "cross",
  positions: [
    {
      id: "you",
      label: "Your Energy",
      description: "Your emotional state and what you bring into the connection."
    },
    {
      id: "them",
      label: "Their Energy",
      description: "Their emotional state and what they bring into the connection."
    },
    {
      id: "connection",
      label: "The Connection",
      description: "The energy between you."
    },
    {
      id: "challenge",
      label: "Challenge",
      description: "What is creating tension or imbalance?"
    },
    {
      id: "potential",
      label: "Potential Outcome",
      description: "Where this relationship may be heading."
    }
  ]
}
