import React from 'react'
import { Text, ScrollView, Pressable } from 'react-native'
import { spreads } from '@/data/spreads/spreads'
import { useRouter } from 'expo-router'

function Index() {

  const router = useRouter()
  
  return (
    <ScrollView>
      {spreads.map((spreads) => (
        <Pressable key={spreads.id} onPress={()=> router.push({pathname: "/spreadInfo/[spreadInfo]",params: { spreadInfo: spreads.id }})}  className='bg-surface rounded-lg p-4 mx-4 my-1'>
          <Text className='text-gold text-xl font-bold mb-2'>{spreads.name}</Text>
            <Text className='text-white'>{spreads.description}</Text>
        </Pressable>
      ))}
    </ScrollView>
  )
}

export default Index
