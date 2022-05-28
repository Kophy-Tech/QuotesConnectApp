import { StyleSheet, View, SafeAreaView, } from 'react-native'
import React from 'react'
import { Text, Box, Flex } from "native-base";
import { COLOR } from '../../Utils/theme'
import AppBar from '../../component/AppBar'
import Header from '../../component/Header';
import InputSearch from '../../component/InputSearch';
import ButtonH from '../../component/ButtonH';
import { BgColor } from '../../Utils/Colors';
import { useNavigation } from '@react-navigation/native';

import ListOfVendor from './ListOfVendor'
const Vendors = () => {
    const [index, setIdex] = React.useState(true)
    const navigation = useNavigation();

  return (
     < SafeAreaView style={{ flex: 1, marginBottom:80 }}>
  <AppBar type="black" backgroundColor={COLOR.whiteColor} />
          <Header />
          <Box px="6">
              <Box>
                  < InputSearch />
              </Box>
              <Flex direction="row" mt="4" justifyContent="space-between">
                  <ButtonH style={{

                      borderColor: BgColor,
                      width: '48%',
                      backgroundColor: index ? BgColor : 'transparent',
                      borderRadius: 5


                  }}
                      onPress={() => setIdex(!index)}
                  >
                      <Text style={[styles.butttonText,
                      { color: index ? "#fff" : BgColor }
                      ]}>View History</Text>
                  </ButtonH>
                  <ButtonH style={{

                      borderColor: BgColor,
                      width: '48%',
                      backgroundColor: !index ? BgColor : 'transparent',
                      borderRadius: 5

                  }}
                      onPress={() => navigation.navigate('createvendor')}
                  >
                      <Text style={[styles.butttonText,
                      { color: !index ? "#fff" : BgColor }

                      ]}>Create New</Text>
                  </ButtonH>
              </Flex>
          </Box>
          <ListOfVendor />

     </SafeAreaView>
  )
}

export default Vendors

const styles = StyleSheet.create({})