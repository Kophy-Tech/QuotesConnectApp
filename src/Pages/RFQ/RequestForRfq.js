import { StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback, Keyboard, } from 'react-native'
import React from 'react'
import { Box, } from "native-base";
import ButtonH from '../../component/ButtonH';
import { BgColor, bgColor1, ColorText } from '../../Utils/Colors';
import FormCustomButton from '../../component/FormCustomButton';
import { COLOR, WP } from '../../Utils/theme';
import { useNavigation } from '@react-navigation/native';
import { Input } from "native-base";

const RequestForRfq = () => {
    const navigation = useNavigation();

  return (
      <Box px="6">
  <View style={styles.addButtonContainer}>
              <ButtonH style={{

                  borderColor: BgColor,
                  width: '100%',
                  backgroundColor: BgColor,
                  borderRadius: 5,
                

              }}
                  
              >
                  <Text style={[styles.butttonText,
                  { color:'#fff'}

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
                  <Text style={styles.textLineItemH}>Unit</Text>
              </View>
          </View>
          < TouchableOpacity style={styles.tableRow}
             

          >
              <View style={styles.tableColumnRegular2}>
                  <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                      <Input w="100%"
                          h="95%"

                          placeholder=""
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
                  </TouchableWithoutFeedback>

              </View>
              <View style={styles.tableColumnRegular2}>
                  <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                      <Input w="100%"
                      h="95%"
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
              <View style={styles.tableColumnRegular2}>
                  <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                      <Input w="100%"
                          h="95%"

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

          </ TouchableOpacity>
     
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