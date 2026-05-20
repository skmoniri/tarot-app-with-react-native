import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { getReadings } from "@/services/readingStorage";
import { SavedReading } from "@/types/reading";

export default function JournalInfo() {
  // dynamic route param is available here
const { journalInfo } = useLocalSearchParams<{ journalInfo: string }>();
console.log("journalInfo param:", journalInfo); // should now log the ID
  
  const [reading, setReading] = useState<SavedReading | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadReading() {
      const allReadings = await getReadings();

      // check if journalInfo came through correctly
        console.log("journalInfo param:", journalInfo);
        console.log("All reading IDs:", allReadings.map(r => r.id));
        console.log("Found reading:", reading);

      const found = allReadings.find(r => r.id === journalInfo);
      setReading(found ?? null);
      setLoading(false);
    }

    if (journalInfo) {
      loadReading();
    } else {
      setLoading(false);
    }
  }, [journalInfo]);

  if (loading) {
    return <ActivityIndicator size="large" color="#888" />;
  }

  if (!reading) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text className="text-white text-xl">Reading not found</Text>
      </View>
    );
  }

  return (
    <ScrollView className="flex-1 p-4">
      <Text className="font-bold text-2xl text-gold mb-2">
        {reading.spreadType.toUpperCase()}
      </Text>
      <Text className="text-sm text-white mb-4">
        {new Date(reading.createdAt).toLocaleString()}
      </Text>

      {reading.cards.map((card, index) => (
        <View
          key={index}
          className="bg-surface rounded-lg p-3 mb-2 shadow"
        >
          <Text className="text-white font-semibold">{card.name}</Text>
          <Text className="text-gray-300">Position: {card.positionId}</Text>
          <Text className="text-gray-300">
            Reversed: {card.reversed ? "Yes" : "No"}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}