import { View } from 'react-native'
import React from 'react'
import '../global.css'
import DailyRead from 'components/DailyRead'
import StatsCards from '@/components/stats/StatsCards'

const Home: React.FC = () => {
  return (
  <View className="flex-1 bg-background">
    <DailyRead/>
    <StatsCards/>
  </View>

  )
}

export default Home

