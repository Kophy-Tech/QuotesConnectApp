import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {
  COLOR,
  IMAGE,
  TEXT_SIZES,
  MOBILE_WIDTH,
  SPACING_PERCENT,
  WP,
  HP,
  APP_NAME,
  RADIUS,
  TAB_ICON_SIZE,
  FONT_SIZES,
  FONT,
} from '../Utils/theme';
const FormCustomButton = ({

  // textColor=The button text color
  // backgroundColor : the button backgroundColor.
  // onPress : function(event),
  
  
  textColor ,
  backgroundColor,
  fontWeight,
  btnTitle,
  onPress,
  disabled,
  fontSize,
  borderWidth,
  borderColor,
}) => {
  return (
    <React.Fragment>
      <TouchableOpacity
        onPress={onPress}
        style={{
          backgroundColor: backgroundColor,
          padding: WP(4),
          borderRadius: WP(3),
          borderWidth: borderWidth,
          borderColor:borderColor,
          top:WP(4)
        }}
        disabled={disabled}>
        <Text
          style={{
            fontSize: WP(4.5),
            color: textColor,
            textAlign: 'center',
            fontWeight: fontWeight,
           
            
          }}>
          {btnTitle}
        </Text>
      </TouchableOpacity>
    </React.Fragment>
  );
};

export default FormCustomButton;

const styles = StyleSheet.create({});
