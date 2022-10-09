import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Modal,
  Alert,
} from 'react-native';
import React, {useState, useLayoutEffect, useCallback, useMemo} from 'react';
import {ScrollView} from 'react-native-virtualized-view';
import {Box} from 'native-base';
import ButtonH from '../../component/ButtonH';
import {BgColor, bgColor1, ColorText} from '../../Utils/Colors';
import FormCustomButton from '../../component/FormCustomButton';
import {COLOR, HP, WP} from '../../Utils/theme';
import {useNavigation} from '@react-navigation/native';
import {Input} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Autocomplete from 'react-native-autocomplete-input';
import SelectDropdown from 'react-native-select-dropdown';
import {useSelector, useDispatch} from 'react-redux';
import {deleteMaterial, getMaterial} from '../../Redux/Slice/materialSlice';
import Loading from '../../component/Loading';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import uuid from 'react-native-uuid';

import {Spinner} from 'native-base';

import FormInput2 from './FormInput2';
import FormInput from './FormInput';
import {postRfqMaterial} from '../../Redux/Slice/RfqSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DropDownPicker from 'react-native-dropdown-picker';
import {Dropdown} from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';

// const countries = [
//   'Bundle',
//   'Box',
//   'Bag',
//   'Pallet',
//   'Roll',
//   'Case',
//   'Gallon',
//   'Drum',
//   'Hour',
//   'Day',
//   'Week',
//   'Month',
// ];
function titleCase(str) {
  var splitStr = str.toLowerCase().split(' ');
  for (var i = 0; i < splitStr.length; i++) {
    // You do not need to check if i is larger than splitStr length, as your for does that for you
    // Assign it back to the array
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  // Directly return the joined string
  return splitStr.join(' ');
}

const RequestForRfq = props => {
  const [valu, setValu] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [isFocus2, setIsFocus2] = useState(false);
  const [isFocus3, setIsFocus3] = useState(false);

  const renderLabel = () => {
    if (valu || isFocus) {
      return (
        <Text style={[styles.label, isFocus && {color: 'blue'}]}>Select</Text>
      );
    }
    return null;
  };

  const navigation = useNavigation();
  const auth = useSelector(auth => auth.auth.user);

  const [openDropdown, setOpenDropwdown] = useState(false);
  const [values, setValues] = useState(null);
  const [items, setItems] = useState([
    {
      label: 'Each',
      value: 'Each',
    },
    {
      label: 'Bundle',
      value: 'Bundle',
    },
    {
      label: 'Box',
      value: 'Box',
    },
    {
      label: 'Bag',
      value: 'Bag',
    },
    {
      label: 'Pallet',
      value: 'Pallet',
    },
    {
      label: 'Roll',
      value: 'Roll',
    },
    {
      label: 'Bundle',
      value: 'Bundle',
    },
    {
      label: 'Gallon',
      value: 'Gallon',
    },
    {
      label: 'Drum',
      value: 'Drum',
    },
    {
      label: 'Hour',
      value: 'Hour',
    },
    {
      label: 'Day',
      value: 'Day',
    },
    {
      label: 'Week',
      value: 'Week',
    },
    {
      label: 'Month',
      value: 'Month',
    },
  ]);

  const {
    isLoading: LoadingRfq,
    message: messageRfq,
    jobRfq,
  } = useSelector(rfq => rfq.rfq);

  const dispatch = useDispatch();
  const {isLoading, message, refresh} = useSelector(
    material => material.material,
  );

  const [allMaterial, setAllMaterial] = useState([]);

  // console.log(jobRfq?._id)
  const rfq_id = jobRfq?.data?._id || jobRfq?._id;
  console.log(rfq_id, 'ojdldlldaknklsnnkdn');
  const [value, setValue] = useState([]);
  // console.log(value, 'valllllll')
  const [valueText, setValueText] = useState({
    query: '',
    description: '',
    quantity: '',
    unit: '',
    name: '',
  });

  const [modalVisible, setModalVisible] = useState(false);

  React.useEffect(() => {
    const getData = async () => {
      const token = await AsyncStorage.getItem('user');
      const tdata = {
        token,
      };
      dispatch(getMaterial(tdata))
        .unwrap()
        .then(res => {
          let dropDownItem = res.data.map(item => {
            return {
              label: titleCase(item?.name),
              value: item?.name,
              id: item?._id,
              description: item.description.map(details => {
                return {
                  name: details._id,
                  content: details.content,
                  secondary: details._id,
                  value: details.content,
                  label: details.content,
                };
              }),
            };
          });
          setAllMaterial(dropDownItem);
        })
        .catch(err => {
          if (err) {
          }
        });
    };
    getData();
  }, [dispatch, refresh]);

  // const handleAddClick = () => {
  //     const _inputs = [...value];
  //     _inputs.push({
  //         query: '',
  //         description: '',
  //         quantity: '',
  //         unit: '',
  //         name: '',
  //         show: null
  //     });
  //     setValue(_inputs);
  // }
  const [name, setName] = React.useState('');
  const [name2, setName2] = React.useState('');
  const [name3, setName3] = React.useState('  ');
  const [subCategoryId, setSubCategoryId] = React.useState([]);
  // console.log(subCategoryId, 'sssss');

  const [query, setQuery] = useState('');

  const handleRemoveClick = id => {
    const newdata = value.filter(val => val.id !== id);
    setValue(newdata);
  };

  const filterData = query => {
    function match(query) {
      if (allMaterial.find(a => a.name.toLowerCase() === query.toLowerCase())) {
        return true;
      }
      return false;
    }

    // console.log(match(query), 'matchhh')

    if (query === '') {
      return [];
    }
    if (match(query)) {
      return [];
    } else {
      return allMaterial.filter(x =>
        x.name.toLowerCase().includes(query?.toLowerCase()),
      );
    }
  };

  const data = filterData(query);

  const handleInputChange = (inputName, inputValue) => {
    setValueText({
      ...valueText,
      [inputName]: inputValue,
    });
  };

  const addMaterial = () => {
    if (!valueText.quantity) {
      Alert.alert('Please Enter Quantity ');
    } else if (!values) {
      Alert.alert('Please Enter Unit ');
    } else if (name2 == '') {
      Alert.alert('Please Select a material ');
    } else {
      value.push({
        query: valueText.query,
        name: name2,
        unit: values,
        description: valueText.description,
        id: uuid.v4(),
        quantity: valueText.quantity,
      });
      setValueText({
        query: '',
        description: '',
        quantity: '',
        unit: '',
        name: '',
      });
      setName('');
      setQuery('');
      setModalVisible(false);
    }
  };
  console.log(name3, '333333333333333333');
  const submitButton = () => {
    let send = [];

    //  console.log(error, 'error')

    if (value.length === 0) {
      Alert.alert('Kindly select a material');
    } else {
      const dataSend = value.map(
        ({name, description, quantity, unit, query}) => {
          // console.log(confirm())
          send.push({
            name: name,
            description: name3,
            unit: unit,
            quantity,
          });
        },
      );
      console.log(send, 'tttt');

      const datarfqmaterial = {
        rfqArray: send,
        rfq_id,
      };
      console.log(send);
      console.log(datarfqmaterial);
      console.log(rfq_id, 'rfq_id');
      dispatch(postRfqMaterial(datarfqmaterial))
        .unwrap()
        .then(res => {
          if (res.status === 'Updated') {
            setValue([]);
            navigation.navigate('selectvendors');
            // Alert.alert(`${res.msg}`);
          }
          console.log(res.status);
        })
        .catch(err => {
          console.log(err, 'error from postrfqjob');
          Alert.alert(`${err}`);
        });
    }
  };

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

  if (allMaterial.length === 0) {
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
            Create Material at Material Dashboard
          </Text>
          <Box my="4">
            <FormCustomButton
              placeholder=""
              borderColor={COLOR.BgColor}
              borderWidth={WP(0.3)}
              btnTitle="Next To  Vendor Screen"
              backgroundColor={COLOR.BgColor}
              textColor={COLOR.whiteColor}
              onPress={() => navigation.navigate('selectvendors')}
            />
          </Box>
        </View>
      </View>
    );
  }

  const deleteMaterialPost = () => {
    const {_id} = value;
    const dataJob = {
      _id,
    };
    console.log({dataJob});
    dispatch(deleteMaterial(dataJob))
      .unwrap()
      .then(res => {
        if (res.status === 'Deleted') {
          Alert.alert(`${res.msg}`);
          navigation.goBack();
        }
        console.log(res.status);
      })
      .catch(err => {
        console.log(err);
        Alert.alert(`${err}`);
      });
  };
  return (
    <>
      <KeyboardAwareScrollView
        horizontal={false}
        style={{width: '100%', height: '100%'}}
        contentContainerStyle={{paddingBottom: WP(50)}}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <Box px="4">
          <View style={styles.addButtonContainer}>
            <ButtonH
              style={{
                borderColor: BgColor,
                width: '100%',
                backgroundColor: BgColor,
                borderRadius: 5,
              }}
              onPress={() => setModalVisible(true)}>
              <Text style={[styles.butttonText, {color: '#fff'}]}>
                Add Material
              </Text>
            </ButtonH>
          </View>

          <View style={styles.tableColumnHeader}>
            <View style={styles.tableColumnRegular}>
              <Text style={styles.textLineItemH}>Item Name</Text>
            </View>
            <View style={styles.tableColumnRegular}>
              <Text style={styles.textLineItemH}>Description</Text>
            </View>
            <View style={styles.tableColumnRegular}>
              <Text style={styles.textLineItemH}>Quantity</Text>
            </View>
            <View style={styles.tableColumnRegular}>
              <Text style={[styles.textLineItemH, {left: WP(-7)}]}>Unit</Text>
            </View>
          </View>

          {value?.map((val, key) => {
            return (
              <View style={styles.tableRow} key={val.id}>
                <View style={[styles.tableColumnRegular2]}>
                  <Text style={styles.textLineItem1}>{val?.query}</Text>
                </View>
                <View style={styles.tableColumnRegular2}>
                  <Text style={styles.textLineItem2}>{val?.description}</Text>
                </View>
                <View style={styles.tableColumnRegular}>
                  <Text style={styles.textLineItem1}>{val?.quantity}</Text>
                </View>
                <View
                  style={[
                    styles.tableColumnRegular3,
                    {
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    },
                  ]}>
                  <View
                    style={{
                      flex: 3,
                    }}>
                    <Text style={styles.textLineItem1}>{val?.unit}</Text>
                  </View>

                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      flex: 1,
                    }}>
                    <TouchableOpacity onPress={() => {}}>
                      <Icon
                        name="delete"
                        size={25}
                        color={'red'}
                        onPress={() => handleRemoveClick(val.id)}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            );
          })}

          <Box mt="40">
            <TouchableOpacity
              onPress={submitButton}
              style={{
                backgroundColor: 'green',
                padding: WP(4),
                borderRadius: WP(3),
                borderWidth: 1,
                borderColor:'green',
                top: WP(4),
              }}>
              {LoadingRfq ? (
                <Spinner
                  accessibilityLabel="Loading posts"
                  size="sm"
                  color="#fff"
                />
              ) : (
                <Text
                  style={{
                    fontSize: WP(4.5),
                    color: COLOR.whiteColor,
                    textAlign: 'center',
                    fontWeight: '400',
                  }}>
                  Next
                </Text>
              )}
            </TouchableOpacity>
          </Box>

          {/* <Box mt="10">
            <TouchableOpacity
              onPress={submitButton}
              style={{
                backgroundColor: 'red',
                padding: WP(4),
                borderRadius: WP(3),

                top: WP(4),
              }}>
              <Text
                style={{
                  fontSize: WP(4.5),
                  color: COLOR.whiteColor,
                  textAlign: 'center',
                  fontWeight: '400',
                }}>
                Delete Request
              </Text>
            </TouchableOpacity>
          </Box> */}
        </Box>
      </KeyboardAwareScrollView>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.IconContainer}>
                <Icon
                  name="close-box"
                  size={35}
                  color={COLOR.BgColor}
                  onPress={() => setModalVisible(false)}
                />
              </View>

              <View style={styles.tableContainer}>
                <View>
                  <View style={styles.subContainer}>
                    {renderLabel()}
                    <Dropdown
                      style={[
                        styles.dropdown,
                        isFocus && {borderColor: 'blue'},
                      ]}
                      placeholderStyle={styles.placeholderStyle}
                      selectedTextStyle={[styles.selectedTextStyle]}
                      inputSearchStyle={styles.inputSearchStyle}
                      iconStyle={styles.iconStyle}
                      data={allMaterial}
                      search
                      maxHeight={300}
                      labelField="label"
                      valueField="value"
                      placeholder={!isFocus ? 'Select a material' : '...'}
                      searchPlaceholder="Search..."
                      value={value}
                      onFocus={() => setIsFocus(true)}
                      onBlur={() => setIsFocus(false)}
                      onChange={item => {
                        console.log(item, 'itemmmmm');
                        setName2(item.id);
                        setSubCategoryId(item?.description);
                        handleInputChange('query', item?.value);
                        // setIsFocus(false);e
                      }}
                      renderLeftIcon={() => (
                        <AntDesign
                          style={styles.icon}
                          color={isFocus ? 'blue' : 'black'}
                          name="Safety"
                          size={20}
                        />
                      )}
                    />
                  </View>
                </View>

                {subCategoryId.length > 0 && (
                  <View>
                    <View style={styles.subContainer}>
                      {renderLabel()}
                      <Dropdown
                        style={[
                          styles.dropdown,
                          isFocus && {borderColor: 'blue'},
                        ]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={subCategoryId}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={
                          !isFocus ? 'Select Material Description' : '...'
                        }
                        searchPlaceholder="Search..."
                        value={value}
                        onFocus={() => setIsFocus2(true)}
                        onBlur={() => setIsFocus2(false)}
                        onChange={item => {
                          setName3(item?.value);
                          handleInputChange('description', item?.value);
                          // setIsFocus(false);e
                        }}
                        renderLeftIcon={() => (
                          <AntDesign
                            style={styles.icon}
                            color={isFocus2 ? 'blue' : 'black'}
                            name="Safety"
                            size={20}
                          />
                        )}
                      />
                    </View>
                  </View>
                )}
                {/* <View>
                  <Autocomplete
                    value={query}
                    onChangeText={text => {
                      setQuery(text);
                    }}
                    //   horizontal={true}
                    placeholder="Enter material names"
                    data={data}
                    style={{
                      backgroundColor: 'transparent',
                      color: 'black',
                    }}
                    inputContainerStyle={{
                      borderColor: COLOR.BgColor,
                      borderRadius: 1,
                      borderWidth: 0.5,
                      padding: WP(3),
                      width: WP('90%'),
                      alignSelf: 'center',
                      top: WP(12),
                    }}
                    listContainerStyle={{
                      backgroundColor: '#a9b4fc',
                    }}
                    flatListProps={{
                      listKey: (item, index) => `_key${index.toString()}`,
                      keyExtractor: (item, index) => `_key${index.toString()}`,
                      renderItem: ({item}) => {
                        //   console.log(item?.name);
                        return (
                          <TouchableOpacity
                            key={item?._id}
                            onPress={() => {
                              setQuery(item.name);
                              setName(item._id);
                            }}
                            style={{
                              padding: 10,
                            }}>
                            <Text style={styles.itemText}>{item?.name}</Text>
                          </TouchableOpacity>
                        );
                      },
                    }}
                  />
                </View> */}

                {/* <View style={[styles.formInput, {top: WP(10)}]}>
                  <FormInput2
                    value={valueText.description}
                    onChangeText={text =>
                      handleInputChange('description', text)
                    }
                    placeholder="Enter your description"
                  />
                </View> */}
                <View
                  style={{
                    height: HP(8),
                    marginTop: WP(7),
                    width: WP('86%'),
                    alignSelf: 'center',
                  }}>
                  <FormInput2
                    value={valueText.quantity}
                    onChangeText={text => handleInputChange('quantity', text)}
                    placeholder="Enter the number of quantity"
                  />
                  {/* <FormInput
                    value={valu eText.quantity}
                    placeholder="quantity"
                    onChangeText={text => handleInputChange('quantity', text)}
                    placeholder="Enter the number quantity"
                  /> */}
                </View>
              </View>
              <View style={{width: WP('86%'), alignSelf: 'center'}}>
                <Dropdown
                  style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  iconStyle={styles.iconStyle}
                  data={items}
                  search
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder={!isFocus ? 'Select item' : '...'}
                  searchPlaceholder="Search..."
                  value={value}
                  onFocus={() => setIsFocus3(true)}
                  onBlur={() => setIsFocus3(false)}
                  onChange={item => {
                    setName(item?.id);
                    setValues(item?.value);
                    // setIsFocus(false);e
                  }}
                  renderLeftIcon={() => (
                    <AntDesign
                      style={styles.icon}
                      color={isFocus2 ? 'blue' : 'black'}
                      name="Safety"
                      size={20}
                    />
                  )}
                />
                {/* <DropDownPicker
                  zIndexInverse={1111000}
                  zIndex={1111000}
                  style={{
                    top: WP(3),
                    width: '90%',
                    alignSelf: 'center',
                    borderRadius: 0,
                    borderColor: 'grey',
                    borderColor: BgColor,
                  }}
                  open={openDropdown}
                  value={values}
                  items={items}
                  setOpen={setOpenDropwdown}
                  setValue={setValues}
                  setItems={setItems}
                  multiple={false}
                  itemKey={value}
                  flatListProps={{
                    listKey: (items, index) => `_key${index.toString()}`,
                    keyExtractor: (items, index) => `_key${index.toString()}`,
                  }}
                /> */}
                {/* <SelectDropdown
                    buttonStyle={{
                      width: '97%',
                      height: '60%',
                      backgroundColor: 'transparent',
                      color: 'black',
                      marginTop: 30,
                      alignSelf: 'center',
                    }}
                    dropdownStyle={{
                      backgroundColor: '#fff',
                      alignSelf: 'center',
                    }}
                    rowStyle={{
                      borderBottomColor: 'transparent',
                      height: 35,
                      alignSelf: 'center',
                    }}
                    rowTextStyle={{
                      color: 'black',
                      fontSize: 15,
                    }}
                    data={countries}
                    defaultValue={valueText.unit}
                    onSelect={(selectedItem, ind) =>
                      handleInputChange('unit', selectedItem)
                    }
                    buttonTextAfterSelection={(selectedItem, index) => {
                      // inputHandleUnit(selectedItem, index)

                      // text represented after item is selected
                      // if data array is an array of objects then return selectedItem.property to render after item is selected
                      return selectedItem;
                    }}
                    rowTextForSelection={(item, i) => {
                      // inputHandleUnit(item, index)

                      // text represented for each item in dropdown
                      // if data array is an array of objects then return item.property to represent item in dropdown
                      return item;
                    }}
                  /> */}
              </View>

              <Box mt="40">
                <TouchableOpacity
                  onPress={addMaterial}
                  style={{
                    backgroundColor: 'green',
                    padding: WP(4),
                    borderRadius: WP(3),
                    borderWidth: 1,
                    borderColor: 'green',
                    top: WP(-20),
                    width: WP(80),
                    alignSelf: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: WP(4.5),
                      color: COLOR.whiteColor,
                      textAlign: 'center',
                      fontWeight: '400',
                    }}>
                    Add
                  </Text>
                </TouchableOpacity>
              </Box>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
};

