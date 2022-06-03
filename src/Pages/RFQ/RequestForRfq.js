import { StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback, Keyboard} from 'react-native'
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

import AutoComplete from './AutoComplete';

import FormInput2 from './FormInput2';
import FormInput from './FormInput';

import FormSelect from './FormSelect';
const countries = ["Bundle", "Box", "Bag", "Pallet", "Roll", "Case", "Gallon", "Drum", "Hour", "Day", "Week", "Month"]



const RequestForRfq = () => {
    const navigation = useNavigation();
    const auth = useSelector((auth) => auth.auth.user)
    const dispatch = useDispatch()
    const { isLoading, message, refresh } = useSelector((material) => material.material)

    const [allMaterial, setAllMaterial] = useState([])
   const [data, setData] = useState([])

//    console.log({allMaterial});
    const filterData = (text) => {
  

      
  
let data
        if (!text) {
            return  data =[];
        }
     

        else {
            return  data= allMaterial.filter(x => x.name.toLowerCase().includes(text.toLowerCase()));
        }

        setData([...data])
    }

    // console.log({data})

    const [value, setValue] = useState([
        {
          
            query: '',
            description: '',
            quantity: '',
            unit: '',
            materialId: ''
        }
    ]);


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
            materialId: ''
        });
        setValue(_inputs);
    }


    const handleRemoveClick = index => {
        const list = [...value];
        list.splice(index, 1);
        setValue(list);
    };


    const inputHandleDescription = useCallback(
        (text, key) => {
            const list = [...value];
            list[key].description = text;
            setValue(list);

        },
      [],
    )
    // const inputHandleDescription = (text, key) => {
    //     const _formNumberInputs = [...value]
    //     _formNumberInputs[key].key = key;
    //     console.log({
    //         _formNumberInputs
    //     })
    //     _formNumberInputs[key].description = text;
    //     setValue(_formNumberInputs);
    // }

    const inputHandleQuantity = useCallback(
        (text, key) => {
            const list = [...value];
            list[key].quantity = text;
            setValue(list);

        },
      [],
    )

    // const inputHandleQuantity = (text, key) => {
    //     const _formNumberInputs = [...value]
    //     _formNumberInputs[key].key = key;
    //     _formNumberInputs[key].quantity = text;
    //     console.log({
    //         _formNumberInputs
    //     })
    //     setValue(_formNumberInputs);
    // }


    // const inputHandleUnit= (text, key) => {
    //     const _formNumberInputs = [...value]
    //     _formNumberInputs[key].key = key;
    //     _formNumberInputs[key].unit = text;
    //     console.log({
    //         _formNumberInputs
    //     })
    //     setValue(_formNumberInputs);
    // }

    const inputHandleUnit = useCallback(
     (text, key) => {
            const list = [...value];
            list[key].unit = text;
            setValue(list);

     },
   [],
 )

    if (isLoading) {
        return <Loading/>
    }
    
    else if(message && isLoading === false){
        return(
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text>{message}</Text>
            </View>
        )
    }


  return (
  <ScrollView
          showsVerticalScrollIndicator={false}
      >
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
                                  <AutoComplete
                                      setData={setData}
                                      value={val.query}
                                    //   onChangeText={onChangeText}
                                      data={data}
                                      filterData={filterData}
                                      id={key}
                                  />

                              </View>
                              <View style={styles.tableColumnRegular2}>
                                  <FormInput2
                                     
                                      value={val.description}
                                      onChangeText={(text) => inputHandleDescription (text, key)}

                                  />

                              </View>
                              <View style={styles.tableColumnRegular}>

                                  <FormInput

                                      value={val.quantity}
                                    
                                      onChangeText={(text) => inputHandleQuantity(text, key)}

                                  />

                              </View>
                              <View style={styles.tableColumnRegular3}>
                                  <FormSelect
                                      index={key}
                                      countries={countries}
                                      handleRemoveClick={handleRemoveClick}
                                      onChangeText={inputHandleUnit}
                                      value={val.unit}


                                  />
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
                      onPress={() => navigation.navigate('selectvendors')}
                  />
              </Box>
          </Box>
      </ScrollView>


     
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