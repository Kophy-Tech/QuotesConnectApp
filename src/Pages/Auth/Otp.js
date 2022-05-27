import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {IMAGE, HP, WP, COLOR} from '../../Utils/theme';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import FormCustomInput from '../../component/FormCustomInput';
import FormCustomButton from '../../component/FormCustomButton';
import OtpInputs from 'react-native-otp-inputs';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {useDispatch, useSelector} from 'react-redux';
import {
  OtpResetPassword,
  ResetPasswordAction,
} from '../../Redux/Slice/AuthSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Otp = ({navigation}) => {
  const loading = useSelector(state => state?.auth?.isLoadingOtp);
  const loadingSubmit = useSelector(state => state?.auth?.isLoading);
  const [error, setError] = useState('');
  console.log(loading, 'loaxding');
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const CELL_COUNT = 6;
  const [value, setValue] = React.useState('');

  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  //  "email":"bimagroupmail@gmail.com",
  // "token":"998975",
  // "type":"email"

  const setEmailValue = async () => {
    await AsyncStorage.getItem('userEmail').then(value => {
      setEmail(value);
    });
  };

  React.useEffect(() => {
    setEmailValue();
  }, []);

  const onSubmit = () => {
    dispatch(OtpResetPassword({email: email, token: value, type: 'email'}))
      .unwrap()
      .then(() => {
        navigation.navigate('bottomStack', {
          screen: 'rfq',
        });
      });
  };

  const ResentOtp = () => {
    dispatch(ResetPasswordAction({email: email}));
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
          Enter Your Otp
        </Text>
      </View>

      <View style={styles._otpContainer}>
        {/* Input Field For Login */}
        <Text style={{color: COLOR.blackColor}}>OTP Code</Text>
        <CodeField
          ref={ref}
          {...props}
          // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({index, symbol, isFocused}) => (
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />
      </View>

      <View style={styles._buttonContainer}>
        <FormCustomButton
          backgroundColor={COLOR.BgColor}
          btnTitle={'Submit'}
          textColor={COLOR.whiteColor}
          onPress={() => onSubmit()}
          disabled={value.length < 6 ? true : false}
        />
      </View>

      <View style={styles._buttonContainer}>
        <FormCustomButton
          backgroundColor={COLOR.whiteColor}
          btnTitle={
            loading ? (
              <ActivityIndicator size="small" color="#000" />
            ) : (
              'Re-Send OTP'
            )
          }
          textColor={COLOR.BgColor}
          borderWidth={WP(0.3)}
          borderColor={COLOR.BgColor}
          onPress={() => ResentOtp()}
          //  ResentOtp
        />
      </View>
      <View style={styles.errorContainer}>
        <Text style={styles.error}>{error}</Text>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Otp;

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
  _otpContainer: {
    top: HP(12),
    paddingBottom: WP(13),
    width: WP(80),
    left: WP(5),
  },
  root: {flex: 1, padding: 20},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {marginTop: 20},
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: COLOR.BgColor,
    textAlign: 'center',
    backgroundColor: COLOR.BgColor,
    color: COLOR.whiteColor,
    borderRadius: WP(1),
    fontWeight: 'bold',
  },
  focusCell: {
    borderColor: COLOR.BgColor,
  },
  _buttonContainer: {
    top: HP(8),
    width: WP(90),
    left: WP(3),
    marginVertical: WP(3),
  },
  errorContainer: {
    top: HP(10),
    alignSelf: 'center',
  },
  error: {
    color: 'red',
  },
});
