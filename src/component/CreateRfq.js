import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Alert} from 'react-native'
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
import { dispatchJob } from '../Redux/Slice/RfqSlice';

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

    const [text, onChangeText] = React.useState("");
    const [jobId, setJobId] = React.useState('');

    const [query, setQuery] = useState('');
    const [edit, setEdit] = useState(true)
    const filterData=(query)=> {

        function match(query) {
          
            if (allJob.find((a) => a.name.toLowerCase()===query.toLowerCase())){
                return true
            }
            return false
        }

        // console.log(match(query), 'matchhh')
        
        if (query === '') {
            return [];
        }
        if (match(query)){
            return [];

        }
   
      else{
            return allJob.filter(x => x.name.toLowerCase().includes(query.toLowerCase()));
      }
    }
    
    const data = filterData(query);
    // console.log(allJob)
    // console.log(data, 'aaaa')
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
                    // setError(true)
                }



            })
    }, [dispatch, refresh])

    const NextScreen=()=>{
        function match() {

            if (allJob.find((a) => a._id === jobId)) {
                return true
            }
            return false
        }
        if (!text) {
            Alert.alert('Please enter job informtation')
        }
        else if (!match || !jobId) {
            Alert.alert('Please select correct job management')

        }
       else{
            const data = {

                start_date: formateDate1,
                due_date: formateDate2,
                rfq_information: text,
                job: jobId
            }
            dispatch(dispatchJob(data))
            console.log({data})
            navigation.navigate('requestforrfq')

       }


    }
  
  return (
      <>
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
              <Box mb="6" mt="3" style={{position:'relative'}}>
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
                              borderWidth: 1,
                              borderColor: COLOR.BgColor,
                              marginVertical: 10

                          }}
                      >
                          <Text
                              style={{ fontSize: 15, color: 'black' }}
                          > Loading  Job Management...</Text>
                      </View>
                  }

                  {
                      isLoading === false && message && <View

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
                              borderColor: COLOR.BgColor,
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
                      isLoading === false && !message && <View style={styles.autocompleteContainer}>

                          <Autocomplete
                              editable={edit}
                              value={allJob.length === 0? 'No Job Mangement Created':query}
                              onChangeText={(text)=>{
                                  if(allJob.length ===0){
                                      setEdit(true)
                                      Alert.alert('No Job Mangement Created')
                                  

                                  }
                               

                                  setQuery(text)
                                 
                              }}
                              placeholder="Enter Job Management"
                              data={data}
                              autoCorrect={false}
                              style={{
                                  backgroundColor: 'transparent',
                              }}
                              inputContainerStyle={{
                                  borderColor: COLOR.BgColor,
                                  borderRadius: 5

                              }}
                              listContainerStyle={{
                                  backgroundColor: "#a9b4fc",
                              }}

                              flatListProps={{
                                  keyboardShouldPersistTaps: 'always',
                                  keyExtractor: (job) => job._id,
                                  renderItem: ({ item }) => {
                                      console.log({ item })
                                      return (
                                          <TouchableOpacity onPress={() => {
                                              setQuery(item.name)
                                              setJobId(item._id)
                                          }}


                                              style={{

                                                  padding: 10,
                                              }}
                                          >
                                              <Text style={styles.itemText}>{item.name}</Text>
                                          </TouchableOpacity>
                                      )
                                  }
                              }}

                          />

                      </View>

                 }
              </Box>
              <Box mb="2" mt="10">
                  <CustomTextArea
                      title="Job Information"
                      value={text}
                      borderColor={COLOR.BgColor}
                      onChangeText={onChangeText}
                  />
              </Box>


              <Box mb="2">

                  <TouchableOpacity
                      onPress={NextScreen}
                      style={{
                          backgroundColor: COLOR.BgColor,
                          padding: WP(4),
                          borderRadius: WP(3),
                          borderWidth: 1,
                          borderColor: COLOR.BgColor,
                          top: WP(4),


                      }}
                      >
 <Text
                          style={{
                              fontSize: WP(4.5),
                              color: COLOR.whiteColor,
                              textAlign: 'center',
                              fontWeight: '400',




                          }}>
                          Next
                      </Text>

                  </TouchableOpacity>
                 
              </Box>

          </Box> 
     
      </>
  

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
    },
    containerStyle: {
        flex: 1,
        flexDirection: 'row',
    },
   
    itemText: {
        fontSize: 15,
        margin: 2,
        color:'#fff',
        
    },
  
    
    autocompleteContainer: {
        // Hack required to make the autocomplete
        // work on Andrdoid
        flex: 1,
      
        position: 'absolute',
      width: '100%',
        zIndex: 1,
       paddingTop:40,
      
    },
    autocompleteContainerStyle1:{
        backgroundColor:'transparent'
    }
})