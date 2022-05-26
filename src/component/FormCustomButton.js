import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Spinner } from "native-base";
import { useSelector, useDispatch } from 'react-redux';

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


  textColor ,
  backgroundColor,
  fontWeight,
  btnTitle,
  onPress,
  disabled,
  fontSize,
  borderWidth,
  borderColor,
borderRadius
}) => {

  const loading = useSelector((material) => material.material.isLoading)
  const loadingJob = useSelector((job) => job.job.isLoading)

// console.log(loading);
  return (
    <React.Fragment>
      <TouchableOpacity
        onPress={onPress}
        style={{
          backgroundColor: backgroundColor,
          padding: WP(4),
          borderRadius: WP(borderRadius ?borderRadius: 3),
          borderWidth: borderWidth,
          borderColor:borderColor,
          top:WP(4),
       
         
        }}
        disabled={disabled}>
        {loading || loadingJob ? <Spinner accessibilityLabel="Loading posts" size="sm" color="#fff" /> : <Text
          style={{
            fontSize: WP(4.5),
            color: textColor,
            textAlign: 'center',
            fontWeight: fontWeight,




          }}>
          {btnTitle}
        </Text>}
      
      </TouchableOpacity>
    </React.Fragment>
  );
};

export default FormCustomButton;

const styles = StyleSheet.create({});
