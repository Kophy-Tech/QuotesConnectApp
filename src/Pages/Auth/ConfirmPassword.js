import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {IMAGE, HP, WP, COLOR} from '../../Utils/theme';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import FormCustomInput from '../../component/FormCustomInput';
import FormCustomButton from '../../component/FormCustomButton';
import PasswordInput from '../../component/PasswordInput';

const ConfirmPassword = () => {
  return (
    <KeyboardAwareScrollView
      style={styles._mainContainer}
      contentContainerStyle={{paddingBottom: WP(50)}}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}>
      <View style={styles._imageContainer}>
        <Image source={IMAGE.splash_icon} />
      </View>
      <View style={styles._loginTextContainer}>
        <Text
          style={{
            fontWeight: '500',
            color: COLOR.blackColor,
            fontSize: WP(6),
            marginVertical: HP(3),
            top: HP(5),
          }}>
          Create Password
        </Text>
      </View>

      <View>
        {/* Input Field For Login */}
        <View style={styles._textInputContainer}>
          <PasswordInput placeholder="New Password" />
          <View style={{top: HP(-4)}}>
            <PasswordInput placeholder="ConfirmPassword" />
          </View>

          <View style={{top: HP(-4)}}>
            <FormCustomButton
              inputBorderColor={COLOR.BgColor}
              btnTitle="Submit"
              backgroundColor={COLOR.BgColor}
              textColor={COLOR.whiteColor}
            />
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default ConfirmPassword;

const styles = StyleSheet.create({
  _mainContainer: {
    flex: 1,
    backgroundColor: COLOR.whiteColor,
  },
  _imageContainer: {
    top: HP(12),
    justifyContent: 'center',
    alignItems: 'center',
  },
  _loginTextContainer: {
    left: WP(6),
    top: WP(22),
  },
  _textInputContainer: {
    width: WP(90),
    top: HP(10),
    left: WP(7),
    height: HP(30),
    marginVertical: WP(3),
  },
  _forgot: {
    textAlign: 'center',
    fontSize: HP(2),
    top: WP(36),
    color: COLOR.blackColor,
  },
});
