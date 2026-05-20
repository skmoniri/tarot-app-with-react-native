import type { Spread } from "@/types/spreads"

export const celticCrossSpread: Spread = {
  id: "celtic-cross",
  name: "Celtic Cross",
  description: "A deep and comprehensive look into a situation.",
  layout: "celtic",
  positions: [
    {
      id: "present",
      label: "Present Situation",
      description: "The heart of the matter."
    },
    {
      id: "challenge",
      label: "Challenge",
      description: "What crosses or challenges you."
    },
    {
      id: "past",
      label: "Distant Past",
      description: "Root influences from the past."
    },
    {
      id: "future",
      label: "Near Future",
      description: "What is approaching."
    },
    {
      id: "conscious",
      label: "Conscious",
      description: "What you are aware of."
    },
    {
      id: "subconscious",
      label: "Subconscious",
      description: "Hidden influences beneath the surface."
    },
    {
      id: "advice",
      label: "Advice",
      description: "Guidance for moving forward."
    },
    {
      id: "external",
      label: "External Influences",
      description: "People or energies affecting the situation."
    },
    {
      id: "hopes",
      label: "Hopes & Fears",
      description: "Your inner hopes or anxieties."
    },
    {
      id: "outcome",
      label: "Outcome",
      description: "The likely result if energy continues as it is."
    }
  ]
}
