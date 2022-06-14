import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {Box} from 'native-base';
import {COLOR, WP} from '../../Utils/theme';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import {useDispatch, useSelector} from 'react-redux';
import {TextInput} from 'react-native-paper';
import UserDetailsHoc from '../../hoc/UserDetails';
import ImagePicker from 'react-native-image-crop-picker';
import Loading from '../../component/Loading';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {HStack, Avatar, Flex} from 'native-base';
import {UploadUserDetails} from '../../Redux/Slice/AuthSlice';
import Validator from 'validatorjs';
import en from 'validatorjs/src/lang/en';
import FormCustomButton from '../../component/FormCustomButton';




Validator.setMessages('en', en);

const Profile = props => {
  const {profile} = props;
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState(profile?.email);
  const [photo, setPhoto] = useState("");
  console.log(photo?.path, 'pyoyyoyoy')
  const dispatch = useDispatch();

  const [errors, setError] = useState({});
  const [value, setValues] = useState({
    code: '',
    telephone: '',
    logo
  });

  const {code ,telephone, logo}=value


  const [fullname, setFullname] = useState(
    profile?.fullname !== undefined && profile?.fullname,
  );
    
  // UploadImage
  const PickImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
    })
      .then(image => {
        setPhoto(image);
        //  dispatch(UploadUserDetails(image?.path));
      })
      .catch(err => {
        
        console.log(err.response);
      });
  };

  const handleInputChange = (inputName, inputValue) => {
    setValues({
      ...value,
      [inputName]: inputValue,
    });
  };


  const onSubmit = async () => {
    setLoading(true)
    const telephoneRegex =/^\+(\d{1}\-)?(\d{1,3})$/;
    
    Validator.register(
      'strict',
      value => telephoneRegex.test(value), 'Invalid country code format',
    );
    let rules = {
      code: 'required|strict',
      telephone: 'required',
    };

    let validation = new Validator(value, rules, {
      'required.code': 'The Country Code field is required.',
      'required.telephone': 'The Telephone field is required.',
    });

    if (validation.fails()) {
      setError(validation.errors.all());
    } 
    else {
      dispatch(UploadUserDetails({code ,telephone, logo:photo?.path})).unwrap()
      .then(() => {
        // navigation.navigate('bottomStack', {
        //   screen: 'rfq',
        // });
        setLoading(false);
      })
      .catch(rejectedValueOrSerializedError => {
        console.log(rejectedValueOrSerializedError, 'rejecteddd');
        if (typeof rejectedValueOrSerializedError == 'object') {
          Object.keys(rejectedValueOrSerializedError).map(error => {
            setError(...rejectedValueOrSerializedError[error]);
          });
        }
        setError(rejectedValueOrSerializedError);
        setLoading(false);
        // handle error here
      });
     
          }

          // handle error here
      
    
  };



  return (
    <View style={styles._mainContainer}>
      <TouchableOpacity
        onPress={() => PickImage()}
        style={{alignSelf: 'center', top: WP(12)}}>
         {photo?.path=="" || photo?.path==undefined? <Ionicons name="md-person-circle-sharp" size={154}/>:(
           <Image source={{uri:photo?.path}} style={{width:WP(30), height:WP(12)}} />
         )}
        
      </TouchableOpacity>
      <View style={styles.container}>
        <TextInput
          label="Full Name"
          mode="outlined"
          theme={{
            colors: styles.formStyle,
          }}
          selectionColor="red"
          underlineColor="red"
          keyboardType="email-address"
          underlineColorAndroid="green"
          autoCapitalize="none"
          value={fullname}
          // onChangeText={newText => setFullname(newText)}
        />
      </View>
      <View style={styles.container}>
        <TextInput
          label="Country  Code"
          mode="outlined"
          theme={{
            colors: styles.formStyle,
          }}
          selectionColor="red"
          underlineColor="red"
          keyboardType="email-address"
          underlineColorAndroid="green"
          autoCapitalize="none"
          placeholder='+234'
          onChangeText={value => handleInputChange('code', value)}

          // value={email}
        
        />

        
      </View>

      <View style={styles.container}>
        <TextInput
          label="Telephone"
          mode="outlined"
          theme={{
            colors: styles.formStyle,
          }}
          selectionColor="red"
          underlineColor="red"
          keyboardType="email-address"
          underlineColorAndroid="green"
          autoCapitalize="none"
          // value={email}
          onChangeText={value => handleInputChange('telephone', value)}

        />

        
      </View>

      <View style={{width:WP(70), alignSelf:'center', top:WP(10)}}>
        <FormCustomButton btnTitle={"Update "} backgroundColor={COLOR.BgColor}
        onPress={()=>onSubmit()}
        textColor={"white"}
        />
      </View>
    </View>
  );
};

export default UserDetailsHoc(Profile);
const styles = StyleSheet.create({
  _mainContainer: {
    flex: 1,
    backgroundColor: COLOR.whiteColor,
  },
  text1: {
    top: WP(10),
    color: COLOR.primaryBrown,
    paddingBottom: WP(5),
  },
  formStyle: {
    placeholder: COLOR.BgColor,
    text: COLOR.blackColor,
    primary: COLOR.BgColor,
    underlineColor: COLOR.BgColor,
    background: COLOR.whiteColor,
  },
  container: {
    width: WP(90),
    alignSelf: 'center',
    marginVertical: WP(6),
    top: WP(13),
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});
