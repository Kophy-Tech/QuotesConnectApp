import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AuthStack from '../AuthStack/AuthStack';
import BottomStack from '../BottomStack/BottomStack';

import Splash from '../../Pages/Splash';
import Onboarding from '../../Pages/Onboarding';
import {useNavigation} from '@react-navigation/native';
import {Alert} from 'react-native';

const Stack = createStackNavigator();

function MainStack() {
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Auth" component={AuthStack} />
      <Stack.Screen name="bottomStack" component={BottomStack} />

      {/*

      <Stack.Screen name="Auth" component={AuthStack} />
      <Stack.Screen name="bottomStack" component={BottomStack} /> */}
    </Stack.Navigator>
  );
}

export default MainStack;
