
import React from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { BgColor, bgColor1, ColorText } from '../Utils/Colors';

const ViewMaterial = () => {
  return (
      <>
          <View style={styles.tableContainer}>
              <View style={styles.tableColumnHeader}>
                  <View style={styles.tableColumnRegular}>
                      <Text style={styles.textLineItem}>Category Name</Text>
                  </View>
                  <View style={styles.tableColumnRegular2}>
                      <Text style={[styles.textLineItem, {
                         fontSize:13
                      }]}>Sub Item Description</Text>
                  </View>
                 
              </View>
              < TouchableOpacity style={styles.tableRow}
                
              >
                  <View style={styles.tableColumnRegular}>
                      <Text style={styles.textLineItem1}>Laptop</Text>
                  </View>
                  <View style={styles.tableColumnRegular2}>
                      <Text style={styles.textLineItem1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquamt, consectetur adipiscing </Text>
                  </View>
                 

              </ TouchableOpacity>
             
          </View>
      </>
  )
}

export default ViewMaterial

const styles = StyleSheet.create({
    tableContainer: {
        flex: 1,
    },
    tableColumnRegular: {
        flex: 1,

        justifyContent: 'center',

        alignSelf: 'stretch',



    },
    tableColumnRegular2: {
        flex: 1.8,

        justifyContent: 'center',

        alignSelf: 'stretch',



    },
    tableColumnHeader: {

        flexDirection: "row",
        justifyContent: 'center',

        backgroundColor: BgColor,
        borderRadius: 10,
        height: 62,

    },
    textLineItem: {
        fontSize: 15,
        fontWeight: '400',
        color: '#fff',
        textAlign: 'center',
        lineHeight: 18,
        fontFamily: 'sans-serif'
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
        marginBottom: 2


    },


})