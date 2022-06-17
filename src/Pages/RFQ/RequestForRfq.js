import { StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Modal, Alert} from 'react-native'
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
import uuid from 'react-native-uuid';

import { Spinner } from "native-base";

import FormInput2 from './FormInput2';
import FormInput from './FormInput';
import { postRfqMaterial } from '../../Redux/Slice/RfqSlice';

const countries = ["Bundle", "Box", "Bag", "Pallet", "Roll", "Case", "Gallon", "Drum", "Hour", "Day", "Week", "Month"]



const RequestForRfq = () => {
    const navigation = useNavigation();
    const auth = useSelector((auth) => auth.auth.user)
    const { isLoading: LoadingRfq, message: messageRfq, jobRfq  } = useSelector((rfq) => rfq.rfq)

    const dispatch = useDispatch()
    const { isLoading, message, refresh } = useSelector((material) => material.material)

    const [allMaterial, setAllMaterial] = useState([])

    // console.log(jobRfq?._id)
    const rfq_id = jobRfq?._id
    const [value, setValue] = useState([
     
    ]);
    const [valueText, setValueText] = useState(
        {
            
            query: '',
            description: '',
            quantity: '',
            unit: '',
            name: '',
         
        }
    );

    console.log(valueText);
    console.log(value, 'valllllllll');

    const [modalVisible, setModalVisible] = useState(false);

    const token = auth?.token
    const tdata = {
        token,

    }
    useLayoutEffect(() => {
        dispatch(getMaterial(tdata))
            .unwrap().then((res) => {
                //  console.log(res, 'respppppppppppppp');

                setAllMaterial(res.data)
               

            }).catch((err) => {

                if (err) {
                   
                }



            })
    }, [dispatch, refresh])

  
   

    


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

    const [query, setQuery] = useState('');

    const handleRemoveClick = id => {
     const newdata =  value.filter((val)=> val.id !==id)
     setValue(newdata)
    };


    const filterData = (query) => {

       
        function match(query) {

            if (allMaterial.find((a) => a.name.toLowerCase() === query.toLowerCase())) {
                return true
            }
            return false
        }

        // console.log(match(query), 'matchhh')

        if (query === '') {
            return [];
        }
        if (match(query)) {
            return [];

        }

        else {
            return allMaterial.filter(x => x.name.toLowerCase().includes(query?.toLowerCase()));
        }
    }

    const data = filterData(query);
   

    const handleInputChange = (inputName, inputValue) => {
        setValueText({
            ...valueText,
            [inputName]: inputValue,
        });

    }

   

const addMaterial =()=>{
   
    
    if (!(allMaterial.find((a) => a.name === query)) ? true : false) {
        Alert.alert(`Please Search For Correct Job  Material ${query} Is Not Found `)

    }

    else  if (!valueText.description) {
        Alert.alert('Please Enter Description')
    }

    else if (!valueText.quantity) {
        Alert.alert('Please Enter Quantity ')

    }
    else if (!valueText.unit) {
        Alert.alert('Please Enter Unit ')

    }
    else{
        // setValue({
        //     ...valueText,
        //     id: uuid.v4()
        // })
        value.push(
            {
                query:query,
                name:name,
                ...valueText,
         id: uuid.v4()
            }
        )
        setValueText(
            {
                description: '',
                quantity: '',
                unit: '',
             
            }
        )
        setName('')
        setQuery('')
        setModalVisible(false)
    }
}

  
   const submitButton =()=>{
       let send =[]
      
   
//  console.log(error, 'error')

       if (value.length===0) {
     Alert.alert('Create Material')
 }
 else{

        const dataSend = value.map(({name, description, quantity, unit, query})=> {
         


// console.log(confirm())
           send.push({
               name,
               description,
               quantity,
               unit
           })
       })
     console.log(send, 'tttt')

     const datarfqmaterial ={
         rfqArray:send,
token,
rfq_id

     }
     console.log(send)
 console.log(
   {  datarfqmaterial}
 )
     dispatch(postRfqMaterial(datarfqmaterial)).unwrap().then((res) => {

         if (res.status === 'Updated') {
             Alert.alert(`${res.msg}`)
             setValue(
                 [
                   
                 ]
             )
         navigation.navigate('selectvendors')
         }
         console.log(res.status);
     }).catch((err) => {
         console.log(err, 'error from postrfqjob')
         Alert.alert(`${err}`)
     })
     navigation.navigate('selectvendors')
 }
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
 <>
          <KeyboardAwareScrollView

              horizontal={false} style={{ width: '100%', height: '100%' }}
              contentContainerStyle={{ paddingBottom: WP(50) }}


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
                          onPress={()=> setModalVisible(true)}
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
                      value?.map((val, key) => {

                          return (
                              <View style={styles.tableRow}

                                  key={val.id}
                              >
                                  <View style={[styles.tableColumnRegular2]}>
                                      <Text style={styles.textLineItem1}>{val?.query}</Text>

                                  </View>
                                  <View style={styles.tableColumnRegular2}>
                                      
                                      <Text style={styles.textLineItem1}>{val?.description}</Text>

                                  </View>
                                  <View style={styles.tableColumnRegular}>

                                      <Text style={styles.textLineItem1}>{val?.quantity}</Text>


                                  </View>
                                  <View style={[styles.tableColumnRegular3,{
                                    flexDirection:'row',
                                    justifyContent:'center',
                                    alignItems:'center'
                                  }]}>
                                  <View
                                  style={{
                                    flex:3
                                  }}
                                  >
                                          <Text style={styles.textLineItem1}>{val?.unit}</Text>
                                  </View>

                                      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                                     <TouchableOpacity onPress={() => {
                                             
                                          }}>
                                              <Icon
                                                  name="delete"
                                                  size={25}
                                                  color={COLOR.BgColor}

                                                  onPress={() => handleRemoveClick(val.id)}
                                              />
                                          </TouchableOpacity>

                                      </View>

                                  </View>

                              </View>
                          )
                      })
                  }

                  <Box mt="40">


                      <TouchableOpacity
                          onPress={submitButton}
                          style={{
                              backgroundColor: COLOR.BgColor,
                              padding: WP(4),
                              borderRadius: WP(3),
                              borderWidth: 1,
                              borderColor: COLOR.BgColor,
                              top: WP(4),


                          }}
                      >
                          {

                              LoadingRfq ? <Spinner accessibilityLabel="Loading posts" size="sm" color="#fff" /> : <Text
                                  style={{
                                      fontSize: WP(4.5),
                                      color: COLOR.whiteColor,
                                      textAlign: 'center',
                                      fontWeight: '400',




                                  }}>
                                  Next
                              </Text>
                          }


                      </TouchableOpacity>

                  </Box>
              </Box>

          </KeyboardAwareScrollView>
          <View style={styles.centeredView}>
              <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible}
                  onRequestClose={() => {
                    
                      setModalVisible(!modalVisible);
                  }}
              >
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
                          <View style={[styles.tableRow,{
                            marginTop:30
                          }]}

                            
                          >
                              <View style={[styles.tableColumnRegular2, { position: 'relative' }]}>

                                  <>
                                  <View style={[styles.autocompleteContainer,{
                                      zIndex: 9,
                                      position: 'absolute',
                                      top: 4
                                    
                                  }]}>

                                      <Autocomplete
                                              value={query}
                                              onChangeText={(text) => {


                                                  setQuery(text)

                                              }}

                                        //   horizontal={true}
                                          placeholder="Enter material name"
                                          data={data}


                                          style={{
                                              backgroundColor: 'transparent',
                                              color: 'black',
                                             

                                          }}
                                          inputContainerStyle={{
                                              borderColor: COLOR.BgColor,
                                              borderRadius: 1,
                                              borderWidth:0.5

                                          }}
                                          listContainerStyle={{
                                              backgroundColor: "#a9b4fc",
                                          }}



                                          flatListProps={{
                                              keyboardShouldPersistTaps: 'always',

                                              listKey: (item, index) => `_key${index.toString()}`,
                                              keyExtractor: (item, index) => `_key${index.toString()}`,
                                              renderItem: ({ item }) => {
                                                //   console.log(item?.name);
                                                      return (
                                                          <TouchableOpacity
                                                              key={item?._id}

                                                              onPress={() => {
                                                                  setQuery(item.name)
                                                                  setName(item._id)
                                                                
                                                                 
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
                                          }

                                      />

                                  </View>
                                  
                                  </> 
                              </View>
                              <View style={styles.tableColumnRegular2}>
                                  <FormInput2

                                      value={valueText.description}
                                      onChangeText={(text) => handleInputChange('description',text )}
                                      placeholder="description"

                                  />

                              </View>
                              <View style={styles.tableColumnRegular}>

                                  <FormInput

                                      value={valueText.quantity}
                                      placeholder="quantity"

                                      onChangeText={(text) => handleInputChange('quantity',text)}

                                  />

                              </View>
                              <View style={styles.tableColumnRegular3}>
                                  <View style={{ flex:5 }}>

                                      <SelectDropdown
                                          buttonStyle={{
                                              width:  '97%' , height: '100%',
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
                                          defaultValue={valueText.unit}
                                          onSelect={(selectedItem, ind) => handleInputChange('unit',selectedItem)}

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
                                

                              </View>

                          </View>
                          <Box mt="40">


                              <TouchableOpacity
                                  onPress={addMaterial}
                                  style={{
                                      backgroundColor: COLOR.BgColor,
                                      padding: WP(4),
                                      borderRadius: WP(3),
                                      borderWidth: 1,
                                      borderColor: COLOR.BgColor,
                                      top: WP(4),


                                  }}
                              >
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

    textLineItem1: {
        fontSize: 14,
        fontWeight: '400',
        color: ColorText,
        textAlign: 'center',

        lineHeight: 18,



    },
    autocompleteContainer: {
        // Hack required to make the autocomplete
        // work on Andrdoid
        flex: 1,

      
        width: '100%',
   
    
        // paddingTop: 40,
      
      

    },
    autocompleteContainerStyle1: {
        backgroundColor: 'transparent'
    },

// Modal
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        // margin: 20,
        backgroundColor: "white",
        width: '95%',
        height:'70%' ,

        // borderRadius: 20,
        // padding: 35,
        // alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    IconContainer:{
        margin: 5,
        justifyContent:'flex-end',
       alignItems:'flex-end'
    }
    
})