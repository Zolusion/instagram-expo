import React from 'react'
import { NavigationContainer} from '@react-navigation/stack'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import NewPostScreen from '../screens/NewPostScreen'

const Stack = createStackNavigator()

const screenOptions = {
  headerShown: false,
}

const SignedInStack = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={screenOptions}> 
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="NewPost" component={NewPostScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  )

export default SignedInStack