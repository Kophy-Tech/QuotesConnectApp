import { StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native'
import React, { useState, useLayoutEffect, useCallback,useMemo } from 'react'
import { ScrollView } from 'react-native-virtualized-view';
import { Box, } from "native-base";
import ButtonH from '../../component/ButtonH';
import { BgColor, bgColor1, ColorText } from '../../Utils/Colors';
import FormCustomButton from '../../component/FormCustomButton';
import { COLOR, WP } from '../../Utils/theme';
import { useNavigation } from '@react-navigation/native';
import { Input } from "native-base";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Autocomplete from 'react-native-autocomplete-input';
import SelectDropdown from 'react-native-select-dropdown'
import { useSelector, useDispatch } from 'react-redux';
import { getMaterial } from '../../Redux/Slice/materialSlice';
import Loading from '../../component/Loading';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


import FormInput2 from './FormInput2';
import FormInput from './FormInput';

const countries = ["Bundle", "Box", "Bag", "Pallet", "Roll", "Case", "Gallon", "Drum", "Hour", "Day", "Week", "Month"]



const RequestForRfq = () => {
    const navigation = useNavigation();
    const auth = useSelector((auth) => auth.auth.user)
    const dispatch = useDispatch()
    const { isLoading, message, refresh } = useSelector((material) => material.material)

    const [allMaterial, setAllMaterial] = useState([])
   const [data, setData] = useState([])


    const [value, setValue] = useState([
        {
            query: '',
            description: '',
            quantity: '',
            unit: '',
            name: '',
            show:false
        }
    ]);
// console.log({value})

    // const [valueText, setValueText] = useState([
    //     {
    //         query: '',
    //         description: '',
    //         quantity: '',
    //         unit: '',
    //         materialId: ''
    //     }
    // ]);
    const token = auth?.token

    useLayoutEffect(() => {
        dispatch(getMaterial(token))
            .unwrap().then((res) => {
                 console.log(res, 'res');
                setAllMaterial(res)
            }).catch((err) => {

                if (err) {
                   
                }



            })
    }, [dispatch, refresh])

  
   
const memoizedCallback = useCallback(
    (inputName, inputValue, index) => {
        const list = [...value];
        list[index][inputName] = inputValue;
        setValue(list);

    },
    [],
)
    // const handle = (inputName, inputValue, index) => {
    //     let v = valueText[index][inputName] = inputValue
    //     setValueText([...valueText], {v} );

    // }


    const handleAddClick = () => {
        const _inputs = [...value];
        _inputs.push({
            query: '',
            description: '',
            quantity: '',
            unit: '',
            name: '',
            show: false
        });
        setValue(_inputs);
    }


    const handleRemoveClick = index => {
        const list = [...value];
        list.splice(index, 1);
        setValue(list);
    };


    const inputHandleQuery = (text, key) => {
        console.log(key)
        const list = [...value];
        list[key].query = text;
        setValue(list);

        const filterData = () => {


            console.log(text)


            if (text==='') {
                return [];
            }


            else {
                return allMaterial.filter(x => x.name.toLowerCase().includes(text.toLowerCase()));
            }


        }


        setData(filterData)
    }
console.log({data})
    const inputHandleDescription = (text, key) => {
        const list = [...value];
        list[key].description = text;
        setValue(list);

    }

    const inputHandleName = (text, key) => {
        console.log(text)
        const list = [...value];
        list[key].name = text;
        setValue(list);

    }
    // const inputHandleDescription = (text, key) => {
    //     const _formNumberInputs = [...value]
    //     _formNumberInputs[key].key = key;
    //     console.log({
    //         _formNumberInputs
    //     })
    //     _formNumberInputs[key].description = text;
    //     setValue(_formNumberInputs);
    // }

    const inputHandleQuantity = (text, key) => {
        const list = [...value];
        list[key].quantity = text;
        setValue(list);

    }


    const inputHandleShow = (text, key) => {
        const list = [...value];
        list[key].show = text;
        setValue(list);

    }
   


   const submitButton =()=>{
       let send =[]
       let error
       const dataSend = value.map(({name, description, quantity, unit, query})=> {
         
function confirm() {
    let found ;
    let q
    for (var i = 0; i < allMaterial.length; i++) {
        // console.log(allMaterial[i]._id, 'aaaaa')
        if (allMaterial[i]._id == name) {
            found = true;
           

            break;
        }
        else{
            found = false;
        }
    }
    return found
}


// console.log(confirm())
           if (!confirm()) {
             
               Alert.alert(`Error', 'Please select correct material ${query}, is not in the list`)
           }
         else if ( quantity==='') {
             error =true
             Alert.alert('Error', 'Please fill all the fields')
         }
           else if (description === '') {
               error=true
               Alert.alert('Error', 'Please fill all the fields')
           } 
           else if ( unit === '') {
               error = true

               Alert.alert('Error', 'Please fill all the fields')
           }
         else {
               send.push({
                   name,
                   description,
                   quantity,
                   unit
               })
         }
       })
//  console.log(error, 'error')

 if (error) {
     console.log('error')
 }
 else{
     console.log(send, 'tttt')
     navigation.navigate('selectvendors')
 }
   }

    const inputHandleUnit = (text, key) => {
        const list = [...value];
        list[key].unit = text;
        setValue(list);

    }

    if (isLoading) {
        return <Loading/>
    }
    
    else if(message && isLoading === false){
        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{
                    width: '80%', justifyContent: 'center', alignItems: 'center', height: 200,
                    alignSelf: 'center',
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 1,
                    },
                    shadowOpacity: 0.18,
                    shadowRadius: 1.00,

                    elevation: 1,
                    backgroundColor: '#FFF'
                }}>

                    <Text style={{ fontSize: 20, color: 'black' }}> {message}</Text>
                   
                </View>
            </View>
        )
    }

