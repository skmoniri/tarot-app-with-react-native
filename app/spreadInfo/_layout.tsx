import { Slot, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { SpreadProvider } from "@/context/SpreadContext";
import { spreads } from "@/data/spreads/spreads";

export default function Layout() {
  const { spreadInfo } = useLocalSearchParams();
  const spreadId = Array.isArray(spreadInfo)
  ? spreadInfo[0]
  : spreadInfo;

  const spread = spreads.find((s) => s.id === spreadId);
  const maxCards = spread?.positions.length ?? 3;

  return (
    <SpreadProvider maxCards={maxCards} spreadId={spreadId}>
      <SafeAreaView className="flex-1">
        <Slot />
      </SafeAreaView>
    </SpreadProvider>
  );
}