import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { BgColor, bgColor1, ColorText } from '../../Utils/Colors';
import { COLOR, WP } from '../../Utils/theme';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SelectDropdown from 'react-native-select-dropdown'
import { useDispatch } from 'react-redux';

const FormSelect = ({ index, value, countries, handleRemoveClick, onChangeText}) => {
    const dispatch = useDispatch()

    return (
 <>
            <View style={{ flex: index === 0 ? 5 : 4 }}>

                <SelectDropdown
                    buttonStyle={{
                        width: index === 0 ? '97%' : '90%', height: '100%',
                        backgroundColor: 'transparent',
                        color: 'black'
                    }}

                    dropdownStyle={{

                        backgroundColor: '#fff'

                    }}
                    rowStyle={{
                        borderBottomColor: 'transparent',
                        height: 35
                    }}
                    rowTextStyle={{
                        color: 'black',
                        fontSize: 15
                    }}
                    data={countries}
                    defaultValue="Unit"
                    onSelect={(selectedItem, ind) => {
                        console.log(selectedItem, ind)
                        // handleInputChange('unit', selectedItem, index)
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        // text represented after item is selected
                        // if data array is an array of objects then return selectedItem.property to render after item is selected
                        return selectedItem
                    }}
                    rowTextForSelection={(item, index) => {
                        // text represented for each item in dropdown
                        // if data array is an array of objects then return item.property to represent item in dropdown
                        return item
                    }}
                />
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: index === 0 ? 0 : 1 }}>
                {index !== 0 && <TouchableOpacity onPress={() => {
                    handleRemoveClick(index)
                }}>
                    <Icon
                        name="delete"
                        size={25}
                        color={COLOR.BgColor}


                    />
                </TouchableOpacity>}

            </View>

 </>
    )
}

export default React.memo(FormSelect)

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

    tableColumnRegular3: {
        flex: 2.5,

        justifyContent: 'center',


        flexDirection: 'row'


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
        backgroundColor: bgColor1,
        height: 60,
        marginBottom: 2


    },
    itemText: {
        fontSize: 15,
        margin: 2,
        color: '#fff',

    },


    autocompleteContainer: {
        // Hack required to make the autocomplete
        // work on Andrdoid
        flex: 1,

        position: 'absolute',
        width: '100%',
        zIndex: 1,



    },
    autocompleteContainerStyle1: {
        backgroundColor: 'transparent'
    }


})