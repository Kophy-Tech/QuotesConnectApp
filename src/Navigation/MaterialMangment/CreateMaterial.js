import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {HP, WP, COLOR} from '../../Utils/theme';
import InputForm from '../../component/Input';
import {Box} from 'native-base';
import FormCustomButton from '../../component/FormCustomButton';
import CustomTextArea from '../../component/TextArea';
import {ColorText} from '../../Utils/Colors';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Header from '../../component/Header';

const CreateMaterial = () => {
  return (
    <KeyboardAwareScrollView
      style={styles._mainContainer}
      contentContainerStyle={{
        paddingBottom: WP(65),
        width: WP(90),
        top: WP(3),
        alignSelf: 'center',
      }}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}>
      <Header />

      <Box my="2">
        <Text style={styles.heading}>Material Managment</Text>
      </Box>

      <Box mb="2">
        <InputForm
          title="Primary Category Name"
          value=""
          borderColor={COLOR.BgColor}
        />
        <Text style={styles.subText}>
          name of the project you want to create
        </Text>
      </Box>
      <Box mb="2">
        <CustomTextArea
          title="Sub Item Description"
          value=""
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
        />
      </Box>
    </KeyboardAwareScrollView>
  );
};

export default CreateMaterial;

const styles = StyleSheet.create({
  heading: {
    fontWeight: '500',
    color: COLOR.BgColor,
    fontSize: WP(6),
    fontStyle: 'normal',
    lineHeight: WP(4),
    paddingTop: HP(2),
  },
  subText: {
    fontWeight: '400',
    fontStyle: 'normal',
    fontSize: WP(3),
    paddingTop: HP(0),
    color: ColorText,
  },
});
