import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';



const Stack = createStackNavigator();



enableScreens();

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false, }} >
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Home" component={Home} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Router;
