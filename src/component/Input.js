import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, } from 'react-native'
import React from 'react'
import { HStack, Box, Flex, Input } from "native-base";
import { HP, WP, COLOR } from '../Utils/theme';

const InputForm = ({
    title,
    value,
    onChangeText,
    keyboardType,
    borderColor,
    onFocus,
    rest
}) => {
  return (
   <>
          <Text style={{ fontSize: WP(4.5), paddingBottom: WP(1), color: COLOR.BgColor, fontWeight: '400', fontStyle:'normal' }}> {title}</Text>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
              <Input w="100%"
                  placeholder=""
                  style={{
                      borderWidth: WP(0.2),
                      padding: WP(3),
                      borderColor: borderColor,
                      borderRadius: WP(1),

                  }}
                  value={value}
                  onChangeText={onChangeText}

                  onFocus={onFocus}
                  keyboardType={keyboardType}
                  placeholderTextColor={COLOR.blackColor}
                  placeholderStyle={{ fontSize: "bold" }}

                  _focus={{ backgroundColor: 'transparent' }} //? focus here left to implement.
                  {...rest}
              />
          </TouchableWithoutFeedback>

   </>
  )
}

export default InputForm

const styles = StyleSheet.create({})