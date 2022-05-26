import { StyleSheet, Text, Alert} from 'react-native'
import React from 'react'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {  Box, } from "native-base";
import FormCustomButton from './FormCustomButton';
import { HP, WP, COLOR } from '../Utils/theme';
import InputForm from './Input';
import { useSelector, useDispatch } from 'react-redux';
import { postJob } from '../Redux/Slice/JobSlice';

const JobCreate = ({ setIdex}) => {

  const auth = useSelector((auth) => auth.auth.user)
  const dispatch = useDispatch()

  const [value, setValues] = React.useState({
    name: '',
    state: '',
    street:'',
    city:'',
    zip_code:''
  });


  const handleInputChange = (inputName, inputValue) => {
    setValues({
      ...value,
      [inputName]: inputValue,
    });
  };

  const token = auth?.token
  const subJob = () => {
    const dataJob = {
      value, token
    }
    // console.log(dataMaterial, 'dataMaterial');
    if (!value.name) {
      Alert.alert('Job name is required')
    }
    else if (!value.state) {
      Alert.alert('Job state is required')

    }
    else if (!value.street) {
      Alert.alert('Job street is required')

    }
    else if (!value.city) {
      Alert.alert('Job city is required')

    }
    else if (!value.zip_code) {
      Alert.alert('Job zip_code is required')

    }
    else {
      dispatch(postJob(dataJob)).unwrap().then((res) => {

        if (res.status === 'Created') {
          Alert.alert(`${res.msg}`)
          setValues({
            name: '',
            description: '',
          })
          setIdex(true)
        }
        console.log(res.status);
      }).catch((err) => {
        console.log(err)
        Alert.alert(`${err}`)
      })

    }


  }

  return (
    <KeyboardAwareScrollView
      style={styles._mainContainer}
      contentContainerStyle={{ paddingBottom: WP(65) }}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}>

      <Box my="4">
        <Text style={styles.heading}>Create New Job</Text>
      </Box>
      <Box mb="2">
        <InputForm
          title="Project Name"
          value={value.name}
          borderColor={COLOR.BgColor}
          name="name"
          onChangeText={value => handleInputChange('name', value)}

        />
      </Box>

     
      <Box mb="2">
        <Text style={styles.address}>Address</Text>
      </Box>
      <Box mb="2">
        <InputForm
          title="State"
          value={value.state}
          onChangeText={value => handleInputChange('state', value)}
          name="state"
          borderColor={COLOR.BgColor}

        />
      </Box> 

      <Box mb="2">
        <InputForm
          title="City"
          value={value.city}
          onChangeText={value => handleInputChange('city', value)}
          name="city"
          borderColor={COLOR.BgColor}
        />
      </Box>   
      <Box mb="2">
        <InputForm
          title="Street"
          borderColor={COLOR.BgColor}
          name="street"

          value={value.street}
          onChangeText={value => handleInputChange('street', value)}


        />
      </Box>
   
     
       <Box mb="2">
        <InputForm
          title="Zip Code"
          value={value.zip_code}
          onChangeText={value => handleInputChange('zip_code', value)}
name="zip_code"
          borderColor={COLOR.BgColor}
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
          onPress={subJob}
        />
      </Box>
      </KeyboardAwareScrollView>
  )
}

export default JobCreate

const styles = StyleSheet.create({
 address:{
fontWeight:'500',
color: COLOR.BgColor,
fontSize:WP(5),
fontStyle:'normal',
lineHeight:WP(4),
paddingTop:HP(2)
 },
 heading:{
   fontWeight: '500',
   color: COLOR.BgColor,
   fontSize: WP(6),
   fontStyle: 'normal',
   lineHeight: WP(4),
   paddingTop: HP(2)
 }
})