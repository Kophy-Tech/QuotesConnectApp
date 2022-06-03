import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
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
const CreateVendor = props => {
  const [errors, setError] = useState({});
  const {navigation}=props
  const [document, setDocument] = useState({});
  console.log(document, 'docuemtntntn')
  const {isLoading} = useSelector(state => state.vendor);
  console.log(isLoading, 'loading');
  const dispatch = useDispatch();

  React.useEffect(() => {
   navigation.setOptions({
    
    });
}, [navigation]);

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


  const {name, street, city, zip_code, sales_rep, telephone, email, state ,logo=document?.path} =
    value;

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
  const [textValue, setTextValue] = useState(''); 
	// our number of inputs, we can add the length or decrease the length
  const [numInputs, setNumInputs] = useState(1);
  // all our input fields are tracked with this array
  const refInputs = React.useRef([textValue]);
  
  const inputs= [];
const EmailInput =() => {
  for (let i = 0; i < numInputs; i ++)
	{
		inputs.push(
			<View key={i} style={{flexDirection: 'row', alignItems: 'center'}}>
				<Text>{i + 1}.</Text>
				<FormCustomInput
                lablelText="Email*"
                inputBorderColor={COLOR.BgColor}
                labelTextTop={WP(3)}
                labelText={COLOR.BgColor}
              />
			</View>
		);
	}
}

  const onSubmit = async () => {
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
      'required.name': 'The name field is required.',
      'required.street': 'The Street field is required.',
      'required.city': 'The city field is required.',
      'required.zip_code': 'The zip code field is required.',
      'required.sales_rep': 'The sales representative field is required.',
      'required.telephone': 'The telephone field is required.',
      'required.email': 'The email field is required.',
      'required.state': 'The state field is required.',
      // 'required.image': 'The image field is required.',
    });
    if (validation.fails()) {
      setError(validation.errors.all());
    } else {
      dispatch(
        CreateVendorAction({
          logo: document.path,
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
    }
  };

  return (
    <KeyboardAwareScrollView
      style={styles._mainContainer}
      contentContainerStyle={{paddingBottom: WP(65)}}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}>
    

  

      <View style={styles.vendorInputContainer}>
   

        <View style={{top: HP(3)}}>
          {EmailInput()}
          {/* <FormCustomInput
            lablelText="Company Name*"
            inputBorderColor={COLOR.BgColor}
            labelTextTop={WP(3)}
            labelText={COLOR.BgColor}
            name="name"
            onChangeText={value => handleInputChange('name', value)}
          /> */}
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
            lablelText="Zip  Code*"
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
                
                 
                  width: WP(90),
                  height: WP(30),
                
                }}
              />
            </TouchableOpacity>
          )}
        </View>

        <View style={{top: WP(13)}}>
          <FormCustomButton
            btnTitle={isLoading ? <ActivityIndicator color="#fff" /> : 'Create'}
            backgroundColor={COLOR.BgColor}
            textColor={COLOR.whiteColor}
            onPress={() => onSubmit()}
          />
        </View>
      </View>

      <View style={styles.errorContainer}>
        <Text style={styles.error}>{errors.name}</Text>
        <Text style={styles.error}>{errors.street}</Text>
        <Text style={styles.error}>{errors.city}</Text>
        <Text style={styles.error}>{errors.state}</Text>
        <Text style={styles.error}>{errors.telephone}</Text>
        <Text style={styles.error}>{errors.zip_code}</Text>
        <Text style={styles.error}>{errors.sales_rep}</Text>
        <Text style={styles.error}>{errors.email}</Text>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default CreateVendor;

const styles = StyleSheet.create({
  _mainContainer: {
    backgroundColor: COLOR.whiteColor,
    flex: 1,
    paddingHorizontal: WP(5),
  },
  vendorInputContainer: {
  
    width: WP(90),
   
  },
  errorContainer: {
    top: HP(12),
    alignSelf: 'center',
  },
  error: {
    color: 'red',
  },
});
