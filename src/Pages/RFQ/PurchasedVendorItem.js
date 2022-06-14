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
import {COLOR, HP, NAIRA_SYSMBOL, WP} from '../../Utils/theme';

import FormCustomButton from '../../component/FormCustomButton';
import Header from '../../component/Header';

const PurchasedVendorItem = props => {
  const {route:{params:{item}}}=props;
  console.log(item.vendorArray, 'ppp111111111111ppppppp');




  const TableHeader = ['Company', 'Item', 'Unit','Quantity' ,"Price"];
  const TableHeader2 = ['Company', 'Sub Total', 'Total Tax Rate','Shipping' ,"Total"];
  const WidthTable = [WP(29), WP(15), WP(15) ,WP(18),WP(20)];
  const TableData = useState([]);

 

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
       <View style={{flexDirection:'row'}}>
  
       </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Table borderStyle={{borderColor: 'black'}}>
          <Row
            data={TableHeader}
            style={styles.head}
            widthArr={WidthTable}
            textStyle={styles.text}
          />
        </Table>
            <View style={{flexDirection:'row' , justifyContent:'space-between',paddingBottom:WP(23),top:WP(-35)}}>
              <View>
                    {/* First Row */}
                {item.vendorArray.map((item)=>(
                    <View>
                    <View style={{top:WP(53), width:WP(22)}}>
                    <Text>{item?.isSelected==true && item?.vendor?.name}</Text>
                    </View>
                    </View>
                ))}
              </View>
              <View>
                    {/* First Row */}
                {item.rfqArray.map((item)=>(
                    <View>
                    <View style={{top:WP(53),width:WP(12), left:WP(3)}}>
                    <Text>{item?.name?.name}</Text>
                    </View>
                    </View>
                ))}
              </View>

              <View>
                    {/* First Row */}
                {item.rfqArray.map((item)=>(
                    <View>
                    <View style={{top:WP(53)}}>
                    <Text>{item?.unit}</Text>
                    </View>
                    </View>
                ))}
              </View>

              <View>
                    {/* First Row */}
                {item.rfqArray.map((item)=>(
                    <View>
                    <View style={{top:WP(53) ,width:WP(12)}}>
                    <Text>{item?.quantity}</Text>
                    </View>
                    </View>
                ))}
              </View>



                <View style={{top:WP(53),right:WP(3)}}>
                    {/* First Row */}
                   <View>
                   <Text>{NAIRA_SYSMBOL}{item?.grandTotal}</Text>
                   </View>
              </View>

    
            </View>

            

            <View style={{width:WP(70),alignSelf:'center',  backgroundColor:'white'}}>
              <FormCustomButton btnTitle="Placed Order"
              disabled={true}
              backgroundColor={"#7591d9"}
              textColor={"#fff"}/>

            </View>
            
        





      </ScrollView>



    </View>
  );
};

export default PurchasedVendorItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
    backgroundColor: COLOR.whiteColor,
  },
  head: {height: HP(8), backgroundColor: COLOR.BgColor, borderRadius: WP(2) ,top:WP(13), width:WP(92),left:WP(5)},
  text: {margin: 6, color: '#fff'},
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
});
