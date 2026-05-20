import CardDetails from "@/components/cardDetails";
import { useLocalSearchParams } from "expo-router";
import { View, Text, Image, ScrollView, Pressable } from "react-native";
import { deck } from "@/data/deck/deck";
import { useState } from "react";
import { spreads } from "@/data/spreads/spreads";

export default function SpreadCardScreen() {
  const { spreadInfo, cardId ,reversed,positionId } = useLocalSearchParams();

  const card = deck.find(
    (c) => c.id.toString() === cardId?.toString()
  );
 const spread = spreads.find((s) => s.id === spreadInfo);
   const position = spread?.positions.find((p) => p.id === positionId);
 
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

 
       <ScrollView
         contentContainerStyle={{ alignItems: "center", justifyContent: "center" }}
         className="pt-8"
       >
         <Text className="text-white text-xl">
           {position?.label}
         </Text>
 
         <Text className="text-white mt-2 text-sm">
           {position?.description}
         </Text>

         <Text className="text-gold text-2xl mt-2">
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