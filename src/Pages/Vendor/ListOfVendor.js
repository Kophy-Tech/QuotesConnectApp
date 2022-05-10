import React from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';
import Table from 'react-native-simple-table';
import {COLOR, IMAGE, WP} from '../../Utils/theme';

const DATA = [
  {
    title: 'Company Logo',
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    company_logo: require('../../Assets/Images/company_logo.png'),
    company_name: 'Badlam',
    sales_rep: 'Ajani Ben Dara',
    email: 'Ajani Ben Dara',
    phone: '08070730720730',
  },
  {
    title: 'Company Name',
    id: 'bd7aea-c1b1-46c2-aed5-3ad53abb28ba',
    company_logo: require('../../Assets/Images/company_logo.png'),
    company_name: 'Badlam',
    sales_rep: 'Ajani Ben Dara',
    email: 'Ajani Ben Dara',
    phone: '08070730720730',
  },
  {
    title: 'Sale Representative',
    id: 'bd7acbe1-46c2-aed5-3ad53abb28ba',
    company_logo: require('../../Assets/Images/company_logo.png'),
    company_name: 'Badlam',
    sales_rep: 'Ajani Ben Dara',
    email: 'Ajani Ben Dara',
    phone: '08070730720730',
  },
  {
    title: 'Email',
    id: 'bd7acbea-c1b1-46c2-a-3ad53abb28ba',
    company_logo: require('../../Assets/Images/company_logo.png'),
    company_name: 'Badlam',
    sales_rep: 'Ajani Ben Dara',
    email: 'Ajani Ben Dara',
    phone: '08070730720730',
  },
  {
    title: 'Phone Number',
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53a8ba',
    company_logo: require('../../Assets/Images/company_logo.png'),
    company_name: 'Badlam',
    sales_rep: 'Ajani Ben Dara',
    email: 'Ajani Ben Dara',
    phone: '08070730720730',
  },
];

const ListOfVendor = () => {
  return (
    <View style={{top: WP(3), width: WP(96), left: WP(3)}}>
      <ScrollView horizontal={true}>
        {DATA.map(item => (
          <>
            <View style={styles.box}>
              <Text style={styles.boxTextHeader}>{item.title}</Text>
              <View
                style={{
                  backgroundColor: 'white',
                  flex: 1,
                  flexDirection: 'column',
                }}>
                <Text>{item.company_name}</Text>
              </View>
            </View>
          </>
        ))}
      </ScrollView>
    </View>
  );
};

export default ListOfVendor;

const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      ios: {
        paddingTop: 20,
      },
      android: {},
    }),
  },
  title: {
    fontSize: 18,
    padding: 10,
    textAlign: 'center',
  },
  jadwal: {
    marginLeft: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    position: 'absolute',
    top: WP(3),
  },
  box: {
    height: WP(12),
    width: WP(35),
    borderRadius: 10,

    flex: 1,
  },
  boxTextHeader: {
    color: COLOR.whiteColor,
    backgroundColor: '#327fe3',
  },
});
