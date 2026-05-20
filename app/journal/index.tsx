import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, ActivityIndicator, Pressable } from "react-native";
import  {getReadings} from "@/services/readingStorage";
import { SavedReading } from "@/types/reading";
import Feather from '@expo/vector-icons/Feather';
import { deleteReading } from "@/services/readingStorage";
import { useRouter } from "expo-router";

export default function Journal() {
  const [readings, setReadings] = useState<SavedReading[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter()

  const handleDelete = async (id: string) => {
  try {
    // Remove from UI immediately
    const filtered = readings.filter(r => r.id !== id);
    setReadings(filtered);

    // Remove from storage via centralized function
    await deleteReading(id);
  } catch (error) {
    console.error("Error deleting reading:", error);
  }
};

  useEffect(() => {
    async function loadReadings() {
      const saved = await getReadings();
      setReadings(saved);
      setLoading(false);
    }

    loadReadings();
  }, []);


  if (loading) {
    return <ActivityIndicator size="large" color="#888" />;
  }

  if (readings.length === 0) {
    return (
      <View className="flex-1 items-center justify-center mt-5">
        <Text className="text-white text-xl">No readings yet. Start your first tarot spread!</Text>
      </View>
    );
  }

  return (
    <ScrollView className="flex-1 p-4">
      {readings.map((reading) => (
       <Pressable onPress={()=>router.push(`/journal/journalInfo/${reading.id}`)} key={reading.id} className="bg-surface rounded-lg p-4 mb-2 shadow flex-row items-center justify-between">
          <View>
            <Text className="font-bold text-lg text-gold">
              {reading.spreadType.toUpperCase()}
            </Text>
            <Text className="text-sm text-white">
              {new Date(reading.createdAt).toLocaleString()}
            </Text>
                      {reading.cards.map((card, idx) => (
            <Text key={idx}>
              {card.name} {card.reversed ? "(Reversed)" : ""} — {card.positionId}
            </Text>
          ))}
          </View>

          <Feather name="delete" size={24} color="red" onPress={() => handleDelete(reading.id)} />
        </Pressable>

      ))}
    </ScrollView>
  );
}