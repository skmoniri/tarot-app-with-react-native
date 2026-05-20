export type LayoutType = "celtic" | "cross" | "column" | "row"

export type SpreadPosition = {
  id: string
  label: string
  description: string
}

export type Spread = {
  id: string
  name: string
  description: string
  layout: LayoutType
  positions: SpreadPosition[]
}
