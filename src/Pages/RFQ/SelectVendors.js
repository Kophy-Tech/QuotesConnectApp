import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Flatlist,
} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';

import {WP, HP, COLOR} from '../../Utils/theme';
import {Box} from 'native-base';
import {BgColor, bgColor1, ColorText} from '../../Utils/Colors';
import FormCustomButton from '../../component/FormCustomButton';
import CheckBox from '@react-native-community/checkbox';

import Loading from '../../component/Loading';
import {useSelector, useDispatch} from 'react-redux';
import {mygetVendor} from '../../Redux/Slice/JobSlice';
import CustomRfqVendorFlatlist from '../../component/CustomRfqVendorFlatlist';

const SelectVendors = ({navigation}) => {
  const auth = useSelector(auth => auth.auth.user);

  const {isLoading, message, refresh} = useSelector(job => job.job);

  const dispatch = useDispatch();

  const [allVendors, setVendors] = useState([]);

  const token = auth?.token;

  useLayoutEffect(() => {
    dispatch(mygetVendor(token))
      .unwrap()
      .then(res => {
        // console.log(res.data, 'res');
        setVendors(res.data);
      })
      .catch(err => {});
  }, [dispatch]);
  if (isLoading) {
    return <Loading />;
  } else if (message && isLoading === false) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View
          style={{
            width: '80%',
            justifyContent: 'center',
            alignItems: 'center',
            height: 200,
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
          <Text style={{fontSize: 20, color: 'black'}}> {message}</Text>
        </View>
      </View>
    );
  }

  if (allVendors.length === 0) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View
          style={{
            width: '80%',
            justifyContent: 'center',
            alignItems: 'center',
            height: 200,
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
          <Text style={{fontSize: 20, color: 'black'}}> No data</Text>
          <Text style={{fontSize: 10, color: 'black'}}>
            {' '}
              at least create Vendors at Vendors Dashboard
          </Text>
          <Box my="4">
            <FormCustomButton
              placeholder=""
              borderColor={COLOR.BgColor}
              borderWidth={WP(0.3)}
              btnTitle="Go Back To Main Screen"
              backgroundColor={COLOR.BgColor}
              textColor={COLOR.whiteColor}
              onPress={() => navigation.navigate('rfq')}
            />
          </Box>
        </View>
      </View>
    );
  }
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
        }}>
        <CustomRfqVendorFlatlist
          itemData={allVendors}
          navigation={navigation}
        />
      </View>
    </>
  );
};

export default SelectVendors;

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
    flex: 0.8,

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

    alignSelf: 'stretch',
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
    height: 60,
    marginBottom: 2,
    borderRadius: 5,
  },
});
