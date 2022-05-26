import { View, Text, StyleSheet , Image} from 'react-native'
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { commonStyles } from '../Styles';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Job from '../../Pages/Jobs/Job/Job';
import EditJob from '../../Pages/Jobs/Job/EditJob';
import BackIcon from '../../component/BacKIcon';
import { COLOR, WP, HP } from '../../Utils/theme';
import MaterialManagement from '../../Pages/MaterialManagement/MaterialManagement';
import Rfq from '../../Pages/RFQ/Rfq';
import SelectVendors from '../../Pages/RFQ/SelectVendors';
import RequestForRfq from '../../Pages/RFQ/RequestForRfq';
import Vendors from '../../Pages/Vendor/Vendors';
import Notification from '../../Pages/Jobs/Notification';
import Profile from '../../Pages/Jobs/Profile';
import VendorStack from '../VendorStack/VendorStack';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator(); 
function BottomStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
      }}
      initialRouteName="vendors"
    >
      <Stack.Screen name="Bottom" component={BottomStackNavigation} 
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="editjob" component={EditJob}
        options={{
          title: <Text style={{color:COLOR.BgColor, fontSize:WP(6), lineHeight:HP(5)}}>Edit Job</Text>,
          headerLeft: () => <BackIcon/>,
          headerTitleAlign: 'center',
        }} 
      />

      <Stack.Screen name="selectvendors" component={SelectVendors}
        options={{
          title: <Text style={{ color: COLOR.BgColor, fontSize: WP(6), lineHeight: HP(5) }}>Select Vendors</Text>,
          headerLeft: () => <BackIcon />,
          headerTitleAlign: 'center',
        }}
      />

      <Stack.Screen name="requestforrfq" component={RequestForRfq}
        options={{
          title: <Text style={{ color: COLOR.BgColor, fontSize: WP(6), lineHeight: HP(5) }}>Request For RFQ</Text>,
          headerLeft: () => <BackIcon />,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen name="notification" component={Notification}
        options={{
          title: <Text style={{ color: COLOR.BgColor, fontSize: WP(6), lineHeight: HP(5) }}>Notification</Text>,
          headerLeft: () => <BackIcon />,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen name="profile" component={Profile}
        options={{
          title: <Text style={{ color: COLOR.BgColor, fontSize: WP(6), lineHeight: HP(5) }}>Edit Profile</Text>,
          headerLeft: () => <BackIcon />,
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
}
 export default BottomStack;


const BottomStackNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{
      tabBarShowLabel: false,
      tabBarStyle:{
        position:'absolute',
        bottom:2,
        left:10,
        right:10,
        elevation:0,
        backgroundColor:'#5080FA',
        borderRadius:10,
        height:70,
        ...styles.shadow
      }
    }}
      
    >
   
      {/* <Tab.Screen name="rfq" component={Rfq}
      
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: 'center', justifyContent: 'center', top: 1 }}>
                <Image source={require('../../Assets/Images/Vector.png')}
                  resizeMode='contain'
                  style={{
                    width: 30,
                    height: 30,
                    tintColor: focused ? '#bdb9b7' : '#fff'
                  }}
                />
               

              </View>
            )
          }
        }}
      />
      <Tab.Screen name="job" component={Job}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: 'center', justifyContent: 'center', top: 1 }}>
                <Image source={require('../../Assets/Images/Group2.png')}
                  resizeMode='contain'
                  style={{
                    width: 30,
                    height: 30,
                    tintColor: focused ? '#bdb9b7' : '#fff'
                  }}
                />

              </View>
            )
          }
        }}
      /> */}

      <Tab.Screen name="vendors" component={VendorStack}

        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: 'center', justifyContent: 'center', top:1 }}>
                <Image source={require('../../Assets/Images/Group1.png')}
                  resizeMode='contain'
                  style={{
                    width: 30,
                    height: 30,
                    tintColor: focused ? '#bdb9b7' : '#fff'
                  }}
                />

              </View>
            )
          }
        }}
      />
      {/* <Tab.Screen name="material" component={MaterialManagement}

        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: 'center', justifyContent: 'center', top:1}}>
                <Image source={require('../../Assets/Images/Group.png')}
                  resizeMode='contain'
                  style={{
                    width: 30,
                    height: 30,
                    tintColor: focused ? '#bdb9b7' : '#fff'





                  }}
                />

              </View>
            )
          }
        }}
      /> */}
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  shadow:{
    shadowColor:'#7F5DF0',
    shadowOffset:{
      width: 0,
      height: 10,
    },
    shadowOpacity:0.25,
    shadowRadius:3.5,
    elevation:5
  }
})
