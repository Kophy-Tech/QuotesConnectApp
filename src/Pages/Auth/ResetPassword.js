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
import {useDispatch, useSelector} from 'react-redux';
import {ResetPasswordAction} from '../../Redux/Slice/AuthSlice';
import Validator from 'validatorjs';
import en from 'validatorjs/src/lang/en';
import AsyncStorage from '@react-native-async-storage/async-storage';

Validator.setMessages('en', en);
const ResetPassword = ({navigation}) => {
  const loading = useSelector(state => state?.auth?.isLoading);
  console.log(loading, 'loading');
  const dispatch = useDispatch();
  const [document, setDocument] = useState({});
  const [errors, setError] = useState({});
  const [value, setValues] = useState({
    email: '',
  });
  console.log(value, 'error');

  const handleInputChange = (inputName, inputValue) => {
    setValues({
      ...value,
      [inputName]: inputValue,
    });
  };

  const onSubmit = async () => {
    await AsyncStorage.setItem('userEmail', value?.email);
    let rules = {
      email: 'required|email',
    };

    let validation = new Validator(value, rules, {
      'required.email': 'The Email field is required.',
    });

    if (validation.fails()) {
      setError(validation.errors.all());
    } else {
      console.log(value?.email, 'vvvvvvvvvlaue');

      dispatch(ResetPasswordAction(value))
        .unwrap()
        .then(originalPromiseResult => {
          navigation.navigate('OtpReset');
        })
        .catch(rejectedValueOrSerializedError => {
          if (typeof rejectedValueOrSerializedError == 'object') {
            Object.keys(rejectedValueOrSerializedError).map(error => {
              setError(...rejectedValueOrSerializedError[error]);
            });
          }

          // handle error here
        });
      // dispatch(login(value))
      //   .unwrap()
      //   .then(() => {
      //     navigation.navigate('bottomStack', {
      //       screen: 'rfq',
      //     });
      //   });
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
          Reset Password
        </Text>
      </View>

      <View>
        {/* Input Field For Login */}
        <View style={styles._textInputContainer}>
          <FormCustomInput
            placeholder="Email"
            inputBorderColor={COLOR.BgColor}
            lablelText={'Email'}
            onChangeText={value => handleInputChange('email', value)}
          />

          <FormCustomButton
            inputBorderColor={COLOR.BgColor}
            btnTitle={
              loading ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                'Send OTP'
              )
            }
            backgroundColor={COLOR.BgColor}
            textColor={COLOR.whiteColor}
            onPress={() => onSubmit()}
          />

          <View style={styles.errorContainer}>
            <Text style={styles.error}>{errors?.email}</Text>
            <Text style={styles.error}>{errors?.msg}</Text>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default ResetPassword;

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
    top: HP(14),
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
  errorContainer: {
    top: HP(6),
    alignSelf: 'center',
  },
  error: {
    color: 'red',
  },
});
