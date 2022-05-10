import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AuthStack from '../AuthStack/AuthStack';
import BottomStack from '../BottomStack/BottomStack';

import Splash from '../../Pages/Splash';
import Onboarding from '../../Pages/Onboarding';
import VendorStack from '../VendorStack/VendorStack';

const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Vendor" component={VendorStack} />

      {/* <Stack.Screen name="Splash" component={Splash} /> */}
      {/* <Stack.Screen name="Onboarding" component={Onboarding} /> */}
      {/* <Stack.Screen name="Auth" component={AuthStack} /> */}
      {/* <Stack.Screen name="bottomStack" component={BottomStack} /> */}
    </Stack.Navigator>
  );
}

export default MainStack;
