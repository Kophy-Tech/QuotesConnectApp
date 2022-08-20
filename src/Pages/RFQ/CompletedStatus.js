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
import {TouchableOpacity} from 'react-native-gesture-handler';
import FormCustomButton from '../../component/FormCustomButton';
import {useDispatch, useSelector} from 'react-redux';
import {clientSelectItems, getRfqJob} from '../../Redux/Slice/RfqSlice';

const SelectedVendorItem = props => {
  console.log(props?.route?.params?.item, 'oajodkadkmksks');
  const [totalPrice, setTotalPrice] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [priceId, setPriceId] = useState(null);
  const [requestId, setRequestId] = useState(null);

  const [totalPrice2, setTotalPrice2] = useState(null);
  const [selectedId2, setSelectedId2] = useState(null);
  const [priceId2, setPriceId2] = useState(null);
  const [requestId2, setRequestId2] = useState(null);
  const [id2, setId2] = useState(null);

  const [totalPrice3, setTotalPrice3] = useState(null);

  const [selectedId3, setSelectedId3] = useState(null);
  const [priceId3, setPriceId3] = useState(null);
  const [requestId3, setRequestId3] = useState(null);
  const [id3, setId3] = useState(null);
  const [page, setPage] = useState(0);
  const [taxRate, setTaxRate] = useState(0);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  let vendorTotalPrice = Number(totalPrice + totalPrice2 + totalPrice3);
  let TotalTaxPrice = Number(
    (totalPrice + totalPrice2 + totalPrice3) * (taxRate / 100),
  ).toFixed(2);

  let shippingTaxRate = Number(taxRate);

  let totalEverthing = Number(vendorTotalPrice) + Number(TotalTaxPrice);

  const onSubmit = () => {
    setLoading(true);
    if (totalPrice == null && totalPrice2 == null && totalPrice3 == null) {
      setLoading(false);
      Alert.alert('Kindly Select an option in each item');
    } else {
      let item = {
        grandTotal: String(totalEverthing),
        rfqSelect: [
          {
            pricelist_id: String(priceId),
            selectedArray: [
              {
                request: {
                  _id: String(requestId),
                },
              },
            ],
            subTotal: String(vendorTotalPrice),
            totalPrice: String(totalEverthing),
          },

          {
            id2: id2,
            pricelist_id: String(priceId2),
            selectedArray: [
              {
                request: {
                  _id: String(requestId2),
                },
              },
            ],
            subTotal: String(vendorTotalPrice),
            totalPrice: String(totalEverthing),
          },
          {
            id3: id3,
            pricelist_id: String(priceId3),
            selectedArray: [
              {
                request: {
                  _id: String(requestId3),
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
        value => value.pricelist_id !== 'null',
      );

      let vendor = {
        grandTotal: String(totalEverthing),
        rfqSelect: filteredDAta,
      };
      let data = {
        vendor: vendor,
        id: props?.route?.params?.item?._id,
      };

      dispatch(clientSelectItems(data))
        .unwrap()
        .then(() => {
          Alert.alert('Order Placed successfully');
          props.navigation.goBack();
          setLoading(false);
          dispatch(getRfqJob());
        })
        .catch(rejectedValueOrSerializedError => {
          Alert.alert('Something went wrong. Try again');
          setLoading(false);
          setError(rejectedValueOrSerializedError);
          // handle error here
        });
    }
  };
  return (
    <ScrollView
      contentContainerStyle={{paddingBottom: WP(65)}}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}>
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: '#5080FA',
            padding: HP(3),
          }}>
          <Text style={styles.textColor}>Company</Text>
          <Text style={styles.textColor}>Item</Text>
          <Text style={styles.textColor}>Unit</Text>
          <Text style={styles.textColor}>Quantity</Text>
          <Text style={styles.textColor}>Price</Text>
          <Text style={styles.textColor}></Text>
        </View>
      </View>
      <View>
        {props?.route?.params?.item?.vendorArray.length <= 3 && (
          <View>
            {props?.route?.params?.item?.vendorArray.map(
              item => (
                console.log(item?.priceList?.priceArray, 'alkndla'),
                (
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
                      {item?.priceList?.priceArray[0]?.request?.name?.name}
                    </Text>
                    <Text>{item?.priceList?.priceArray[0]?.request?.unit}</Text>

                    <Text>
                      {item?.priceList?.priceArray[0]?.request?.quantity}
                    </Text>
                    <Text>${item?.priceList?.priceArray[0]?.totalPrice}</Text>
                  </View>
                )
              ),
            )}
          </View>
        )}
      </View>

      <View>
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
                  </View>
                </>
              )}
            </>
          ))}
        </View>
      </View>

      <View>
        <View>
          <View style={{marginVertical: 10, left: 5}}></View>
          {props?.route?.params?.item?.vendorArray.map(item => (
            <>
              {item?.priceList?.priceArray.length == 3 && (
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
                      {item?.priceList?.priceArray[2]?.request?.name?.name}
                    </Text>
                    <Text>{item?.priceList?.priceArray[2]?.request?.unit}</Text>

                    <Text>
                      {item?.priceList?.priceArray[2]?.request?.quantity}
                    </Text>
                    <Text>${item?.priceList?.priceArray[2]?.totalPrice}</Text>
                  </View>
                </>
              )}
            </>
          ))}
        </View>
      </View>

      <View style={{left: WP(10), width: WP(20), alignSelf: 'center'}}>
        <View style={styles.totalDetailContainer}>
          <Text style={styles.totaltax2}>Total :</Text>
          <Text style={styles.totaltax1}>
            {' '}
            ${props?.route?.params?.item?.grandTotal}
          </Text>
        </View>
      </View>
      {/* <View style={{width: WP(50), alignSelf: 'center'}}>
        <FormCustomButton
          btnTitle={
            loading ? <ActivityIndicator color="white" /> : 'Place Order'
          }
          backgroundColor={COLOR.BgColor}
          textColor={COLOR.whiteColor}
          onPress={() => onSubmit()}
        />
      </View> */}
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
