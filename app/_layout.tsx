import { View, ScrollView } from 'react-native';
import { Slot } from 'expo-router';
import BottomTabBar from '@/components/tabBars/BottomTabBar';
import TopTabBar from '@/components/tabBars/TopTabBar';
import { SafeAreaView } from 'react-native-safe-area-context';



export default function Layout() { 
  return (
      <SafeAreaView className="flex-1 bg-surface">
        <View className="flex-1 bg-background">
          <TopTabBar />
          
        <ScrollView className="flex-1">
          <Slot />
        </ScrollView>
        
        <BottomTabBar />
      </View>
    </SafeAreaView>
  )
}
