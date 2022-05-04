//import liraries
import React, {Component, useEffect} from 'react';
import {View, Text, StyleSheet, Image, ActivityIndicator} from 'react-native';
import AppBar from '../component/AppBar';
import {COLOR, WP, HP, IMAGE, FONT, TEXT_SIZES, APP_NAME} from '../Utils/theme';

const Splash = ({navigation}) => {
  return (
    <View style={styles.container}>
        <AppBar backgroundColor={COLOR.whiteColor} type={"dark-content"}/>
      <Image
        source={IMAGE.splash_icon}
        style={{width: WP('52'), height: HP('12')}}
        resizeMode="cover"
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.whiteColor,
  },
});

//make this component available to the app
export default Splash;
