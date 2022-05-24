import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {IMAGE, HP, WP, COLOR} from '../../Utils/theme';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import FormCustomInput from '../../component/FormCustomInput';
import FormCustomButton from '../../component/FormCustomButton';
import {login} from '../../Redux/Slice/AuthSlice';
import {useDispatch} from 'react-redux';
import Validator from 'validatorjs';
import en from 'validatorjs/src/lang/en';
import PasswordInput from '../../component/PasswordInput';
import { useNavigation } from '@react-navigation/native';

Validator.setMessages('en', en);

const Login = (props) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [errors, setError] = useState({});
  const [value, setValues] = useState({
    email: '',
    password: '',
  });

 
  const handleInputChange = (inputName, inputValue) => {
    setValues({
      ...value,
      [inputName]: inputValue,
    });
  };

  const onSubmit = async () => {
    console.log('submit');
    let rules = {
      email: 'required|email',
      password: 'required',
    };

    let validation = new Validator(value, rules, {
      'required.email': 'The Email field is required.',
      'required.password': 'The Password field is required.',
    });

    if (validation.fails()) {
      setError(validation.errors.all());
    } else {
      dispatch(login(value)).unwrap().then(()=>{
        navigation.navigate('bottomStack', {
          screen: 'rfq',
         
        });
      });
    }
  };

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
            name="email"
            onChangeText={value => handleInputChange('email', value)}
          />

          <PasswordInput
            placeholder="Password"
            inputBorderColor={COLOR.BgColor}
            name="password"
            onChangeText={value => handleInputChange('password', value)}
          />

          <FormCustomButton
            onPress={() => onSubmit()}
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
      <View style={{top: WP(39), width: WP(90), left: WP(7)}}>
        <FormCustomButton
          placeholder="Password"
          borderColor={COLOR.BgColor}
          borderWidth={WP(0.3)}
          btnTitle="Create Account"
          onPress={() => props.navigation.navigate("Welcome")}
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
