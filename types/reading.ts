export type SavedCard = {
  name: string
  reversed: boolean
  positionId: string
}

export type SavedReading = {
  id: string
  spreadType: string
  createdAt: number
  cards: SavedCard[]
}