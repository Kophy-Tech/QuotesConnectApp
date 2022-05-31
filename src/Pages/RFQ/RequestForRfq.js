import { StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback, Keyboard,ScrollView } from 'react-native'
import React from 'react'
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


const RequestForRfq = () => {
    const navigation = useNavigation();
    const [value, setValues] = React.useState([{
        nameInput:'',
        description:'',
        quantity:'',
        unit:''
    }]);
    const handleInputChange = (inputName, inputValue, index) => {
        const list = [...value];
        list[index][inputName] = inputValue;
        setValues(list);
    };

    const handleAddClick = () => {
        setValues([...value, {
            nameInput: '',
            description: '',
            quantity: '',
            unit: ''
        }]);
    };

    const handleRemoveClick = index => {
        const list = [...value];
        list.splice(index, 1);
        setValues(list);
    };

    const countries = ["Bundle", "Box", "Bag", "Pallet", "Roll", "Case", "Gallon", "Drum", "Hour", "Day", "Week", "Month"]
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
                  value.map((val, index) => {
                      return (
                          <View style={styles.tableRow}

                              key={index}
                          >
                              <View style={styles.tableColumnRegular2}>
                                  {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                                      <Input w="100%"
                                          h="95%"
                                          value={val.nameInput}
                                          onChangeText={value => handleInputChange('nameInput', value, index)}
autoCorrect={false}
                                          style={{
                                              borderWidth: WP(0.2),
                                              padding: WP(3),
                                              borderColor: COLOR.BgColor,
                                              borderRadius: WP(2),

                                          }}


                                          placeholderTextColor={COLOR.blackColor}
                                          placeholderStyle={{ fontSize: "bold" }}

                                          _focus={{ backgroundColor: 'transparent' }} //? focus here left to implement.

                                      />
                                  </TouchableWithoutFeedback> */}
                                  <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                                      <Autocomplete

                                          style={{ backgroundColor: 'transparent',height:"95%" }}
                                          inputContainerStyle={{
                                              borderRadius: 5,
                                              borderColor: COLOR.BgColor,
                                          }}
                                      />
                                  </TouchableWithoutFeedback>
                              </View>
                              <View style={styles.tableColumnRegular2}>
                                  <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                                      <Input w="100%"
                                          h="95%"
autoCorrect={false}

                                          value={val.description}
                                          onChangeText={value => handleInputChange('description', value, index)}

                                          placeholder=""
                                          style={{
                                              borderWidth: WP(0.2),
                                              padding: WP(3),
                                              borderColor: COLOR.BgColor,
                                              borderRadius: WP(0),

                                          }}


                                          placeholderTextColor={COLOR.blackColor}
                                          placeholderStyle={{ fontSize: "bold" }}

                                          _focus={{ backgroundColor: 'transparent' }} //? focus here left to implement.

                                      />
                                  </TouchableWithoutFeedback>

                              </View>
                              <View style={styles.tableColumnRegular}>
                                  <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                                      <Input w="100%"
                                          h="95%"
autoCorrect={false}

                                          value={val.quantity}
                                          onChangeText={value => handleInputChange('quantity', value, index)}

                                          placeholder=""
                                          style={{
                                              borderWidth: WP(0.2),
                                              padding: WP(3),
                                              borderColor: COLOR.BgColor,
                                              borderRadius: WP(0),

                                          }}


                                          placeholderTextColor={COLOR.blackColor}
                                          placeholderStyle={{ fontSize: "bold" }}

                                          _focus={{ backgroundColor: 'transparent' }} //? focus here left to implement.

                                      />
                                  </TouchableWithoutFeedback>

                              </View>
                              <View style={styles.tableColumnRegular3}>
                                  <View style={{ flex: index === 0 ? 5 : 4 }}>
                             
                                      <SelectDropdown
                                          buttonStyle={{
                                              width: index === 0 ? '97%' : '90%', height:'100%',
                                        backgroundColor:'#fff',
                                        color:'black'
                                        }}
                                          dropdownStyle={{
                                           
                                              backgroundColor:'#fff'

                                          }}
                                          rowStyle={{
                                              borderBottomColor: 'transparent',
height:35
                                          }}
                                          rowTextStyle={{
                                              color:'black',
                                              fontSize:15
                                          }}
                                          data={countries}
                                          defaultValue="Unit"
                                          onSelect={(selectedItem, ind) => {
                                              console.log(selectedItem, ind)
                                              handleInputChange('unit', selectedItem, index)
                                          }}
                                          buttonTextAfterSelection={(selectedItem, index) => {
                                              // text represented after item is selected
                                              // if data array is an array of objects then return selectedItem.property to render after item is selected
                                              return selectedItem
                                          }}
                                          rowTextForSelection={(item, index) => {
                                              // text represented for each item in dropdown
                                              // if data array is an array of objects then return item.property to represent item in dropdown
                                              return item
                                          }}
                                      />
                                  </View>
                                  <View style={{ justifyContent: 'center', alignItems: 'center', flex: index ===0?0:1 }}>
                                      {index !== 0 && <TouchableOpacity onPress={() => handleRemoveClick(index)}>
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


})