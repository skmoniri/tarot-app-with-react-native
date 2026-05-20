import {Text, View } from 'react-native'
import React from 'react'
import CardCarousel from './cards/CardCarousel'


const DailyRead :React.FC= () => {
  return (
  <>
    <View className='bg-surface m-2 h-[500px] rounded-3xl items-center overflow-hidden'>
      <Text className='mt-8 text-white text-center w-[300px]'> Draw your daily reading by tapping the cards. Draw all cards to save your reading. </Text>
      <CardCarousel/>
    </View>

  </>


  )
}

export default DailyRead

