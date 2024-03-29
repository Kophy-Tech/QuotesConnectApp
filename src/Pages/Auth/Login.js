import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Platform,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {IMAGE, HP, WP, COLOR} from '../../Utils/theme';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import FormCustomInput from '../../component/FormCustomInput';
import FormCustomButton from '../../component/FormCustomButton';
import {login, RefreshTokenAction} from '../../Redux/Slice/AuthSlice';
import {useDispatch, useSelector} from 'react-redux';
import Validator from 'validatorjs';
import en from 'validatorjs/src/lang/en';
import PasswordInput from '../../component/PasswordInput';
import {CreateVendorAction} from '../../Redux/Slice/VendorSlice';
import {useNavigation} from '@react-navigation/native';
import UserDetailsHoc from '../../hoc/UserDetails';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

Validator.setMessages('en', en);

const Login = props => {
  const dispatch = useDispatch();
  const [document, setDocument] = useState({});
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const [errors, setError] = useState({});
  const [value, setValues] = useState({
    email: '',
    password: '',
    mobile: true,
  });

  const handleInputChange = (inputName, inputValue) => {
    setValues({
      ...value,
      [inputName]: inputValue,
    });
  };

  const onSubmit = async () => {
    setLoading(true);
    let rules = {
      email: 'required|email',
      password: 'required',
    };

    let validation = new Validator(value, rules, {
      'required.email': 'The Email field is required.',
      'required.password': 'The Password field is required.',
    });

    if (validation.fails()) {
      setLoading(false);
      setError(validation.errors.all());
    } else {
      dispatch(login(value))
        .unwrap()
        .then(() => {
          navigation.navigate('bottomStack', {
            screen: 'rfq',
          });
          setLoading(false);
        })
        .catch(rejectedValueOrSerializedError => {
          console.log(rejectedValueOrSerializedError, 'rejecteddd');
          if (typeof rejectedValueOrSerializedError == 'object') {
            Object.keys(rejectedValueOrSerializedError).map(error => {
              setError(...rejectedValueOrSerializedError[error]);
            });
          }
          setLoading(false);
          // handle error here
        });
    }
  };

  // useEffect(() => {
  //   const refreshToken = async () => {
  //     let tokens = await AsyncStorage.getItem('refreshToken');
  //     axios({
  //       url: 'https://demo-server-quotesconnect.herokuapp.com/api/v1.1/client/login',
  //       method: 'get',
  //       headers: {
  //         refreshToken: tokens,
  //         'Content-Type': 'application/json',
  //       },
  //     })
  //       .then(response => {
  //         AsyncStorage.setItem('user', response.data.token);
  //       })
  //       .catch(err => {
  //         console.log(err, 'errorrr');
  //       });
  //   };

  //   refreshToken();
  // }, [dispatch]);

  return (
    <KeyboardAwareScrollView
      style={styles._mainContainer}
      contentContainerStyle={{paddingBottom: WP(90)}}
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

          <View style={{bottom: WP(8)}}>
            <PasswordInput
              placeholder="Password"
              inputBorderColor={COLOR.BgColor}
              name="password"
              onChangeText={value => handleInputChange('password', value)}
            />
          </View>
          <View style={styles.errorContainer}>
            <Text style={styles.error}>{errors?.email}</Text>
            <Text style={styles.error}>{errors?.password}</Text>
            <Text style={[styles.error, {textAlign: 'center'}]}>
              {errors?.msg}
            </Text>
          </View>

          <View
            style={{
              marginTop: Object.keys(errors).length ? WP(-4) : WP(-14),
            }}>
            <FormCustomButton
              onPress={() => onSubmit()}
              inputBorderColor={COLOR.BgColor}
              btnTitle={
                loading ? <ActivityIndicator small color="#fff" /> : 'Login'
              }
              backgroundColor={COLOR.BgColor}
              textColor={COLOR.whiteColor}
            />
          </View>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('ResetPassword')}
        style={{
          position: 'absolute',
          textAlign: 'center',
          bottom: WP(40),
          alignSelf: 'center',
        }}>
        <Text>Forgot Password</Text>
      </TouchableOpacity>

      {/* <View style={{marginTop: WP(26), width: WP(90), alignSelf: 'center'}}>
        <FormCustomButton
          placeholder="Password"
          borderColor={COLOR.BgColor}
          borderWidth={WP(0.3)}
          btnTitle="Create Account"
          onPress={() => props.navigation.navigate('Welcome')}
          backgroundColor={COLOR.whiteColor}
          textColor={COLOR.BgColor}
        />
      </View> */}
      {/* <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('ResetPassword')}
          style={{width: WP(90), left: WP(7), marginTop: WP(13)}}>
          <Text style={styles._forgot}>Forgot Password</Text>
        </TouchableOpacity>
      </View> */}
    </KeyboardAwareScrollView>
  );
};

export default UserDetailsHoc(Login);

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
    top: WP(29),
    color: COLOR.blackColor,
  },
  errorContainer: {
    top: HP(-2),
    alignSelf: 'center',
  },
  error: {
    color: 'red',
  },
});
