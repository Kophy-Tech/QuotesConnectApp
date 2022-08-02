import {StyleSheet, View, SafeAreaView} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Text, Box, Flex} from 'native-base';
import {COLOR} from '../../Utils/theme';
import AppBar from '../../component/AppBar';
import Header from '../../component/Header';
import InputSearch from '../../component/InputSearch';
import ButtonH from '../../component/ButtonH';
import {BgColor} from '../../Utils/Colors';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';

import ListOfVendor from './ListOfVendor';
import {getVendorAction} from '../../Redux/Slice/VendorSlice';
const Vendors = () => {
  const [index, setIdex] = React.useState(true);
  const navigation = useNavigation();
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
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

  useEffect(() => {
    dispatch(getVendorAction())
      .unwrap()
      .then(res => {
        setFilteredDataSource([...res.data]);
        setMasterDataSource([...res.data]);
      })
      .catch(err => {
        console.log(err, 'errrrrr');
      });
  }, []);

  return (
    <SafeAreaView style={{flex: 1, marginBottom: 80, backgroundColor: 'white'}}>
      <AppBar type="black" backgroundColor={COLOR.whiteColor} />
      <Header />
      <Box px="6">
        <Box>
          <InputSearch
            onChangeText={text => searchFilterFunction(text)}
            onClear={text => searchFilterFunction('')}
            value={search}
            placeholder="Search For Vendor"
          />
        </Box>
        <Flex direction="row" mt="4" justifyContent="space-between">
          <ButtonH
            style={{
              borderColor: BgColor,
              width: '100%',
              backgroundColor: !index ? BgColor : 'transparent',
              borderRadius: 5,
            }}
            onPress={() => navigation.navigate('createvendor')}>
            <Text
              style={[styles.butttonText, {color: !index ? '#fff' : BgColor}]}>
              Create New Vendor
            </Text>
          </ButtonH>
        </Flex>
      </Box>
      <ListOfVendor
        totalVendor={filteredDataSource}
        error={error}
        setError={setError}
      />
    </SafeAreaView>
  );
};

export default Vendors;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
});
