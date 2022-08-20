import {StyleSheet, Text, Alert} from 'react-native';
import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Box} from 'native-base';
import FormCustomButton from './FormCustomButton';
import {HP, WP, COLOR} from '../Utils/theme';
import InputForm from './Input';
import {useSelector, useDispatch} from 'react-redux';
import {postJob} from '../Redux/Slice/JobSlice';
import {useNavigation} from '@react-navigation/native';
import FormCustomInput from './FormCustomInput';

const JobCreate = () => {
  const auth = useSelector(auth => auth.auth.user);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [value, setValues] = React.useState({
    name: '',
    state: '',
    street: '',
    city: '',
    zip_code: '',
  });

  const handleInputChange = (inputName, inputValue) => {
    setValues({
      ...value,
      [inputName]: inputValue,
    });
  };

  const token = auth?.token;
  const subJob = () => {
    const dataJob = {
      value,
      token,
    };
    // console.log(dataMaterial, 'dataMaterial');
    if (!value.name) {
      Alert.alert('Job name is required');
    } else if (!value.state) {
      Alert.alert('Job state is required');
    } else if (!value.street) {
      Alert.alert('Job street is required');
    } else if (!value.city) {
      Alert.alert('Job city is required');
    } else if (!value.zip_code) {
      Alert.alert('Job zip_code is required');
    } else {
      dispatch(postJob(dataJob))
        .unwrap()
        .then(res => {
          if (res.status === 'Created') {
            Alert.alert(`${res.msg}`);
            setValues({
              name: '',
              description: '',
            });
            navigation.goBack();
          }
          console.log(res.status);
        })
        .catch(err => {
          console.log(err);
          Alert.alert(`${err}`);
        });
    }
  };

  return (
    <KeyboardAwareScrollView
      style={styles._mainContainer}
      contentContainerStyle={{paddingBottom: WP(15)}}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}>
      <Box px="6" pt="5">
        <Box mb="2">
          <FormCustomInput
            labelTextTop={23}
            inputBorderColor={COLOR.BgColor}
            lablelText={'Project Name'}
            labelTextColor={COLOR.BgColor}
            onChangeText={value => handleInputChange('name', value)}
            value={value.name}
          />
          {/* <InputForm
            title="Project Name"
            value={value.name}
            borderColor={COLOR.BgColor}
            name="name"
            onChangeText={value => handleInputChange('name', value)}
          /> */}
        </Box>

        <Box mb="2">
          <Text style={styles.address}>Address</Text>
        </Box>
        <Box mb="2">
          <FormCustomInput
            labelTextTop={23}
            inputBorderColor={COLOR.BgColor}
            lablelText={'State'}
            labelTextColor={COLOR.BgColor}
            onChangeText={value => handleInputChange('state', value)}
            value={value.state}
          />
        </Box>

        <Box mb="2">
          <FormCustomInput
            labelTextTop={23}
            inputBorderColor={COLOR.BgColor}
            lablelText={'City'}
            labelTextColor={COLOR.BgColor}
            onChangeText={value => handleInputChange('city', value)}
            value={value.city}
          />
          {/* <InputForm
            title="City"
            value={value.city}
            onChangeText={value => handleInputChange('city', value)}
            name="city"
            borderColor={COLOR.BgColor}
          /> */}
        </Box>
        <Box mb="2">
          <FormCustomInput
            labelTextTop={23}
            inputBorderColor={COLOR.BgColor}
            lablelText="Street"
            labelTextColor={COLOR.BgColor}
            onChangeText={value => handleInputChange('street', value)}
            value={value.street}
          />
          {/* <InputForm
            title="Street"
            borderColor={COLOR.BgColor}
            name="street"
            value={value.street}
            onChangeText={value => handleInputChange('street', value)}
          /> */}
        </Box>

        <Box mb="2">
          <FormCustomInput
            labelTextTop={23}
            inputBorderColor={COLOR.BgColor}
            lablelText="Zip Code"
            labelTextColor={COLOR.BgColor}
            onChangeText={value => handleInputChange('zip_code', value)}
            value={value.street}
          />
          {/* <InputForm
            title="Zip Code"
            value={value.zip_code}
            onChangeText={value => handleInputChange('zip_code', value)}
            name="zip_code"
            borderColor={COLOR.BgColor}
          /> */}
        </Box>

        <Box mb="2">
          <FormCustomButton
            placeholder=""
            borderColor={COLOR.BgColor}
            borderWidth={WP(0.3)}
            btnTitle="Create"
            backgroundColor={COLOR.BgColor}
            textColor={COLOR.whiteColor}
            onPress={subJob}
          />
        </Box>
      </Box>
    </KeyboardAwareScrollView>
  );
};

export default JobCreate;

const styles = StyleSheet.create({
  _mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  address: {
    color: 'black',
    fontSize: WP(5),
    fontStyle: 'normal',
    lineHeight: WP(4),
    paddingTop: HP(2),
    fontWeight: 'bold',
  },
  heading: {
    fontWeight: '500',
    color: COLOR.BgColor,
    fontSize: WP(6),
    fontStyle: 'normal',
    lineHeight: WP(4),
    paddingTop: HP(2),
  },
});