export default RequestForRfq;

const styles = StyleSheet.create({
  butttonText: {
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 18,
    fontStyle: 'normal',
  },
  addButtonContainer: {
    marginVertical: 30,
    width: '38%',
    alignSelf: 'flex-end',
  },
  tableColumnRegular: {
    flex: 1,

    justifyContent: 'center',

    alignSelf: 'stretch',
    alignItems: 'center',
  },
  tableColumnRegular2: {
    flex: 2,

    justifyContent: 'center',

    alignSelf: 'stretch',
  },

  tableColumnRegular3: {
    flex: 2.5,

    justifyContent: 'center',

    flexDirection: 'row',
  },
  tableColumnHeader: {
    flexDirection: 'row',
    justifyContent: 'center',

    backgroundColor: BgColor,
    borderRadius: 10,
    height: 62,
  },
  textLineItemH: {
    fontSize: 13,
    fontWeight: '400',
    color: '#fff',
    textAlign: 'center',
    lineHeight: 15,
  },

  tableRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: bgColor1,
    height: 60,
    marginBottom: 2,
  },
  itemText: {
    fontSize: 15,
    margin: 2,
    color: '#fff',
  },

  textLineItem1: {
    fontSize: 14,
    fontWeight: '400',
    color: ColorText,
    textAlign: 'center',

    lineHeight: 18,
    textTransform: 'capitalize',
  },
  textLineItem2: {
    fontSize: 14,
    fontWeight: '400',
    color: ColorText,
    textAlign: 'center',

    lineHeight: 18,
    // textTransform: 'capitalize',
  },

  autocompleteContainer: {
    // Hack required to make the autocomplete
    // work on Andrdoid
    flex: 1,

    width: '100%',

    // paddingTop: 40,
  },
  autocompleteContainerStyle1: {
    backgroundColor: 'transparent',
  },

  // Modal
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    // margin: 20,
    backgroundColor: 'white',
    width: '95%',
    height: '70%',

    // borderRadius: 20,
    // padding: 35,
    // alignItems: "center",
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  IconContainer: {
    margin: 5,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  tableContainer: {
    flexDirection: 'column',
  },
  formInput: {
    height: WP(16),
    top: WP(15),
    width: WP('84%'),
    alignSelf: 'center',
  },
  dropdown: {
    height: HP(6),
    borderColor: BgColor,
    borderWidth: 0.5,
    borderRadius: 0,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  subContainer: {
    width: WP(85),
    height: WP(2),
    marginVertical: WP(9),
    alignSelf: 'center',
  },
});
