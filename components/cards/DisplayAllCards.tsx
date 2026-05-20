import React from "react"
import { View, Image, Pressable, Text } from "react-native"
import { deck } from "@/data/deck/deck"
import { useRouter } from 'expo-router'

interface Props {
  search: string
}

export const DisplayAllCards = ({ search }: Props) => {
  const router = useRouter()

  const filteredCards = deck.filter(card =>
    card.name.toLowerCase().includes(search.toLowerCase())
  )

  if (filteredCards.length === 0) {
  return (
    <View className="items-center mt-10">
      <Text className="text-white">No cards found</Text>
    </View>
  )
}

  return (
    <View className="flex-row flex-wrap justify-center">
      {filteredCards.map((card) => (
        <Pressable 
          key={card.id} 
          className="w-1/3 items-center p-2"
          onPress={() =>
            router.push({
              pathname: "/cardInfo/[cardInfo]",
              params: { cardInfo: card.id }
            })
          }
        >
          <Image
            source={card.image}
            className="w-[90px] h-[162px] my-1 rounded-lg"
          />
        </Pressable>
      ))}
    </View>
  )
}

export default DisplayAllCards
