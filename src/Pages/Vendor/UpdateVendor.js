import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Header from '../../component/Header';
import FormCustomButton from '../../component/FormCustomButton';
import {COLOR, IMAGE, WP} from '../../Utils/theme';
import FormCustomInput from '../../component/FormCustomInput';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const UpdateVendor = () => {
  return (
    <KeyboardAwareScrollView
      style={styles._mainContainer}
      contentContainerStyle={{paddingBottom: WP(65)}}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}>
      <Header></Header>

      <View style={styles.vendorInputContainer}>
        <Text
          style={{
            fontSize: WP(5),
            fontWeight: '400',
            color: COLOR.BgColor,
            marginVertical: WP(3),
          }}>
          Create Vendor
        </Text>

        <View>
          <FormCustomInput
            lablelText="Company Name*"
            inputBorderColor={COLOR.BgColor}
            labelTextTop={WP(3)}
            labelText={COLOR.BgColor}
          />
          <FormCustomInput
            lablelText="Street*"
            inputBorderColor={COLOR.BgColor}
            labelTextTop={WP(3)}
            labelText={COLOR.BgColor}
          />
          <FormCustomInput
            lablelText="City*"
            inputBorderColor={COLOR.BgColor}
            labelTextTop={WP(3)}
            labelText={COLOR.BgColor}
          />
          <FormCustomInput
            lablelText="Zip code*"
            inputBorderColor={COLOR.BgColor}
            labelTextTop={WP(3)}
            labelText={COLOR.BgColor}
          />
          <FormCustomInput
            lablelText="Sales Representative*"
            inputBorderColor={COLOR.BgColor}
            labelTextTop={WP(3)}
            labelText={COLOR.BgColor}
          />
          <FormCustomInput
            lablelText="Phone Number*"
            inputBorderColor={COLOR.BgColor}
            labelTextTop={WP(3)}
            labelText={COLOR.BgColor}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <View style={{width: WP(70)}}>
              <FormCustomInput
                lablelText="Email*"
                inputBorderColor={COLOR.BgColor}
                labelTextTop={WP(3)}
                labelText={COLOR.BgColor}
              />
            </View>
            <View style={{width: WP(24), height: WP(13)}}>
              <TouchableOpacity
                style={{
                  backgroundColor: COLOR.green,
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  top: WP(7),
                  padding: WP(4),
                  left: WP(0),
                  borderRadius: WP(2),
                  paddingBottom: WP(4),
                }}>
                <Image
                  source={IMAGE.plus}
                  style={{width: WP(3), left: WP(-2), top: WP(1)}}
                />
                <Text style={{left: WP(1), color: COLOR.whiteColor}}>
                  {'Add More'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <Image source={IMAGE.FileInput} style={{left: WP(4), top: WP(3)}} />
        </View>

        <View
          style={{
            top: WP(6),
            flexDirection: 'row',
            justifyContent: 'space-evenly',
           
          }}>
          <View style={{width: WP(40)}}>
            <FormCustomButton
              btnTitle="Delete"
              backgroundColor={COLOR.BgColor}
              textColor={COLOR.whiteColor}
            />
          </View>
          {/*  */}
          <View style={{width: WP(40)}}>
            <FormCustomButton
              btnTitle="Update"
              backgroundColor={COLOR.green}
              textColor={COLOR.whiteColor}
            />
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default UpdateVendor;

const styles = StyleSheet.create({
  _mainContainer: {
    backgroundColor: COLOR.whiteColor,
    flex: 1,
  },
  vendorInputContainer: {
    top: WP(15),
    width: WP(90),
    left: WP(3),
  },
});
