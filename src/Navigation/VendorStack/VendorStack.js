import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ListOfVendor from '../../Pages/Vendor/ListOfVendor';
import CreateVendor from '../../Pages/Vendor/CreateVendor';
import UpdateVendor from '../../Pages/Vendor/UpdateVendor';
import CreateMaterial from '../MaterialMangment/CreateMaterial';

const Stack = createStackNavigator();

function VendorStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {/* <Stack.Screen name="ListOfVendor" component={ListOfVendor} /> */}
      <Stack.Screen name="CreateVendor" component={CreateVendor} />
      <Stack.Screen name="UpdateVendor" component={UpdateVendor} />
    </Stack.Navigator>
  );
}

export default VendorStack;
