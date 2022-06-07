
import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { BgColor, bgColor1, ColorText } from '../Utils/Colors';



const HeaderComponent = () => {
    return (
        <>
            <View style={styles.tableColumnHeader}>
                <View style={styles.tableColumnRegular}>
                    <Text style={styles.textLineItem}>Category Name</Text>
                </View>
                <View style={styles.tableColumnRegular2}>
                    <Text style={[styles.textLineItem3, {
                        fontSize: 15
                    }]}>Sub Item Description</Text>
                </View>

            </View>
        </>
    )
}

const EmptyContainer = () => {
    return <View style={{
        width: '100%', justifyContent: 'center', alignItems: 'center', height: 100,
        alignSelf: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,

        elevation: 1,
        backgroundColor: '#FFF'
    }}>

        <Text style={{ fontSize: 20,color:'black' }}> No data</Text>
    </View>
}

const CustomFlatList = ({ itemData, navigation}) => {
    // const keyExtractor = (item) => item.id;
    // console.log(itemData, 'itemData');

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.tableRow}
                onPress={() => navigation.navigate('editmaterial', { itemParams: item })}
            >
                <View style={styles.tableColumnRegular}>
                    <Text style={styles.textLineItem1}>{item?.name}</Text>
                </View>
                <View style={styles.tableColumnRegular2}>
                    <Text style={styles.textLineItem2}>{item?.description.slice(0, 40)} </Text>

                </View>
            </TouchableOpacity>
        )
    }
  return (
  <>
          <FlatList
              data={itemData}
          
              renderItem={renderItem}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              ListHeaderComponent={HeaderComponent}
              ListEmptyComponent={EmptyContainer}
              keyExtractor={(item) => `id${item?._id}`}
              contentContainerStyle={{ paddingHorizontal: 22, paddingTop: 9 , paddingBottom:60}}
          />

  </>
  )
}

export default CustomFlatList

const styles = StyleSheet.create({

    tableColumnRegular: {
        flex: 1,

        justifyContent: 'center',

        // alignSelf: 'stretch',

paddingRight:10

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
    textLineItem3: {
      
        fontWeight: '400',
        color: '#fff',
        textAlign: 'left',
        lineHeight: 18,

    },
    textLineItem1: {
        fontSize: 13,
        fontWeight: '400',
        color: ColorText,
        textAlign: 'left',
        lineHeight: 18,
        fontFamily: 'sans-serif',
       

    },
    textLineItem2: {
        fontSize: 15,
        fontWeight: '400',
        color: ColorText,
        textAlign: 'left',
        lineHeight: 18,
        fontFamily: 'sans-serif',

    },
    tableRow: {
        flexDirection: "row",
        // justifyContent: 'left',
        backgroundColor: bgColor1,
        height: 80,
        marginBottom: 2,
        padding: 5




    },


})