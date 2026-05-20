import React from 'react'
import { View, TextInput } from 'react-native'
import EvilIcons from '@expo/vector-icons/EvilIcons'

interface Props {
  search: string
  setSearch: (value: string) => void
}

function MeaningSearchBar({ search, setSearch }: Props) {
  return (
    <View className="bg-surface w-full justify-center items-center">
      <View className="bg-primary w-[325px] h-10 rounded-lg flex-row items-center px-3 my-[25px]">
        <EvilIcons name="search" size={24} color="white" />

        <TextInput
          value={search}
          onChangeText={setSearch}
          placeholder="Filter Cards"
          placeholderTextColor="white"
          className="flex-1 text-white ml-2 h-full pr-2"
          underlineColorAndroid="transparent"
        />
      </View>
    </View>
  )
}

export default MeaningSearchBar
