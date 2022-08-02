import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';
import {Box} from 'native-base';
import {useSelector, useDispatch} from 'react-redux';

import {BgColor, bgColor1, ColorText} from '../Utils/Colors';
import {WP, HP, COLOR} from '../Utils/theme';
import FormCustomButton from './FormCustomButton';
import {Spinner} from 'native-base';
import {postRfqVendor} from '../Redux/Slice/RfqSlice';

const FooterComponent = () => {
  return (
    <>
      <View
        style={{
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          height: 100,
          alignSelf: 'center',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.18,
          shadowRadius: 1.0,

          elevation: 1,
          backgroundColor: '#FFF',
        }}>
        <Text style={{fontSize: 15, color: 'black'}}>
          {' '}
          Less than 3 Vednors is present in the List, Create more Vendors at
          Vendor Dashboard
        </Text>
      </View>
    </>
  );
};
const EmptyContainer = () => {
  return (
    <View
      style={{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        alignSelf: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.0,

        elevation: 1,
        backgroundColor: '#FFF',
      }}>
      <Text style={{fontSize: 20}}> No data</Text>
    </View>
  );
};

// { itemParams: item }
const CustomRfqVendorFlatlist = ({itemData, navigation}) => {
  const auth = useSelector(auth => auth.auth.user);

  const {
    isLoading: LoadingRfq,
    message: messageRfq,
    jobRfq,
  } = useSelector(rfq => rfq.rfq);
  const token = auth?.token;
  const rfq_id = jobRfq?._id;

  const dispatch = useDispatch();
  const [vendorData, setvendorData] = useState(itemData);
  const handleSingleCheck = id => {
    // console.log(id);
    const nf = vendorData?.map(f => {
      if (id === f._id) {
        return { ...f, check: !f.check };
      }
      return f;
    });
    // console.log(nf);
    setvendorData(nf);
  };
  const renderItem = ({item}) => {
    // console.log(item.check, 'item');
    return(
      <View style={styles.tableRow}>
        <View style={styles.tableColumnRegular1}>
          <CheckBox
            value={item.check}
            onValueChange={()=>handleSingleCheck(item._id)}
            style={styles.checkboxStyle}
            checkedColor="#fff"
          />
      </View>
        <View style={styles.tableColumnRegular}>
          <Image
            style={styles.imageStyle}
            source={{ uri: `${item.logo }`} }
          />
      </View>
        <View style={styles.tableColumnRegular2}>
          <Text style={
            styles.textLineItem1
          }>{item.name}</Text>
        </View>
      </View>
    )
  };

 
  const selectedVendor = vendorData?.filter(f => f.check);
  const submitVendor = () => {
    if (selectedVendor.length < 3) {
      Alert.alert('Please select atleast 3 vendors');
    } else if (selectedVendor.length > 3) {
      Alert.alert('Please select only 3 vendors');
    } else {
      console.log(selectedVendor, 'selectedVendor');
      let dataVendor = [];

      selectedVendor.map(({_id}) => {
        dataVendor.push(_id.replace(/^"(.*)"$/, '$1'));
      });

      const datarfqvendor = {
        token,
        rfq_id,
        dataVendor,
      };
      console.log(dataVendor, 'vendor');
      dispatch(postRfqVendor(datarfqvendor))
        .unwrap()
        .then(res => {
          if (res.status === 'Updated') {
            Alert.alert(`${res.msg}`);

            navigation.navigate('rfq');
          }
          console.log(res.status);
        })
        .catch(err => {
          console.log(err, 'error from postrfqjob');
          Alert.alert(`${err}`);
        });
    }
  };


    return (
        <>
         
                <View>

                 <Box px="3">
                    <Text style={styles.vendorSelectText}> Note that you  are not eligible to select  more than three (3) vendors</Text>


                 </Box>
                 
                    <FlatList
                    data={vendorData}
                        renderItem={renderItem}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                    ListFooterComponent={vendorData.length <3 ? FooterComponent : null}

                        keyExtractor={(item) => `id${item?._id}`}
                    contentContainerStyle={{ paddingHorizontal: 22, paddingTop: 9, paddingBottom: 60}}
                    />


                    <Box my="5" px="3">
                    <TouchableOpacity
                        onPress={submitVendor}
                        style={{
                            backgroundColor: COLOR.BgColor,
                            padding: WP(4),
                            borderRadius: WP(3),
                            borderWidth: 1,
                            borderColor: COLOR.BgColor,
                            top: WP(4),


                        }}
                    >
                        {

                            LoadingRfq ? <Spinner accessibilityLabel="Loading posts" size="sm" color="#fff" /> : <Text
                                style={{
                                    fontSize: WP(4.5),
                                    color: COLOR.whiteColor,
                                    textAlign: 'center',
                                    fontWeight: '400',




                                }}>
                              Create
                            </Text>
                        }


                    </TouchableOpacity>
                      
                    </Box>
                </View>



         
           

        </>
        )
}



export default CustomRfqVendorFlatlist

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageStyle: {
    width: '50%',
    height: 40,
    resizeMode: 'cover',
    alignSelf: 'center',
    borderRadius: 5,
  },

  vendorSelectText: {
    fontWeight: '400',
    color: ColorText,
    fontSize: 15,
    fontStyle: 'normal',
    lineHeight: 24,
    paddingVertical: HP(4),
  },
  tableColumnRegular: {
    flex: 1,

    justifyContent: 'center',

    alignSelf: 'stretch',
  },
  tableColumnRegular1: {
    flex: 0.3,

    justifyContent: 'center',

    alignSelf: 'stretch',
  },
  tableColumnRegular2: {
    flex: 2.5,

    justifyContent: 'center',

    // alignSelf: 'stretch',
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
    textAlign: 'left',
    lineHeight: 18,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: bgColor1,
    height: 60,
    marginBottom: 2,
    borderRadius: 5,
  },
  checkboxStyle:{
    color:'blue'
  }
});
