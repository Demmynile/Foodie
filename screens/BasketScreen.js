import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectRestaurant } from '../features/restaurantSlice'
import { selectBasketItems } from '../features/basketSlice'

export default function BasketScreen() {
	const navigation = useNavigation()
	const restaurant = useSelector(selectRestaurant)
	const items = useSelector(selectBasketItems)
	const [groupedItemsInBasket , setGroupedItemsInBasket] = useState([])
	const dispatch = useDispatch()

	useMemo(() => {
      const groupedItems = items.reduce(() => {
		(results[item.id] = results[item.id] || []).push(item);
		return results


	  } , {})

	  setGroupedItemsInBasket(groupedItems)

	} , [items])
  return (
	<SafeAreaView>
	  <View>
	  <View>
		<View>
			<Text className = "text-lg font-bold text-center">Basket</Text>
			<Text className="text-center text-gray-400">
				{restaurant.title}
			</Text> 
		</View>
		<TouchableOpacity
		   onPress={navigation.goBack}
		   className="rounded-full bg-gray-100 absolute top-3 right-5"
		>
            <XCirleIcon color="#00CCBB" height = {50} width={50} />
		</TouchableOpacity>
	  </View>
	  </View>
	</SafeAreaView>
  )
}