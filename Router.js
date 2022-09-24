import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { configureStore } from '@reduxjs/toolkit';
import { enableScreens } from 'react-native-screens';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { Provider } from 'react-redux';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import themeReducer from "./features/reduxStore/store"


const Stack = createStackNavigator();



enableScreens();

const Router = () => {

    const store = configureStore({
        reducer: {
            themeReducer
        }
    })

    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false, }} >
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Home" component={Home} />

                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}
export default Router;
