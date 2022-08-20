import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {commonStyles} from '../Styles';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Job from '../../Pages/Jobs/Job/Job';
import EditJob from '../../Pages/Jobs/Job/EditJob';
import BackIcon from '../../component/BacKIcon';
import {COLOR, WP, HP} from '../../Utils/theme';
import MaterialManagement from '../../Pages/MaterialManagement/MaterialManagement';
import Rfq from '../../Pages/RFQ/Rfq';
import SelectVendors from '../../Pages/RFQ/SelectVendors';
import RequestForRfq from '../../Pages/RFQ/RequestForRfq';

import Notification from '../../Pages/Jobs/Notification';
import Profile from '../../Pages/Jobs/Profile';

import JobCreate from '../../component/JobCreate';
import CreateMaterial from '../../component/CreateMaterial';
// SimpleLineIcons
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import BottomStackNavigation from '../Tab/BottomStackNavigation';
import CreateVendor from '../../Pages/Vendor/CreateVendor';
import EditMaterial from '../../Pages/MaterialManagement/EditMaterial';
import CreateRfq from '../../component/CreateRfq';

import PurchasedVendorItem from '../../Pages/RFQ/PurchasedVendorItem';
import UpdateVendor from '../../Pages/Vendor/UpdateVendor';
import SelectedVendorItem from '../../Pages/RFQ/SelectedVendorItem';
import OpennRfq from '../../Pages/RFQ/OpenRfq';
import DetailMaterials from '../../Pages/MaterialManagement/DetailMaterials';
import EditSubMaterial from '../../Pages/MaterialManagement/EditSubMaterial';
import SubmittedStatus from '../../Pages/RFQ/SubmittedStatus';
import CompletedStatus from '../../Pages/RFQ/CompletedStatus';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
function BottomStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
      }}
      initialRouteName="vendors">
      <Stack.Screen
        name="Bottom"
        component={BottomStackNavigation}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="SelectedVendorItem"
        component={SelectedVendorItem}
        options={{
          headerShown: true,
          title: (
            <Text
              style={{
                color: COLOR.BgColor,
                fontSize: WP(6),
                lineHeight: HP(5),
              }}>
              Edit Job
            </Text>
          ),
        }}
      />

      <Stack.Screen
        name="PurchasedVendorItem"
        component={PurchasedVendorItem}
        options={{
          headerShown: true,
        }}
      />

      {/*  */}

      <Stack.Screen
        name="editjob"
        component={EditJob}
        options={{
          title: (
            <Text
              style={{
                color: COLOR.BgColor,
                fontSize: WP(6),
                lineHeight: HP(5),
              }}>
              Edit Job
            </Text>
          ),
          headerLeft: () => <BackIcon />,
          headerTitleAlign: 'center',
        }}
      />

      <Stack.Screen
        name="selectvendors"
        component={SelectVendors}
        options={{
          title: (
            <Text
              style={{
                color: COLOR.BgColor,
                fontSize: WP(6),
                lineHeight: HP(5),
              }}>
              Select Vendors
            </Text>
          ),
          headerLeft: () => <BackIcon />,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="selectitemvendors"
        component={SelectedVendorItem}
        options={{
          title: (
            <Text
              style={{
                color: COLOR.BgColor,
                fontSize: WP(6),
                lineHeight: HP(5),
              }}>
              Select Vendors
            </Text>
          ),
          headerLeft: () => <BackIcon />,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="jobcreate"
        component={JobCreate}
        options={{
          title: (
            <Text
              style={{
                color: COLOR.BgColor,
                fontSize: WP(6),
                lineHeight: HP(5),
              }}>
              Create Job
            </Text>
          ),
          headerLeft: () => <BackIcon />,
          headerTitleAlign: 'center',
        }}
      />

      <Stack.Screen
        name="createvendor"
        component={CreateVendor}
        options={{
          title: (
            <Text
              style={{
                color: COLOR.BgColor,
                fontSize: WP(6),
                lineHeight: HP(5),
              }}>
              Create Vendor
            </Text>
          ),
          headerLeft: () => <BackIcon />,
          headerTitleAlign: 'center',
        }}
      />

      <Stack.Screen
        name="UpdateVendor"
        component={UpdateVendor}
        options={{
          title: (
            <Text
              style={{
                color: COLOR.BgColor,
                fontSize: WP(6),
                lineHeight: HP(5),
              }}>
              Update Vendor
            </Text>
          ),
          headerLeft: () => <BackIcon />,
          headerTitleAlign: 'center',
        }}
      />

      <Stack.Screen
        name="creatematerial"
        component={CreateMaterial}
        options={{
          title: (
            <Text
              style={{
                color: COLOR.BgColor,
                fontSize: WP(6),
                lineHeight: HP(5),
              }}>
              Create Material
            </Text>
          ),
          headerLeft: () => <BackIcon />,
          headerTitleAlign: 'center',
        }}
      />

      <Stack.Screen
        name="editmaterial"
        component={EditMaterial}
        options={{
          title: (
            <Text
              style={{
                color: COLOR.BgColor,
                fontSize: WP(6),
                lineHeight: HP(5),
              }}>
              Edit Material
            </Text>
          ),
          headerLeft: () => <BackIcon />,
          headerTitleAlign: 'center',
        }}
      />

      <Stack.Screen
        name="DetailMaterials"
        component={DetailMaterials}
        options={{
          title: (
            <Text
              style={{
                color: COLOR.BgColor,
                fontSize: WP(6),
                lineHeight: HP(5),
              }}>
              Primary Category
            </Text>
          ),
          headerLeft: () => <BackIcon />,
          headerTitleAlign: 'center',
        }}
      />

      <Stack.Screen
        name="EditSubMaterial"
        component={EditSubMaterial}
        options={{
          title: (
            <Text
              style={{
                color: COLOR.BgColor,
                fontSize: WP(6),
                lineHeight: HP(5),
              }}>
              Edit Material
            </Text>
          ),
          headerLeft: () => <BackIcon />,
          headerTitleAlign: 'center',
        }}
      />

      <Stack.Screen
        name="requestforrfq"
        component={RequestForRfq}
        options={{
          title: (
            <Text
              style={{
                color: COLOR.BgColor,
                fontSize: WP(6),
                lineHeight: HP(5),
              }}>
              Select Material
            </Text>
          ),
          headerLeft: () => <BackIcon />,
          headerTitleAlign: 'center',
        }}
      />

      <Stack.Screen
        name="SubmittedStatus"
        component={SubmittedStatus}
        options={{
          title: (
            <Text
              style={{
                color: COLOR.BgColor,
                fontSize: WP(6),
                lineHeight: HP(5),
              }}>
              Material
            </Text>
          ),
          headerLeft: () => <BackIcon />,
          headerTitleAlign: 'center',
        }}
      />

      <Stack.Screen
        name="CompletedStatus"
        component={CompletedStatus}
        options={{
          title: (
            <Text
              style={{
                color: COLOR.BgColor,
                fontSize: WP(6),
                lineHeight: HP(5),
              }}>
              Material
            </Text>
          ),
          headerLeft: () => <BackIcon />,
          headerTitleAlign: 'center',
        }}
      />

      <Stack.Screen
        name="openrfq"
        component={OpennRfq}
        options={{
          title: (
            <Text
              style={{
                color: COLOR.BgColor,
                fontSize: WP(6),
                lineHeight: HP(5),
              }}>
              RFQ History
            </Text>
          ),
          headerLeft: () => <BackIcon />,
          headerTitleAlign: 'center',
        }}
      />

      <Stack.Screen
        name="createrfq"
        component={CreateRfq}
        options={{
          title: (
            <Text
              style={{
                color: COLOR.BgColor,
                fontSize: WP(6),
                lineHeight: HP(5),
              }}>
              Create RFQ For Job
            </Text>
          ),
          headerLeft: () => <BackIcon />,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="notification"
        component={Notification}
        options={{
          title: (
            <Text
              style={{
                color: COLOR.BgColor,
                fontSize: WP(6),
                lineHeight: HP(5),
              }}>
              Notification
            </Text>
          ),
          headerLeft: () => <BackIcon />,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="profile"
        component={Profile}
        options={{
          title: (
            <Text
              style={{
                color: COLOR.BgColor,
                fontSize: WP(6),
                lineHeight: HP(5),
              }}>
              Edit Profile
            </Text>
          ),
          headerLeft: () => <BackIcon />,
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
}
export default BottomStack;

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
