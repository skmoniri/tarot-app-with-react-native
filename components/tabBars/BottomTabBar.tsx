// components/BottomTabBar.tsx
import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { useRouter, usePathname } from 'expo-router'; // if using expo-router

interface Tab {
  name: string;
  route: string;
  icon?: string;
}

const tabs: Tab[] = [
  { name: 'Daily', route: '/'
   },
  { name: 'Journal', route: '/journal' },
  { name: 'Readings', route: '/readings' },
  { name: 'Meanings', route: '/meanings' },
];

const BottomTabBar = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <View className="flex-row justify-around items-center bg-surface h-16 ">
      {tabs.map((tab) => (
        <TouchableOpacity key={tab.route} onPress={() => router.push(tab.route)}>
          <Text className={`text-gold ${pathname === tab.route ? 'font-bold' : ''}`}>
            {tab.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default BottomTabBar;
