import { DisplayAllCards } from '@/components/cards/DisplayAllCards'
import MeaningSearchBar from '@/components/ui/MeaningSearchBar'
import React, {useState } from 'react'
import { View } from 'react-native' 
import { useDebounce } from '@/hooks/useDebounce'

function Index() {
  const [search, setSearch] = useState("")
  const debouncedSearch = useDebounce(search, 300)

  return (
    <View className="bg-surface flex-1">
      <MeaningSearchBar search={search} setSearch={setSearch} />
      <View className="bg-background flex-1">
        <DisplayAllCards search={debouncedSearch} />
      </View>
    </View>
  )
}

export default Index
