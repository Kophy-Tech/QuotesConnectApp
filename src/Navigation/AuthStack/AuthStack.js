import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../../Pages/Auth/Login';
import ResetPassword from '../../Pages/Auth/ResetPassword';
import ConfirmPassword from '../../Pages/Auth/ConfirmPassword';
import Otp from '../../Pages/Auth/Otp';
import Welcome from '../../Pages/Auth/Welcome';

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="Otp" component={Otp} />
      <Stack.Screen name="ConfirmPassword" component={ConfirmPassword} />
      <Stack.Screen name="Welcom" component={Welcome} />
    </Stack.Navigator>
  );
}

export default AuthStack;
