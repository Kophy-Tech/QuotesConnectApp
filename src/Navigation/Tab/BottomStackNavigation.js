import {View, Text, StyleSheet, Image, Platform} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {WP} from '../../Utils/theme';
import Rfq from '../../Pages/RFQ/Rfq';
import Job from '../../Pages/Jobs/Job/Job';
import MaterialManagement from '../../Pages/MaterialManagement/MaterialManagement';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Vendors from '../../Pages/Vendor/Vendors';
import SelectedVendorItem from '../../Pages/RFQ/SelectedVendorItem';

const Tab = createBottomTabNavigator();
const BottomStackNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        keyboardHidesTabBar: true,
        tabBarStyle: {
          width: WP('100%'),
          position: 'absolute',
          right: 10,
          elevation: 0,
          backgroundColor: '#5080FA',
          // height: WP(15),
          height: Platform.OS === 'ios' ? WP(24.4) : WP(15),
          ...styles.shadow,
        },
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name="rfq"
        component={Rfq}
        // component={SelectedVendorItem}
        options={{
          tabBarLabel: ({focused, color, size}) => (
            <Text style={{color: focused ? 'yellow' : 'white'}}>RFQ</Text>
          ),
          // tabBarStyle: { display: "none" },
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  top: 1,
                  elevation: 30,
                }}>
                <Ionicons
                  name="reader-outline"
                  size={28}
                  color={focused ? '#FFFFFF' : '#ffff'}
                  style={focused ? styles.reHeight : null}
                />
                {/* <Image source={require('../../Assets/Images/Vector.png')}
                    resizeMode='contain'
                    style={{
                      width: 30,
                      height: 30,
                      tintColor: focused ? '#FFFFFF' : '#ffff'
                    }}
                  /> */}
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="job"
        component={Job}
        options={{
          tabBarLabel: ({focused, color, size}) => (
            <Text style={{color: focused ? 'yellow' : 'white'}}>JOB</Text>
          ),

          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  top: 1,
                }}>
                <Image
                  source={require('../../Assets/Images/Group2.png')}
                  resizeMode="contain"
                  style={[
                    focused ? styles.reHeight : null,
                    {width: 30, height: 30},
                  ]}
                  // style={{
                  //   width: 30,
                  //   height: 30,

                  // }}
                />
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="vendors"
        component={Vendors}
        options={{
          tabBarLabel: ({focused, color, size}) => (
            <Text style={{color: focused ? 'yellow' : 'white'}}>VENDOR</Text>
          ),
          // tabBarStyle: { display: "none" },
          headerShown: false,
          tabBarIcon: ({focused, color}) => {
            return (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  top: 1,
                }}>
                <Ionicons
                  name={focused ? 'ios-people-sharp' : 'ios-people-outline'}
                  size={30}
                  color={focused ? '#fff' : '#ffff'}
                  style={focused ? styles.reHeight : null}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="material"
        component={MaterialManagement}
        options={{
          tabBarLabel: ({focused, color, size}) => (
            <Text style={{color: focused ? 'yellow' : 'white'}}>MATERIAL</Text>
          ),
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  top: 1,
                }}>
                <Image
                  source={require('../../Assets/Images/Group.png')}
                  resizeMode="contain"
                  style={[
                    focused ? styles.reHeight : null,
                    {width: 30, height: 30},
                  ]}
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomStackNavigation;
const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },

  reHeight: {
    bottom: WP(2.5),

    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
});
