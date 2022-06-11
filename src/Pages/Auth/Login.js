import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Platform
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {IMAGE, HP, WP, COLOR} from '../../Utils/theme';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import FormCustomInput from '../../component/FormCustomInput';
import FormCustomButton from '../../component/FormCustomButton';
import {login} from '../../Redux/Slice/AuthSlice';
import {useDispatch, useSelector} from 'react-redux';
import Validator from 'validatorjs';
import en from 'validatorjs/src/lang/en';
import PasswordInput from '../../component/PasswordInput';
import {CreateVendorAction} from '../../Redux/Slice/VendorSlice';
import {useNavigation} from '@react-navigation/native';
import UserDetailsHoc from '../../hoc/UserDetails';

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

  return (
    <KeyboardAwareScrollView
      style={styles._mainContainer}
      contentContainerStyle={{paddingBottom: WP(50)}}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}>
      <View style={styles._imageContainer}>
        <Image source={IMAGE.splash_icon} />
      </View>
     

     
     <View style={{width:WP(3), bottom:Platform.OS=="ios"&&WP(8),}}>
     <TouchableOpacity
        onPress={() => navigation.navigate('ResetPassword')}
        style={{top: HP(-10), width: WP(90), left: WP(7)}}>
        <Text style={styles._forgot}>Forgot Password</Text>
      </TouchableOpacity>
     </View>

      {/*  */}

      <Text style={[styles.error, {textAlign: 'center'}]}>{errors?.msg}</Text>

      <View style={{top: WP(39), width: WP(90), left: WP(7)}}>
        <FormCustomButton
          placeholder="Password"
          borderColor={COLOR.BgColor}
          borderWidth={WP(0.3)}
          btnTitle="Create Account"
          onPress={() => props.navigation.navigate('Welcome')}
          backgroundColor={COLOR.whiteColor}
          textColor={COLOR.BgColor}
        />
      </View>
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
    top: HP(-6),
    alignSelf: 'center',
  },
  error: {
    color: 'red',
  },
});
