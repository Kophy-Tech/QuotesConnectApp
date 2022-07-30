/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View, Button, Alert} from 'react-native';
import React, {useState, useLayoutEffect} from 'react';
import FormCustomInput from './FormCustomInput';
import moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';
import {COLOR, HP, WP} from '../Utils/theme';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {DatePickerModal} from 'react-native-paper-dates';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {getJob} from '../Redux/Slice/JobSlice';
import DropDownPicker from 'react-native-dropdown-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomTextArea from './TextArea';
import {Box, Spinner} from 'native-base';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {postRfqJob} from '../Redux/Slice/RfqSlice';

const CreateRfq = () => {
  const [date1, setDate1] = useState(moment().format('L'));
  const {isLoading: LoadingRfq, message: messageRfq} = useSelector(
    rfq => rfq.rfq,
  );
  const [open, setOpen] = React.useState(false);
  const [date2, setDate2] = useState(new Date());
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

  const onDismissSingle = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirmSingle = React.useCallback(
    params => {
      setOpen(false);
      setDate2(params.date);
    },
    [setOpen, setDate2],
  );
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
    if (value == null || value == '' || date2 == '') {
      Alert.alert('Kindly fill the neccessary details');
    } else {
      const values = {
        start_date: date1,
        due_date: moment(date2).format('YYYY/MM/DD'),
        rfq_information: text,
        job: value,
      };
      const dataJob = {
        token,
        values,
        navigation,
      };
      dispatch(postRfqJob(dataJob))
        .unwrap()
        .then(res => {
          console.log(res.status, '8585858588');
          if (res.status === 201) {
            navigation.navigate('requestforrfq', {params: token});
          }
        })
        .catch(err => {
          // console.log(err.message, 'error from postrfqjob');
          // Alert.alert(`${err.message}`);
        });

      // navigation.navigate('requestforrfq')
    }
  };

  return (
    <KeyboardAwareScrollView
      style={styles.__container}
      contentContainerStyle={{paddingBottom: WP(40)}}>
      <View style={{top: 23, width: '90%', alignSelf: 'center'}}>
        <FormCustomInput
          labelTextTop={23}
          inputBorderColor="blue"
          lablelText={'Creation Date'}
          value={date1}
          disabled={true}
          labelTextColor={'blue'}
        />
      </View>

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
          <TouchableOpacity
            onPress={() => setOpen(true)}
            style={{
              width: WP('90%'),
              height: HP(5),
              borderWidth: 1,
              borderColor: 'blue',
              alignSelf: 'center',
              marginTop: WP(10),
            }}>
            <DatePickerModal
              locale="en"
              mode="single"
              label="Select date"
              visible={open}
              onDismiss={onDismissSingle}
              date={date2}
              onConfirm={onConfirmSingle}
            />
          </TouchableOpacity>
          <Text
            style={{bottom: WP(8), left: WP(10)}}
            onPress={() => setOpen(true)}>
            {moment(date2).format('L')}
          </Text>
        </View>
      </>

      <View>
        <Text
          style={{
            top: HP(1),
            marginLeft: WP(4),
            color: 'blue',

            fontSize: WP(4.5),
          }}>
          Select Job*
        </Text>
        <DropDownPicker
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
        />
      </View>

      <Box mb="2" mt="12" style={{top: 25, width: '90%', alignSelf: 'center'}}>
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
            backgroundColor: COLOR.BgColor,
            padding: WP(4),
            borderRadius: WP(3),
            borderWidth: 1,
            borderColor: COLOR.BgColor,
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
});
