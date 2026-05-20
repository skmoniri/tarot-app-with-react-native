import { View, Image, Pressable } from "react-native"
import { useCallback,} from "react"
import { router, useFocusEffect, useLocalSearchParams, usePathname } from "expo-router"
import { loveSpread } from "@/data/spreads/loveSpread"
import { useSpread } from "@/context/SpreadContext"


export default function LoveLayout() {
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
        Label: loveSpread.positions[index]?.label ?? "",
        positionId: loveSpread.positions[index]?.id ?? "",
      },
    });
  }
};

  // Reusable card component
  const Card = ({ index, className }: { index: number; className?: string }) => (
    <Pressable onPress={() => handlePress(index)} className={className}>
      <Image
        source={revealed[index] ? drawnCards[index].card.image : cardBackGround}
        className="w-24 h-40 rounded-lg"
        style={{
          opacity: revealed[index] || index === nextRevealIndex ? 1 : 0.5,
          transform: [
            { rotate: revealed[index] && drawnCards[index].reversed ? '180deg' : '0deg' }
          ],
        }}
      />
    </Pressable>
  )

  return (
    <View className="flex-1 items-center justify-center bg-background pt-[90px]">
      {/* Top Card */}
      <Card index={0} className="mb-6" />

      {/* Middle Row */}
      <View className="flex-row items-center justify-center">
        <Card index={3} className="mr-6" />
        <Card index={1} />
        <Card index={4} className="ml-6" />
      </View>

      {/* Bottom Card */}
      <Card index={2} className="mt-6" />
    </View>
  )
}
