import { Image, Pressable } from "react-native"
import {useCallback} from "react"
import { router, useLocalSearchParams, usePathname } from "expo-router"
import { singleSpread } from "@/data/spreads/singleCard" 
import { useFocusEffect} from "@react-navigation/native";
import { useSpread } from '@/context/SpreadContext';





export default function SingleLayout() {

    const cardBackGround = require('@/images/card-back/CardBG.jpg')
      const { drawnCards, revealed, nextRevealIndex, revealCard, resetSpread} = useSpread()
      const { spreadInfo } = useLocalSearchParams();

  const pathname = usePathname();

useFocusEffect(
  useCallback(() => {
    return () => {
      if (!pathname.startsWith("/spreadInfo")) {
        resetSpread();
      }
    };
  }, [pathname])
);
  
const handlePress = (index: number) => {
  const card = drawnCards[index];

  // 1️⃣ Reveal the next card only
  if (!revealed[index] && index === nextRevealIndex) {
    revealCard(index);
    return;
  }

  // 2️⃣ Navigate if the card is already revealed AND all cards are revealed
  if (revealed[index] && nextRevealIndex === drawnCards.length) {
    router.push({
      pathname: `/spreadInfo/${spreadInfo}/${card.card.id}`,
      params: {
        reversed: String(card.reversed),
        Label: singleSpread.positions[index]?.label ?? "",
        positionId: singleSpread.positions[index]?.id ?? "",
      },
    });
  }
};
  return (
    <Pressable onPress={() => handlePress(0)} className="flex-1 items-center justify-center bg-background pt-[250px]">
      <Image
        source={revealed[0] ? drawnCards[0].card.image : cardBackGround}
        className="w-28 h-44 rounded-lg"       
        resizeMode="cover"
        style={{
          opacity: nextRevealIndex >= 0 ? 1 : 0.5,
            transform: [
              {
               rotate:
                revealed[0] && drawnCards[0].reversed ? '180deg' : '0deg'
              }
            ],
        }}
      />
    </Pressable>
  )
}
