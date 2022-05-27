import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {WP} from '../../Utils/theme';
import Rfq from '../../Pages/RFQ/Rfq';
import VendorStack from '../VendorStack/VendorStack';
import Job from '../../Pages/Jobs/Job/Job';
import MaterialManagement from '../../Pages/MaterialManagement/MaterialManagement';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
const Tab = createBottomTabNavigator();
const BottomStackNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          width: WP('100%'),
          position: 'absolute',
          right: 10,
          elevation: 0,
          backgroundColor: '#5080FA',
          height: WP(15),
          ...styles.shadow,
        },
      }}>
      <Tab.Screen
        name="rfq"
        component={Rfq}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  top: 1,
                }}>
                <Ionicons
                  name="reader-outline"
                  size={28}
                  color={focused ? '#FFFFFF' : '#bdb9b7'}
                />
                {/* <Image source={require('../../Assets/Images/Vector.png')}
                    resizeMode='contain'
                    style={{
                      width: 30,
                      height: 30,
                      tintColor: focused ? '#FFFFFF' : '#bdb9b7'
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
                  style={{
                    width: 30,
                    height: 30,
                    tintColor: focused ? '#fff' : '#bdb9b7',
                  }}
                />
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="vendors"
        component={VendorStack}
        options={{
          tabBarStyle: { display: "none" },
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
                  color={focused ? '#fff' : '#bdb9b7'}
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
                  style={{
                    width: 30,
                    height: 30,
                    tintColor: focused ? '#ffff' : '#bdb9b7',
                  }}
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
    elevation: 5,
  },
});
