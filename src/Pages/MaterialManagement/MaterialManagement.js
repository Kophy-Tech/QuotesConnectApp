import {StyleSheet, SafeAreaView, ScrollView, View} from 'react-native';
import React, {useState, useLayoutEffect, useEffect} from 'react';

import {Text, Box, Flex} from 'native-base';
import {COLOR} from '../../Utils/theme';
import AppBar from '../../component/AppBar';
import Header from '../../component/Header';
import InputSearch from '../../component/InputSearch';
import ButtonH from '../../component/ButtonH';
import {BgColor} from '../../Utils/Colors';
import {getMaterial, getMoreMaterial} from '../../Redux/Slice/materialSlice';

import ViewMaterial from '../../component/ViewMaterial';
import {useSelector, useDispatch} from 'react-redux';
import FormCustomButton from '../../component/FormCustomButton';
const MaterialManagement = ({navigation}) => {
  const [index, setIdex] = React.useState(true);

  const auth = useSelector(auth => auth.auth.user);
  const dispatch = useDispatch();
  const {refresh} = useSelector(material => material.material);

  const [error, setError] = useState(false);
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  const token = auth?.token;
  const tdata = {
    token,
  };
  useLayoutEffect(() => {
    dispatch(getMaterial(tdata))
      .unwrap()
      .then(res => {
        //  console.log(res, 'respppppppppppppp');

        setFilteredDataSource([...res.data]);
        setMasterDataSource([...res.data]);
      })
      .catch(err => {
        if (err) {
          setError(true);
        }
      });
  }, [dispatch, refresh]);

  const searchFilterFunction = text => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <AppBar type="black" backgroundColor={COLOR.whiteColor} />
      <Header />
      <Box px="6">
        <Box>
          <InputSearch
            onChangeText={text => searchFilterFunction(text)}
            onClear={text => searchFilterFunction('')}
            value={search}
            placeholder="search catergory name"
          />
        </Box>
        <View style={{marginVertical: 25}}>
          <FormCustomButton
            btnTitle="Create New"
            backgroundColor={'white'}
            borderWidth={1}
            borderColor={BgColor}
            textColor={BgColor}
            onPress={() => navigation.navigate('creatematerial')}
          />
        </View>
        {/* <Flex direction="row" mt="4" justifyContent="space-between">
          <ButtonH
            style={{
              borderColor: BgColor,
              width: '100%',
              backgroundColor: !index ? BgColor : 'transparent',
              borderRadius: 5,
              paddingBottom: 30,
            }}
            onPress={() => navigation.navigate('creatematerial')}>
            <Text
              style={[styles.butttonText, {color: !index ? '#fff' : BgColor}]}>
              Create New
            </Text>
          </ButtonH>
        </Flex> */}
      </Box>

      {index && (
        <View>
          <ViewMaterial
            navigation={navigation}
            material={filteredDataSource}
            error={error}
            setError={setError}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default MaterialManagement;

const styles = StyleSheet.create({
  butttonText: {
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 18,
    fontStyle: 'normal',
  },
});
