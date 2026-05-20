// useRevealCards.ts
import { useState } from "react";

export function useRevealCards(num: number) {
  const [revealed, setRevealed] = useState<boolean[]>(Array(num).fill(false));

  const reveal = (index: number) => {
    setRevealed(prev => {
      const copy = [...prev];
      copy[index] = true;
      return copy;
    });
  };

  const reset = () => setRevealed(Array(num).fill(false));

  return { revealed, reveal, reset };
}