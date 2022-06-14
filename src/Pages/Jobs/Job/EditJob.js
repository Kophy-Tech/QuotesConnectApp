import { StyleSheet, View, Alert, Modal, Pressable } from 'react-native'
import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { HStack, Text, Box, Flex, Input } from "native-base";
import { HP, WP, COLOR } from '../../../Utils/theme';
import InputForm from '../../../component/Input';
import ButtonH from '../../../component/ButtonH';
import { bgColor2, bgColor3 } from '../../../Utils/Colors';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { deleteJob, updateJob } from '../../../Redux/Slice/JobSlice';
import { useNavigation } from '@react-navigation/native';

import { Spinner } from "native-base";

const EditJob = ({route}) => {
  const { itemParams } = route.params;
  const auth = useSelector((auth) => auth.auth.user)
  const loading = useSelector((job) => job.job.isLoading)

  const [modalVisible, setModalVisible] = React.useState(false);
  const [modalVisible1, setModalVisible1] = React.useState(false);

  const dispatch = useDispatch()
  const navigation = useNavigation();

  const [value, setValues] = React.useState({
    ...itemParams
  });


  const handleInputChange = (inputName, inputValue) => {
    setValues({
      ...value,
      [inputName]: inputValue,
    });
  };

  const token = auth?.token

  const updateJobPost = () => {
    const { _id, name, state, street, city, zip_code} = value
    const updatedData = {
name, state, street, city, zip_code      
    }
    const dataJob = {
      _id, updatedData, token
    }
    // console.log(dataMaterial, 'dataMaterial');
    if (!value.name) {
      Alert.alert('Job name is required')
    }
    else if (!value.state) {
      Alert.alert('Job state is required')

    }
    else if (!value.street) {
      Alert.alert('Job street is required')

    }
    else if (!value.city) {
      Alert.alert('Job city is required')

    }
    else if (!value.zip_code) {
      Alert.alert('Job zip_code is required')

    }
    else {
      dispatch(updateJob(dataJob)).unwrap().then((res) => {

        if (res.status === 'Updated') {
          Alert.alert(`${res.msg}`)
          navigation.goBack()

        }
        console.log(res.status);
      }).catch((err) => {
        console.log(err)
        Alert.alert(`${err}`)
      })

    }


  }
  const deleteJobPost =()=>{
    const {_id} =value
    const dataJob = {
      _id, token
    }
    console.log(dataJob);
    dispatch(deleteJob(dataJob)).unwrap().then((res) => {

      if (res.status === 'Deleted') {
        Alert.alert(`${res.msg}`)
        navigation.goBack()
      }
      console.log(res.status);
    }).catch((err) => {
      // console.log(err, 'editjob')
      Alert.alert(`${err}`)
    })
  }
 
  return (
    <>
    <View style={{flex:1, backgroundColor:'#fff'}}>
        <Box px="6">
          <KeyboardAwareScrollView
            style={styles._mainContainer}
            contentContainerStyle={{ paddingBottom: WP(15) }}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}>
            <Box mb="4" mt="5">
              <Text style={styles.heading}>Edit Job</Text>
            </Box>
            <Box mb="2">
              <InputForm
                title="Project Name"
                name="name"
                value={value?.name}

                onChangeText={value => handleInputChange('name', value)}

                borderColor={COLOR.BgColor}
              />
            </Box>


            <Box mb="2">
              <Text style={styles.address}>Address</Text>
            </Box>
            <Box mb="2">
              <InputForm
                title="State"
                value={value?.state}
                onChangeText={value => handleInputChange('state', value)}
                name="state"
                borderColor={COLOR.BgColor}
              />
            </Box>

            <Box mb="2">
              <InputForm
                title="City"
                value={value?.city}
                onChangeText={value => handleInputChange('city', value)}
                name="city"
                borderColor={COLOR.BgColor}
              />
            </Box>

            <Box mb="2">
              <InputForm
                title="Street"
                name="street"

                value={value?.street}
                onChangeText={value => handleInputChange('street', value)}

                borderColor={COLOR.BgColor}
              />
            </Box>

            <Box mb="2">
              <InputForm
                title="Zip Code"
                value={value?.zip_code.toString()}
                onChangeText={value => handleInputChange('zip_code', value)}
                name="zip_code"
                borderColor={COLOR.BgColor}
              />
            </Box>
            <Flex direction="row" mt="4" justifyContent="space-around">
              <ButtonH
                style={{

                  borderColor: bgColor2,
                  width: '40%',
                  backgroundColor: "transparent",
                  borderRadius: 5


                }}
                onPress={() => setModalVisible(true)}
              >
                <Text
                  style={[styles.butttonText, { color: bgColor2 }]}

                >Delete</Text>
              </ButtonH>
              <ButtonH
                style={{

                  borderColor: bgColor3,
                  width: '40%',
                  backgroundColor: bgColor3,
                  borderRadius: 5


                }}
                onPress={() => setModalVisible1(true)}

              >
                <Text
                  style={[styles.butttonText, { color: "#fff" }]}
                >Update</Text>
              </ButtonH>
            </Flex>
          </KeyboardAwareScrollView>



        </Box>
    </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {

          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>

            <View style={{
              alignItems: "center"
}}>
              <Icon
                name="delete-forever"
                size={50}
                color={COLOR.BgColor}


              />
              <Text style={styles.modalText}>Are you sure you
                want to Delete</Text>
          </View>

            <Flex direction="row" mt="4" justifyContent="space-between">
              <ButtonH
                style={{

                  borderColor: COLOR.BgColor,
                  width: '45%',
                  backgroundColor: "transparent",
                  borderRadius: 5


                }}
                onPress={deleteJobPost}
              >

                {loading ?
                  <Spinner accessibilityLabel="Loading posts" size="sm" color={COLOR.BgColor} />
                  : <Text
                    style={[styles.butttonText, { color: COLOR.BgColor }]}

                  >YES</Text>
              }
               
              </ButtonH>
              <ButtonH
                style={{

                  borderColor: COLOR.BgColor,
                  width: '45%',
                  backgroundColor: COLOR.BgColor,
                  borderRadius: 5


                }}
                onPress={() => setModalVisible(false)}

              >
              
                <Text
                  style={[styles.butttonText, { color: "#fff" }]}
                >NO</Text>
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
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>

            <View style={{
              alignItems: "center"
            }}>
              <Icon
                name="update"
                size={50}
                color={COLOR.BgColor}


              />
              <Text style={styles.modalText}>Are you sure you
                want to update job</Text>
            </View>

            <Flex direction="row" mt="4" justifyContent="space-between">
              <ButtonH
                style={{

                  borderColor: COLOR.BgColor,
                  width: '45%',
                  backgroundColor: "transparent",
                  borderRadius: 5


                }}
                onPress={updateJobPost}
              >

                {loading ?
                  <Spinner accessibilityLabel="Loading posts" size="sm" color={COLOR.BgColor} />
                  : <Text
                    style={[styles.butttonText, { color: COLOR.BgColor }]}

                  >YES</Text>
                }

              </ButtonH>
              <ButtonH
                style={{

                  borderColor: COLOR.BgColor,
                  width: '45%',
                  backgroundColor: COLOR.BgColor,
                  borderRadius: 5


                }}
                onPress={() => setModalVisible1(false)}

              >

                <Text
                  style={[styles.butttonText, { color: "#fff" }]}
                >NO</Text>
              </ButtonH>
            </Flex>
          </View>
        </View>
      </Modal>
    </>
   
  )
}

export default EditJob

const styles = StyleSheet.create({

  heading: {
    fontWeight: '600',
    color: COLOR.BgColor,
    fontSize: WP(7),
    fontStyle: 'normal',
    lineHeight: WP(4),
    paddingTop: HP(3)
  },
  address: {
    fontWeight: '600',
    color: COLOR.BgColor,
    fontSize: WP(5),
    fontStyle: 'normal',
    lineHeight: WP(4),
    paddingTop: HP(2)
  },

  butttonText: {
    fontSize: WP(5),
    fontWeight: '500',
    lineHeight: 24,
    fontStyle: 'normal',
   
  },


  centeredView: {
   flex:1,

    justifyContent: "center",
    alignItems: "center",
   
    
  },
  modalView: {
 
    backgroundColor: "white",
    borderRadius: 20,
    paddingVertical: 35,
    paddingHorizontal: 25,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '80%',
    height: 250
  },
  
 
  modalText: {
   
    textAlign: "center",
    fontWeight: '400',
    color: COLOR.BgColor,
    fontSize:25,
    fontStyle: 'normal',
    lineHeight:26,
    paddingTop: 10
  }
})