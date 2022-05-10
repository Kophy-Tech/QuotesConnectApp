import { StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native'
import React from 'react'
import { BgColor, bgColor1, ColorText } from '../Utils/Colors';
import { useNavigation } from '@react-navigation/native';

const JobHistory = () => {
    const navigation = useNavigation();

  return (
  <>
          <View style={styles.tableContainer}>
              <View style={styles.tableColumnHeader}>
                  <View style={styles.tableColumnRegular}>
                      <Text style={styles.textLineItem}>Project No.</Text>
                  </View>
                  <View style={styles.tableColumnRegular}>
                      <Text style={styles.textLineItem}>Project Name</Text>
                  </View>
                  <View style={styles.tableColumnRegular}>
                      <Text style={styles.textLineItem}>Address</Text>
                  </View>
              </View>
              < TouchableOpacity style={styles.tableRow}
                  onPress={() => navigation.navigate('editjob')}

              >
                  <View style={styles.tableColumnRegular}>
                      <Text style={styles.textLineItem1}>2204</Text>
                  </View>
                  <View style={styles.tableColumnRegular}>
                      <Text style={styles.textLineItem1}>Ram</Text>
                  </View>
                  <View style={styles.tableColumnRegular}>
                      <Text style={styles.textLineItem1}>City :Phoenix, state:Arizona,
                          Zip code: 85001</Text>
                  </View>

              </ TouchableOpacity>
              <View style={styles.tableRow}>
                  <View style={styles.tableColumnRegular}>
                      <Text style={styles.textLineItem1}>2204</Text>
                  </View>
                  <View style={styles.tableColumnRegular}>
                      <Text style={styles.textLineItem1}>Ram</Text>
                  </View>
                  <View style={styles.tableColumnRegular}>
                      <Text style={styles.textLineItem1}>City :Phoenix, state:Arizona,
                          Zip code: 85001</Text>
                  </View>

              </View>
              <View style={styles.tableRow}>
                  <View style={styles.tableColumnRegular}>
                      <Text style={styles.textLineItem1}>2204</Text>
                  </View>
                  <View style={styles.tableColumnRegular}>
                      <Text style={styles.textLineItem1}>Ram</Text>
                  </View>
                  <View style={styles.tableColumnRegular}>
                      <Text style={styles.textLineItem1}>City :Phoenix, state:Arizona,
                          Zip code: 85001</Text>
                  </View>

              </View>
              <View style={styles.tableRow}>
                  <View style={styles.tableColumnRegular}>
                      <Text style={styles.textLineItem1}>2204</Text>
                  </View>
                  <View style={styles.tableColumnRegular}>
                      <Text style={styles.textLineItem1}>Ram</Text>
                  </View>
                  <View style={styles.tableColumnRegular}>
                      <Text style={styles.textLineItem1}>City :Phoenix, state:Arizona,
                          Zip code: 85001</Text>
                  </View>

              </View>
              <View style={styles.tableRow}>
                  <View style={styles.tableColumnRegular}>
                      <Text style={styles.textLineItem1}>2204</Text>
                  </View>
                  <View style={styles.tableColumnRegular}>
                      <Text style={styles.textLineItem1}>Ram</Text>
                  </View>
                  <View style={styles.tableColumnRegular}>
                      <Text style={styles.textLineItem1}>City :Phoenix, state:Arizona,
                          Zip code: 85001</Text>
                  </View>

              </View>

              <View style={styles.tableRow}>
                  <View style={styles.tableColumnRegular}>
                      <Text style={styles.textLineItem1}>2205</Text>
                  </View>
                  <View style={styles.tableColumnRegular}>
                      <Text style={styles.textLineItem1}>Ram</Text>
                  </View>
                  <View style={styles.tableColumnRegular}>
                      <Text style={styles.textLineItem1}>City :Phoenix, state:Arizona,
                          Zip code: 85001</Text>
                  </View>

              </View>
          </View>
  </>
  )
}

export default JobHistory

const styles = StyleSheet.create({
    container: {
     
    },

    tableContainer: {
        flex: 1,
    },
    tableColumnRegular: {
        flex: 1,
      
        justifyContent:'center',
    
        alignSelf: 'stretch',
    

        
    },
    tableColumnHeader: {
    
        flexDirection: "row",
      justifyContent:'center',
   
      backgroundColor:BgColor,
        borderRadius: 10,
        height: 62,
      
    },
    textLineItem:{
        fontSize:15,
        fontWeight:'400',
        color:'#fff',
        textAlign:'center',
        lineHeight:18,
        fontFamily:'sans-serif'
    },
    textLineItem1: {
        fontSize: 15,
        fontWeight: '400',
        color: ColorText,
        textAlign: 'center',
        lineHeight: 18,
        fontFamily: 'sans-serif',
        
    },
    tableRow: {
        flexDirection: "row",
        justifyContent: 'center',
        backgroundColor: bgColor1,
        height: 100,
        marginBottom:2
      

    },
  
});