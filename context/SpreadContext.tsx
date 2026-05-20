import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { useDrawCards } from "@/hooks/useDrawCards";
import { useRevealCards } from "@/hooks/useRevealCards";
import { spreads } from "@/data/spreads/spreads";
import { SavedReading } from "@/types/reading";
import { saveReading } from "@/services/readingStorage";

type SpreadContextType = {
  drawnCards: any[];
  revealed: boolean[];
  nextRevealIndex: number;
  revealCard: (index: number) => void;
  resetSpread: () => void;

};

const SpreadContext = createContext<SpreadContextType | null>(null);

export function SpreadProvider({ children, maxCards, spreadId }: { children: ReactNode, maxCards: number, spreadId: string }) {
  
  const activeSpread = spreads.find(s => s.id === spreadId)

  const drawnCards = useDrawCards(maxCards);
  const { revealed, reveal, reset: resetReveal } = useRevealCards(maxCards);

  const [nextRevealIndex, setNextRevealIndex] = useState(0);
  const [hasSaved, setHasSaved] = useState(false)


  const revealCard = (index: number) => {
    if (index !== nextRevealIndex) return;
    reveal(index);
    setNextRevealIndex(prev => prev + 1);
  };

  const resetSpread = () => {
    setNextRevealIndex(0);
    resetReveal();
    setHasSaved(false)   
  };

  useEffect(() => {
  if (
    drawnCards.length > 0 &&
    nextRevealIndex === drawnCards.length &&
    !hasSaved
  ) {
    const formattedCards = drawnCards.map((card, index) => ({
      name: card.card.name,
      reversed: card.reversed,
      positionId: activeSpread?.positions[index]?.id ?? ""
    }))

    const reading: SavedReading = {
      id: Date.now().toString(),
      spreadType: activeSpread?.name ?? "Unknown Spread",
      createdAt: Date.now(),
      cards: formattedCards
    }

    saveReading(reading)
    setHasSaved(true)
  }
}, [nextRevealIndex])

  return (
    <SpreadContext.Provider
      value={{
        drawnCards,
        revealed,
        nextRevealIndex,
        revealCard,
        resetSpread,
      }}
    >
      {children}
    </SpreadContext.Provider>
  );
}

export function useSpread() {
  const context = useContext(SpreadContext);
  if (!context) throw new Error("useSpread must be used inside SpreadProvider");
  return context;
}