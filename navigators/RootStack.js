import React from 'react';

//color
import { Colors } from '../components/styles';
const {primary, orange} = Colors

//react navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screens
import Login from './../screens/Login'
import Signup from './../screens/Signup'
import Welcome from './../screens/Welcome'

import initDb from './../navigators/initdb'

const Stack = createNativeStackNavigator();
initDb();

const RootStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyled: {
                        backgroundColor: 'transparent'
                    },
                    headerTintColor: orange,
                    headerTransparent: true,
                    headerTitile: '',
                    headerLeftContainerStyle : {
                        paddingLeft: 20
                    }
                }}
                initialRouteName="Login"
            >
                <Stack.Screen name="." component={Login} />
                <Stack.Screen name="Login Page" component={Signup} />
                <Stack.Screen name="Welcome" component={Welcome} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootStack