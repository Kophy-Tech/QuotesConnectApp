import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import {COLOR, HP, WP} from '../Utils/theme';
import Icon from 'react-native-vector-icons/Entypo';

const FormCustomInput = ({
  lablelText,
  value,
  onChangeText,
  placeholder,
  onFocus,
  keyboardType,
  labelTextTop,
  fontWeight,
  inputBorderColor,
  labelText,
}) => {
  return (
    <View style={styles._mainContainer}>
      <Text
        style={[
          styles._labelText,
          {
            top: labelTextTop,
            fontWeight: '400',
            color: labelText ? labelText : COLOR.blackColor,
          },
        ]}>
        {lablelText}
      </Text>
      <View>
        <TextInput
          style={{
            borderWidth: WP(0.3),
            padding: WP(3),
            borderColor: inputBorderColor,
            borderRadius: WP(1),
          }}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          onFocus={onFocus}
          keyboardType={keyboardType}
          placeholderTextColor={COLOR.blackColor}
          placeholderStyle={{fontSize: 'bold'}}
        />
      </View>
    </View>
  );
};

export default FormCustomInput;

const styles = StyleSheet.create({
  _mainContainer: {
    marginVertical: WP(-1),
    bottom: WP(2),
  },
  _labelText: {
    paddingBottom: WP(4),
    fontWeight: '600',

    left: WP(1),
    fontSize: WP(4.5),
  },
  _textInputStyle: {
    borderWidth: WP(0.4),
    padding: WP(4),
    borderColor: COLOR.BgColor,
    borderRadius: WP(3),
  },
});
