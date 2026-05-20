import { Image, View, Text, Pressable, ScrollView, Dimensions } from 'react-native'
import { useScroll } from 'hooks/useScroll'
import ScrollButton from '@/components/ui/ScrollButton'
import { router } from 'expo-router'
import { useDrawCards } from '@/hooks/useDrawCards'
import { useRevealCards } from '@/hooks/useRevealCards'


const CardCarousel: React.FC = () => {
  const maxCards = 3
  const { ref: sliderRef, scroll, cardCounter } = useScroll(190, maxCards)

  const cardBackGround = require('@/images/card-back/CardBG.jpg')

  const SCREEN_WIDTH = Dimensions.get('window').width
  const CARD_WIDTH = 150
  const SIDE_PADDING = (SCREEN_WIDTH - CARD_WIDTH) / 2


  const drawnCards = useDrawCards(maxCards)
  const { revealed, reveal } = useRevealCards(maxCards)




const handlePress = (index: number) => {
  const { card } = drawnCards[index]

  if (!revealed[index]) {
    reveal(index)
    return
  }

  // Second press → navigate
  router.push({
    pathname: `/cardInfo/${card.id}`,
    params: { reversed: String(drawnCards[index].reversed) },
  })
}

return (
    <>
      <View className='flex flex-row gap-7 mt-10'>
        <ScrollButton direction="left" onPress={() => scroll('left')} />
        <Text className='pt-1 text-white'>
          Card {cardCounter}/{maxCards}
        </Text>
        <ScrollButton direction="right" onPress={() => scroll('right')} />
      </View>

      <ScrollView
        ref={sliderRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={190}
        decelerationRate="normal"
        disableIntervalMomentum={true}
        snapToAlignment="start"
        contentContainerClassName="mt-10 flex flex-row gap-10"
        contentContainerStyle={{
          paddingHorizontal: SIDE_PADDING,
        }}
      >
        {drawnCards.map((item, i) => (
          <Pressable key={i} onPress={() => handlePress(i)}>
            <Image
              source={revealed[i] ? item.card.image : cardBackGround}
              className='w-[150px] h-[260px] rounded-lg'
              style={{
                transform: [
                  {
                    rotate:
                      revealed[i] && item.reversed ? '180deg' : '0deg'
                  }
                ],
              }}
            />
          </Pressable>
        ))}
      </ScrollView>
    </>
  )
}

export default CardCarousel