if(allMaterial.length===0){
    return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <View style={{
                width: '80%', justifyContent: 'center', alignItems: 'center', height: 200,
                alignSelf: 'center',
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                shadowOpacity: 0.18,
                shadowRadius: 1.00,

                elevation: 1,
                backgroundColor: '#FFF'
            }}>

                <Text style={{ fontSize: 20, color: 'black' }}> No data</Text>
                <Text style={{ fontSize: 10, color: 'black' }}> Create Material at Material Dashboard</Text>
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
    )
}
  return (
      <KeyboardAwareScrollView
          style={{flex:1,
        backgroundColor:'#fff'
        }}
          contentContainerStyle={{ paddingBottom: WP(50) }}
          horizontal={false}

          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>

      <Box px="4">
          <View style={styles.addButtonContainer}>
              <ButtonH style={{

                  borderColor: BgColor,
                  width: '100%',
                  backgroundColor: BgColor,
                  borderRadius: 5,


              }}
                  onPress={handleAddClick}
              >
                  <Text style={[styles.butttonText,
                  { color: '#fff' }

                  ]}>Add</Text>
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
                  <Text style={[styles.textLineItemH, { textAlign: 'left' }]}>Unit</Text>
              </View>

          </View>

          {
              value.map((val, key) => {

                  return (
                      <View style={styles.tableRow}

                          key={key}
                      >
                          <View style={[styles.tableColumnRegular2, { position: 'relative' }]}>

                              <View style={styles.autocompleteContainer}>

                                  <Autocomplete
                                      value={val.query}
                                      onChangeText={(text) =>{ inputHandleQuery(text, key)
                                          inputHandleName('', key)
                                          inputHandleShow(true, key)
                                    }}

                                      horizontal={true}
                                      placeholder="Enter material name"
                                      data={data}

                                      style={{
                                          backgroundColor: 'transparent',
                                          color: 'black'
                                      }}
                                      inputContainerStyle={{
                                          borderColor: COLOR.BgColor,
                                          borderRadius: 2,
                                          borderWidth: WP(0.2),
                                        

                                      }}
                                      listContainerStyle={{
                                          backgroundColor: "#a9b4fc",
                                      }}


                                      flatListProps={{
                                          keyboardShouldPersistTaps: 'always',

                                          listKey: (item, index) => `_key${index.toString()}`,
                                          keyExtractor: (item, index) => `_key${index.toString()}`,
                                          renderItem: ({ item }) => {
if (val.show) {
    return (
        <TouchableOpacity
            key={item?._id}

            onPress={() => {
                inputHandleQuery(item?.name, key)
                inputHandleName(item?._id, key)
                inputHandleShow(false, key)
                setData([])
            }}


            style={{

                padding: 10,
            }}
        >
            <Text style={styles.itemText}>{item?.name}</Text>
        </TouchableOpacity>
    )
}
                                             
                                          }
                                      }}

                                  />

                              </View>
                          </View>
                          <View style={styles.tableColumnRegular2}>
                              <FormInput2

                                  value={val.description}
                                  onChangeText={(text) => inputHandleDescription(text, key)}

                              />

                          </View>
                          <View style={styles.tableColumnRegular}>

                              <FormInput

                                  value={val.quantity}

                                  onChangeText={(text) => inputHandleQuantity(text, key)}

                              />

                          </View>
                          <View style={styles.tableColumnRegular3}>
                              <View style={{ flex: key === 0 ? 5 : 4 }}>

                                  <SelectDropdown
                                      buttonStyle={{
                                          width: key === 0 ? '97%' : '90%', height: '100%',
                                          backgroundColor: 'transparent',
                                          color: 'black'
                                      }}

                                      dropdownStyle={{

                                          backgroundColor: '#fff'

                                      }}
                                      rowStyle={{
                                          borderBottomColor: 'transparent',
                                          height: 35
                                      }}
                                      rowTextStyle={{
                                          color: 'black',
                                          fontSize: 15
                                      }}
                                      data={countries}
                                      defaultValue={val.unit}
                                      onSelect={(selectedItem, ind) => inputHandleUnit(selectedItem, key)}

                                      buttonTextAfterSelection={(selectedItem, index) => {
                                          // inputHandleUnit(selectedItem, index)

                                          // text represented after item is selected
                                          // if data array is an array of objects then return selectedItem.property to render after item is selected
                                          return selectedItem
                                      }}
                                      rowTextForSelection={(item, i) => {
                                          // inputHandleUnit(item, index)

                                          // text represented for each item in dropdown
                                          // if data array is an array of objects then return item.property to represent item in dropdown
                                          return item
                                      }}
                                  />
                              </View>
                              <View style={{ justifyContent: 'center', alignItems: 'center', flex: key === 0 ? 0 : 1 }}>
                                  {key !== 0 && <TouchableOpacity onPress={() => {
                                      handleRemoveClick(key)
                                  }}>
                                      <Icon
                                          name="delete"
                                          size={25}
                                          color={COLOR.BgColor}


                                      />
                                  </TouchableOpacity>}

                              </View>

                          </View>

                      </View>
                  )
              })
          }

          <Box my="4">
              <FormCustomButton
                  placeholder=""
                  borderColor={COLOR.BgColor}
                  borderWidth={WP(0.3)}
                  btnTitle="Next"
                  backgroundColor={COLOR.BgColor}
                  textColor={COLOR.whiteColor}
                  onPress={submitButton}
              />
          </Box>
      </Box>

      </KeyboardAwareScrollView>

     
  )
}

