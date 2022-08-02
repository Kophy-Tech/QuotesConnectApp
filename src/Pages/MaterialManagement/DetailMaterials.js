import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {WP} from '../../Utils/theme';

const DetailMaterials = props => {
  console.log(props.route.params.itemParams._id, 'ss');
  return (
    <View>
      <FlatList
        data={props?.route?.params?.itemParams?.description}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <>
            <View style={styles._subContainer}>
              <TouchableOpacity>
                <Text style={{color: 'black'}}>{item?.content}</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() =>
                  props.navigation.navigate('EditSubMaterial', {
                    itemParams: item,
                    primary_id: props.route.params.itemParams._id,
                  })
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
          </>
        )}
      />
    </View>
  );
};

export default DetailMaterials;

const styles = StyleSheet.create({
  _subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: WP(90),
    left: WP(4),
    marginVertical: WP(8),
  },
});
