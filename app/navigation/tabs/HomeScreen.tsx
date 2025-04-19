import { View, Text, Image ,FlatList} from 'react-native'
import React from 'react'
import { useHotels } from '../../../src/data/useHotels';



export default function HomeScreen() {

  const hotels = useHotels();

  return (
    <View className="flex-1 items-center justify-center bg-black">
  <FlatList
  data={hotels}
  keyExtractor={(item)=>item.id}
  renderItem={({item})=> (
    <View>
      <Text className='text-white'>{item.name}</Text>
      <Text className='text-white'>{item.location}</Text>
      <Image source = {{uri:item.thumbnail}} style={{height:200}}/>
    </View>
  )}>

  </FlatList>
</View>
  )
}