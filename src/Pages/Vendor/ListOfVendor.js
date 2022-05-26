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
import {CreateVendorAction} from '../../Redux/Slice/VendorSlice';
import {COLOR, HP, WP} from '../../Utils/theme';
import Header from '../../component/Header';
import FormCustomButton from '../../component/FormCustomButton';

const ListOfVendor = () => {
  const dispatch = useDispatch();
  const listOfVendor = useSelector(
    state =>
      state.vendor.data.map(data => {
        return {
          logo: (
            <Image
              source={{
                uri: data.logo,
              }}
              style={{
                width: 30,
                height: 35,
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

  const vendors = listOfVendor.map(o => Object.keys(o).map(k => o[k]));

  console.log(listOfVendor, 'list');
  const TableHeader = ['Company Logo', 'Company Name', 'Phone Number'];
  const WidthTable = [40, 40, 70];
  const TableData = useState([]);

  useEffect(() => {
    dispatch(CreateVendorAction());
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <View style={{flexDirection: 'row' ,paddingBottom:WP(10)}}>
        <View style={{width: WP(48)}}>
          <FormCustomButton
            backgroundColor={COLOR.whiteColor}
            borderWidth={0.5}
            btnTitle="Create Vendor"
            borderColor={COLOR.deepBlue}
          />
        </View>
        <View style={{width: WP(43), left: WP(2)}}>
          <FormCustomButton
            backgroundColor={COLOR.BgColor}
            btnTitle="Create Vendor"
            textColor={COLOR.whiteColor}
          />
        </View>
      </View>

      <View>
        <Table borderStyle={{borderColor: 'black'}}>
          <Row data={TableHeader} style={styles.head} textStyle={styles.text} />

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
  container: {flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff'},
  head: {height: HP(8), backgroundColor: COLOR.BgColor, borderRadius: WP(2)},
  text: {margin: 6, color: '#fff'},
  row: {flexDirection: 'row', backgroundColor: '#F7FCFB'},
  btn: {width: 58, height: 18, backgroundColor: '#78B7BB', borderRadius: 2},
  btnText: {textAlign: 'center', color: '#fff'},
});
