
import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { BgColor, bgColor1, ColorText } from '../Utils/Colors';


const RenderItem = ({item} ) => (
    < TouchableOpacity style={styles.tableRow}

    >
        <View style={styles.tableColumnRegular}>
            <Text style={styles.textLineItem1}>{item.name}</Text>
        </View>
        <View style={styles.tableColumnRegular2}>
            <Text style={styles.textLineItem1}>{item.description} </Text>
        </View>


    </ TouchableOpacity>
);

export default RenderItem;


const styles = StyleSheet.create({

    tableColumnRegular: {
        flex: 1,

        justifyContent: 'center',

        // alignSelf: 'stretch',



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
      
    },
    textLineItem1: {
        fontSize: 15,
        fontWeight: '400',
        color: ColorText,
        textAlign: 'center',
        lineHeight: 18,
       

    },
    tableRow: {
        flexDirection: "row",
        justifyContent: 'left',
        backgroundColor: bgColor1,
        height: 100,
        marginBottom: 2,




    },


})