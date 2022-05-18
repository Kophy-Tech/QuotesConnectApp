import React from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity
} from 'react-native';
import { BgColor, bgColor1, ColorText } from '../../Utils/Colors';


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
    < >
      <ScrollView style={styles.tableContainer} showsHorizontalScrollIndicator={true}>
     


      </ScrollView>
    </>
  );
};

export default ListOfVendor;

const styles = StyleSheet.create({
  tableContainer: {
  //  flexDirection:'column'
  },
  tableColumnRegular: {
    flex: 1,

    justifyContent: 'center',

    alignSelf: 'stretch',



  },
  tableColumnRegular2: {
    flex: 1.8,

    justifyContent: 'center',

    alignSelf: 'stretch',



  },
  tableColumnHeader: {

    flexDirection: "row",
    justifyContent: 'center',

    backgroundColor: BgColor,
    borderRadius: 10,
    height: 62,

  },
  textLineItem: {
    fontSize: 15,
    fontWeight: '400',
    color: '#fff',
    textAlign: 'center',
    lineHeight: 18,
    fontFamily: 'sans-serif'
  },
  textLineItem1: {
    fontSize: 15,
    fontWeight: '400',
    color: ColorText,
    textAlign: 'center',
    lineHeight: 18,
    fontFamily: 'sans-serif',

  },
  tableRow: {
    flexDirection: "row",
    justifyContent: 'center',
    backgroundColor: bgColor1,
    height: 100,
    marginBottom: 2


  },


 
});
