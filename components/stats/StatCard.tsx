import React from 'react'
import { View,Text } from 'react-native'


type StatCardProps = {
  period: string
  title: string
  label: string
  value: string
}

const StatCard: React.FC<StatCardProps> = ({
  period,
  title,
  label,
  value,
}) => {
  return (
    <View className="bg-surface mx-2 rounded-3xl p-2 h-[175px] w-[250px]">
      <Text className="text-white pl-3 pt-4">{period}</Text>
      <Text className="text-white font-bold pl-3">{title}</Text>
      <Text className="text-gold font-bold text-2xl pl-3 pt-5">
        {label}
      </Text>
      <Text className="text-gold font-bold text-5xl pl-4">
        {value}
      </Text>
    </View>
  )
}
export default StatCard
