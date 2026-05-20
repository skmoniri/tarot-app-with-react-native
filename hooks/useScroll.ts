import { useRef, useState } from 'react'
import { ScrollView } from 'react-native'

type Direction = 'left' | 'right'

export function useScroll(amount: number, maxCards: number) {
  const ref = useRef<ScrollView | null>(null)
  const offset = useRef(0)
  const [cardCounter, setCardCounter] = useState(1)

  const scroll = (direction: Direction) => {
    if (!ref.current) return

    setCardCounter(prev => {
      let next = prev

      if (direction === 'right') {
        next = Math.min(maxCards, prev + 1)
      } else {
        next = Math.max(1, prev - 1)
      }

      // keep scroll position in sync with card index
      offset.current = (next - 1) * amount

      ref.current?.scrollTo({
        x: offset.current,
        animated: true,
      })

      return next
    })
  }

  return { ref, scroll, cardCounter }
}
