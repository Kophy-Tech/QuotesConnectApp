import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../../Pages/Splash';
import Onboarding from '../../Pages/Onboarding';
import AuthStack from '../AuthStack/AuthStack';
import Login from '../../Pages/Auth/Login';

const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {/* <Stack.Screen name="Splash" component={Splash} /> */}
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Auth" component={AuthStack} />
    </Stack.Navigator>
  );
}

export default MainStack;
