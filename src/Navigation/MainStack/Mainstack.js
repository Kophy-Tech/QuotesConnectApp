import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStack from '../AuthStack/AuthStack';



const Stack = createStackNavigator();

function MainStack() {
    return (
        <Stack.Navigator
            screenOptions={{
              headerShown:false,
            }}
        >
            <Stack.Screen name="Auth" component={AuthStack} />
        </Stack.Navigator>
    );
}

export default MainStack;