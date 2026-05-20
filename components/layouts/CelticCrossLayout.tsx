
import { View, Image, Pressable } from "react-native"
import { useCallback,  } from "react"
import { router, useFocusEffect, useLocalSearchParams, usePathname } from 'expo-router'
import { celticCrossSpread } from "@/data/spreads/celticCross"
import { useSpread } from "@/context/SpreadContext"


export default function CelticCrossLayout() {

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
          Label: celticCrossSpread.positions[index]?.label ?? "",
          positionId: celticCrossSpread.positions[index]?.id ?? "",
        },
      });
    }
  };
  const Card = ({
    index,
    className,
    rotate = '0deg',
    styleOverrides = {},
  }: {
    index: number
    className?: string
    rotate?: string
    styleOverrides?: any
  }) => (
    <Pressable onPress={() => handlePress(index)} className={className} style={styleOverrides}>
      <Image
        source={revealed[index] ? drawnCards[index].card.image : cardBackGround}
        className="w-20 h-36 rounded-lg"
        style={{
          opacity: index <= nextRevealIndex ? 1 : 0.5,
          transform: [
            {
              rotate: revealed[index] && drawnCards[index].reversed ? '180deg' : '0deg',
            },
          ],
        }}
      />
    </Pressable>
  )


  return (
    <View className="flex-1 flex-row items-center justify-center bg-background px-6 pt-16">

      {/* LEFT SIDE — Main Cross */}
      <View className="items-center mr-10">  
        <Card index={4} className="mb-6" />{/* Above */}
        {/* Middle Row */}
        <View className="flex-row items-center justify-center">        
          <Card index={3} className="mr-7" />{/* Left */}
          {/* Center Stack */}
          <View className="relative items-center justify-center">
            <Card index={0} />{/* Main Card */}
            {/* Lowered Crossing Card */}
            <Pressable
              onPress={() => handlePress(1)}
              style={{
                position: 'absolute',
                top: 40,        // adjust this value to lower the card further
                zIndex: 1,      // ensures it sits above main card
              }}
            >
              <Image
                source={revealed[1] ? drawnCards[1].card.image : cardBackGround}
                className="w-20 h-36 rounded-lg"
                style={{
                  opacity: 1 <= nextRevealIndex ? 1 : 0.5,
                  transform: [
                    { rotate: revealed[1] && drawnCards[1].reversed ? '90deg' : '270deg' }
                  ],
                }}
              />
            </Pressable>
          </View>
          <Card index={5} className="ml-7" />{/* Right */}
        </View>
        <Card index={2} className="mt-6" />{/* Below */}
      </View>
      {/* RIGHT SIDE — Staff Column */}
      <View className="items-center space-y-4 gap-3">
        <Card index={9} />
        <Card index={8} />
        <Card index={7} />
        <Card index={6} />
      </View>

    </View>
  )
}
