import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard} from 'react-native'
import React, { useState, useLayoutEffect } from 'react'

import { HP, WP, COLOR } from '../Utils/theme'
import InputForm from './Input';
import { Box } from "native-base";
import FormCustomButton from './FormCustomButton';
import CustomTextArea from './TextArea';
import { ColorText } from '../Utils/Colors';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import DateInputForm from './DateInputForm';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import Autocomplete from 'react-native-autocomplete-input';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useSelector, useDispatch } from 'react-redux';
import { getJob } from '../Redux/Slice/JobSlice';
import AutoCompeletCreate from './AutoCompeletCreate';
const CreateRfq = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch()

   
    const auth = useSelector((auth) => auth.auth.user)
    const { isLoading, message, refresh } = useSelector((job) => job.job)


    const [date1, setDate1] = React.useState(new Date());
    const [date2, setDate2] = React.useState(new Date());

    const [showDate1, setShowDate1] = React.useState(false);
    const [showDate2, setShowDate2] = React.useState(false);
const [allJob, setAllJob] = useState([])
const [valueJob, setValueJob] = useState('')
    const [text, onChangeText] = React.useState("");
    const onChangeDate1= (event, selectedDate) => {
        const currentDate = selectedDate;
        setShowDate1(false)

        setDate1(currentDate);
    };

    const onChangeDate2 = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShowDate2(false)

        setDate2(currentDate);
    };
    const formateDate1 = moment(date1).format('DD-MM-YYYY'); 
    const formateDate2 = moment(date2).format('DD-MM-YYYY'); 
    const token = auth?.token

    useLayoutEffect(() => {
        dispatch(getJob(token))
            .unwrap().then((res) => {
                //  console.log(res, 'res');
setAllJob(res)
            }).catch((err) => {

                if (err) {
                    setError(true)
                }



            })
    }, [dispatch, refresh])

    const onChangeJobText = (text) => {
        setValueJob(text)
    }
  return (
      <KeyboardAwareScrollView
          style={styles._mainContainer}
          contentContainerStyle={{ paddingBottom: WP(65) }}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          <Box px="4" pt="3">
             
              <Box mb="2">
                  <DateInputForm
                      title="Creation Date"
                      value={formateDate1}
                      borderColor={COLOR.BgColor}
                      onPress={() => setShowDate1(true)}

                  />
                  {showDate1 && (
                      <DateTimePicker
                          testID="dateTimePicker"
                          value={date1}
                          onChange={onChangeDate1}
                      />
                  )}
              </Box>
              <Box mb="2">
                  <DateInputForm
                      title="Due Date"
                      value={formateDate2}
                      borderColor={COLOR.BgColor}
                      onPress={() => setShowDate2(true)}

                  />
                  {showDate2 && (
                      <DateTimePicker
                          testID="dateTimePicker"
                          value={date2}
                          onChange={onChangeDate2}
                      />
                  )}
              </Box>
              <Box mb="6" mt="3">
                  <Text style={{ fontSize: WP(4.5), paddingBottom: WP(1), color: COLOR.BgColor, fontWeight: '400', fontStyle: 'normal' }}>
                      Select Job for Job Management
                </Text>
{
    isLoading && <View
                          style={{
                              width: '100%', justifyContent: 'center', alignItems: 'center', height: 50,
                              alignSelf: 'center',
                              shadowColor: "#000",
                              shadowOffset: {
                                  width: 0,
                                  height: 1,
                              },
                              shadowOpacity: 0.18,
                              shadowRadius: 1.00,

                              elevation: 1,
                              backgroundColor: 'transparent',
                              borderWidth:1,
                              borderColor:"red",
                              marginVertical:10
                            
                          }}
    >
        <Text
                              style={{ fontSize: 15, color: 'black' }}
        > Loading  Job Management...</Text>
    </View>
}
 
{
    isLoading===false && message && <View

                          style={{
                              width: '100%', justifyContent: 'center', alignItems: 'center', height: 50,
                              alignSelf: 'center',
                              shadowColor: "#000",
                              shadowOffset: {
                                  width: 0,
                                  height: 1,
                              },
                              shadowOpacity: 0.18,
                              shadowRadius: 1.00,

                              elevation: 1,
                              backgroundColor: 'transparent',
                              borderWidth: 1,
                              borderColor: "red",
                              marginVertical: 10

                          }}
    >
        <Text
                              style={{ fontSize: 15, color: 'red' }}
        >
            {message} in fechting Job Mangement
        </Text>
    </View>
} 

           {
                      !isLoading && !message && 
                      
                      <AutoCompeletCreate valueJob={valueJob}
                      allJob={allJob}
                          onChangeJobText={onChangeJobText}
                      />
           }
              
              </Box>
              <Box mb="2">
                  <CustomTextArea
                      title="Job Information"
                      value={text}
                      borderColor={COLOR.BgColor}
                      onChangeText={onChangeText}
                  />
              </Box>


              <Box mb="2">
                  <FormCustomButton
                      placeholder=""
                      borderColor={COLOR.BgColor}
                      borderWidth={WP(0.3)}
                      btnTitle="Next"
                      backgroundColor={COLOR.BgColor}
                      textColor={COLOR.whiteColor}
                      onPress={() => navigation.navigate('requestforrfq')}
                  />
              </Box>

          </Box>
      
          </KeyboardAwareScrollView>

  )
}

export default CreateRfq

const styles = StyleSheet.create({
    heading: {
        fontWeight: '500',
        color: COLOR.BgColor,
        fontSize: WP(6),
        fontStyle: 'normal',
        lineHeight: WP(4),
        paddingTop: HP(2)
    },
    subText: {
        fontWeight: '400',
        fontStyle: 'normal',
        fontSize: WP(3),
        paddingTop: HP(0),
        color: ColorText
    }


})