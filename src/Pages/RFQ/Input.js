import { StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useState, useLayoutEffect, useCallback } from 'react'
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
import { changeInput } from '../../Redux/Slice/RfqSlice';

const InputCustom = ({
    value,
    onChangeText
}) => {
  return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <Input w="100%"
              h="85%"
              autoCorrect={false}
onKeyPress
              value={value}
              onChangeText={onChangeText}

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
  )
}

export default React.memo(InputCustom)

const styles = StyleSheet.create({})