import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { HP, WP, COLOR } from '../Utils/theme'
import InputForm from './Input';
import { Box } from "native-base";
import FormCustomButton from './FormCustomButton';
import CustomTextArea from './TextArea';
import { ColorText } from '../Utils/Colors';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import DateInputForm from './DateInputForm';

import DateTimePicker from '@react-native-community/datetimepicker';

const CreateRfq = () => {
    const [date1, setDate1] = React.useState(new Date());
    const [date2, setDate2] = React.useState(new Date());

    const [showDate1, setShowDate1] = React.useState(false);
    const [showDate2, setShowDate2] = React.useState(false);

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
  return (
      <KeyboardAwareScrollView
          style={styles._mainContainer}
          contentContainerStyle={{ paddingBottom: WP(65) }}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>

          <Box my="2">
              <Text style={styles.heading}>Create New Request</Text>
          </Box>
          <Box mb="2">
              <DateInputForm
                  title="Creation Date"
                  value={date1.toLocaleString()}
                  borderColor={COLOR.BgColor}
                 onPress={()=> setShowDate1(true)}

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
                  value={date1.toLocaleString()}
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
          <Box mb="6">
              <InputForm
                  title="Select Job for Job Management "
                  value=''
                  borderColor={COLOR.BgColor}
              />
            
          </Box>
          <Box mb="2">
              <CustomTextArea
                  title="Job Information"
                  value=''
                  borderColor={COLOR.BgColor}
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
              />
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