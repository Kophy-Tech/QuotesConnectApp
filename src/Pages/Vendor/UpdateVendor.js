import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
  Pressable
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../component/Header';
import FormCustomButton from '../../component/FormCustomButton';
import {COLOR, HP, IMAGE, WP} from '../../Utils/theme';
import FormCustomInput from '../../component/FormCustomInput';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  CreateVendorAction,
  getVendorAction,
} from '../../Redux/Slice/VendorSlice';
import Validator from 'validatorjs';
import en from 'validatorjs/src/lang/en';
import ImagePicker from 'react-native-image-crop-picker';
import {useSelector, useDispatch} from 'react-redux';
import {ErrorDisplay} from '../../Utils/util';

Validator.setMessages('en', en);
const UpdateVendor = props => {
  const [errors, setError] = useState({});
  const [backendError, setBackendError] = useState([]);
  const {navigation} = props;
  const [document, setDocument] = useState({});
  const {isLoading} = useSelector(state => state.vendor);
  const dispatch = useDispatch();

  React.useEffect(() => {
    navigation.setOptions({});
  }, [navigation]);

  const [value, setValues] = useState({
    name: '',
    street: '',
    city: '',
    zip_code: '',
    sales_rep: '',
    telephone: '',
    state: '',
  });
  const {
    name,
    street,
    city,
    zip_code,
    sales_rep,
    telephone,
    state,
    logo = document?.path,
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
  const [email, setemail] = useState('');
  const [emailError, setEmailError] = useState(false);
  // our number of inputs, we can add the length or decrease the length
  const [numInputs, setNumInputs] = useState(1);
  // all our input fields are tracked with this array
  const refInputs = React.useRef([email]);

  console.log(email, ' onChangeText={value => setInputValue(i, value)}')

  function validateEmailList(email){
    var emails = email.split(',')


    var valid = true;
    var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    for (var i = 0; i < emails.length; i++) {
        if( emails[i] === "" || !regex.test(emails[i].replace(/\s/g, ""))){
            valid = false;

            return false

            
        }
    }
    return email;
}

  const onSubmit = async () => {
    let rules = {
      name: 'required',
      street: 'required',
      city: 'required',
      zip_code: 'required|numeric',
      sales_rep: 'required|string',
      telephone: 'required|numeric',
     
      state: 'required|string',
    };

    let validation = new Validator(value, rules, {
      'required.name': 'The name field is required.',
      'required.street': 'The Street field is required.',
      'required.city': 'The city field is required.',
      'required.zip_code': 'The zip code field is required.',
      'required.sales_rep': 'The sales representative field is required.',
      'required.telephone': 'The telephone field is required.',
      'required.state': 'The state field is required.',
      // 'required.image': 'The image field is required.',
    });
    if (validation.fails()|| validateEmailList(...refInputs.current)==false) {
      setError(validation.errors.all());
      setEmailError(true)
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
          email:refInputs.current
        }),
      )
        .unwrap()
        .then(res => {
          props.navigation.goBack();
          dispatch(getVendorAction());
        })
        .catch(err => {
          console.log(err?.error);
          setBackendError(err?.error);
        });
    }
  };

 

console.log(validateEmailList(...refInputs.current), 'validatorjs')

  const addInput = () => {
    // add a new element in our refInputs array
		refInputs.current.push('');
    
    // increase the number of inputs
		setNumInputs(value => value + 1);
	}

  const removeInput = (i) => {
    // remove from the array by index value
		refInputs.current.splice(i, 1)[0];
    // decrease the number of inputs
		setNumInputs(value => value - 1);
	}

  const setInputValue = (index, value) => {
    // first, we are storing input value to refInputs array to track them
		const inputs = refInputs.current;
		inputs[index] = value;
    // we are also setting the text value to the input field onChangeText
		setemail(value)
	}

  const inputs = [];
	for (let i = 0; i < numInputs; i ++)
	{
		inputs.push(
			<View key={i} style={{flexDirection: 'row', alignItems: 'center'}}>
      <View style={{width:WP(60)}}>
      <FormCustomInput
                lablelText="Email*"
                inputBorderColor={COLOR.BgColor}
                labelTextTop={WP(3)}
                labelText={COLOR.BgColor}
                onChangeText={value => setInputValue(i, value)}
                // onChangeText={value => handleInputChange('email', value)}
              />
      </View>
          <View style={{width:WP(30), height:HP(13),top:HP(3), left:WP(2)}}>
         {i==0 ? ( <FormCustomButton
            btnTitle={'Add More'}
            backgroundColor={COLOR.BgColor}
            textColor={COLOR.whiteColor}
            onPress={() => addInput(i)}
            
           
           
          />) :(
            <FormCustomButton
            btnTitle={'Remove'}
            backgroundColor={'red'}
            textColor={COLOR.whiteColor}
            onPress={() =>removeInput(i)}
           
           
          />
          )}
          </View>
        {/* To remove the input */}
				{/* <Pressable onPress={() => removeInput(i)} style={{marginLeft: 5}}>
					<AntDesign name="minuscircleo" size={20} color="red" />
				</Pressable> */}
			</View>
		);
	}


  console.log(refInputs.current, 'refInputs.current.maprefInputs.current.map')
  return (
    <KeyboardAwareScrollView
      style={styles._mainContainer}
      contentContainerStyle={{paddingBottom: WP(65)}}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}>
      <View style={styles.vendorInputContainer}>
        <View style={{top: HP(3)}}>
        <ScrollView style={{flex:1}} >
            
        </ScrollView>
       
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
           {inputs}



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
        <Text style={styles.error}>{emailError&& 'Also check if the email in the email box are correct and also not empty'}</Text>
        {backendError.map(item => (
          <Text  style={styles.error}>{item?.msg}</Text>
        ))}
      </View>

    
    </KeyboardAwareScrollView>
  );
};

export default UpdateVendor;

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
