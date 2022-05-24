import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { Box } from "native-base";
import { HP } from '../../Utils/theme';
import { ColorText } from '../../Utils/Colors';
import InputSearch from '../../component/InputSearch';

const Notification = () => {
  return (
      < SafeAreaView style={{ flex: 1, marginBottom: 80 }}>
          <Box px="2">
              <Box pb="3">
                  < InputSearch />
              </Box>
<View style={styles.notificationBox}>
<View style={styles.notificationImage}>
                      <Image
                          style={styles.notifImage}
                          source={{
                              uri: 'https://reactnative.dev/img/tiny_logo.png',
                          }}
                      />
</View>
                  <View style={styles.notificationContent}>
<Text style={styles.notificationTextHeader}>
                          Bedlam Company just Submit a quote
</Text>
                      <Text style={styles.notificationText}>3 Minutes Ago</Text>
                  </View>
</View>
              <View style={styles.notificationBox}>
                  <View style={styles.notificationImage}>
                      <Image
                          style={styles.notifImage}
                          source={{
                              uri: 'https://reactnative.dev/img/tiny_logo.png',
                          }}
                      />
                  </View>
                  <View style={styles.notificationContent}>
                      <Text style={styles.notificationTextHeader}>
                          Bedlam Company just Submit a quote
                      </Text>
                      <Text style={styles.notificationText}>3 Minutes Ago</Text>
                  </View>
              </View>
          </Box>
      </SafeAreaView>
  )
}

export default Notification

const styles = StyleSheet.create({

    notificationBox:{
        height: HP(14),
        flexDirection:'row',
        width: '100%',
        marginBottom:2,
     borderWidth:0.1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,

        elevation: 1,
    },
    notificationImage:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    notificationContent:{
        flex: 2,
        paddingHorizontal:5
    },
    notifImage:{
        width: '80%',
        height: '80%',
        resizeMode:'contain'
    },
    notificationTextHeader:{
        fontSize: 15,
        fontWeight: '500',
        lineHeight: 19,
        fontStyle: 'normal',
      
        paddingTop:14,
        color:ColorText

    },
    notificationText:{
        fontSize: 9,
        fontWeight: '400',
        lineHeight: 19,
        fontStyle: 'normal',
       
        color: '#86929D',
     justifyContent:'flex-end',
     alignItems:'flex-end',
        paddingTop: 10,

    }
})