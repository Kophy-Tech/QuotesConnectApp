import {StyleSheet, TouchableWithoutFeedback, Keyboard} from 'react-native';
import React from 'react';
import {BgColor, bgColor1} from '../../Utils/Colors';
import {COLOR, WP} from '../../Utils/theme';
import {Input} from 'native-base';

const FormInput = ({value, onChangeText, placeholder}) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Input
        w="100%"
        h="85%"
        autoCorrect={false}
        key="dynamickey"
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={{
          borderWidth: WP(0.2),
          padding: WP(3),
          borderColor: COLOR.BgColor,
          borderRadius: WP(0),
          color: 'black',
        }}
        placeholderTextColor={COLOR.blackColor}
        placeholderStyle={{fontSize: 'bold'}}
        _focus={{backgroundColor: 'transparent'}} //? focus here left to implement.
      />
    </TouchableWithoutFeedback>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  butttonText: {
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 18,
    fontStyle: 'normal',
  },
  addButtonContainer: {
    marginVertical: 30,
    width: '38%',
    alignSelf: 'flex-end',
  },
  tableColumnRegular: {
    flex: 1,

    justifyContent: 'center',

    alignSelf: 'stretch',
    alignItems: 'center',
  },
  tableColumnRegular2: {
    flex: 2,

    justifyContent: 'center',

    alignSelf: 'stretch',
  },

  tableColumnRegular3: {
    flex: 2.5,

    justifyContent: 'center',

    flexDirection: 'row',
  },
  tableColumnHeader: {
    flexDirection: 'row',
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
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: bgColor1,
    height: 60,
    marginBottom: 2,
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
    backgroundColor: 'transparent',
  },
});
