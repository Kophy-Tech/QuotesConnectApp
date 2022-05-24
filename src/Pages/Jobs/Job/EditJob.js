import { StyleSheet, View } from 'react-native'
import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { HStack, Text, Box, Flex, Input } from "native-base";
import { HP, WP, COLOR } from '../../../Utils/theme';
import InputForm from '../../../component/Input';
import ButtonH from '../../../component/ButtonH';
import { bgColor2, bgColor3 } from '../../../Utils/Colors';


const EditJob = () => {
  return (
    <Box px="6">
      <KeyboardAwareScrollView
        style={styles._mainContainer}
        contentContainerStyle={{ paddingBottom: WP(15) }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <Box mb="4" mt="5">
          <Text style={styles.heading}>Edit Job</Text>
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
        <Flex direction="row" mt="4" justifyContent="space-around">
          <ButtonH 
            style={{

              borderColor: bgColor2,
              width: '40%',
              backgroundColor:"transparent",
              borderRadius: 5


            }}
          
          >
            <Text
              style={[styles.butttonText,{color:bgColor2}]}
            
            >Delete</Text>
          </ButtonH>
          <ButtonH
            style={{

              borderColor:bgColor3,
              width: '40%',
              backgroundColor:bgColor3,
              borderRadius: 5


            }}

          >
            <Text
              style={[styles.butttonText, { color: "#fff" }]}
            >Update</Text>
          </ButtonH>
        </Flex>
        </KeyboardAwareScrollView>
    </Box>
  )
}

export default EditJob

const styles = StyleSheet.create({

  heading: {
    fontWeight: '600',
    color: COLOR.BgColor,
    fontSize: WP(7),
    fontStyle: 'normal',
    lineHeight: WP(4),
    paddingTop: HP(3)
  },
  address: {
    fontWeight: '600',
    color: COLOR.BgColor,
    fontSize: WP(5),
    fontStyle: 'normal',
    lineHeight: WP(4),
    paddingTop: HP(2)
  },

  butttonText: {
    fontSize: WP(5),
    fontWeight: '500',
    lineHeight: 24,
    fontStyle: 'normal',
   
  },
})