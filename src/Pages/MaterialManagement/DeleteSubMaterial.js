import {StyleSheet, Text, View, Alert, Modal} from 'react-native';
import React from 'react';
import {HP, WP, COLOR} from '../../Utils/theme';
import InputForm from '../../component/Input';
import {Box} from 'native-base';
import FormCustomButton from '../../component/FormCustomButton';
import CustomTextArea from '../../component/TextArea';
import {ColorText, bgColor2, bgColor3} from '../../Utils/Colors';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Flex} from 'native-base';
import ButtonH from '../../component/ButtonH';

import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {Spinner} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  deleteMaterial,
  getMaterial,
  subDeleteMaterial,
  subUpdateMaterialAction,
  updateMaterial,
} from '../../Redux/Slice/materialSlice';
import FormCustomInput from '../../component/FormCustomInput';

const DeleteSubMaterial = ({route}) => {
  const auth = useSelector(auth => auth.auth.user);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [modalVisible1, setModalVisible1] = React.useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {itemParams, primary_id} = route.params;
  const loading = useSelector(material => material.material.isLoading);

  // console.log(auth, 'aaaaaaaa');
  const [value, setValues] = React.useState({
    ...itemParams,
  });

  const handleInputChange = (inputName, inputValue) => {
    setValues({
      ...value,
      [inputName]: inputValue,
    });
  };
  const token = auth?.token;

  const updateMaterialPost = () => {
    const {_id, content, description} = value;
    const updatedData = {
      content,
    };
    const dataMaterial = {_id, updatedData, token, primary_id};
    // console.log(dataMaterial, 'dataMaterial');
    if (!value.content) {
      Alert.alert('Material name is required');
    }

    // else if (!value.description) {
    //     Alert.alert('Material description is required');
    // }
    else {
      dispatch(subUpdateMaterialAction(dataMaterial))
        .unwrap()
        .then(res => {
          console.log(res, 'res');
          if (res.status === 'Added') {
            Alert.alert('Successfully Updated');
            setValues({
              name: '',
              description: '',
            });
            navigation.goBack();
          }
          console.log(res.status);
        })
        .catch(err => {
          console.log(err);
          Alert.alert(`${err}`);
        });
    }
  };

  const deleteMaterialPost = () => {
    // const {_id} = value;
    // const dataJob = {
    //   _id,
    //   token,
    // };
    const {_id, content, description} = value;
    const updatedData = {
      content,
    };
    const dataMaterial = {_id, updatedData, token, primary_id};
    console.log({dataMaterial});
    dispatch(subDeleteMaterial(dataMaterial))
      .unwrap()
      .then(res => {
        dispatch(getMaterial());
        if (res.status === 'Deleted') {
          setModalVisible(false);
          Alert.alert('Deleted Succesfully');
          dispatch(getMaterial());
          navigation.navigate('material');
        }
      })
      .catch(err => {
        // console.log(err);
        setModalVisible(false);
        dispatch(getMaterial());
        Alert.alert(`${err}`);
      });
  };

  //   console.log(primary_id)

  return (
    <>
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <KeyboardAwareScrollView
          contentContainerStyle={{paddingBottom: WP(65)}}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          <Box px="6" pt="20">
            <Box mb="2">
              <FormCustomInput
                lablelText="Sub Category Name"
                labelTextColor={COLOR.BgColor}
                labelTextTop={WP(6)}
                inputBorderColor={COLOR.BgColor}
                value={value.content}
                name="content"
                borderColor={COLOR.BgColor}
                onChangeText={value => handleInputChange('name', value)}
              />
              <Text style={styles.subText}>
                name of the project you want to create
              </Text>
            </Box>
            {/* <Box mb="2">
                            <CustomTextArea
                                title="Sub Item Description"
                                value={value.description}
                                name="description"
                                borderColor={COLOR.BgColor}
                                onChangeText={value => handleInputChange('description', value)}
                            />
                        </Box> */}

            <Flex direction="row" mt="4" justifyContent="space-around">
              <ButtonH
                style={{
                  borderColor: bgColor2,
                  width: '90%',
                  backgroundColor: 'red',
                  borderRadius: 5,
                }}
                onPress={() => setModalVisible(true)}>
                <Text style={[styles.butttonText, {color: 'white'}]}>
                  Delete
                </Text>
              </ButtonH>
             
            </Flex>
          </Box>
        </KeyboardAwareScrollView>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View
              style={{
                alignItems: 'center',
              }}>
              <Icon name="delete-forever" size={50} color={COLOR.BgColor} />
              <Text style={styles.modalText}>
                Are you sure you want to delete sub Material?
              </Text>
            </View>

            <Flex direction="row" mt="4" justifyContent="space-between">
              <ButtonH
                style={{
                  borderColor: COLOR.BgColor,
                  width: '45%',
                  backgroundColor: 'transparent',
                  borderRadius: 5,
                }}
                onPress={deleteMaterialPost}>
                {loading ? (
                  <Spinner
                    accessibilityLabel="Loading posts"
                    size="sm"
                    color={COLOR.BgColor}
                  />
                ) : (
                  <Text style={[styles.butttonText, {color: COLOR.BgColor}]}>
                    YES
                  </Text>
                )}
              </ButtonH>
              <ButtonH
                style={{
                  borderColor: COLOR.BgColor,
                  width: '45%',
                  backgroundColor: COLOR.BgColor,
                  borderRadius: 5,
                }}
                onPress={() => setModalVisible(false)}>
                <Text style={[styles.butttonText, {color: '#fff'}]}>NO</Text>
              </ButtonH>
            </Flex>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible1}
        onRequestClose={() => {
          setModalVisible1(!modalVisible1);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View
              style={{
                alignItems: 'center',
              }}>
              <Icon name="update" size={50} color={COLOR.BgColor} />
              <Text style={styles.modalText}>
                Are you sure you want to update the Material?
              </Text>
            </View>

            <Flex direction="row" mt="4" justifyContent="space-between">
              <ButtonH
                style={{
                  borderColor: COLOR.BgColor,
                  width: '45%',
                  backgroundColor: 'transparent',
                  borderRadius: 5,
                }}
                onPress={updateMaterialPost}>
                {loading ? (
                  <Spinner
                    accessibilityLabel="Loading posts"
                    size="sm"
                    color={COLOR.BgColor}
                  />
                ) : (
                  <Text style={[styles.butttonText, {color: COLOR.BgColor}]}>
                    YES
                  </Text>
                )}
              </ButtonH>
              <ButtonH
                style={{
                  borderColor: COLOR.BgColor,
                  width: '45%',
                  backgroundColor: COLOR.BgColor,
                  borderRadius: 5,
                }}
                onPress={() => setModalVisible1(false)}>
                <Text style={[styles.butttonText, {color: '#fff'}]}>NO</Text>
              </ButtonH>
            </Flex>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default DeleteSubMaterial;

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

  butttonText: {
    fontSize: WP(5),
    fontWeight: '500',
    lineHeight: 24,
    fontStyle: 'normal',
  },

  centeredView: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 35,
    paddingHorizontal: 25,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '80%',
    height: 250,
  },

  modalText: {
    textAlign: 'center',
    fontWeight: '400',
    color: COLOR.BgColor,
    fontSize: 25,
    fontStyle: 'normal',
    lineHeight: 26,
    paddingTop: 10,
  },
});
