/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View, Button, Alert, Platform} from 'react-native';
import React, {useState, useLayoutEffect} from 'react';
import FormCustomInput from './FormCustomInput';
import moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';
import {COLOR, HP, WP} from '../Utils/theme';
import {TouchableOpacity, TouchableWithoutFeedback} from 'react-native-gesture-handler';

import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {getJob} from '../Redux/Slice/JobSlice';
import DropDownPicker from 'react-native-dropdown-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomTextArea from './TextArea';
import {Box, Spinner} from 'native-base';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {postRfqJob} from '../Redux/Slice/RfqSlice';
import {Dropdown} from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {BgColor} from '../Utils/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CreateRfq = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [show, setShow] = useState(false);
  const [date1, setDate1] = useState(new Date(1598051730000));
  const [show1, setShow1] = useState(false);
  const {isLoading: LoadingRfq, message: messageRfq} = useSelector(
    rfq => rfq.rfq,
  );

 
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [text, onChangeText] = React.useState('');
  const {isLoading, message, refresh} = useSelector(job => job.job);
  const [allJob, setAllJob] = useState([]);
  const [openDropdown, setOpenDropwdown] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState('');

  const auth = useSelector(auth => auth.auth.user);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };
  const onChange1 = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow1(false);
    setDate1(currentDate);
  };



  React.useEffect(() => {
    const getData = async () => {
      const token = await AsyncStorage.getItem('user');
      dispatch(getJob(token))
        .unwrap()
        .then(res => {
          var a = res.data.map(item => {
            return {
              label: item?.name,
              value: item?._id,
            };
          });

          //  console.log(res, 'res');
          setAllJob(a);
          setItems(a);
        })
        .catch(err => {
          if (err) {
            // setError(true)
          }
        });
    };

    getData();
  }, [dispatch, refresh]);

  const NextScreen = async () => {
    // console.log(allJob.find((a) => a.name === query), 'bbbb');
    // console.log((allJob.find((a) => a.name === query))?true:false);
    const token = await AsyncStorage.getItem('user');
    if (value == null || value == '') {
      Alert.alert('Kindly fill the neccessary details');
    } else {
      const values = {
        start_date: moment(date1).format('YYYY/MM/DD'),
        due_date: moment(date).format('YYYY/MM/DD'),
        rfq_information: text,
        job: value,
      };
      const dataJob = {
        token,
        values,
    
      };
      dispatch(postRfqJob(dataJob))
        .unwrap()
        .then(res => {
          console.log(res, '8585858588');
          if (res.status === 201) {
            navigation.navigate('requestforrfq', {params: token});
          }
        })
        .catch(err => {
          console.log(err, 'error from submit')
          // console.log(err.message, 'error from postrfqjob');
          Alert.alert(`${err}`);
        });

      // navigation.navigate('requestforrfq')
    }
  };
  const [isFocus, setIsFocus] = useState(false);
  

  return (
    <KeyboardAwareScrollView
      style={styles.__container}
      contentContainerStyle={{paddingBottom: WP(40)}}>
     <>
     <View>
          <Text
            style={{
              top: HP(4),
              marginLeft: WP(4),
              color: 'blue',

              fontSize: WP(4.5),
            }}>
            Create Date*
          </Text>
          <View
        
            style={{
              width: WP('90%'),
              height: HP(5),
              borderWidth: 1,
              borderColor: 'blue',
              alignSelf: 'center',
              marginTop: WP(10),
              justifyContent:'space-between',
              paddingHorizontal:10,
              flexDirection:'row',
              alignItems:'center'
            
            }}>
<View>
  
<Text style={{fontSize:16, color:'black'}}>
                {moment(date1).format('DD-MM-YYYY')}
              </Text>
</View>
         <TouchableWithoutFeedback
          onPress={()=>setShow1(true)}
          style={{
            justifyContent:'flex-end'
          }}
         >
         <Icon
                name="date-range"
                size={35}
                color={COLOR.BgColor}
              
                
            />
         </TouchableWithoutFeedback>
         
          </View>
         
        </View>
     </>
     {show1 && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date1}
         
                  onChange={onChange1}
        />
      )}
      <>
        <View>
          <Text
            style={{
              top: HP(4),
              marginLeft: WP(4),
              color: 'blue',

              fontSize: WP(4.5),
            }}>
            Due Date*
          </Text>
          <View
      
            style={{
              width: WP('90%'),
              height: HP(5),
              borderWidth: 1,
              borderColor: 'blue',
              alignSelf: 'center',
              marginTop: WP(10),
              justifyContent:'space-between',
              paddingHorizontal:10,
              flexDirection:'row',
              alignItems:'center'
            
            }}>

             <View>
             <Text style={{fontSize:16, color:'black'}}>
                {moment(date).format('DD-MM-YYYY')}
              </Text>
             </View>
           <TouchableOpacity
              onPress={()=>setShow(true)}
              style={{
                justifyContent:'flex-end'
              }}
           >
           <Icon
                name="date-range"
                size={35}
                color={COLOR.BgColor}
              
                
            />
           </TouchableOpacity>
        
          </View>
         
        </View>
      </>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
         
                  onChange={onChange}
        />
      )}
      <View>
        <Text
          style={{
            top: HP(2),
            marginLeft: WP(5),
            color: 'blue',

            fontSize: WP(4.5),
          }}>
          Select Job*
        </Text>
        <View style={styles.subContainer}>
          <Dropdown
            style={[styles.dropdown, isFocus && {borderColor: 'blue', color:'blue'}]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={allJob}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Select item' : '...'}
            searchPlaceholder="Search..."
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setValue(item.value);
              setIsFocus(false);
            }}
            renderLeftIcon={() => (
              <AntDesign
                style={styles.icon}
                color={isFocus ? 'blue' : 'black'}
                name="Safety"
                size={20}
              />
            )}
          />
        </View>

        {/* <DropDownPicker
          zIndexInverse={1111000}
          zIndex={1111000}
          style={{
            top: 17,
            width: '90%',
            alignSelf: 'center',
            borderRadius: 0,
            borderColor: 'blue',
            zIndex: 1111000,
          }}
          open={openDropdown}
          value={value}
          items={items}
          setOpen={setOpenDropwdown}
          setValue={setValue}
          setItems={setItems}
          multiple={false}
          mode="BADGE"
        /> */}
      </View>

      <Box mb="2" mt="12" style={{top: -5, width: '90%', alignSelf: 'center'}}>
        <CustomTextArea
          title="Job Information"
          value={text}
          borderColor={COLOR.BgColor}
          onChangeText={onChangeText}
        />
      </Box>

      <Box mb="2" style={{width: WP('90%'), alignSelf: 'center', top: WP(2)}}>
        <TouchableOpacity
          onPress={NextScreen}
          style={{
            backgroundColor: "green",
            padding: WP(4),
            borderRadius: WP(3),
            borderWidth: 1,
            borderColor:"green",
            top: WP(4),
          }}>
          {LoadingRfq ? (
            <Spinner
              accessibilityLabel="Loading posts"
              size="sm"
              color="#fff"
            />
          ) : (
            <Text
              style={{
                fontSize: WP(4.5),
                color: COLOR.whiteColor,
                textAlign: 'center',
                fontWeight: '400',
              }}>
              Next
            </Text>
          )}
        </TouchableOpacity>
      </Box>
    </KeyboardAwareScrollView>
  );
};

export default CreateRfq;

const styles = StyleSheet.create({
  __container: {
    backgroundColor: 'white',
    flex: 1,
  },
  subContainer: {
    width: WP(90),
    height: WP(2),
    marginVertical: WP(5),
    alignSelf: 'center',
    right: WP(-1),
  },
  dropdown: {
    height: HP(6),
    borderColor: BgColor,
    borderWidth: 1,
    borderRadius: 0,
    paddingHorizontal: 8,
    color:'blue'
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
    color:'blue'

  },
  placeholderStyle: {
    fontSize: 16,
    color:'black'

  },
  selectedTextStyle: {
    fontSize: 16,
    color:'black'
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    color:'blue'
  },
});
