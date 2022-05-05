import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../../Pages/Auth/Login';
import ResetPassword from '../../Pages/Auth/ResetPassword';

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="Otp" component={ResetPassword} />
    </Stack.Navigator>
  );
}

export default AuthStack;
