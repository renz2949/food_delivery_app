import { NavigatorContainer } from '@react-navigation/native';
import CustomDrawer from "./navigation/CustomDrawer";

const Stack = createStackNavigator();

const App = () => 
{
  return (
    <NavigatorContainer>
      <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
          initialRouteName={'Home'}
      >
        <Stack.Screen 
          name="Home"
          component={CustomDrawer}
        />
      </Stack.Navigator>
    </NavigatorContainer>
  )
}
