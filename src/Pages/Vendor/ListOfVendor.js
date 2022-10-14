import React, {useEffect, useState} from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {BgColor, bgColor1, ColorText} from '../../Utils/Colors';
import {Table, TableWrapper, Row, Cell} from 'react-native-table-component';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {
  CreateVendorAction,
  getVendorAction,
} from '../../Redux/Slice/VendorSlice';
import {COLOR, HP, WP} from '../../Utils/theme';

import FormCustomButton from '../../component/FormCustomButton';
import {Capitalize} from '../../Utils/util';
import { Box, } from 'native-base';


const ListOfVendor = props => {
  console.log(props, 'proprorporprorporpo');
  const dispatch = useDispatch();
  const totalVendor = useSelector(state => state.vendor.data);
  const navigation = useNavigation();

  const TableHeader = ['Vendor', 'Vendor Name'];
  const WidthTable = [WP(35), WP(59)];

  useEffect(() => {
    dispatch(getVendorAction());
  }, [dispatch]);

  const searchFilterFunction = text => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  return (
    <View style={styles.container}>
   <Table borderStyle={{borderColor: 'black'}}>
        <Row
          data={TableHeader}
          style={styles.head}
          widthArr={WidthTable}
          textStyle={styles.text}
        />
      </Table>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={totalVendor}
        contentContainerStyle={{
          paddingHorizontal:5
        }}
        renderItem={({item}) => {
          console.log(item, 'bbbbbrknrknbkanknd');
          return (
            <TouchableOpacity
              style={{backgroundColor: '#F7FCFB'}}
              onPress={() => navigation.navigate('UpdateVendor', {item})}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between', alignItems:'center'}}>
                <View style={{
                    width: WP(20),
                    height: HP(5),
                }}>
                  <Image
                    source={{uri: item?.logo}}
                    resizeMode="contain"
                    style={{
                      width: "100%",
                      height:"100%",
                      // top: HP(3),
                      // left: WP(3),
                    }}
                  />
                </View>
                <View
                  style={{
                    width: WP(45),
                    padding: WP(7),
                    left: WP(-15),
                  }}>
                  <Text style={styles.textColor}>{Capitalize(item?.name)}</Text>
                </View>

                {/* <View style={{width: WP(40), left: WP(10), top: WP(5)}}>
                  <Text style={styles.textColor}>{item?.telephone}</Text>
                </View> */}
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default ListOfVendor;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: COLOR.whiteColor,
  },
  head: {height: HP(8), backgroundColor: COLOR.BgColor, borderRadius: WP(2), marginRight:30},
  text: {margin: 15, color: '#fff'},
  row: {flexDirection: 'row', backgroundColor: '#F7FCFB', marginVertical: 2},
  btn: {width: 58, height: 18, backgroundColor: '#78B7BB', borderRadius: 2},
  btnText: {textAlign: 'center', color: '#fff'},
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
    flexDirection: 'row',
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
  },
  textLineItem1: {
    fontSize: 15,
    fontWeight: '400',
    color: ColorText,
    textAlign: 'center',
    lineHeight: 18,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: bgColor1,
    height: 100,
    marginBottom: 2,
  },
  textColor: {
    color: ColorText,
  },
});
