import GMap from '@/components/GMap'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
const MapScreen = () => {
  return (
    <SafeAreaView className='flex-1'>
      <View className='h-1/2 '>
         <GMap />
      </View>

      <View className='h-1/2 '>
        <Text className='text-white'>I'm the map screen</Text>
      </View>
    </SafeAreaView>
  )
}
export default MapScreen