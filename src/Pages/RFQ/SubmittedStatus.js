import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import React from 'react';

import {BgColor, bgColor1, ColorText} from '../../Utils/Colors';
import {useSelector, useDispatch} from 'react-redux';
import {dispatchRouteData} from '../../Redux/Slice/RfqSlice';
import {WP} from '../../Utils/theme';

const HeaderComponent = () => {
  return (
    <>
      <View style={styles.tableColumnHeader}>
        <View style={styles.tableColumnRegular}>
          <Text style={styles.textLineItem}>Item</Text>
        </View>
        <View style={styles.tableColumnRegular}>
          <Text style={styles.textLineItem}>Material</Text>
        </View>
        <View style={styles.tableColumnRegular}>
          <Text style={styles.textLineItem}>Quantity</Text>
        </View>
        <View style={styles.tableColumnRegular}>
          <Text style={styles.textLineItem}>Unit</Text>
        </View>
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
const SubmittedStatus = props => {
  const dispatch = useDispatch();

  const renderItem = ({item}) => (
    console.log(item, 'aaa'),
    (<Item item={item} onItemPress={NavigationPressPending} />)
  );
  const NavigationPressPending = item => {
    console.log(
      item.rfqArray.length,
      'item.rfqArray.length item.rfqArray.length ',
    );
    if (item.status === 'pending' && item.rfqArray.length === 0) {
      // console.log('ppp')
      // navigation.navigate('selectvendors')
      dispatch(dispatchRouteData(item));
      navigation.navigate('requestforrfq');
    } else if (
      item.status === 'pending' &&
      item.rfqArray.length > 0 &&
      item.vendorArray.length === 0
    ) {
      navigation.navigate('selectvendors');
      dispatch(dispatchRouteData(item));
    } else if (
      item.status === 'Open' &&
      item.rfqArray.length > 0 &&
      item.vendorArray.length > 0
    ) {
      navigation.navigate('openrfq');
      dispatch(dispatchRouteData(item));
    } else if (
      item.status === 'submitted' &&
      item.rfqArray.length > 0 &&
      item.vendorArray.length > 0
    ) {
      navigation.navigate('SelectedVendorItem', {item});
      dispatch(dispatchRouteData(item));
      // console.log(itemData, 'itemdata from customrfqflatlist');
    } else if (
      item.status === 'ready' &&
      item.rfqArray.length > 0 &&
      item.vendorArray.length > 0
    ) {
      navigation.navigate('SelectedVendorItem', {item});
      dispatch(dispatchRouteData(item));
      // console.log(itemData, 'itemdata from customrfqflatlist');
    } else if (
      item.status === 'Purchased' &&
      item.rfqArray.length > 0 &&
      item.vendorArray.length > 0
    ) {
      navigation.navigate('PurchasedVendorItem', {item});
      dispatch(dispatchRouteData(item));
    } else {
      Alert.alert('Waiting for Vendors to confirm the request');
    }
  };
  const Item = ({item, onItemPress}) => {
    console.log(item, 'status');

    // useEffect(() => {
    //   const refreshToken = async () => {
    //     let tokens = await AsyncStorage.getItem('refreshToken');
    //     axios({
    //       url: 'https://demo-server-quotesconnect.herokuapp.com/api/v1.1/client/login',
    //       method: 'get',
    //       headers: {
    //         refreshToken: tokens,
    //         'Content-Type': 'application/json',
    //       },
    //     })
    //       .then(response => {
    //         AsyncStorage.setItem('user', response.data.token);
    //       })
    //       .catch(err => {
    //         console.log(err, 'errorrr');
    //       }); hj
    //   };

    //   refreshToken();
    // }, [dispatch]);

    return (
      <View style={styles.tableRow}>
        <View style={styles.tableColumnRegular}>
          <Text style={styles.textLineItem1}>{item?.name?.name}</Text>
        </View>
        <View style={styles.tableColumnRegular}>
          <Text style={styles.textLineItem3}>{item?.description}</Text>
        </View>
        <View style={styles.tableColumnRegular}>
          <Text style={styles.textLineItem3}>{item?.quantity}</Text>
        </View>

        <View style={styles.tableColumnRegular}>
          <Text style={styles.textLineItem3}>{item?.unit}</Text>
        </View>
      </View>
    );
  };

  return (
    <>
      <FlatList
        data={props?.route?.params?.item?.rfqArray}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={HeaderComponent}
        ListEmptyComponent={EmptyContainer}
        keyExtractor={item => `id${item?._id}`}
        style={{top: WP(12)}}
        contentContainerStyle={{
          paddingHorizontal: 22,
          paddingTop: 9,
          paddingBottom: 60,
        }}
      />
    </>
  );
};

export default SubmittedStatus;

const styles = StyleSheet.create({
  tableColumnRegular: {
    flex: 1,

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
    textTransform: 'capitalize',
  },
  textLineItem3: {
    fontSize: 15,
    fontWeight: '400',
    color: ColorText,
    textAlign: 'center',
    lineHeight: 18,
    textTransform: 'capitalize',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: bgColor1,
    height: 80,
    marginBottom: 2,
  },
});
