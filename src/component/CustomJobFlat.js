import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

import { BgColor, bgColor1, ColorText } from '../Utils/Colors';


const HeaderComponent = () => {
    return (
        <>
            <View style={styles.tableColumnHeader}>
                <View style={styles.tableColumnRegular}>
                    <Text style={styles.textLineItem}>Project No.</Text>
                </View>
                <View style={styles.tableColumnRegular}>
                    <Text style={styles.textLineItem}>Project Name</Text>
                </View>
                <View style={styles.tableColumnRegular}>
                    <Text style={styles.textLineItem}>State</Text>
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

        <Text style={{ fontSize: 20, }}> No data</Text>
    </View>
}


// { itemParams: item }
const CustomJobFlatList = ({ itemData,navigation }) => {
    const renderItem = ({ item }) => <Item item={item} onItemPress={NavigationPress} />
    const NavigationPress = (item) => {


        navigation.navigate('editjob', {itemParams: item})
    };
    const Item = ({ item, onItemPress }) => {

        return (
            < TouchableOpacity style={styles.tableRow}
                onPress={() => onItemPress(item)}
            >
                <View style={styles.tableColumnRegular}>
                    <Text style={styles.textLineItem1}>{item.project_id}</Text>
                </View>
                <View style={styles.tableColumnRegular}>
                    <Text style={styles.textLineItem3}>{item.name}</Text>
                </View>
                <View style={styles.tableColumnRegular}>
                    <Text style={styles.textLineItem1}>{item.state}</Text>
                </View>

            </ TouchableOpacity>
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
              contentContainerStyle={{ paddingHorizontal: 22, paddingTop: 9, paddingBottom: 60 }}
          />

       
      </>
  )
}

export default CustomJobFlatList

const styles = StyleSheet.create({
 
    tableColumnRegular: {
        flex: 1,

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
        fontWeight: '500',
        color: ColorText,
        textAlign: 'center',
        lineHeight: 18,


    },
    textLineItem3: {
        fontSize: 12,
        fontWeight: '500',
        color: ColorText,
        textAlign: 'center',
        lineHeight: 18,
       textTransform:'uppercase'


    },
    tableRow: {
        flexDirection: "row",
        justifyContent: 'center',
        backgroundColor: bgColor1,
        height: 80,
        marginBottom: 2


    },

});