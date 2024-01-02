import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Logged_Out from './view/Logged_Out'
import { isDynamicIsland } from './global'

const Stack = createStackNavigator()

const AppContent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Logged_Out'
      screenOptions={{
          headerStyle: {
            elevation: 0, // For Android
            shadowOpacity: 0, // For iOS
            backgroundColor: 'white',
          },
          cardStyle: {
            backgroundColor: 'white',
            paddingHorizontal: 10,
            paddingBottom: isDynamicIsland() ? 10 : 0
          },
        }}
      >
        <Stack.Screen
          name="Logged_Out"
          component={Logged_Out}
          options={{ 
            headerShown: false,
          }}
         />
    </NavigationContainer>
  )
}

export default AppContent
