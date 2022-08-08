import {StyleSheet, Text, View, FlatList, TextInput, Alert} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {HP, WP} from '../../Utils/theme';
import FormCustomButton from '../../component/FormCustomButton';
import {BgColor} from '../../Utils/Colors';
import Modal from 'react-native-modal';
import {
  getMaterial,
  subAddMaterialAction,
} from '../../Redux/Slice/materialSlice';
import {useDispatch, useSelector} from 'react-redux';

const DetailMaterials = props => {
  console.log(props?.route?.params?.itemParams?._id, '123423');

  const dispatch = useDispatch();
  const [content, setContent] = React.useState('');
  const [isModal, isSetModal] = React.useState(false);

  const data = {
    content,
    id: props?.route?.params?.itemParams?._id,
  };
  const AddSubCategoryMaterial = () => {
    if (content == '') {
      Alert.alert('Sub Description is required');
    } else {
      dispatch(subAddMaterialAction(data))
        .unwrap()
        .then(() => {
          dispatch(getMaterial());
          isSetModal(false);
          Alert.alert('Material Description Added');
          // navigation.navigate('bottomStack', {
          //   screen: 'rfq',
          // });
          // setLoading(false);
        })
        .catch(rejectedValueOrSerializedError => {
          // handle error here
          console.log(
            rejectedValueOrSerializedError,
            'rejectedValueOrSerializedError',
          );
          Alert.alert(rejectedValueOrSerializedError);
        });
    }
  };
  return (
    <View>
      <View style={styles.buttonContainer}>
        <FormCustomButton
          btnTitle="Add Sub Category"
          backgroundColor={BgColor}
          textColor="white"
          borderRadius={0}
          onPress={() => isSetModal(true)}
        />

        <Modal
          isVisible={isModal}
          avoidKeyboard={true}
          hasBackdrop={true}
          onBackdropPress={() => isSetModal(false)}>
          <View style={{backgroundColor: 'white', height: HP(32)}}>
            <Text
              style={{
                color: 'black',
                width: WP(90),
                textTransform: 'capitalize',
                top: HP(4),
                left: WP(5),
                fontSize: WP(5),
              }}>
              {props?.route?.params?.itemParams?.name}
            </Text>
            <View style={{alignSelf: 'center', top: HP(7)}}>
              <Text style={{color: 'black'}}>Add Sub Description</Text>
              <TextInput
                multiline={true}
                numberOfLines={10}
                value={content}
                style={{
                  height: HP(10),
                  textAlignVertical: 'top',
                  width: WP(83),
                  padding: WP(2),
                  paddingTop: 6,
                  borderWidth: 0.4,
                  borderColor: 'black',
                }}
                onChangeText={text => setContent(text)}
              />
            </View>
            <View style={{width: WP(50), alignSelf: 'center', top: HP(7)}}>
              <FormCustomButton
                btnTitle="Add Sub Category"
                backgroundColor={BgColor}
                textColor="white"
                borderRadius={0}
                onPress={() => AddSubCategoryMaterial()}
              />
            </View>
          </View>
        </Modal>
      </View>
      <FlatList
        data={props?.route?.params?.itemParams?.description}
        keyExtractor={item => item.id}
        extraData={props?.route?.params?.itemParams?.description}
        renderItem={({item}) => (
          <>
            <View style={styles._subContainer}>
              <TouchableOpacity>
                <Text style={{color: 'black'}}>{item?.content}</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() =>
                  props.navigation.navigate('EditSubMaterial', {
                    itemParams: item,
                    primary_id: props.route.params.itemParams._id,
                  })
                }
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <AntDesign name="delete" color={'red'} size={22} />
                <View style={{left: WP(5)}}>
                  <EvilIcons name="pencil" color={'grey'} size={26} />
                </View>
              </TouchableOpacity>
            </View>
          </>
        )}
      />
    </View>
  );
};

export default DetailMaterials;

const styles = StyleSheet.create({
  _subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: WP(90),
    left: WP(4),
    marginVertical: WP(8),
  },
  buttonContainer: {
    width: WP(50),
    right: 8,
    alignSelf: 'flex-end',
    paddingBottom: WP(4),
  },
});
