import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, } from 'react-native'
import React from 'react'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { HStack, Box, Flex, Input } from "native-base";
import FormCustomButton from './FormCustomButton';
import { HP, WP, COLOR } from '../Utils/theme';
import InputForm from './Input';

const JobCreate = () => {
  return (
    <KeyboardAwareScrollView
      style={styles._mainContainer}
      contentContainerStyle={{ paddingBottom: WP(65) }}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}>

      <Box my="4">
        <Text style={styles.heading}>Create New Job</Text>
      </Box>
      <Box mb="2">
        <InputForm
          title="Project Name"
          value=''
          borderColor={COLOR.BgColor}
        />
      </Box>

      <Box mb="2">
        <InputForm
          title="Project Number"
          value=''
          borderColor={COLOR.BgColor}
        />
      </Box>
   
      <Box mb="2">
        <Text style={styles.address}>Address</Text>
      </Box>
      <Box mb="2">
        <InputForm
          title="Street"
          value=''
          borderColor={COLOR.BgColor}
        />
      </Box>
      <Box mb="2">
        <InputForm
          title="City"
          value=''
          borderColor={COLOR.BgColor}
        />
      </Box>   
      <Box mb="2">
        <InputForm
          title="State"
          value=''
          borderColor={COLOR.BgColor}
        />
      </Box>  
       <Box mb="2">
        <InputForm
          title="Zip Code"
          value=''
          borderColor={COLOR.BgColor}
        />
      </Box>

      <Box mb="2">
        <FormCustomButton
          placeholder=""
          borderColor={COLOR.BgColor}
          borderWidth={WP(0.3)}
          btnTitle="Create"
          backgroundColor={COLOR.BgColor}
          textColor={COLOR.whiteColor}
        />
      </Box>
      </KeyboardAwareScrollView>
  )
}

export default JobCreate

const styles = StyleSheet.create({
 address:{
fontWeight:'500',
color: COLOR.BgColor,
fontSize:WP(5),
fontStyle:'normal',
lineHeight:WP(4),
paddingTop:HP(2)
 },
 heading:{
   fontWeight: '500',
   color: COLOR.BgColor,
   fontSize: WP(6),
   fontStyle: 'normal',
   lineHeight: WP(4),
   paddingTop: HP(2)
 }
})