import { View, Image, Pressable} from "react-native"
import {useCallback} from "react"
import { router, useLocalSearchParams, usePathname } from "expo-router"
import { threeCardSpread } from "@/data/spreads/threeCard"
import { useFocusEffect} from "@react-navigation/native";
import { useSpread } from '@/context/SpreadContext';
  


export default function ThreeCardLayout() {
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
        Label: threeCardSpread.positions[index]?.label ?? "",
        positionId: threeCardSpread.positions[index]?.id ?? "",
      },
    });
  }
};
    return (
      <View className="flex-1 items-center justify-center bg-background pt-[250px]">
        <View className="flex-row items-center justify-center">

          {drawnCards.map((cardData, index) => (
            <Pressable
              key={index}
              className={index === 0 ? "mr-6" : index === 2 ? "ml-6" : "mx-3"}
              onPress={() => handlePress(index)}
            >
              <Image
                source={revealed[index] ? cardData.card.image : cardBackGround}
                className="w-24 h-40 rounded-lg"
                style={{
                  opacity:  revealed[index] || index === nextRevealIndex ? 1 : 0.5,
                  transform: [
                    {
                      rotate:
                        revealed[index] && cardData.reversed ? '180deg' : '0deg'
                    }
                  ],
                }}
              />
            </Pressable>

          ))}

        </View>
      </View>
    )
}
