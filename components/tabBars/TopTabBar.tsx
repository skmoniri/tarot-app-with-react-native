import React from 'react';
import { View, Text, Image } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';


const TopTabBar: React.FC = () => {
  const avatar_img = require('@/images/avatars/DefaultAvatar.jpg');
  const formattedDate = new Date().toLocaleDateString(
  'en-US',
    {
      month: 'long',
      day: 'numeric',
    }
);
  return (
    
    <View className="flex-row justify-between items-center bg-surface h-16 p-5">
    <Image source={avatar_img} className='bg-red-400 h-10 w-10 rounded-full border border-white'></Image>
    <Text className='h-10 text-gold text-4xl'>{formattedDate}</Text>
    <AntDesign name="bell" size={20} color="white" />
    </View>
  );
};

export default TopTabBar;