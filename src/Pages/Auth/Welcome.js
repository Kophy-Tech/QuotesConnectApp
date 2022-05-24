import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {IMAGE, HP, WP, COLOR} from '../../Utils/theme';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import FormCustomInput from '../../component/FormCustomInput';
import FormCustomButton from '../../component/FormCustomButton';
import PasswordInput from '../../component/PasswordInput';
import {useDispatch, useSelector} from 'react-redux';
import Validator from 'validatorjs';
import en from 'validatorjs/src/lang/en';
import {ErrorDisplay} from '../../Utils/util';
import {register} from '../../Redux/Slice/AuthSlice';
Validator.setMessages('en', en);

const Welcome = (props) => {
  const dispatch = useDispatch();
  const {isError, isLoading, message} = useSelector(state => state.auth);
  console.log(isLoading, 'llllllllllllll');
  const [errors, setError] = useState({});
  const [value, setValues] = useState({
    email: '',
    password: '',
    fullname: '',
  });

  console.log(value, 'error');
  console.log(errors.fullname, 'error');

  const handleInputChange = (inputName, inputValue) => {
    setValues({
      ...value,
      [inputName]: inputValue,
    });
  };

  const onSubmit = async () => {
    console.log('submit');
    const passwordRegex =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/;
    Validator.register(
      'strict',
      value => passwordRegex.test(value),
      'password must contain at least one  letter, number and a special character',
    );
    let rules = {
      fullname: 'required',
      email: 'required|email',
      password: 'required|strict',
    };

    let validation = new Validator(value, rules, {
      'required.fullname': 'The Full Name field is required.',
      'required.email': 'The Email field is required.',
      'required.password': 'The Password field is required.',
    });

    if (validation.fails()) {
      setError(validation.errors.all());
    } else {
      dispatch(register(value));
    }
  };

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
      {/*  */}

      <View style={styles._formInputContainer}>
        <FormCustomInput
          placeholder="Full Name"
          inputBorderColor={COLOR.BgColor}
          onChangeText={value => handleInputChange('fullname', value)}
        />
        <FormCustomInput
          placeholder="Email"
          inputBorderColor={COLOR.BgColor}
          onChangeText={value => handleInputChange('email', value)}
        />
        <PasswordInput
          placeholder="Password"
          inputBorderColor={COLOR.BgColor}
          onChangeText={value => handleInputChange('password', value)}
        />

        {/* Error */}

        <View>
          <Text>{ErrorDisplay(errors)}</Text>
          <Text style={{color: 'red', textAlign: 'center'}}>{message}</Text>
        </View>

        <FormCustomButton
          onPress={() => onSubmit()}
          backgroundColor={COLOR.BgColor}
          btnTitle={
            isLoading ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              'Create Account'
            )
          }
          textColor={COLOR.whiteColor}
        />
        <View style={{top: WP(8)}}>
          <FormCustomButton
            backgroundColor={COLOR.whiteColor}
            btnTitle={'Login'}
            textColor={COLOR.BgColor}
            borderColor={COLOR.BgColor}
            borderWidth={0.4}
            e
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
