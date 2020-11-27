import React from 'react';
import Preload from '../Preload';
import Login from '../Login';
import Cadastrar from '../Cadastrar';
import Dashboard from '../Dashboard';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
        initialRouteName='Preload'
        headerMode={
            ShadowRoot=false
        }
    >
        
        <Stack.Screen name="Preload" component={Preload} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastrar" component={Cadastrar} />
        <Stack.Screen name="Dashboard" component={Dashboard} />

    </Stack.Navigator>
);