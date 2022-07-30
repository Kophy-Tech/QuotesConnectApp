import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform,
  FlatList,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useLayoutEffect, useState, useEffect} from 'react';
import Header from '../../component/Header';
import {useDispatch, useSelector} from 'react-redux';
import {clientSelectItems, getRfqJob} from '../../Redux/Slice/RfqSlice';
import {COLOR, HP, NAIRA_SYSMBOL, WP} from '../../Utils/theme';
import {Radio, Center, NativeBaseProvider} from 'native-base';
import RadioForm from 'react-native-simple-radio-button';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Table, TableWrapper, Row, Cell} from 'react-native-table-component';
import FormCustomButton from '../../component/FormCustomButton';

const SelectedVendorItem = props => {
  const {
    route: {
      params: {item},
    },
  } = props;

  console.log(item, '000000000000');

  const [chosenOption, setChosenOption] = useState([{}]);
  console.log(chosenOption, 'sssssssssss');
  const [selectedId, setSelected] = useState(null);

  const TableHeader = ['Company', 'Item', 'Unit', 'Quantity', 'Price'];
  const TableHeader2 = [
    'Company',
    'Sub Total',
    'Total Tax Rate',
    'Shipping',
    'Total',
    '',
  ];
  const WidthTable = [WP(19), WP(19), WP(19), WP(18), WP(13), WP(20)];
  const TableData = useState([]);

  //will store our current user options
  const dispatch = useDispatch();
  const allRfq = useSelector(rfq => rfq?.rfq?.allrfq?.data || []);
  const [error, setError] = useState('');
  useLayoutEffect(() => {
    dispatch(getRfqJob())
      .unwrap()
      .then(res => {
        //  console.log(res, 'res');
      })
      .catch(err => {
        if (err) {
          setError(err);
        }
      });
  }, [dispatch]);

  const onSubmit = () => {
    let data = {
      data: chosenOption,
      id: item?._id,
    };
    dispatch(clientSelectItems(data))
      .unwrap()
      .then(() => {
        dispatch(getRfqJob());
        Alert.alert('Order Placed successfully');
        props.navigation.goBack();
        setLoading(false);
        dispatch(getRfqJob());
      })
      .catch(rejectedValueOrSerializedError => {
        setError(rejectedValueOrSerializedError);
        // handle error here
      });
  };

  return (
    <ScrollView style={styles._mainContainer}>
      <View style={styles._headerContainer}></View>

      <Row
        data={TableHeader2}
        style={styles.head}
        widthArr={WidthTable}
        textStyle={styles.text}
      />

      <View>
        <View>
          <View>
            {item?.vendorArray.map(details => (
              <View>
                <View style={{top: WP(19), left: WP(8)}}>
                  <Text>
                    {item?.status == 'submitted' && details?.vendor?.name}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>

      <View>
        {item?.vendorArray.map(details => (
          <>
            {details?.priceList?.priceArray.map(
              items => (
                console.log(details?.priceList?.subTotal, 'ddd111'),
                (
                  <>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        top: WP(15),
                        left: WP(3),
                      }}>
                      <View>
                        <Text style={{left: WP(10)}}>
                          {details?.priceList?.subTotal}
                        </Text>
                      </View>
                      <View>
                        <Text style={{left: WP(7)}}>
                          {details?.priceList?.tax}%
                        </Text>
                      </View>
                      <View>
                        <Text style={{left: WP(10)}}>
                          {details?.priceList?.shipping_cost}
                        </Text>
                      </View>

                      <View>
                        <Text style={{left: WP(3)}}>
                          {details?.priceList?.totalPrice}
                        </Text>
                      </View>

                      <TouchableOpacity
                        onPress={() => {
                          setSelected(item?._id);
                          setChosenOption({
                            grandTotal: details?.priceList?.totalPrice,
                            rfqSelect: [
                              {
                                pricelist_id: details?.priceList?._id,
                                selectedArray: [
                                  {
                                    request: {
                                      _id: items?.request?._id,
                                    },
                                  },
                                ],
                                subTotal: details?.priceList?.subTotal,
                                totalPrice: details?.priceList?.totalPrice,
                              },
                            ],
                          });
                        }}>
                        <MaterialCommunityIcons
                          name={
                            item?._id == selectedId
                              ? 'rectangle'
                              : 'rectangle-outline'
                          }
                          size={25}
                        />
                      </TouchableOpacity>
                    </View>

                    {/* totalPrice */}
                  </>
                )
              ),
            )}
          </>
        ))}
      </View>

      <View
        style={{marginVertical: WP(23), width: WP(80), alignSelf: 'center'}}>
        <FormCustomButton
          btnTitle={'Place Order'}
          backgroundColor={COLOR.BgColor}
          textColor={COLOR.whiteColor}
          onPress={() => onSubmit()}
        />
      </View>
    </ScrollView>
  );
};

export default SelectedVendorItem;

const styles = StyleSheet.create({
  _mainContainer: {
    backgroundColor: '#fff',
    flex: 1,
  },
  buttonContainer: {
    backgroundColor: '#5080FA',
    width: WP(50),
    height: WP(10),
    top: WP(25),
    alignSelf: 'center',
  },
  textNaira: {top: WP(3)},
  textColor: {
    color: '#5080FA',
  },
  _headerContainer: {
    top: Platform.OS === 'ios' ? WP(8) : 0,
  },
  subContainer: {
    top: WP(9),
    padding: WP(3),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  head: {
    height: HP(8),
    backgroundColor: COLOR.BgColor,
    borderRadius: WP(2),
    top: WP(13),
    width: WP(92),
    left: WP(5),
  },
  text: {margin: 6, color: '#fff'},
  row: {flexDirection: 'row', backgroundColor: '#F7FCFB', marginVertical: 2},
  btn: {width: 58, height: 18, backgroundColor: '#78B7BB', borderRadius: 2},
  btnText: {textAlign: 'center', color: '#fff'},
  tableContainer: {
    //  flexDirection:'column'
  },
});
