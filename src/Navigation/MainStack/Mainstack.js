import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AuthStack from '../AuthStack/AuthStack';
import BottomStack from '../BottomStack/BottomStack';

import Splash from '../../Pages/Splash';
import Onboarding from '../../Pages/Onboarding';

const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Onboarding" component={Onboarding} />
<<<<<<< HEAD
      
=======
   
>>>>>>> 3bee8c1bd95d8b5af0345891a6e28a2ca41dd3d6
      <Stack.Screen name="Auth" component={AuthStack} />    
      <Stack.Screen name="bottomStack" component={BottomStack} />
    </Stack.Navigator>
  );
}

export default MainStack;
