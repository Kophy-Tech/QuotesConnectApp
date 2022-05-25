
import React , {useMemo}from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, FlatList } from 'react-native';
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
                        fontSize: 13
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
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        backgroundColor: '#FFF'
    }}>

        <Text style={{ fontSize: 20, }}> No data</Text>
    </View>
}

const CustomFlatList = ({itemData}) => {
    // const keyExtractor = (item) => item.id;
    // console.log(itemData, 'itemData');
    // const renderItemMemo = ({ item }) => <RenderItem item={item}  />
  return (
  <>
          <FlatList
              data={itemData}
              renderItem={({item})=>{
                  return(
                      <View style={styles.tableRow}>
                          <View style={styles.tableColumnRegular}>
                                  <Text style={styles.textLineItem1}>{item?.name}</Text>
                               </View>
                          <View style={styles.tableColumnRegular2}>
                              <Text style={styles.textLineItem2}>{item?.description} </Text>

                          </View>
                 </View>
                  )
              }}
          
              showsHorizontalScrollIndicator={false}
              ListHeaderComponent={HeaderComponent}
              ListEmptyComponent={EmptyContainer}
              keyExtractor={(item) => `id${item?._id}`}
              contentContainerStyle={{ paddingHorizontal: 22, paddingVertical: 9 }}
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
        lineHeight: 16,

    },
    textLineItem3: {
        fontSize: 15,
        fontWeight: '400',
        color: '#fff',
        textAlign: 'left',
        lineHeight: 18,

    },
    textLineItem1: {
        fontSize: 15,
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