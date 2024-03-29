import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {COLOR, HP, NAIRA_SYSMBOL, WP} from '../../Utils/theme';
import {ListItem, Container, Content, Header, Radio} from 'native-base';
import RadioForm from 'react-native-simple-radio-button';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FormCustomButton from '../../component/FormCustomButton';
import {useDispatch, useSelector} from 'react-redux';
import {clientSelectItems, getRfqJob} from '../../Redux/Slice/RfqSlice';
import Orientation from 'react-native-orientation';
import {bgColor1} from '../../Utils/Colors';

const SelectedVendorItem = props => {
  const [totalPrice, setTotalPrice] = useState(null);

  const [selectedId, setSelectedId] = useState(null);
  const [selectedValue, setselectedValue] = useState(null);
  const [priceId, setpriceId] = useState(null);

  const [totalPrice2, setTotalPrice2] = useState(null);
  const [selectedId2, setSelectedId2] = useState(null);
  const [priceId2, setpriceId2] = useState(null);
  const [id2, setId2] = useState(null);
  const [selectedValue2, setselectedValue2] = useState(null);

  const [totalPrice3, setTotalPrice3] = useState(null);

  const [selectedId3, setSelectedId3] = useState(null);
  const [selectedValue3, setselectedValue3] = useState(null);
  const [priceId3, setpriceId3] = useState(null);

  const [selectedId4, setSelectedId4] = useState(null);
  const [selectedValue4, setselectedValue4] = useState(null);
  const [priceId4, setpriceId4] = useState(null);

  const [selectedId5, setSelectedId5] = useState(null);
  const [selectedValue5, setselectedValue5] = useState(null);
  const [priceId5, setpriceId5] = useState(null);

  const [selectedId6, setSelectedId6] = useState(null);
  const [selectedValue6, setselectedValue6] = useState(null);
  const [priceId6, setpriceId6] = useState(null);

  const [selectedId7, setSelectedId7] = useState(null);
  const [selectedValue7, setselectedValue7] = useState(null);
  const [priceId7, setpriceId7] = useState(null);

  const [selectedId8, setSelectedId8] = useState(null);
  const [selectedValue8, setselectedValue8] = useState(null);
  const [priceId8, setpriceId8] = useState(null);

  const [selectedId9, setSelectedId9] = useState(null);
  const [selectedValue9, setselectedValue9] = useState(null);
  const [priceId9, setpriceId9] = useState(null);

  const [selectedId10, setSelectedId10] = useState(null);
  const [selectedValue10, setselectedValue10] = useState(null);
  const [priceId10, setpriceId10] = useState(null);

  const [selectedId11, setSelectedId11] = useState(null);
  const [selectedValue11, setselectedValue11] = useState(null);
  const [priceId11, setpriceId11] = useState(null);

  const [selectedId12, setSelectedId12] = useState(null);
  const [selectedValue12, setselectedValue12] = useState(null);
  const [priceId12, setpriceId12] = useState(null);

  const [selectedId13, setSelectedId13] = useState(null);
  const [selectedValue13, setselectedValue13] = useState(null);
  const [priceId13, setpriceId13] = useState(null);

  const [selectedId14, setSelectedId14] = useState(null);
  const [selectedValue14, setselectedValue14] = useState(null);
  const [priceId14, setpriceId14] = useState(null);

  const [selectedId15, setSelectedId15] = useState(null);
  const [selectedValue15, setselectedValue15] = useState(null);
  const [priceId15, setpriceId15] = useState(null);

  const [selectedId16, setSelectedId16] = useState(null);
  const [selectedValue16, setselectedValue16] = useState(null);
  const [priceId16, setpriceId16] = useState(null);

  const [selectedId17, setSelectedId17] = useState(null);
  const [selectedValue17, setselectedValue17] = useState(null);
  const [priceId17, setpriceId17] = useState(null);

  const [selectedId18, setSelectedId18] = useState(null);
  const [selectedValue18, setselectedValue18] = useState(null);
  const [priceId18, setpriceId18] = useState(null);

  const [selectedId19, setSelectedId19] = useState(null);
  const [selectedValue19, setselectedValue19] = useState(null);
  const [priceId19, setpriceId19] = useState(null);

  const [selectedId20, setSelectedId20] = useState(null);
  const [selectedValue20, setselectedValue20] = useState(null);
  const [priceId20, setpriceId20] = useState(null);

  const [selectedId21, setSelectedId21] = useState(null);
  const [selectedValue21, setselectedValue21] = useState(null);
  const [priceId21, setpriceId21] = useState(null);

  const [selectedId22, setSelectedId22] = useState(null);
  const [selectedValue22, setselectedValue22] = useState(null);
  const [priceId22, setpriceId22] = useState(null);

  const [selectedId23, setSelectedId23] = useState(null);
  const [selectedValue23, setselectedValue23] = useState(null);
  const [priceId23, setpriceId23] = useState(null);

  const [selectedId24, setSelectedId24] = useState(null);
  const [selectedValue24, setselectedValue24] = useState(null);
  const [priceId24, setpriceId24] = useState(null);

  const [selectedId25, setSelectedId25] = useState(null);
  const [selectedValue25, setselectedValue25] = useState(null);
  const [priceId25, setpriceId25] = useState(null);

  const [selectedId26, setSelectedId26] = useState(null);
  const [selectedValue26, setselectedValue26] = useState(null);
  const [priceId26, setpriceId26] = useState(null);

  const [selectedId27, setSelectedId27] = useState(null);
  const [selectedValue27, setselectedValue27] = useState(null);
  const [priceId27, setpriceId27] = useState(null);

  const [selectedId28, setSelectedId28] = useState(null);
  const [selectedValue28, setselectedValue28] = useState(null);
  const [priceId28, setpriceId28] = useState(null);

  const [selectedId29, setSelectedId29] = useState(null);
  const [selectedValue29, setselectedValue29] = useState(null);
  const [priceId29, setpriceId29] = useState(null);

  const [selectedId30, setSelectedId30] = useState(null);
  const [selectedValue30, setselectedValue30] = useState(null);
  const [priceId30, setpriceId30] = useState(null);

  const [id3, setId3] = useState(null);
  const [page, setPage] = useState(0);
  const [taxRate, setTaxRate] = useState(
    props?.route?.params?.item?.vendorArray[0]?.priceList?.tax || 1,
  );

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const [itemRfq, setItemRfq] = useState(
    ...props?.route?.params?.item?.vendorArray,
  );

  const dispatch = useDispatch();

  const checkIfNumberisUndefinedOrNaN = num => {
    if (num == NaN || num == undefined) {
      return 0;
    } else {
      return num;
    }
  };

  let vendorTotalPrice = Number(
    Number(checkIfNumberisUndefinedOrNaN(selectedValue?.totalPrice)) +
      Number(checkIfNumberisUndefinedOrNaN(selectedValue2?.totalPrice)) +
      Number(checkIfNumberisUndefinedOrNaN(selectedValue3?.totalPrice)) +
      Number(checkIfNumberisUndefinedOrNaN(selectedValue4?.totalPrice)) +
      Number(checkIfNumberisUndefinedOrNaN(selectedValue5?.totalPrice)) +
      Number(checkIfNumberisUndefinedOrNaN(selectedValue6?.totalPrice)) +
      Number(checkIfNumberisUndefinedOrNaN(selectedValue7?.totalPrice)) +
      Number(checkIfNumberisUndefinedOrNaN(selectedValue8?.totalPrice)) +
      Number(checkIfNumberisUndefinedOrNaN(selectedValue9?.totalPrice)) +
      Number(checkIfNumberisUndefinedOrNaN(selectedValue10?.totalPrice)) +
      Number(checkIfNumberisUndefinedOrNaN(selectedValue11?.totalPrice)) +
      Number(checkIfNumberisUndefinedOrNaN(selectedValue12?.totalPrice)) +
      Number(checkIfNumberisUndefinedOrNaN(selectedValue13?.totalPrice)) +
      Number(checkIfNumberisUndefinedOrNaN(selectedValue14?.totalPrice)) +
      Number(checkIfNumberisUndefinedOrNaN(selectedValue15?.totalPrice)) +
      Number(checkIfNumberisUndefinedOrNaN(selectedValue16?.totalPrice)) +
      Number(checkIfNumberisUndefinedOrNaN(selectedValue17?.totalPrice)) +
      Number(checkIfNumberisUndefinedOrNaN(selectedValue18?.totalPrice)) +
      Number(checkIfNumberisUndefinedOrNaN(selectedValue19?.totalPrice)) +
      Number(checkIfNumberisUndefinedOrNaN(selectedValue20?.totalPrice)) +
      Number(checkIfNumberisUndefinedOrNaN(selectedValue21?.totalPrice)) +
      Number(checkIfNumberisUndefinedOrNaN(selectedValue22?.totalPrice)) +
      Number(checkIfNumberisUndefinedOrNaN(selectedValue23?.totalPrice)) +
      Number(checkIfNumberisUndefinedOrNaN(selectedValue24?.totalPrice)) +
      Number(checkIfNumberisUndefinedOrNaN(selectedValue25?.totalPrice)) +
      Number(checkIfNumberisUndefinedOrNaN(selectedValue26?.totalPrice)) +
      Number(checkIfNumberisUndefinedOrNaN(selectedValue27?.totalPrice)) +
      Number(checkIfNumberisUndefinedOrNaN(selectedValue28?.totalPrice)) +
      Number(checkIfNumberisUndefinedOrNaN(selectedValue29?.totalPrice)) +
      Number(checkIfNumberisUndefinedOrNaN(selectedValue20?.totalPrice)),
  );

  let TotalTaxPrice = Number(vendorTotalPrice * (taxRate / 100)).toFixed(2);

  let shippingTaxRate = Number(taxRate);

  console.log(String(priceId?.priceList?._id), 'priceId?.priceList?._id');
  let totalEverthing = Number(vendorTotalPrice) + Number(TotalTaxPrice);
  const onSubmit = () => {
    setLoading(true);
    if (vendorTotalPrice == 0 && vendorTotalPrice == null) {
      setLoading(false);
      Alert.alert('Kindly Select an option in each item');
    } else {
      let item = {
        grandTotal: String(totalEverthing),
        rfqSelect: [
          {
            pricelist_id: String(priceId?.priceList?._id),
            selectedArray: [
              {
                request: {
                  _id: String(selectedValue?.request?._id),
                },
              },
            ],
            subTotal: String(vendorTotalPrice),
            totalPrice: String(totalEverthing),
          },
          {
            pricelist_id: String(priceId2?.priceList?._id),
            selectedArray: [
              {
                request: {
                  _id: String(selectedValue2?.request?._id),
                },
              },
            ],
            subTotal: String(vendorTotalPrice),
            totalPrice: String(totalEverthing),
          },

          {
            pricelist_id: String(priceId3?.priceList?._id),
            selectedArray: [
              {
                request: {
                  _id: String(selectedValue3?.request?._id),
                },
              },
            ],
            subTotal: String(vendorTotalPrice),
            totalPrice: String(totalEverthing),
          },

          {
            pricelist_id: String(priceId4?.priceList?._id),
            selectedArray: [
              {
                request: {
                  _id: String(selectedValue4?.request?._id),
                },
              },
            ],
            subTotal: String(vendorTotalPrice),
            totalPrice: String(totalEverthing),
          },

          {
            pricelist_id: String(priceId5?.priceList?._id),
            selectedArray: [
              {
                request: {
                  _id: String(selectedValue5?.request?._id),
                },
              },
            ],
            subTotal: String(vendorTotalPrice),
            totalPrice: String(totalEverthing),
          },

          {
            pricelist_id: String(priceId6?.priceList?._id),
            selectedArray: [
              {
                request: {
                  _id: String(selectedValue6?.request?._id),
                },
              },
            ],
            subTotal: String(vendorTotalPrice),
            totalPrice: String(totalEverthing),
          },

          {
            pricelist_id: String(priceId7?.priceList?._id),
            selectedArray: [
              {
                request: {
                  _id: String(selectedValue7?.request?._id),
                },
              },
            ],
            subTotal: String(vendorTotalPrice),
            totalPrice: String(totalEverthing),
          },

          {
            pricelist_id: String(priceId8?.priceList?._id),
            selectedArray: [
              {
                request: {
                  _id: String(selectedValue8?.request?._id),
                },
              },
            ],
            subTotal: String(vendorTotalPrice),
            totalPrice: String(totalEverthing),
          },

          {
            pricelist_id: String(priceId9?.priceList?._id),
            selectedArray: [
              {
                request: {
                  _id: String(selectedValue9?.request?._id),
                },
              },
            ],
            subTotal: String(vendorTotalPrice),
            totalPrice: String(totalEverthing),
          },

          {
            pricelist_id: String(priceId10?.priceList?._id),
            selectedArray: [
              {
                request: {
                  _id: String(selectedValue10?.request?._id),
                },
              },
            ],
            subTotal: String(vendorTotalPrice),
            totalPrice: String(totalEverthing),
          },

          {
            pricelist_id: String(priceId11?.priceList?._id),
            selectedArray: [
              {
                request: {
                  _id: String(selectedValue11?.request?._id),
                },
              },
            ],
            subTotal: String(vendorTotalPrice),
            totalPrice: String(totalEverthing),
          },

          {
            pricelist_id: String(priceId12?.priceList?._id),
            selectedArray: [
              {
                request: {
                  _id: String(selectedValue12?.request?._id),
                },
              },
            ],
            subTotal: String(vendorTotalPrice),
            totalPrice: String(totalEverthing),
          },

          {
            pricelist_id: String(priceId13?.priceList?._id),
            selectedArray: [
              {
                request: {
                  _id: String(selectedValue13?.request?._id),
                },
              },
            ],
            subTotal: String(vendorTotalPrice),
            totalPrice: String(totalEverthing),
          },

          {
            pricelist_id: String(priceId14?.priceList?._id),
            selectedArray: [
              {
                request: {
                  _id: String(selectedValue14?.request?._id),
                },
              },
            ],
            subTotal: String(vendorTotalPrice),
            totalPrice: String(totalEverthing),
          },

          {
            pricelist_id: String(priceId15?.priceList?._id),
            selectedArray: [
              {
                request: {
                  _id: String(selectedValue15?.request?._id),
                },
              },
            ],
            subTotal: String(vendorTotalPrice),
            totalPrice: String(totalEverthing),
          },

          {
            pricelist_id: String(priceId16?.priceList?._id),
            selectedArray: [
              {
                request: {
                  _id: String(selectedValue16?.request?._id),
                },
              },
            ],
            subTotal: String(vendorTotalPrice),
            totalPrice: String(totalEverthing),
          },
          {
            pricelist_id: String(priceId17?.priceList?._id),
            selectedArray: [
              {
                request: {
                  _id: String(selectedValue17?.request?._id),
                },
              },
            ],
            subTotal: String(vendorTotalPrice),
            totalPrice: String(totalEverthing),
          },

          {
            pricelist_id: String(priceId18?.priceList?._id),
            selectedArray: [
              {
                request: {
                  _id: String(selectedValue18?.request?._id),
                },
              },
            ],
            subTotal: String(vendorTotalPrice),
            totalPrice: String(totalEverthing),
          },

          {
            pricelist_id: String(priceId19?.priceList?._id),
            selectedArray: [
              {
                request: {
                  _id: String(selectedValue19?.request?._id),
                },
              },
            ],
            subTotal: String(vendorTotalPrice),
            totalPrice: String(totalEverthing),
          },
          {
            pricelist_id: String(priceId20?.priceList?._id),
            selectedArray: [
              {
                request: {
                  _id: String(selectedValue20?.request?._id),
                },
              },
            ],
            subTotal: String(vendorTotalPrice),
            totalPrice: String(totalEverthing),
          },

          {
            pricelist_id: String(priceId21?.priceList?._id),
            selectedArray: [
              {
                request: {
                  _id: String(selectedValue21?.request?._id),
                },
              },
            ],
            subTotal: String(vendorTotalPrice),
            totalPrice: String(totalEverthing),
          },

          {
            pricelist_id: String(priceId22?.priceList?._id),
            selectedArray: [
              {
                request: {
                  _id: String(selectedValue22?.request?._id),
                },
              },
            ],
            subTotal: String(vendorTotalPrice),
            totalPrice: String(totalEverthing),
          },
          {
            pricelist_id: String(priceId23?.priceList?._id),
            selectedArray: [
              {
                request: {
                  _id: String(selectedValue23?.request?._id),
                },
              },
            ],
            subTotal: String(vendorTotalPrice),
            totalPrice: String(totalEverthing),
          },
          {
            pricelist_id: String(priceId24?.priceList?._id),
            selectedArray: [
              {
                request: {
                  _id: String(selectedValue24?.request?._id),
                },
              },
            ],
            subTotal: String(vendorTotalPrice),
            totalPrice: String(totalEverthing),
          },

          {
            pricelist_id: String(priceId25?.priceList?._id),
            selectedArray: [
              {
                request: {
                  _id: String(selectedValue25?.request?._id),
                },
              },
            ],
            subTotal: String(vendorTotalPrice),
            totalPrice: String(totalEverthing),
          },

          {
            pricelist_id: String(priceId26?.priceList?._id),
            selectedArray: [
              {
                request: {
                  _id: String(selectedValue26?.request?._id),
                },
              },
            ],
            subTotal: String(vendorTotalPrice),
            totalPrice: String(totalEverthing),
          },
          {
            pricelist_id: String(priceId27?.priceList?._id),
            selectedArray: [
              {
                request: {
                  _id: String(selectedValue27?.request?._id),
                },
              },
            ],
            subTotal: String(vendorTotalPrice),
            totalPrice: String(totalEverthing),
          },
          {
            pricelist_id: String(priceId28?.priceList?._id),
            selectedArray: [
              {
                request: {
                  _id: String(selectedValue28?.request?._id),
                },
              },
            ],
            subTotal: String(vendorTotalPrice),
            totalPrice: String(totalEverthing),
          },
          {
            pricelist_id: String(priceId29?.priceList?._id),
            selectedArray: [
              {
                request: {
                  _id: String(selectedValue29?.request?._id),
                },
              },
            ],
            subTotal: String(vendorTotalPrice),
            totalPrice: String(totalEverthing),
          },

          {
            pricelist_id: String(priceId30?.priceList?._id),
            selectedArray: [
              {
                request: {
                  _id: String(selectedValue30?.request?._id),
                },
              },
            ],
            subTotal: String(vendorTotalPrice),
            totalPrice: String(totalEverthing),
          },
        ],
      };

      // let data = {
      //   vendor: item,
      //   id: props?.route?.params?.item?._id,
      // };
      const filteredDAta = item?.rfqSelect.filter(
        value => (value.pricelist_id !== 'undefined') | null,
      );

      let vendor = {
        grandTotal: String(totalEverthing),
        rfqSelect: filteredDAta,
      };
      let data = {
        vendor: vendor,
        id: props?.route?.params?.item?._id,
      };

      console.log(data, 'priceId?.priceList?._idpriceId?.priceList?._id');

      dispatch(clientSelectItems(data))
        .unwrap()
        .then(() => {
          Alert.alert('Order Placed Successfully');
          props.navigation.goBack();
          setLoading(false);
          dispatch(getRfqJob());
        })
        .catch(rejectedValueOrSerializedError => {
          console.log(rejectedValueOrSerializedError, 'a,ndaknkns');
          Alert.alert('Something went wrong. Try again');
          setLoading(false);
          setError(rejectedValueOrSerializedError);
          // handle error here
        });
    }
  };

  console.log(
    props?.route?.params?.item?.vendorArray[1]?.vendor?.logo,
    '{props?.route?.params?.item',
  );
  return (
    <ScrollView>
      <Text
        style={{
          color: 'red',
          paddingBottom: WP(3),
          marginVertical: WP(3),
          paddingLeft: WP(3),
          textAlign: 'center',
        }}>
        Kindly Scroll to the right to see more detail to select your Items.
        Also,after selecting your items , scroll to bottom to place your order.
      </Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingBottom: WP(65),
          backgroundColor: bgColor1,
        }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={true}
        style={{flexGrow: 1}}>
        <View>
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: '#5080FA',
                padding: HP(5),
              }}>
              <Text style={[styles.textColor, {left: WP(18)}]}>Material</Text>

              <Text style={[styles.textColor, {marginLeft: WP(-18)}]}>
                Item
              </Text>
              <Text style={[styles.textColor, {left: WP(29)}]}>Quantity</Text>
              <Text style={[styles.textColor, {left: WP(36)}]}>Unit</Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingLeft: WP(10),
                  marginHorizontal: WP(52),
                  width: WP(20),
                }}>
                {props?.route?.params?.item?.vendorArray.map(item => (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginHorizontal: 60,
                      right: WP(40),
                    }}>
                    <View>
                      <Image
                        style={{
                          width: WP(12),
                          height: HP(5),
                          left: 28,

                          marginHorizontal: WP(5),
                        }}
                        source={{
                          uri: item?.vendor?.logo,
                        }}
                      />
                    </View>
                  </View>
                ))}
                <Text
                  style={[
                    styles.textColor,
                    {left: WP(-75), top: HP(6), fontWeight: 'bold'},
                  ]}>
                  Price
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'column',
              }}>
              {props?.route?.params?.item?.rfqArray.map(item => (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',

                    width: WP(90),
                    padding: WP(6),
                    left: WP(-30),
                  }}>
                  <Image
                    style={styles.Logo}
                    source={{
                      uri: item?.vendor?.logo,
                    }}
                  />
                  <Text
                    style={{
                      left: WP(15),
                      textTransform: 'capitalize',
                      width: 90,
                      // fontWeight: 'bold',
                      backgroundColor: bgColor1,
                      padding: 4,
                      paddingTop: 12,
                      textAlign: 'center',
                      marginVertical: 12,
                    }}>
                    {item?.name?.name}
                  </Text>
                  <Text
                    style={{
                      left: WP(14),
                      textTransform: 'capitalize',
                      width: 90,
                      // fontWeight: 'bold',
                      backgroundColor: bgColor1,
                      padding: WP(4),
                      bottom: 5,
                      marginVertical: 9,
                    }}>
                    {item?.description}
                  </Text>
                  <Text
                    style={{
                      left: WP(20),
                      textTransform: 'capitalize',
                      marginVertical: WP(6.4),
                    }}>
                    {item?.quantity}
                  </Text>

                  <Text
                    style={{
                      left: WP(32),
                      textTransform: 'capitalize',
                      top: 2,
                      backgroundColor: bgColor1,
                      height: WP(9),
                      padding: 4,
                      marginVertical: WP(5.6),
                    }}>
                    {item?.unit}
                  </Text>
                </View>
              ))}
            </View>

            <View
              style={{
                right: WP(10),
                flexDirection: 'row',
                justifyContent: 'space-between',
                top: -1,
                left: 5,
              }}>
              {props?.route?.params?.item?.vendorArray.map(item => (
                <View style={{borderBottomWidth: 1}}>
                  {item?.priceList?.priceArray.map((values, i) => {
                    return (
                      <View
                        style={{
                          flexDirection: 'row',
                          marginVertical: -1,
                          paddingBottom: 12,
                          // borderWidth: 1,
                          borderRightWidth: 1,
                          borderColor: 'black',
                          borderLeftWidth: 1,
                          height: 180,

                          // borderBottomWidth: 1,
                        }}>
                        <Text
                          style={{
                            marginVertical:
                              item?.priceList?.priceArray.length > 3
                                ? WP(10)
                                : WP(12.6),
                            paddingLeft: 3,
                            width: WP(24),
                            paddingTop: 5.6,
                          }}>
                          ${item?.priceList?.priceArray[i]?.totalPrice}
                        </Text>
                        <View
                          style={{
                            top:
                              item?.priceList?.priceArray.length > 3
                                ? WP(10)
                                : WP(13),
                            paddingLeft: WP(2),
                            left: WP(-5),
                          }}>
                          {/* radio button for row 1 */}
                          {item?.priceList?.priceArray[i]?.request?._id ==
                            props?.route?.params?.item?.vendorArray[0]
                              ?.priceList?.priceArray[0]?.request?._id && (
                            <>
                              <TouchableOpacity
                                onPress={() => {
                                  setSelectedId(values?._id),
                                    setselectedValue(values);
                                  setpriceId(item);
                                }}>
                                <FontAwesome
                                  name={
                                    values?._id == selectedId
                                      ? 'circle'
                                      : 'circle-thin'
                                  }
                                  size={24}
                                />
                              </TouchableOpacity>
                            </>
                          )}

                          {/* radio button for row 2 */}
                          {item?.priceList?.priceArray[i]?.request?._id ==
                            props?.route?.params?.item?.vendorArray[0]
                              ?.priceList?.priceArray[1]?.request?._id && (
                            <>
                              <TouchableOpacity
                                onPress={() => {
                                  setSelectedId2(values?._id),
                                    setselectedValue2(values);
                                  setpriceId2(item);
                                }}>
                                <FontAwesome
                                  name={
                                    values?._id == selectedId2
                                      ? 'circle'
                                      : 'circle-thin'
                                  }
                                  size={24}
                                />
                              </TouchableOpacity>
                            </>
                          )}
                          {/* radio button for row 3 */}
                          {item?.priceList?.priceArray[i]?.request?._id ==
                            props?.route?.params?.item?.vendorArray[0]
                              ?.priceList?.priceArray[2]?.request?._id && (
                            <>
                              <TouchableOpacity
                                onPress={() => {
                                  setSelectedId3(values?._id),
                                    setselectedValue3(values);
                                  setpriceId3(item);
                                }}>
                                <FontAwesome
                                  name={
                                    values?._id == selectedId3
                                      ? 'circle'
                                      : 'circle-thin'
                                  }
                                  size={24}
                                />
                              </TouchableOpacity>
                            </>
                          )}

                          {/* radio button for row 3 */}
                          {item?.priceList?.priceArray[i]?.request?._id ==
                            props?.route?.params?.item?.vendorArray[0]
                              ?.priceList?.priceArray[3]?.request?._id && (
                            <>
                              <TouchableOpacity
                                onPress={() => {
                                  setSelectedId4(values?._id),
                                    setselectedValue4(values);
                                  setpriceId4(item);
                                }}>
                                <FontAwesome
                                  name={
                                    values?._id == selectedId4
                                      ? 'circle'
                                      : 'circle-thin'
                                  }
                                  size={24}
                                />
                              </TouchableOpacity>
                            </>
                          )}

                          {/* radio button for row 3 */}
                          {item?.priceList?.priceArray[i]?.request?._id ==
                            props?.route?.params?.item?.vendorArray[0]
                              ?.priceList?.priceArray[4]?.request?._id && (
                            <>
                              <TouchableOpacity
                                onPress={() => {
                                  setSelectedId5(values?._id),
                                    setselectedValue5(values);
                                  setpriceId5(item);
                                }}>
                                <FontAwesome
                                  name={
                                    values?._id == selectedId5
                                      ? 'circle'
                                      : 'circle-thin'
                                  }
                                  size={24}
                                />
                              </TouchableOpacity>
                            </>
                          )}

                          {item?.priceList?.priceArray[i]?.request?._id ==
                            props?.route?.params?.item?.vendorArray[0]
                              ?.priceList?.priceArray[5]?.request?._id && (
                            <>
                              <TouchableOpacity
                                onPress={() => {
                                  setSelectedId6(values?._id),
                                    setselectedValue6(values);
                                  setpriceId6(item);
                                }}>
                                <FontAwesome
                                  name={
                                    values?._id == selectedId6
                                      ? 'circle'
                                      : 'circle-thin'
                                  }
                                  size={24}
                                />
                              </TouchableOpacity>
                            </>
                          )}

                          {item?.priceList?.priceArray[i]?.request?._id ==
                            props?.route?.params?.item?.vendorArray[0]
                              ?.priceList?.priceArray[6]?.request?._id && (
                            <>
                              <TouchableOpacity
                                onPress={() => {
                                  setSelectedId7(values?._id),
                                    setselectedValue7(values);
                                  setpriceId7(item);
                                }}>
                                <FontAwesome
                                  name={
                                    values?._id == selectedId7
                                      ? 'circle'
                                      : 'circle-thin'
                                  }
                                  size={24}
                                />
                              </TouchableOpacity>
                            </>
                          )}

                          {item?.priceList?.priceArray[i]?.request?._id ==
                            props?.route?.params?.item?.vendorArray[0]
                              ?.priceList?.priceArray[7]?.request?._id && (
                            <View>
                              <TouchableOpacity
                                onPress={() => {
                                  setSelectedId8(values?._id),
                                    setselectedValue8(values);
                                  setpriceId8(item);
                                }}>
                                <FontAwesome
                                  name={
                                    values?._id == selectedId8
                                      ? 'circle'
                                      : 'circle-thin'
                                  }
                                  size={24}
                                />
                              </TouchableOpacity>
                            </View>
                          )}

                          {item?.priceList?.priceArray[i]?.request?._id ==
                            props?.route?.params?.item?.vendorArray[0]
                              ?.priceList?.priceArray[8]?.request?._id && (
                            <>
                              <TouchableOpacity
                                onPress={() => {
                                  setSelectedId9(values?._id),
                                    setselectedValue9(values);
                                  setpriceId9(item);
                                }}>
                                <FontAwesome
                                  name={
                                    values?._id == selectedId9
                                      ? 'circle'
                                      : 'circle-thin'
                                  }
                                  size={24}
                                />
                              </TouchableOpacity>
                            </>
                          )}

                          {item?.priceList?.priceArray[i]?.request?._id ==
                            props?.route?.params?.item?.vendorArray[0]
                              ?.priceList?.priceArray[9]?.request?._id && (
                            <>
                              <TouchableOpacity
                                onPress={() => {
                                  setSelectedId10(values?._id),
                                    setselectedValue10(values);
                                  setpriceId10(item);
                                }}>
                                <FontAwesome
                                  name={
                                    values?._id == selectedId10
                                      ? 'circle'
                                      : 'circle-thin'
                                  }
                                  size={24}
                                />
                              </TouchableOpacity>
                            </>
                          )}

                          {item?.priceList?.priceArray[i]?.request?._id ==
                            props?.route?.params?.item?.vendorArray[0]
                              ?.priceList?.priceArray[10]?.request?._id && (
                            <>
                              <TouchableOpacity
                                onPress={() => {
                                  setSelectedId11(values?._id),
                                    setselectedValue11(values);
                                  setpriceId11(item);
                                }}>
                                <FontAwesome
                                  name={
                                    values?._id == selectedId11
                                      ? 'circle'
                                      : 'circle-thin'
                                  }
                                  size={24}
                                />
                              </TouchableOpacity>
                            </>
                          )}

                          {item?.priceList?.priceArray[i]?.request?._id ==
                            props?.route?.params?.item?.vendorArray[0]
                              ?.priceList?.priceArray[11]?.request?._id && (
                            <>
                              <TouchableOpacity
                                onPress={() => {
                                  setSelectedId12(values?._id),
                                    setselectedValue12(values);
                                  setpriceId12(item);
                                }}>
                                <FontAwesome
                                  name={
                                    values?._id == selectedId12
                                      ? 'circle'
                                      : 'circle-thin'
                                  }
                                  size={24}
                                />
                              </TouchableOpacity>
                            </>
                          )}

                          {item?.priceList?.priceArray[i]?.request?._id ==
                            props?.route?.params?.item?.vendorArray[0]
                              ?.priceList?.priceArray[12]?.request?._id && (
                            <>
                              <TouchableOpacity
                                onPress={() => {
                                  setSelectedId13(values?._id),
                                    setselectedValue13(values);
                                  setpriceId13(item);
                                }}>
                                <FontAwesome
                                  name={
                                    values?._id == selectedId13
                                      ? 'circle'
                                      : 'circle-thin'
                                  }
                                  size={24}
                                />
                              </TouchableOpacity>
                            </>
                          )}

                          {item?.priceList?.priceArray[i]?.request?._id ==
                            props?.route?.params?.item?.vendorArray[0]
                              ?.priceList?.priceArray[13]?.request?._id && (
                            <>
                              <TouchableOpacity
                                onPress={() => {
                                  setSelectedId14(values?._id),
                                    setselectedValue14(values);
                                  setpriceId14(item);
                                }}>
                                <FontAwesome
                                  name={
                                    values?._id == selectedId14
                                      ? 'circle'
                                      : 'circle-thin'
                                  }
                                  size={24}
                                />
                              </TouchableOpacity>
                            </>
                          )}

                          {item?.priceList?.priceArray[i]?.request?._id ==
                            props?.route?.params?.item?.vendorArray[0]
                              ?.priceList?.priceArray[14]?.request?._id && (
                            <>
                              <TouchableOpacity
                                onPress={() => {
                                  setSelectedId15(values?._id),
                                    setselectedValue15(values);
                                  setpriceId15(item);
                                }}>
                                <FontAwesome
                                  name={
                                    values?._id == selectedId15
                                      ? 'circle'
                                      : 'circle-thin'
                                  }
                                  size={24}
                                />
                              </TouchableOpacity>
                            </>
                          )}

                          {item?.priceList?.priceArray[i]?.request?._id ==
                            props?.route?.params?.item?.vendorArray[0]
                              ?.priceList?.priceArray[15]?.request?._id && (
                            <>
                              <TouchableOpacity
                                onPress={() => {
                                  setSelectedId16(values?._id),
                                    setselectedValue16(values);
                                  setpriceId16(item);
                                }}>
                                <FontAwesome
                                  name={
                                    values?._id == selectedId16
                                      ? 'circle'
                                      : 'circle-thin'
                                  }
                                  size={24}
                                />
                              </TouchableOpacity>
                            </>
                          )}

                          {item?.priceList?.priceArray[i]?.request?._id ==
                            props?.route?.params?.item?.vendorArray[0]
                              ?.priceList?.priceArray[16]?.request?._id && (
                            <>
                              <TouchableOpacity
                                onPress={() => {
                                  setSelectedId17(values?._id),
                                    setselectedValue17(values);
                                  setpriceId17(item);
                                }}>
                                <FontAwesome
                                  name={
                                    values?._id == selectedId17
                                      ? 'circle'
                                      : 'circle-thin'
                                  }
                                  size={24}
                                />
                              </TouchableOpacity>
                            </>
                          )}

                          {item?.priceList?.priceArray[i]?.request?._id ==
                            props?.route?.params?.item?.vendorArray[0]
                              ?.priceList?.priceArray[17]?.request?._id && (
                            <>
                              <TouchableOpacity
                                onPress={() => {
                                  setSelectedId18(values?._id),
                                    setselectedValue18(values);
                                  setpriceId18(item);
                                }}>
                                <FontAwesome
                                  name={
                                    values?._id == selectedId18
                                      ? 'circle'
                                      : 'circle-thin'
                                  }
                                  size={24}
                                />
                              </TouchableOpacity>
                            </>
                          )}

                          {item?.priceList?.priceArray[i]?.request?._id ==
                            props?.route?.params?.item?.vendorArray[0]
                              ?.priceList?.priceArray[18]?.request?._id && (
                            <>
                              <TouchableOpacity
                                onPress={() => {
                                  setSelectedId19(values?._id),
                                    setselectedValue19(values);
                                  setpriceId19(item);
                                }}>
                                <FontAwesome
                                  name={
                                    values?._id == selectedId19
                                      ? 'circle'
                                      : 'circle-thin'
                                  }
                                  size={24}
                                />
                              </TouchableOpacity>
                            </>
                          )}

                          {item?.priceList?.priceArray[i]?.request?._id ==
                            props?.route?.params?.item?.vendorArray[0]
                              ?.priceList?.priceArray[19]?.request?._id && (
                            <>
                              <TouchableOpacity
                                onPress={() => {
                                  setSelectedId20(values?._id),
                                    setselectedValue20(values);
                                  setpriceId20(item);
                                }}>
                                <FontAwesome
                                  name={
                                    values?._id == selectedId20
                                      ? 'circle'
                                      : 'circle-thin'
                                  }
                                  size={24}
                                />
                              </TouchableOpacity>
                            </>
                          )}

                          {item?.priceList?.priceArray[i]?.request?._id ==
                            props?.route?.params?.item?.vendorArray[0]
                              ?.priceList?.priceArray[20]?.request?._id && (
                            <>
                              <TouchableOpacity
                                onPress={() => {
                                  setSelectedId21(values?._id),
                                    setselectedValue21(values);
                                  setpriceId21(item);
                                }}>
                                <FontAwesome
                                  name={
                                    values?._id == selectedId21
                                      ? 'circle'
                                      : 'circle-thin'
                                  }
                                  size={24}
                                />
                              </TouchableOpacity>
                            </>
                          )}

                          {item?.priceList?.priceArray[i]?.request?._id ==
                            props?.route?.params?.item?.vendorArray[0]
                              ?.priceList?.priceArray[21]?.request?._id && (
                            <>
                              <TouchableOpacity
                                onPress={() => {
                                  setSelectedId22(values?._id),
                                    setselectedValue22(values);
                                  setpriceId22(item);
                                }}>
                                <FontAwesome
                                  name={
                                    values?._id == selectedId21
                                      ? 'circle'
                                      : 'circle-thin'
                                  }
                                  size={24}
                                />
                              </TouchableOpacity>
                            </>
                          )}
                          {item?.priceList?.priceArray[i]?.request?._id ==
                            props?.route?.params?.item?.vendorArray[0]
                              ?.priceList?.priceArray[22]?.request?._id && (
                            <>
                              <TouchableOpacity
                                onPress={() => {
                                  setSelectedId23(values?._id),
                                    setselectedValue23(values),
                                    setpriceId23(item);
                                }}>
                                <FontAwesome
                                  name={
                                    values?._id == selectedId21
                                      ? 'circle'
                                      : 'circle-thin'
                                  }
                                  size={24}
                                />
                              </TouchableOpacity>
                            </>
                          )}

                          {item?.priceList?.priceArray[i]?.request?._id ==
                            props?.route?.params?.item?.vendorArray[0]
                              ?.priceList?.priceArray[23]?.request?._id && (
                            <>
                              <TouchableOpacity
                                onPress={() => {
                                  setSelectedId24(values?._id),
                                    setselectedValue24(values);
                                  setpriceId24(item);
                                }}>
                                <FontAwesome
                                  name={
                                    values?._id == selectedId21
                                      ? 'circle'
                                      : 'circle-thin'
                                  }
                                  size={24}
                                />
                              </TouchableOpacity>
                            </>
                          )}

                          {item?.priceList?.priceArray[i]?.request?._id ==
                            props?.route?.params?.item?.vendorArray[0]
                              ?.priceList?.priceArray[24]?.request?._id && (
                            <>
                              <TouchableOpacity
                                onPress={() => {
                                  setSelectedId25(values?._id),
                                    setselectedValue25(values),
                                    setpriceId25(item);
                                }}>
                                <FontAwesome
                                  name={
                                    values?._id == selectedId21
                                      ? 'circle'
                                      : 'circle-thin'
                                  }
                                  size={24}
                                />
                              </TouchableOpacity>
                            </>
                          )}

                          {item?.priceList?.priceArray[i]?.request?._id ==
                            props?.route?.params?.item?.vendorArray[0]
                              ?.priceList?.priceArray[25]?.request?._id && (
                            <>
                              <TouchableOpacity
                                onPress={() => {
                                  setSelectedId26(values?._id),
                                    setselectedValue26(values);
                                  setpriceId26(item);
                                }}>
                                <FontAwesome
                                  name={
                                    values?._id == selectedId21
                                      ? 'circle'
                                      : 'circle-thin'
                                  }
                                  size={24}
                                />
                              </TouchableOpacity>
                            </>
                          )}

                          {item?.priceList?.priceArray[i]?.request?._id ==
                            props?.route?.params?.item?.vendorArray[0]
                              ?.priceList?.priceArray[26]?.request?._id && (
                            <>
                              <TouchableOpacity
                                onPress={() => {
                                  setSelectedId27(values?._id),
                                    setselectedValue27(values),
                                    setpriceId27(item);
                                }}>
                                <FontAwesome
                                  name={
                                    values?._id == selectedId21
                                      ? 'circle'
                                      : 'circle-thin'
                                  }
                                  size={24}
                                />
                              </TouchableOpacity>
                            </>
                          )}

                          {item?.priceList?.priceArray[i]?.request?._id ==
                            props?.route?.params?.item?.vendorArray[0]
                              ?.priceList?.priceArray[27]?.request?._id && (
                            <>
                              <TouchableOpacity
                                onPress={() => {
                                  setSelectedId28(values?._id),
                                    setselectedValue28(values),
                                    setpriceId28(item);
                                }}>
                                <FontAwesome
                                  name={
                                    values?._id == selectedId21
                                      ? 'circle'
                                      : 'circle-thin'
                                  }
                                  size={24}
                                />
                              </TouchableOpacity>
                            </>
                          )}

                          {item?.priceList?.priceArray[i]?.request?._id ==
                            props?.route?.params?.item?.vendorArray[0]
                              ?.priceList?.priceArray[28]?.request?._id && (
                            <>
                              <TouchableOpacity
                                onPress={() => {
                                  setSelectedId29(values?._id),
                                    setselectedValue29(values);
                                }}>
                                <FontAwesome
                                  name={
                                    values?._id == selectedId21
                                      ? 'circle'
                                      : 'circle-thin'
                                  }
                                  size={24}
                                />
                              </TouchableOpacity>
                            </>
                          )}

                          {item?.priceList?.priceArray[i]?.request?._id ==
                            props?.route?.params?.item?.vendorArray[0]
                              ?.priceList?.priceArray[29]?.request?._id && (
                            <>
                              <TouchableOpacity
                                onPress={() => {
                                  setSelectedId30(values?._id),
                                    setselectedValue30(values),
                                    setpriceId30(item);
                                }}>
                                <FontAwesome
                                  name={
                                    values?._id == selectedId21
                                      ? 'circle'
                                      : 'circle-thin'
                                  }
                                  size={24}
                                />
                              </TouchableOpacity>
                            </>
                          )}
                          {/* radio button for row 3 */}
                          {/* {item?.priceList?.priceArray[i]?.request?._id ==
                        props?.route?.params?.item?.vendorArray[2]?.priceList
                          ?.priceArray[2]?.request?._id && (
                        <>
                          <TouchableOpacity
                            onPress={() => setSelectedId3(values?._id)}>
                            <FontAwesome
                              name={
                                values?._id == selectedId3
                                  ? 'circle'
                                  : 'circle-thin'
                              }
                              size={24}
                            />
                          </TouchableOpacity>
                        </>
                      )} */}

                          {/* radio button for row 3 */}
                          {/* {item?.priceList?.priceArray[i]?.request?._id ==
                        props?.route?.params?.item?.vendorArray[2]?.priceList
                          ?.priceArray[3]?.request?._id && (
                        <>
                          <TouchableOpacity
                            onPress={() => setSelectedId3(values?._id)}>
                            <FontAwesome
                              name={
                                values?._id == selectedId3
                                  ? 'circle'
                                  : 'circle-thin'
                              }
                              size={24}
                            />
                          </TouchableOpacity>
                        </>
                      )} */}

                          {/* radio button for row 3 */}
                          {/* {item?.priceList?.priceArray[i]?.request?._id ==
                        props?.route?.params?.item?.vendorArray[3]?.priceList
                          ?.priceArray[3]?.request?._id && (
                        <>
                          <TouchableOpacity
                            onPress={() => setSelectedId4(values?._id)}>
                            <FontAwesome
                              name={
                                values?._id == selectedId4
                                  ? 'circle'
                                  : 'circle-thin'
                              }
                              size={24}
                            />
                          </TouchableOpacity>
                        </>
                      )} */}

                          {/* radio button for row 4 */}
                          {/* {item?.priceList?.priceArray[i]?.request?._id ==
                        props?.route?.params?.item?.vendorArray[4]?.priceList
                          ?.priceArray[4]?.request?._id && (
                        <>
                          <TouchableOpacity
                            onPress={() => setSelectedId5(values?._id)}>
                            <FontAwesome
                              name={
                                values?._id == selectedId5
                                  ? 'circle'
                                  : 'circle-thin'
                              }
                              size={24}
                            />
                          </TouchableOpacity>
                        </>
                      )} */}
                        </View>
                      </View>
                    );
                  })}
                </View>
              ))}
              {/* {props?.route?.params?.item?.vendorArray.map((item, i) => (
  <View>
    {item?.priceList?.priceArray.map(
      (values, j) => (
        console.log(item?.priceList?.priceArray, ',,,1121212'),
        (<Text>{item?.priceList?.priceArray[j][0]?.price}</Text>)
      ),
    )}
  </View>
))} */}
            </View>
          </View>

          <View
            style={{
              alignSelf: 'center',

              width: '900%',
              height: WP(90),
              left: 30,
            }}>
            <View style={styles.totalDetailContainer}>
              <Text style={styles.totaltax2}>Selected Sub Total : </Text>
              <Text style={[styles.totaltax1, {left: WP(-2)}]}>
                ${vendorTotalPrice}{' '}
              </Text>
            </View>

            <View style={styles.totalDetailContainer}>
              <Text style={styles.totaltax2}> Total Tax Rate :</Text>
              <Text style={[styles.totaltax1]}>${TotalTaxPrice} </Text>
            </View>

            <View style={styles.totalDetailContainer}>
              <Text style={styles.totaltax2}>Total :</Text>
              <Text style={[styles.totaltax1, {left: WP(6)}]}>
                ${totalEverthing}
              </Text>
            </View>
          </View>
          <View
            style={{
              width: WP(50),
              left: WP(20),
              top: WP(-50),
              alignSelf: 'center',
            }}>
            <FormCustomButton
              btnTitle={
                loading ? <ActivityIndicator color="white" /> : 'Place Order'
              }
              backgroundColor={COLOR.BgColor}
              textColor={COLOR.whiteColor}
              onPress={() => onSubmit()}
            />
          </View>
        </View>

        {/* <View>
        <View>
          <View style={{marginVertical: 10, left: 5}}>
            <Text>Item 2</Text>
          </View>
          {props?.route?.params?.item?.vendorArray.map(item => (
            <>
              {item?.priceList?.priceArray.length >= 2 && (
                <>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      width: WP(90),
                      padding: WP(6),
                    }}>
                    <Image
                      style={styles.Logo}
                      source={{
                        uri: item?.vendor?.logo,
                      }}
                    />
                    <Text style={{left: WP(3), textTransform: 'capitalize'}}>
                      {item?.priceList?.priceArray[1]?.request?.name?.name}
                    </Text>
                    <Text>{item?.priceList?.priceArray[0]?.request?.unit}</Text>

                    <Text>
                      {item?.priceList?.priceArray[1]?.request?.quantity}
                    </Text>
                    <Text>${item?.priceList?.priceArray[1]?.totalPrice}</Text>
                    <TouchableOpacity
                      onPress={() => {
                        setId2(item?._id);
                        setSelectedId2(item?._id);
                        setTotalPrice2(
                          item?.priceList?.priceArray[1]?.totalPrice,
                        );
                        setRequestId2(
                          item?.priceList?.priceArray[1]?.request?._id,
                        );
                        setselectedValue2(item?.priceList?._id);
                      }}>
                      {selectedId2 == item?._id ? (
                        <MaterialCommunityIcons
                          name="circle"
                          size={24}
                          color="#5080FA"
                        />
                      ) : (
                        <Entypo name="circle" size={24} />
                      )}
                    </TouchableOpacity>
                  </View>
                </>
              )}
            </>
          ))}
        </View>
      </View>

      */}
      </ScrollView>
    </ScrollView>
  );
};

export default SelectedVendorItem;

const styles = StyleSheet.create({
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  subContainer2: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    top: HP(-3),
  },
  companyImage: {
    width: WP(15),
    height: HP(5),
    marginVertical: HP(3),
    resizeMode: 'contain',
    left: 4,
  },
  headerText: {
    backgroundColor: COLOR.BgColor,
    paddingLeft: WP(15.5),
    padding: 7,
    color: 'white',
    left: WP(-5),
    width: '133%',
  },
  headerText2: {
    backgroundColor: COLOR.BgColor,
    padding: WP(5.5),
    color: 'white',
    width: '133%',
    height: HP(9.5),
  },
  textColor: {
    color: 'white',
    fontWeight: 'bold',
  },
  Logo: {
    width: WP(10),
    height: HP(3),
  },
  totalDetailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: WP(3),
    backgroundColor: 'lightgrey',
    width: WP(120),
    alignSelf: 'center',
  },
  totaltax1: {
    color: 'black',
    width: WP(45),
    fontSize: WP(4),
    fontWeight: 'bold',
  },
  totaltax2: {
    color: 'black',
  },
});
