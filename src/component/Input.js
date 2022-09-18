import {Text, TouchableWithoutFeedback, Keyboard} from 'react-native';
import React from 'react';
import {Input} from 'native-base';
import {WP, COLOR} from '../Utils/theme';

const InputForm = ({
  title,
  value,
  name,
  onChangeText,
  keyboardType,
  borderColor,
  onFocus,
  rest,
  disabled,
}) => {
  return (
    <>
      <Text
        style={{
          fontSize: WP(4.5),
          paddingBottom: WP(1),
          color: COLOR.BgColor,
          fontWeight: '400',
          fontStyle: 'normal',
        }}>
        {' '}
        {title}
      </Text>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <Input
          w="100%"
          placeholder=""
          style={{
            borderWidth: WP(0.2),
            padding: WP(5),
            borderColor: borderColor,

            color: 'black',
            marginVertical: 5,
          }}
          isDisabled={disabled}
          value={value}
          onChangeText={onChangeText}
          name={name}
          onFocus={onFocus}
          keyboardType={keyboardType}
          placeholderTextColor={COLOR.blackColor}
          placeholderStyle={{fontSize: 'bold'}}
          _focus={{backgroundColor: 'transparent'}} //? focus here left to implement.
          {...rest}
        />
      </TouchableWithoutFeedback>
    </>
  );
};

export default InputForm;
