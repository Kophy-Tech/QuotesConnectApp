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
import {UploadImage} from '../../Redux/Slice/AuthSlice';

const Profile = props => {
  console.log(props, 'props');
  const {profile, loading} = props;
  console.log(profile, 'profile')
  const [email, setEmail] = useState(profile?.email);
  const [photo, setPhoto] = useState({});

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
        dispatch(UploadImage(image?.path));
      })
      .catch(err => {
        console.log(err.response);
      });
  };
  console.log(loading, 'loading');
  if (loading == true || fullname == undefined) {
    return <Loading />;
  }
  return (
    <View style={styles._mainContainer}>
      <TouchableOpacity
        onPress={() => PickImage()}
        style={{alignSelf: 'center', top: WP(12)}}>
        {Object.keys(photo).length == 0 ? (
          <Ionicons
            name="ios-person-circle-outline"
            size={WP(30)}
            // color={focused ? '#FFFFFF' : '#bdb9b7'}
          />
        ) : (
          <Image
            source={{uri: photo.path}}
            style={{width: WP(30), height: WP(30), borderRadius: WP(12)}}
          />
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
          onChangeText={newText => setFullname(newText)}
        />
      </View>
      <View style={styles.container}>
        <TextInput
          label="Email"
          mode="outlined"
          theme={{
            colors: styles.formStyle,
          }}
          selectionColor="red"
          underlineColor="red"
          keyboardType="email-address"
          underlineColorAndroid="green"
          autoCapitalize="none"
          value={email}
          onChangeText={e => setEmail(e)}
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
});
