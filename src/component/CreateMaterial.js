import {StyleSheet, Text, View, Alert} from 'react-native';
import React from 'react';
import {HP, WP, COLOR} from '../Utils/theme';
import InputForm from './Input';
import {Box} from 'native-base';
import FormCustomButton from './FormCustomButton';
import CustomTextArea from './TextArea';
import {ColorText} from '../Utils/Colors';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {postMaterial} from '../Redux/Slice/materialSlice';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const CreateMaterial = () => {
  const auth = useSelector(auth => auth.auth.user);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  // console.log(auth, 'aaaaaaaa');
  const [value, setValues] = React.useState({
    name: '',
    description: '',
  });

  const handleInputChange = (inputName, inputValue) => {
    setValues({
      ...value,
      [inputName]: inputValue,
    });
  };
  const token = auth?.token;
  // console.log(token, 'ttttttt');
  const subMaterials = () => {
    const dataMaterial = {value, token};
    // console.log(dataMaterial, 'dataMaterial');
    if (!value.name) {
      Alert.alert('Material name is required');
    } else if (!value.description) {
      Alert.alert('Material description is required');
    } else {
      dispatch(postMaterial(dataMaterial))
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

  // console.log(value)
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{paddingBottom: WP(65)}}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}>
      <Box px="6" pt="20">
        <Box mb="2">
          <InputForm
            title="Primary Category Name"
            value={value.name}
            name="name"
            borderColor={COLOR.BgColor}
            onChangeText={value => handleInputChange('name', value)}
          />
          <Text style={styles.subText}>
            name of the project you want to create
          </Text>
        </Box>
        <Box mb="2">
          <CustomTextArea
            title="Sub Item Description"
            value={value.description}
            name="description"
            borderColor={COLOR.BgColor}
            onChangeText={value => handleInputChange('description', value)}
          />
        </Box>

        <Box mb="2">
          <FormCustomButton
            placeholder=""
            borderColor={COLOR.BgColor}
            borderWidth={WP(0.3)}
            btnTitle="Create"
            backgroundColor={COLOR.BgColor}
            textColor={COLOR.whiteColor}
            onPress={subMaterials}
          />
        </Box>
      </Box>
    </KeyboardAwareScrollView>
  );
};

export default CreateMaterial;

const styles = StyleSheet.create({
  heading: {
    fontWeight: '500',
    color: COLOR.BgColor,
    fontSize: WP(6),
    fontStyle: 'normal',
    lineHeight: WP(4),
    paddingTop: HP(2),
  },
  subText: {
    fontWeight: '400',
    fontStyle: 'normal',
    fontSize: WP(3),
    paddingTop: HP(0),
    color: ColorText,
  },
});
