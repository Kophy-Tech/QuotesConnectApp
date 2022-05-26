import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../component/Header';
import FormCustomButton from '../../component/FormCustomButton';
import {COLOR, HP, IMAGE, WP} from '../../Utils/theme';
import FormCustomInput from '../../component/FormCustomInput';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {CreateVendorAction} from '../../Redux/Slice/VendorSlice';
import Validator from 'validatorjs';
import en from 'validatorjs/src/lang/en';
import ImagePicker from 'react-native-image-crop-picker';
import {useSelector, useDispatch} from 'react-redux';

Validator.setMessages('en', en);
const CreateVendor = () => {
  const [errors, setError] = useState({});
  console.log(errors);
  const [document, setDocument] = useState({});
  const dispatch = useDispatch();

  const [value, setValues] = useState({
    name: '',
    street: '',
    city: '',
    zip_code: '',
    sales_rep: '',
    telephone: '',
    email: '',
    state: '',
  });

  console.log(value, 'value');

  const {
    name,
    street,
    city,
    zip_code,
    sales_rep,
    telephone,
    email,
    image,
    state,
  } = value;

  const handleInputChange = (inputName, inputValue) => {
    setValues({
      ...value,
      [inputName]: inputValue,
    });
  };
  const pickFiles = async () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
    }).then(image => {
      setDocument(image);
    });
  };

  // const onSubmit = ()=>{
  //
  // }
  const onSubmit = async () => {
    console.log('submit');
    let rules = {
      name: 'required',
      street: 'required',
      city: 'required',
      zip_code: 'required',
      sales_rep: 'required',
      telephone: 'required',
      email: 'required',
      state: 'required',
    };

    let validation = new Validator(value, rules, {
      'required.name': 'The Email field is required.',
      'required.street': 'The Street field is required.',
      'required.city': 'The city field is required.',
      'required.zip_code': 'The zip_code field is required.',
      'required.sales_rep': 'The sales representative field is required.',
      'required.telephone': 'The telephone field is required.',
      'required.email': 'The email field is required.',
      'required.state': 'The state field is required.',
      // 'required.image': 'The image field is required.',
    });
    // let bodyFormData = new FormData();
    // bodyFormData.append('name', name);
    // bodyFormData.append('street', name);
    // bodyFormData.append('city', name);
    // bodyFormData.append('sales_rep', name);
    // bodyFormData.append('state', name);
    // bodyFormData.append('telephone',"08067031917");
    // bodyFormData.append('sales_rep', name);
    // bodyFormData.append('email', 'omidiora@gmail.com');
    // bodyFormData.append('zip_code', '101010');
    // dispatch(CreateVendorAction(bodyFormData));
    dispatch(
      CreateVendorAction({
        logo: image.path,
        name: name,
        description: city,
        sales_rep: sales_rep,
        telephone: telephone,
        emails: email,
        state: state,
        street: street,
        city: city,
        zip_code: zip_code,
      }),
    );
    // if (validation.fails()) {
    //   setError(validation.errors.all());
    // } else {
    //   dispatch(

    //   );
    // }
  };

  return (
    <KeyboardAwareScrollView
      style={styles._mainContainer}
      contentContainerStyle={{paddingBottom: WP(65)}}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}>
      <Header />

      <View
        style={{
          flexDirection: 'row',
          paddingBottom: WP(10),
          justifyContent: 'center',
        }}>
        <View style={{width: WP(48), height: HP(20)}}>
          <FormCustomButton
            backgroundColor={COLOR.whiteColor}
            borderWidth={0.5}
            btnTitle="Create Vendor"
            borderColor={COLOR.deepBlue}
          />
        </View>
        <View style={{width: WP(43), left: WP(2)}}>
          <FormCustomButton
            backgroundColor={COLOR.BgColor}
            btnTitle="Create Vendor"
            textColor={COLOR.whiteColor}
          />
        </View>
      </View>

      <View style={styles.vendorInputContainer}>
        <Text
          style={{
            fontSize: WP(5),
            fontWeight: '400',
            color: COLOR.BgColor,
            marginVertical: WP(3),
          }}>
          Create Vendor
        </Text>

        <View style={{top: HP(3)}}>
          <FormCustomInput
            lablelText="Company Name*"
            inputBorderColor={COLOR.BgColor}
            labelTextTop={WP(3)}
            labelText={COLOR.BgColor}
            name="name"
            onChangeText={value => handleInputChange('name', value)}
          />
          <FormCustomInput
            lablelText="Street*"
            inputBorderColor={COLOR.BgColor}
            labelTextTop={WP(3)}
            labelText={COLOR.BgColor}
            name="street"
            onChangeText={value => handleInputChange('street', value)}
          />
          <FormCustomInput
            lablelText="City*"
            inputBorderColor={COLOR.BgColor}
            labelTextTop={WP(3)}
            labelText={COLOR.BgColor}
            name="city"
            onChangeText={value => handleInputChange('city', value)}
          />
          <FormCustomInput
            lablelText="State*"
            inputBorderColor={COLOR.BgColor}
            labelTextTop={WP(3)}
            labelText={COLOR.BgColor}
            name="state"
            onChangeText={value => handleInputChange('state', value)}
          />
          <FormCustomInput
            lablelText="Zip  Code"
            inputBorderColor={COLOR.BgColor}
            labelTextTop={WP(3)}
            labelText={COLOR.BgColor}
            name="zip_code"
            onChangeText={value => handleInputChange('zip_code', value)}
          />

          <FormCustomInput
            lablelText="Sales Representative*"
            inputBorderColor={COLOR.BgColor}
            labelTextTop={WP(3)}
            labelText={COLOR.BgColor}
            onChangeText={value => handleInputChange('sales_rep', value)}
          />
          <FormCustomInput
            lablelText="Telephone Number*"
            inputBorderColor={COLOR.BgColor}
            labelTextTop={WP(3)}
            labelText={COLOR.BgColor}
            onChangeText={value => handleInputChange('telephone', value)}
          />
          <FormCustomInput
            lablelText="Email*"
            inputBorderColor={COLOR.BgColor}
            labelTextTop={WP(3)}
            labelText={COLOR.BgColor}
            onChangeText={value => handleInputChange('email', value)}
          />

          {Object.keys(document).length == 0 ? (
            <TouchableOpacity onPress={() => pickFiles()}>
              <Image
                source={IMAGE.FileInput}
                style={{left: WP(4), top: WP(3)}}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => pickFiles()}>
              <Image
                source={{
                  uri: document.path,
                }}
                style={{
                  left: WP(4),
                  top: WP(6),
                  width: WP(80),
                  height: WP(50),
                  marginVertical: WP(3),
                }}
              />
            </TouchableOpacity>
          )}
        </View>

        <View style={{top: WP(13)}}>
          <FormCustomButton
            btnTitle="Create"
            backgroundColor={COLOR.BgColor}
            textColor={COLOR.whiteColor}
            onPress={() => onSubmit()}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default CreateVendor;

const styles = StyleSheet.create({
  _mainContainer: {
    backgroundColor: COLOR.whiteColor,
    flex: 1,
  },
  vendorInputContainer: {
    top: WP(-25),
    width: WP(90),
    left: WP(3),
  },
});
