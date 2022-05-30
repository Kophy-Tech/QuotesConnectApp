import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { WP, HP, COLOR } from '../../Utils/theme'
import { Box,  } from "native-base";
import { BgColor, bgColor1, ColorText } from '../../Utils/Colors';
import FormCustomButton from '../../component/FormCustomButton';

const SelectVendors = () => {
    const [isSelected, setSelection] = React.useState(false);
  return (
      <Box px="4">
          <View>
        
              <Text style={styles.vendorSelectText}> Note that you  are not eligible to select  more than three (3) vendors</Text>

              
              < View style={styles.tableRow}

              >
                  <View style={styles.tableColumnRegular1}>
                  
                  </View>
                  <View style={styles.tableColumnRegular}>
                      <Image
                          style={styles.imageStyle}
                          source={{
                              uri: 'https://reactnative.dev/img/tiny_logo.png',
                          }}
                      />
                  </View>
                  <View style={styles.tableColumnRegular2}>
                      <Text style={styles.textLineItem1}>Bedlam  & sola company</Text>
                  </View>


              </ View>

              <Box my="5">
                  <FormCustomButton
                      placeholder=""
                      borderColor={COLOR.BgColor}
                      borderWidth={WP(0.3)}
                      btnTitle="Create"
                      backgroundColor={COLOR.BgColor}
                      textColor={COLOR.whiteColor}
                  />
              </Box>
          </View>

      

  </Box>
  )
}

export default SelectVendors

const styles = StyleSheet.create({
container:{
    flex:1
},
    imageStyle:{
        width:"50%",
        height: 40,
        resizeMode:'cover',
       alignSelf:'center',
       borderRadius:5

    },
   
    vendorSelectText:{
        fontWeight: '400',
        color: ColorText,
        fontSize: 15,
        fontStyle: 'normal',
        lineHeight: 24,
        paddingVertical: HP(4)
    },
    tableColumnRegular: {
        flex: 1,

        justifyContent: 'center',

        alignSelf: 'stretch',



    },
    tableColumnRegular1: {
        flex: 0.5,

        justifyContent: 'center',

        alignSelf: 'stretch',



    },
    tableColumnRegular2: {
        flex: 2.5,

        justifyContent: 'center',

        alignSelf: 'stretch',



    },
 
    textLineItem: {
        fontSize: 15,
        fontWeight: '400',
        color: '#fff',
        textAlign: 'center',
        lineHeight: 18,
     
    },
    textLineItem1: {
        fontSize: 15,
        fontWeight: '400',
        color: ColorText,
        textAlign: 'center',
        lineHeight: 18,
     
    },
    tableRow: {
        flexDirection: "row",
        justifyContent: 'center',
        backgroundColor: bgColor1,
        height: 60,
        marginBottom: 2,
        borderRadius:5



    },


})