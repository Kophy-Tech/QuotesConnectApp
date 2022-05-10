import { StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { Text, Box, Flex } from "native-base";
import { COLOR } from '../../Utils/theme'
import AppBar from '../../component/AppBar'
import Header from '../../component/Header';
import InputSearch from '../../component/InputSearch';
import ButtonH from '../../component/ButtonH';
import { BgColor } from '../../Utils/Colors';
import CreateRfq from '../../component/CreateRfq';

const Rfq = () => {
    const [index, setIdex] = React.useState(true)

  return (
      <SafeAreaView style={{ flex: 1, marginBottom: 80 }}>
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
                      onPress={() => setIdex(!index)}
                  >
                      <Text style={[styles.butttonText,
                      { color: !index ? "#fff" : BgColor }

                      ]}>Create New</Text>
                  </ButtonH>
              </Flex>
          </Box>

          <Box px="6" pt="3">
              <CreateRfq/>
          </Box>
      </SafeAreaView>
  )
}

export default Rfq

const styles = StyleSheet.create({

    butttonText: {
        fontSize: 15,
        fontWeight: '400',
        lineHeight: 18,
        fontStyle: 'normal',
        fontFamily: 'General Sans'
    }

})