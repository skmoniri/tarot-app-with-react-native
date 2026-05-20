import React from 'react'
import {ScrollView  } from 'react-native'
import StatCard from './StatCard'

const StatsCards: React.FC = () => {
  return (
    <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false}
      snapToInterval={260}
      decelerationRate="normal"
      disableIntervalMomentum={true} 
      snapToAlignment="start"  
    className='mb-2'>

    <StatCard  
      period="Last 7 Days" 
      title="Top Suit" 
      label="Cups" 
      value="50.0%"/>

    <StatCard
      period="Last 7 Days"
      title="Top Number or Rank"
      label="Queens"
      value="1x"/>
      
    <StatCard  
      period="Last 7 Days" 
      title="Reversal Statistics" 
      label="Reversed Cards" 
      value="66.7%"/>
    </ScrollView>
  )
}

export default StatsCards