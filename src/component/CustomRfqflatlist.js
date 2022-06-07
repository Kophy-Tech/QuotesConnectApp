import { StyleSheet, Text, View, TouchableOpacity, FlatList , Alert} from 'react-native'
import React from 'react'

import { BgColor, bgColor1, ColorText } from '../Utils/Colors';
import { dispatchRouteData } from '../Redux/Slice/RfqSlice';
import { useSelector, useDispatch } from 'react-redux';


const HeaderComponent = () => {
    return (
        <>
            <View style={styles.tableColumnHeader}>
                <View style={styles.tableColumnRegular}>
                    <Text style={styles.textLineItem}>Job ID</Text>
                </View>
                <View style={styles.tableColumnRegular}>
                    <Text style={styles.textLineItem}>Job Name</Text>
                </View>
                <View style={styles.tableColumnRegular}>
                    <Text style={styles.textLineItem}>Status</Text>
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
const CustomRfqflatlist = ({ itemData, navigation }) => {
    const dispatch = useDispatch()
    // console.log({ itemData})
    const renderItem = ({ item }) => <Item item={item}
        onItemPress={NavigationPressPending}
        NavigationPressOpen={NavigationPressOpen}

    />
    const NavigationPressPending = (item) => {
        console.log({ item })
        if (item.status === 'pending' && item.rfqArray.length === 0) {
            console.log('ppp')

            dispatch(dispatchRouteData(item))
            navigation.navigate('requestforrfq')

        }
        else if (item.status === 'pending' && item.rfqArray.length > 0 &&item.vendorArray.length ===0) {
            navigation.navigate('selectvendors')
            dispatch(dispatchRouteData(item))

        }
        else{
            Alert.alert('Waiting for Vendors to confirm the request')
        }
    }
    const NavigationPressOpen=(item)=>{
        dispatch(dispatchRouteData(item))

        navigation.navigate('openrfq')
       
    }

    const Item = ({ item, onItemPress }) => {

        return (
            < View style={styles.tableRow}
            >
                <View style={styles.tableColumnRegular}>
                    <Text style={styles.textLineItem1}>{item.project_id}</Text>
                </View>
                <View style={styles.tableColumnRegular}>
                    <Text style={styles.textLineItem3}>{item.job?.name}</Text>
                </View>
                <View style={styles.tableColumnRegular}>
                    {

                        item.status === 'pending' && <TouchableOpacity

                            onPress={() => onItemPress(item)}

                            style={{
                                backgroundColor: '#FFC4C4',
                                borderRadius: 4,
                                padding: 6

                            }}>
                            <Text style={[styles.textLineItem1,
                            {
                                color: '#fff',
                                fontSize: 12

                            }
                            ]}>{item.status}</Text>

                        </TouchableOpacity>
                    }

                    {

                        item.status === 'Open' && <TouchableOpacity style={{
                            backgroundColor: '#FD5757',
                            borderRadius: 4,
                            padding: 6

                        }}
                            onPress={() => NavigationPressOpen(item)}
                        >
                            <Text style={[styles.textLineItem1,
                            {
                                color: '#fff',
                                fontSize: 12

                            }
                            ]}>{item.status}</Text>

                        </TouchableOpacity>
                    }
                    {

                        item.status === 'Submitted' && <TouchableOpacity style={{
                            backgroundColor: '#FAAE3B',
                            borderRadius: 4,
                            padding: 6

                        }}>
                            <Text style={[styles.textLineItem1,
                            {
                                color: '#fff',
                                fontSize: 12

                            }
                            ]}>{item.status}</Text>

                        </TouchableOpacity>
                    }
                    {

                        item.status === 'purchased' && <TouchableOpacity style={{
                            backgroundColor: '#2EB66E',
                            borderRadius: 4,
                            padding: 6

                        }}>
                            <Text style={[styles.textLineItem1,
                            {
                                color: '#fff',
                                fontSize: 12

                            }
                            ]}>{item.status}</Text>

                        </TouchableOpacity>
                    }
                </View>

            </ View>
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

export default CustomRfqflatlist

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
        fontWeight: '400',
        color: ColorText,
        textAlign: 'center',
        lineHeight: 18,


    },
    textLineItem3: {
        fontSize: 15,
        fontWeight: '400',
        color: ColorText,
        textAlign: 'center',
        lineHeight: 18,
        textTransform: 'capitalize'


    },
    tableRow: {
        flexDirection: "row",
        justifyContent: 'center',
        backgroundColor: bgColor1,
        height: 80,
        marginBottom: 2


    },

});