import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import {BgColor, bgColor1, ColorText} from '../Utils/Colors';
import {WP} from '../Utils/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const HeaderComponent = () => {
  return (
    <>
      <View style={styles.tableColumnHeader}>
        <View style={styles.tableColumnRegular}>
          <Text style={styles.textLineItem}>Primary Category Name</Text>
        </View>
        {/* <View style={styles.tableColumnRegular2}>
                    <Text style={[styles.textLineItem3, {
                        fontSize: 15
                    }]}>Sub Item Description</Text>
                </View> */}
      </View>
    </>
  );
};

const EmptyContainer = () => {
  return (
    <View
      style={{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        alignSelf: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.0,

        elevation: 1,
        backgroundColor: '#FFF',
      }}>
      <Text style={{fontSize: 20, color: 'black'}}> No data</Text>
    </View>
  );
};

const CustomFlatList = ({itemData, navigation}) => {
  // const keyExtractor = (item) => item.id;
  // console.log(itemData, 'itemData');

  const renderItem = ({item}) => {
    return (
      <View
      // style={styles.tableRow}
      //
      >
        <View
          // onPress={() =>
          //   navigation.navigate('editmaterial', {itemParams: item})
          // }
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 30,
          }}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('DetailMaterials', {itemParams: item})
            }>
            <Text style={styles.textLineItem1}>{item?.name}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate('editmaterial', {itemParams: item})
            }
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <AntDesign name="delete" color={'red'} size={22} />
            <View style={{left: WP(5)}}>
              <EvilIcons name="pencil" color={'grey'} size={26} />
            </View>
          </TouchableOpacity>
        </View>
        {/* <View style={styles.tableColumnRegular2}>
                    <Text style={styles.textLineItem2}>{item?.description.slice(0, 40)} </Text>

                </View> */}
      </View>
    );
  };
  return (
    <>
      <FlatList
        data={itemData}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={HeaderComponent}
        ListEmptyComponent={EmptyContainer}
        keyExtractor={item => `id${item?._id}`}
        contentContainerStyle={{
          paddingHorizontal: 22,
          paddingTop: 9,
          paddingBottom: WP(100),
        }}
      />
    </>
  );
};

export default CustomFlatList;

const styles = StyleSheet.create({
  tableColumnRegular: {
    // alignSelf: 'stretch',
    flexDirection: 'row',
    paddingRight: 10,
    justifyContent: 'space-evenly',
    width: 430,
  },
  tableColumnRegular2: {
    flex: 1.8,

    justifyContent: 'center',

    alignSelf: 'stretch',
  },
  tableColumnHeader: {
    flexDirection: 'row',
    justifyContent: 'center',

    backgroundColor: BgColor,
    borderRadius: 10,
    height: 62,
  },
  textLineItem: {
    fontSize: 20,
    fontWeight: '500',
    color: '#fff',
    textAlign: 'center',
    lineHeight: 58,
  },
  textLineItem3: {
    fontWeight: '400',
    color: '#fff',
    textAlign: 'left',
    lineHeight: 18,
  },
  textLineItem1: {
    fontSize: 16,
    fontWeight: 'bold',
    color: ColorText,
    textAlign: 'center',
    left: WP(4),
    textTransform: 'capitalize',

    lineHeight: 18,
  },
  textLineItem2: {
    fontSize: 15,
    fontWeight: '400',
    color: ColorText,
    textAlign: 'left',
    lineHeight: 18,
  },
  tableRow: {
    // justifyContent: 'left',
    backgroundColor: bgColor1,
    height: 80,
    marginBottom: 12,
    padding: 5,
  },
});
