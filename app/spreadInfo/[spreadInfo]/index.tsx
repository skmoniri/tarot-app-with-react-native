import React from "react";
import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { spreads } from "@/data/spreads/spreads";

import CelticCrossLayout from "@/components/layouts/CelticCrossLayout";
import ThreeCardLayout from "@/components/layouts/ThreeCardLayout";
import LoveLayout from "@/components/layouts/LoveLayout";
import SingleLayout from "@/components/layouts/SingleLayout";

export default function SpreadScreen() {
  const { spreadInfo } = useLocalSearchParams();

  const spread = spreads.find((s) => s.id === spreadInfo);

  if (!spread) {
    return (
      <View className="flex-1 items-center justify-center bg-background">
        <Text className="text-white">Spread not found.</Text>
      </View>
    );
  }

  const layoutMap = {
    celtic: CelticCrossLayout,
    cross: LoveLayout,
    column: SingleLayout,
    row: ThreeCardLayout,
  };

  const LayoutComponent = layoutMap[spread.layout];

  return (
    <View className="flex-1 bg-background">
      {LayoutComponent ? (
        <LayoutComponent />
      ) : (
        <View className="flex-1 items-center justify-center">
          <Text className="text-white">Layout not implemented.</Text>
        </View>
      )}
    </View>
  );
}