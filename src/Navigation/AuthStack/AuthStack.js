import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenOne from '../../Pages/Auth/ScreenOne/ScreenOne';


const Stack = createStackNavigator();


function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
     <Stack.Screen name="screenone" component={ScreenOne} />
    </Stack.Navigator>
  );
}

export default AuthStack;