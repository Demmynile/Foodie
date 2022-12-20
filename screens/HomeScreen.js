import {  Text ,SafeAreaView, View  , Image, TextInput, ScrollView} from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import {UserIcon,ChevronDownIcon,SearchIcon} from 'react-native-heroicons/outline'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';



export default function HomeScreen() {
	const navigation = useNavigation()

	useLayoutEffect(() => {
            navigation.setOptions({
				headerShown: false
			})
	}, [])


  return (
	<SafeAreaView className="bg-white pt-5" >
	
	  {/* Header */}
	  <View className = "flex-row pb-3 items-center mx-4 space-x-2">
		
	   <Image
		source={{
			uri : 'https://links.papareact.com/wru'
		}}
		className="h-7 w-7 bg-gray-300 p-4 rounded-full"
		
		 />
		 <View className = "flex-1">
			 <Text className="font-bold text-gray-400 text-xs">
			 Deliever Now
			 </Text>
			 <Text className="font-bold  text-xl">
			   Current Location
			   <ChevronDownIcon size={20} color="#00CCBB" />
			 </Text>
		 </View>

		 <UserIcon size={35} color="#00CCBB"/>
		</View>
            {/* search */}
			<View className="flex-row items-center space-x-2 pb-2 mx-4">
			  <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
				<FontAwesome5 name={'search'} color="gray" size ={20}/>
				<TextInput
				placeholder='Restaurants and cuisines'
				keyboardType="default"
				 />
			  </View>
				<Text><FontAwesome5 name={'sliders-h'} size={18} solid color="#00CCBB" /></Text>
			</View>

			{/* Body */}
			<ScrollView className = "bg-gray-100">
				<Categories />
				<FeaturedRow
				  id = "1"
				  title = "Featured"
				  description = "Paid placements from our partners"
				  featuredCategory="featured"

				 />
				 <FeaturedRow
                  id = "12"
				  title = "Tasty Discounts"
				  description = "Everyone's been enjoying these juicy discounts!"
				  featuredCategory = "featured"

				 />
				 <FeaturedRow
				  id = "123"
				  title = "Offers near you"
				  description = "Why not support your local restaurant tonight!"
				  featuredCategory = "featured"

				 />
			</ScrollView>
		
	</SafeAreaView>
  )
} 