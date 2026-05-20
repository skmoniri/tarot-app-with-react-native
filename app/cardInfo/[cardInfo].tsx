import { View, Text, Image, ScrollView, Pressable } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { deck } from "@/data/deck/deck";
import { useState } from "react";

export default function CardInfoScreen() {
  const { spreadInfo, cardInfo, reversed, positionId } = useLocalSearchParams();

  const card = deck.find((c) => c.id === Number(cardInfo));

  const [isReversed, setReverse] = useState(reversed === "true");

  if (!card ) {
    return (
      <View className="flex-1 items-center justify-center bg-background">
        <Text className="text-white">Card not found</Text>
      </View>
    );
  }



  return (
    <View className="flex-1 bg-background">
      <Pressable
        onPress={() => setReverse(!isReversed)}
        className={`justify-center items-center bg-surface ${
          isReversed ? "border-b border-gold" : "border-b border-surface"
        }`}
      >
        <Text className={`py-4 text-xl ${isReversed ? "text-gold" : "text-white"}`}>
          Reversed
        </Text>
      </Pressable>

      <ScrollView
        contentContainerStyle={{ alignItems: "center", justifyContent: "center" }}
        className="pt-8"
      >
        <Text className="text-gold text-2xl">
          {card.name} {isReversed ? "Reversed" : ""}
        </Text>


        <Image
          source={card.image}
          className={`mt-6 w-[225px] h-[405px] rounded-lg ${
            isReversed ? "rotate-[180deg]" : ""
          }`}
        />

        <Text className="text-gold pt-5 text-xl">
          {isReversed ? card.meaning_reversed : card.meaning_upright}
        </Text>
      </ScrollView>
    </View>
  );
}