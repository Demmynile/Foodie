import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
        <TailwindProvider>
        <View>
          <Text className = "text-red-500">
          Open up App.js to start working on your app!</Text>
          <StatusBar style="auto" />
        </View>
         </TailwindProvider> 
    
    </NavigationContainer>
   
  );
}


