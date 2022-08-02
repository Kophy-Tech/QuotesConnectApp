import {
  Text,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import {Input} from 'native-base';
import {WP, COLOR} from '../Utils/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import moment from 'moment';
const DateInputForm = ({title, value, borderColor, onPress, rest}) => {
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
        <TouchableOpacity
          onPress={onPress}
          style={{
            borderWidth: 1,
            borderColor: borderColor,
            width: '300%',
            borderRadius: WP(2),
          }}>
          <Input
            style={{fontSize: 15, color: 'grey', height: 46, width: '200%'}}
            w="100%"
            value={value}
            editable={false}
            {...rest}
            //    autoCorrect={false}
            //    autoComplete={false}
            //    autoCapitalize={false}
            InputLeftElement={<Icon name="date-range" size={20} color="grey" />}
            placeholder="DD.MM.YY"
            placeholderTextColor={COLOR.blackColor}
            _focus={{borderColor: 'black', backgroundColor: 'transparent'}} //? focus here left to implement.
            {...rest}
          />
        </TouchableOpacity>
      </TouchableWithoutFeedback>
    </>
  );
};

export default DateInputForm;
