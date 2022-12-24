import {  Text ,SafeAreaView, View  , Image, TextInput, ScrollView} from 'react-native'
import React, { useState , useLayoutEffect , useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import {UserIcon,ChevronDownIcon,SearchIcon} from 'react-native-heroicons/outline'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import sanityClient from '../sanity'



export default function HomeScreen() {

	const [featuredCategories , setFeaturedCategories] = useState([])
	const navigation = useNavigation()


	useLayoutEffect(() => {
            navigation.setOptions({
				headerShown: false
			})
	}, [])

	useEffect(() => {
        sanityClient.fetch(
			`*[_type == "featured"]{
				...,
				restaurants[] -> {
				 ...,
				 dishes[]->
				}
			 }`
		).then((data) => {
			setFeaturedCategories(data)
		});  
	}, [])

	console.log(featuredCategories)



  return (
	<SafeAreaView className="bg-white pt-5">
	
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
				{featuredCategories.map(category => (
					<FeaturedRow
					id = {category._id}
					key = {category._id}
					title={category.name}
					description={category.short_description}
					
					
					 />
				))}
				
			</ScrollView>
		
	</SafeAreaView>
  )
} 