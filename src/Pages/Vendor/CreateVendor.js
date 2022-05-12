import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React from 'react';
import Header from '../../component/Header';
import FormCustomButton from '../../component/FormCustomButton';
import {COLOR, IMAGE, WP} from '../../Utils/theme';
import FormCustomInput from '../../component/FormCustomInput';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { Box } from "native-base";
const CreateVendor = () => {
  return (
    <KeyboardAwareScrollView
      style={styles._mainContainer}
      contentContainerStyle={{paddingBottom: WP(65)}}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}>
   
     

      <View style={styles.vendorInputContainer}>
        <Text
          style={{
            fontSize: WP(6),
            fontWeight: '700',
            color: COLOR.BgColor,
            marginVertical: WP(3),
          }}>
          Create Vendor
        </Text>

        <View>
          <Box mb="2">
            <FormCustomInput
              lablelText="Company Name*"
              inputBorderColor={COLOR.BgColor}
              labelTextTop={WP(3)}
              labelText={COLOR.BgColor}
            />
          </Box>
          <Box mb="2">
            <FormCustomInput
              lablelText="Street*"
              inputBorderColor={COLOR.BgColor}
              labelTextTop={WP(3)}
              labelText={COLOR.BgColor}
            />
          </Box>
          <Box mb="2">
            <FormCustomInput
              lablelText="City*"
              inputBorderColor={COLOR.BgColor}
              labelTextTop={WP(3)}
              labelText={COLOR.BgColor}
            />
          </Box>
          <Box mb="2">
            <FormCustomInput
              lablelText="Zip code*"
              inputBorderColor={COLOR.BgColor}
              labelTextTop={WP(3)}
              labelText={COLOR.BgColor}
            />
          </Box>
          <Box mb="2">
            <FormCustomInput
              lablelText="Sales Representative*"
              inputBorderColor={COLOR.BgColor}
              labelTextTop={WP(3)}
              labelText={COLOR.BgColor}
            />
          </Box>
          <Box mb="4">
            <FormCustomInput
              lablelText="Phone Number*"
              inputBorderColor={COLOR.BgColor}
              labelTextTop={WP(3)}
              labelText={COLOR.BgColor}
            />
          </Box>
         
       
          <Image source={IMAGE.FileInput}  />
        </View>

        <View style={{top: WP(3)}}>
          <FormCustomButton
            btnTitle="Create"
            backgroundColor={COLOR.BgColor}
            textColor={COLOR.whiteColor}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default CreateVendor;

const styles = StyleSheet.create({
  _mainContainer: {
    // backgroundColor: COLOR.whiteColor,
   
  },
  vendorInputContainer: {
   
  },
});
