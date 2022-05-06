import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
<<<<<<< HEAD
import AuthStack from '../AuthStack/AuthStack';
import BottomStack from '../BottomStack/BottomStack';

=======
>>>>>>> 4010c39c21bfaffe81a279ae091934f60daa21ee
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
      {/* <Stack.Screen name="Auth" component={AuthStack} /> */}
      <Stack.Screen name="bottomStack" component={BottomStack} />

      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Auth" component={AuthStack} />
    </Stack.Navigator>
  );
}

export default MainStack;
