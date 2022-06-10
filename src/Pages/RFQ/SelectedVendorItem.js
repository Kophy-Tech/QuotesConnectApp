import {StyleSheet, Text, View, Image, TouchableOpacity,Platform ,FlatList} from 'react-native';
import React, {useLayoutEffect, useState, useEffect} from 'react';
import Header from '../../component/Header';
import {useDispatch, useSelector} from 'react-redux';
import {clientSelectItems, getRfqJob} from '../../Redux/Slice/RfqSlice';
import {NAIRA_SYSMBOL, WP} from '../../Utils/theme';
import {Radio, Center, NativeBaseProvider} from 'native-base';
import RadioForm from 'react-native-simple-radio-button';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// const RadioButton = ({request, totalPrice, pricelist_id}) => {
//   console.log(request, 'request');
//   const [value, setValue] = React.useState('one');
//   return (
//     <Radio.Group
//       name="myRadioGroup"
//       value={value}
//       onChange={nextValue => {
//         setValue(nextValue);
//       }}
//       style={styles.textNaira}>
//       <Radio value="one" my={1}></Radio>
//     </Radio.Group>
//   );
// };
var radio_props = [
  {label: 'param1', value: 0 },

];
 

const SelectedVendorItem = props => {
  const {
    route: {params},
  } = props;
  const [chosenOption, setChosenOption] = useState([{}]);
  const [selectedId, setSelected] = useState(null);
  //will store our current user options
  const dispatch = useDispatch();
  const allRfq = useSelector(rfq => rfq?.rfq?.allrfq?.data || []);
  console.log(allRfq, 'rrrrrrrrrrr')
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

  console.log(params, 'rpa')
  const onSubmit = () => {
    let data = {
     data:chosenOption,
     id:params?.item?._id
    };
    dispatch(clientSelectItems(data));
  };

  return (
    <View style={styles._mainContainer}>
      <View style={styles._headerContainer}>  
      <Header />
      </View>


      {allRfq?.map(item => (
        <View
          key={item._id}
          style={{
            width: WP(90),
          }}>
          {item?.vendorArray.map(item => (
            <View key={Math.random()}>
              {item?.priceList?.priceArray.map(details => {
                console.log(details, '2@@@@@@@cc@@@@@@@@@@@@@@@@')
                return (
                  <>
                    <TouchableOpacity
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        top: WP(8),
                        paddingBottom: WP(1),
                      }}
                      onPress={value => {
                        setChosenOption([
                          {
                            grandTotal: details?.totalPrice + details?.price,
                            rffSelect: [
                              {
                                priceList_id: details?._id,
                                selectedArray: [
                                  {
                                    request: {
                                      id: details.request?._id,
                                    },
                                  },
                                ],
                              },
                            ],
                          },
                        ]);
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


                    <TouchableOpacity onPress={()=>setSelected(details?._id)}>
                  <MaterialCommunityIcons  name={selectedId==details?._id ?"rectangle":"rectangle-outline"} size={34}
                  
                  color={selectedId==details?._id ?"#5080FA":"#5080FA"}/>
                   </TouchableOpacity>
                     
                    </TouchableOpacity>
                    <View
                      style={{
                        top: WP(13),
                        alignSelf: 'center',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingBottom: WP(14),
                      }}>
                      <View>
                        <Text style={styles.textColor}>{'GrandTotal'}</Text>
                      </View>
                      <View>
                        <Text style={[styles.textColor, {left: WP(3)}]}>
                          {NAIRA_SYSMBOL}
                          {details?.totalPrice + details?.price}
                        </Text>
                      </View>

                      
                    </View>
                  </>
                );
              })}
            </View>
          ))}
        </View>
      ))}
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => onSubmit()}>
        <Text
          style={{
            textAlign: 'center',
            top: WP(3),
            color: 'white',
          }}>
          Place Order
        </Text>
      </TouchableOpacity>







      
    </View>
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
  _headerContainer:{
    top:Platform.OS === 'ios' ?WP(8) : 0
  },
  subContainer:{
    top:WP(9),
    padding:WP(3),
    flexDirection:'row',
    justifyContent:'space-between'

  }
});