export default RequestForRfq

const styles = StyleSheet.create({
    butttonText: {
        fontSize: 15,
        fontWeight: '400',
        lineHeight: 18,
        fontStyle: 'normal',
     
    },
    addButtonContainer:{
        marginVertical:30,
        width: '38%',
      alignSelf:'flex-end'

    },
    tableColumnRegular: {
        flex: 1,

        justifyContent: 'center',

        alignSelf: 'stretch',
        alignItems:'center'



    },
    tableColumnRegular2: {
        flex: 2,

        justifyContent: 'center',

        alignSelf: 'stretch',



    },

    tableColumnRegular3: {
        flex: 2.5,

        justifyContent: 'center',

      
flexDirection:'row'


    },
    tableColumnHeader: {

        flexDirection: "row",
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
        flexDirection: "row",
        justifyContent: 'center',
        backgroundColor: bgColor1,
        height: 60,
        marginBottom: 2


    },
    itemText: {
        fontSize: 15,
        margin: 2,
        color: '#fff',

    },


    autocompleteContainer: {
        // Hack required to make the autocomplete
        // work on Andrdoid
        flex: 1,

        position: 'absolute',
        width: '100%',
        zIndex: 1,
      
      

    },
    autocompleteContainerStyle1: {
        backgroundColor: 'transparent'
    }


})