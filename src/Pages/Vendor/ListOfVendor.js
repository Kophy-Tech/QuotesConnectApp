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
import {
  CreateVendorAction,
  getVendorAction,
} from '../../Redux/Slice/VendorSlice';
import {COLOR, HP, WP} from '../../Utils/theme';

import FormCustomButton from '../../component/FormCustomButton';

const ListOfVendor = props => {
  const dispatch = useDispatch();

  const listOfVendor = useSelector(
    state =>
      state?.vendor?.data?.map(data => {
        return {
          logo: (
            <Image
              source={{
                uri:
                  data?.logo ||
                  'https://cdn-icons.flaticon.com/png/512/552/premium/552848.png?token=exp=1653588554~hmac=1e41d49a052d54034096fae003df35be',
              }}
              style={{
                width: 33,
                height: 33,
                left: 3,
                resizeMode: 'cover',
                marginVertical: WP(3),
              }}
            />
          ),

          name: data.name,
          phone: data.telephone,
        };
      }) || [],
  );
  console.log(listOfVendor, 'listofvorend');

  const vendors = listOfVendor.map(o => Object.keys(o).map(k => o[k]));

  console.log(listOfVendor, 'list');
  const TableHeader = ['Company Logo', 'Company Name', 'Phone Number'];
  const WidthTable = [WP(40), WP(35), WP(30)];
  const TableData = useState([]);

  useEffect(() => {
    dispatch(getVendorAction());
  }, []);

  return (
    <View style={styles.container}>
     
   
      <View>
        <Table borderStyle={{borderColor: 'black'}}>
          <Row data={TableHeader} style={styles.head} widthArr={WidthTable} textStyle={styles.text} />

          {vendors.map((rowData, index) => (
            <TableWrapper key={index} style={styles.row}>
              {rowData.map((cellData, cellIndex) => (
                <Cell key={cellIndex} data={cellData} />
              ))}
            </TableWrapper>
          ))}
        </Table>
      </View>
    </View>
  );
};

export default ListOfVendor;

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16, paddingTop: 30},
  head: {height: HP(8), backgroundColor: COLOR.BgColor, borderRadius: WP(2)},
  text: {margin: 6, color: '#fff'},
  row: {flexDirection: 'row', backgroundColor: '#F7FCFB'},
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
});
