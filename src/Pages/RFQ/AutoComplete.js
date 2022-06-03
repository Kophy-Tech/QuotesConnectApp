import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React from 'react'

import { BgColor, bgColor1 } from '../../Utils/Colors';
import { COLOR, WP } from '../../Utils/theme';

import Autocomplete from 'react-native-autocomplete-input';


const AutoComplete = ({ value,id,  data, setData, filterData}) => {
  return (
      <View style={styles.autocompleteContainer}>

          <Autocomplete

              value={value}
              onChangeText={(text) => filterData(text)}

              placeholder="Enter material name"
              data={data}

              style={{
                  backgroundColor: 'transparent',
              }}
              inputContainerStyle={{
                  borderColor: COLOR.BgColor,
                  borderRadius: 2,
                  borderWidth: WP(0.2)

              }}
              listContainerStyle={{
                  backgroundColor: "#a9b4fc",
              }}

              flatListProps={{
                  keyboardShouldPersistTaps: 'always',

                  listKey: (item, index) => `_key${index.toString()}`,
                  keyExtractor: (item, index) => `_key${index.toString()}`,
                  renderItem: ({ item }) => {

                      return (
                          <TouchableOpacity
                              key={item?._id}

                              onPress={() => {
                                //    onChangeText('query', item?.name, id)
                                //    onChangeText('materialId', item?._id, id)
                                  setData([])
                              }}


                              style={{

                                  padding: 10,
                              }}
                          >
                              <Text style={styles.itemText}>{item?.name}</Text>
                          </TouchableOpacity>
                      )
                  }
              }}

          />

      </View>
  )
}

export default React.memo(AutoComplete)

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