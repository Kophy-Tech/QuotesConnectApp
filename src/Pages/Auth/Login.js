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

const Login = () => {
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
          }}>
          W e l c o m e !
        </Text>
        <Text
          style={{
            fontWeight: '300',
            color: COLOR.blackColor,
            fontSize: WP(5),
            marginVertical: WP(2),
            bottom: WP(3),
          }}>
          Login to continue
        </Text>
      </View>

      <View>
        {/* Input Field For Login */}
        <View style={styles._textInputContainer}>
          <FormCustomInput
            placeholder="Email"
            inputBorderColor={COLOR.BgColor}
          />

          <FormCustomInput
            placeholder="Password"
            inputBorderColor={COLOR.BgColor}
          />

          <FormCustomButton
            placeholder="Password"
            inputBorderColor={COLOR.BgColor}
            btnTitle="Login"
            backgroundColor={COLOR.BgColor}
            textColor={COLOR.whiteColor}
          />
        </View>
      </View>

      <TouchableOpacity>
        <Text style={styles._forgot}>Forgot Password</Text>
      </TouchableOpacity>
      <View style={{top: WP(39), width: WP(90), left:WP(7)}}>
        <FormCustomButton
          placeholder="Password"
          borderColor={COLOR.BgColor}
          borderWidth={WP(0.3)}
          btnTitle="Create Account"
          backgroundColor={COLOR.whiteColor}
          textColor={COLOR.BgColor}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Login;

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
  },
  _forgot: {
    textAlign: 'center',
    fontSize: HP(2),
    top: WP(36),
    color: COLOR.blackColor,
  },
});