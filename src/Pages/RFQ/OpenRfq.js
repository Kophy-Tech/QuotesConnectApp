import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'

import { Box, } from "native-base";

import { BgColor, bgColor1, ColorText } from '../../Utils/Colors';

import { COLOR, WP } from '../../Utils/theme';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';

;
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';



const OpennRfq = () => {
    const {  jobRfq } = useSelector((rfq) => rfq.rfq)

    const materialJob=jobRfq.rfqArray
    const vendorArray = jobRfq.vendorArray

    console.log(materialJob[0].name.name)
    console.log( vendorArray[0] )

    const [value, setValue] = useState([
        {
            query: '',
            description: '',
            quantity: '',
            unit: '',
            name: '',
            show: false
        }
    ]);
    // console.log({value})

    // const [valueText, setValueText] = useState([
    //     {
    //         query: '',
    //         description: '',
    //         quantity: '',
    //         unit: '',
    //         materialId: ''
    //     }
    // ]);
  

    return (
        <KeyboardAwareScrollView
            style={{
                flex: 1,
                backgroundColor: '#fff'
            }}
            contentContainerStyle={{ paddingBottom: WP(50) }}
            horizontal={false}

            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}>

            <Box px="4" pt='10'>
            

                <View style={styles.tableColumnHeader}>
                    <View style={styles.tableColumnRegular}>
                        <Text style={styles.textLineItemH}>Item Name</Text>
                    </View>
                    <View style={styles.tableColumnRegular}>
                        <Text style={styles.textLineItemH}>Description</Text>
                    </View>
                    <View style={styles.tableColumnRegular}>
                        <Text style={styles.textLineItemH}>Quantity</Text>
                    </View>
                    <View style={styles.tableColumnRegular}>
                        <Text style={[styles.textLineItemH, { textAlign: 'left' }]}>Unit</Text>
                    </View>

                </View>

                {
                    materialJob?.map((val, key) => {

                        return (
                            <View style={styles.tableRow}

                                key={val._id}
                            >
                                <View style={[styles.tableColumnRegular2, { position: 'relative' }]}>

                                    <Text>{val.name.name}</Text>
                                </View>
                                <View style={styles.tableColumnRegular2}>
                                   
                                    <Text>{val.description}</Text>

                                </View>
                                <View style={styles.tableColumnRegular2}>

                                  
                                    <Text>{val.quantity}</Text>

                                </View>
                                <View style={styles.tableColumnRegular}>
                                   
                                    <Text>{val.unit}</Text>

                                </View>

                            </View>
                        )
                    })
                }

             <Box mt="10">
<View style={styles.selectedVendors}>
                        <Text style={styles.selectedVendorsText}>Selected Vendors</Text>
</View>
                    <View style={{
                        flexDirection: "row",
                        // justifyContent: 'center',
                        height: 80,
                      width: '100%'

                    }}
                 
                    >

                        {
                            vendorArray.map((item) => {
                                return (

                                    <Image
                            style={styles.imageStyle}
                            source={{
                                uri: item.vendor.logo,
                            }}
                            key={item._id}
                        /> 
                                )})}
                        
                      
                    </View>
          
             </Box>
            </Box>

        </KeyboardAwareScrollView>


    )
}

export default OpennRfq

const styles = StyleSheet.create({
    butttonText: {
        fontSize: 15,
        fontWeight: '400',
        lineHeight: 18,
        fontStyle: 'normal',

    },
    addButtonContainer: {
        marginVertical: 30,
        width: '38%',
        alignSelf: 'flex-end'

    },
    tableColumnRegular: {
        flex: 1,

        justifyContent: 'center',

        alignSelf: 'stretch',
        alignItems: 'center'



    },
    tableColumnRegular2: {
        flex: 2,

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
    textLineItemH: {
        fontSize: 13,
        fontWeight: '400',
        color: '#fff',
        textAlign: 'center',
        lineHeight: 15,

    },

    tableRow: {
        flexDirection: "row",
        justifyContent: 'center',
        height: 60,

        backgroundColor: bgColor1,
        marginBottom: 2,
        paddingHorizontal:10


    },
    itemText: {
        fontSize: 15,
        margin: 2,
        color: '#fff',

    },

    imageStyle: {
        width: "30%",
        height: "100%",
        resizeMode: 'cover',
        alignSelf: 'center',
        borderRadius: 5,
       margin:2

    },
    selectedVendors:{
       
        marginVertical:10
    },
    selectedVendorsText:{
        fontSize: 20,
        fontWeight: '700',
        color: BgColor,
       
    }

})