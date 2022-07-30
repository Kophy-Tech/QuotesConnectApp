import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import React from 'react';

import {BgColor, bgColor1, ColorText} from '../Utils/Colors';
import {dispatchRouteData} from '../Redux/Slice/RfqSlice';
import {useSelector, useDispatch} from 'react-redux';

const HeaderComponent = () => {
  return (
    <>
      <View style={styles.tableColumnHeader}>
        <View style={styles.tableColumnRegular}>
          <Text style={styles.textLineItem}>Job ID</Text>
        </View>
        <View style={styles.tableColumnRegular}>
          <Text style={styles.textLineItem}>Job Name</Text>
        </View>
        <View style={styles.tableColumnRegular}>
          <Text style={styles.textLineItem}>Status</Text>
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
const CustomRfqflatlist = ({itemData, navigation}) => {
  const dispatch = useDispatch();

  const renderItem = ({item}) => (
    <Item item={item} onItemPress={NavigationPressPending} />
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
      item.status === 'Submitted' &&
      item.rfqArray.length > 0 &&
      item.vendorArray.length > 0
    ) {
      navigation.navigate('SelectedVendorItem', {item});
      dispatch(dispatchRouteData(item));
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
    console.log(item?.status, 'status');

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
          <Text style={styles.textLineItem1}>{item.project_id}</Text>
        </View>
        <View style={styles.tableColumnRegular}>
          <Text style={styles.textLineItem3}>{item.job?.name}</Text>
        </View>
        <View style={styles.tableColumnRegular}>
          {item.status === 'pending' && (
            <TouchableOpacity
              onPress={() => onItemPress(item)}
              style={{
                backgroundColor: 'red',
                borderRadius: 4,
                padding: 6,
              }}>
              <Text
                style={[
                  styles.textLineItem1,
                  {
                    color: '#fff',
                    fontSize: 12,
                  },
                ]}>
                {item.status}
              </Text>
            </TouchableOpacity>
          )}

          {item.status === 'submitted' && (
            <TouchableOpacity
              onPress={() => onItemPress(item)}
              style={{
                backgroundColor: 'yellow',
                borderRadius: 4,
                padding: 6,
              }}>
              <Text
                style={[
                  styles.textLineItem1,
                  {
                    color: 'black',
                    fontSize: 12,
                  },
                ]}>
                {item.status}
              </Text>
            </TouchableOpacity>
          )}

          {item.status === 'Ready' && (
            <TouchableOpacity
              onPress={() => onItemPress(item)}
              style={{
                backgroundColor: 'blue',
                borderRadius: 4,
                padding: 6,
              }}>
              <Text
                style={[
                  styles.textLineItem1,
                  {
                    color: '#fff',
                    fontSize: 12,
                  },
                ]}>
                {item.status}
              </Text>
            </TouchableOpacity>
          )}

          {item.status === 'Purchased' && (
            <TouchableOpacity
              onPress={() => onItemPress(item)}
              style={{
                backgroundColor: 'green',
                borderRadius: 4,
                padding: 6,
              }}>
              <Text
                style={[
                  styles.textLineItem1,
                  {
                    color: '#fff',
                    fontSize: 12,
                  },
                ]}>
                {item.status}
              </Text>
            </TouchableOpacity>
          )}

          {item.status === 'completed' && (
            <TouchableOpacity
              style={{
                backgroundColor: 'green',
                borderRadius: 4,
                padding: 6,
              }}>
              <Text
                style={[
                  styles.textLineItem1,
                  {
                    color: '#fff',
                    fontSize: 12,
                  },
                ]}>
                {item.status}
              </Text>
            </TouchableOpacity>
          )}

          {item.status === 'Open' && (
            <TouchableOpacity
              style={{
                backgroundColor: '#FD5757',
                borderRadius: 4,
                padding: 6,
              }}
              onPress={() => onItemPress(item)}>
              <Text
                style={[
                  styles.textLineItem1,
                  {
                    color: '#fff',
                    fontSize: 12,
                  },
                ]}>
                {item.status}
              </Text>
            </TouchableOpacity>
          )}
          {/* {

                        item.status === 'Submitted' && <TouchableOpacity style={{
                            backgroundColor: '#FAAE3B',
                            borderRadius: 4,
                            padding: 6

                        }}>
                            <Text style={[styles.textLineItem1,
                            {
                                color: 'yellow',
                                fontSize: 12

                            }
                            ]}>{item.status}</Text>

                        </TouchableOpacity>
                    } */}
          {/* {item.status === 'purchased' && (
            <TouchableOpacity
              style={{
                backgroundColor: '#2EB66E',
                borderRadius: 4,
                padding: 6,
              }}>
              <Text
                style={[
                  styles.textLineItem1,
                  {
                    color: '#fff',
                    fontSize: 12,
                  },
                ]}>
                {item.status}
              </Text>
            </TouchableOpacity>
          )} */}
        </View>
      </View>
    );
  };

  return (
    <>
      <FlatList
        data={itemData}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={HeaderComponent}
        ListEmptyComponent={EmptyContainer}
        keyExtractor={item => `id${item?._id}`}
        contentContainerStyle={{
          paddingHorizontal: 22,
          paddingTop: 9,
          paddingBottom: 60,
        }}
      />
    </>
  );
};

export default CustomRfqflatlist;

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
