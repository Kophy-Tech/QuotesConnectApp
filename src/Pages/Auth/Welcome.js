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

const Welcome = () => {
  return (
    <KeyboardAwareScrollView
      style={styles._mainContainer}
      contentContainerStyle={{paddingBottom: WP(40)}}
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
          Welcome
        </Text>
        <Text
          style={{
            fontWeight: '400',
            color: COLOR.blackColor,
            fontSize: WP(6),
            marginVertical: HP(3),
            top: HP(1),
            fontSize: WP(4),
          }}>
          Create an account to continue
        </Text>
      </View>

      <View style={styles._formInputContainer}>
        <FormCustomInput
          placeholder="Full Name"
          inputBorderColor={COLOR.BgColor}
        />
        <FormCustomInput placeholder="Email" inputBorderColor={COLOR.BgColor} />
        <FormCustomInput
          placeholder="Password"
          inputBorderColor={COLOR.BgColor}
        />
        <FormCustomButton
          backgroundColor={COLOR.BgColor}
          btnTitle={'Create Account'}
          textColor={COLOR.whiteColor}
        />
       <View style={{top:WP(8)}}>
       <FormCustomButton
          backgroundColor={COLOR.whiteColor}
          btnTitle={'Login'}
          textColor={COLOR.BgColor}
          borderColor={COLOR.BgColor}
          borderWidth={0.4}
        />
       </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  _mainContainer: {
    flex: 1,
    backgroundColor: COLOR.whiteColor,
  },
  _imageContainer: {
    top: HP(18),
    justifyContent: 'center',
    alignItems: 'center',
  },
  _loginTextContainer: {
    left: WP(6),
    top: WP(22),
  },
  _formInputContainer: {
    top: WP(16),
    width: WP(90),
    alignSelf: 'center',
  },
});
