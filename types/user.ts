export type UserPreferences = {
  theme?: 'light' | 'dark'
  showReversed?: boolean
}

export type User = {
  id: string
  email: string
  zodiacSign?: string
  preferences?: UserPreferences
}
