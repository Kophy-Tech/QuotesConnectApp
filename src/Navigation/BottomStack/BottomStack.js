import { View, Text } from 'react-native'
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { commonStyles } from '../Styles';


const Stack = createStackNavigator();

function BottomStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen name="Bottom" component={BottomStackNavigation} 
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
 export default BottomStack;


const BottomStackNavigation = () => {
  return (
    <View>
      <Text>BottomStack</Text>
    </View>
  )
}

