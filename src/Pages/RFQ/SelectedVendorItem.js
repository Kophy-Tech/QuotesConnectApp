import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useLayoutEffect, useState, useEffect} from 'react';
import Header from '../../component/Header';
import {useDispatch, useSelector} from 'react-redux';
import {getRfqJob} from '../../Redux/Slice/RfqSlice';
import {NAIRA_SYSMBOL, WP} from '../../Utils/theme';
import {Radio, Center, NativeBaseProvider} from 'native-base';

const RadioButton = ({request, totalPrice, pricelist_id}) => {
  console.log(request, 'request');
  const [value, setValue] = React.useState('one');
  return (
    <Radio.Group
      name="myRadioGroup"
      value={value}
      onChange={nextValue => {
        setValue(nextValue);
      }}
      style={styles.textNaira}>
      <Radio value="one" my={1}></Radio>
    </Radio.Group>
  );
};



const SelectedVendorItem = () => {
  const dispatch = useDispatch();
  const allRfq = useSelector(rfq => rfq?.rfq?.allrfq || []);
  const [error, setError] = useState('');
  useLayoutEffect(() => {
    dispatch(getRfqJob())
      .unwrap()
      .then(res => {
        //  console.log(res, 'res');
      })
      .catch(err => {
        if (err) {
          setError(true);
        }
      });
  }, [dispatch]);

  return (
    <View>
      <Header />

      {allRfq.map(item => (
        <View
          key={item._id}
          style={{
            width: WP(90),
          }}>
          {item?.vendorArray.map(item => (
            <View key={Math.random()}>
              {item?.priceList?.priceArray.map(
                details => (
                  console.log(item?.priceList, 'sssssssssssssssssss'),
                  (
                    <>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          top: WP(8),
                        }}>
                        {/* <Text>{details?.price}</Text> */}
                        <Image
                          source={{uri: item?.vendor?.logo}}
                          style={{
                            width: WP(13),
                            height: WP(12),
                          }}
                        />
                        <Text style={styles.textNaira}>
                          {NAIRA_SYSMBOL}
                          {details?.price}
                        </Text>

                        <Text style={styles.textNaira}>
                          {NAIRA_SYSMBOL}
                          {details?.totalPrice}
                        </Text>
                        <RadioButton
                          request={[details?.request?._id]}
                          totalPrice={[details?.totalPrice]}
                          pricelist_id={[details?._id]}
                          grandTotal={[details?.totalPrice + details?.price]}
                        />
                      </View>
                      <View
                        style={{
                          top: WP(13),
                          alignSelf: 'center',
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <View>
                          <Text style={styles.textColor}>{'GrandTotal'}</Text>
                        </View>
                        <View>
                          <Text style={[styles.textColor, {left: WP(3)}]}>
                            {NAIRA_SYSMBOL}
                            {details?.totalPrice + details?.price}{' '}
                          </Text>
                        </View>
                      </View>

                      <TouchableOpacity style={styles.buttonContainer}>
                        <Text
                          style={{
                            textAlign: 'center',
                            top: WP(3),
                            color: 'white',
                          }}>
                          Place Order
                        </Text>
                      </TouchableOpacity>
                    </>
                  )
                ),
              )}
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};

export default SelectedVendorItem;

const styles = StyleSheet.create({
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
});
