import {StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import React, {useState, useLayoutEffect} from 'react';

import Header from '../../../component/Header';
import {Text, Box, Flex} from 'native-base';

import ButtonH from '../../../component/ButtonH';
import {BgColor} from '../../../Utils/Colors';
import JobHistory from '../../../component/JobHistory';
import JobCreate from '../../../component/JobCreate';
import AppBar from '../../../component/AppBar';
import {COLOR} from '../../../Utils/theme';
import InputSearch from '../../../component/InputSearch';
import {useSelector, useDispatch} from 'react-redux';
import {getJob} from '../../../Redux/Slice/JobSlice';

const Job = ({navigation}) => {
  const [index, setIdex] = React.useState(true);
  const auth = useSelector(auth => auth.auth.user);
  const dispatch = useDispatch();

  const {refresh} = useSelector(job => job.job);

  const [error, setError] = useState(false);
  const token = auth?.token;
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  useLayoutEffect(() => {
    dispatch(getJob(token))
      .unwrap()
      .then(res => {
        //  console.log(res, 'res');
        setFilteredDataSource(res.data);
        setMasterDataSource(res.data);
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
        {/* <Box>
          <InputSearch
            onChangeText={text => searchFilterFunction(text)}
            onClear={text => searchFilterFunction('')}
            value={search}
            placeholder="search project name"
          />
        </Box> */}

        <Flex direction="row" mt="6" justifyContent="space-between" mb="4">
          <ButtonH
            style={{
              borderColor: BgColor,
              width: '100%',
              backgroundColor: !index ? BgColor : 'transparent',
              borderRadius: 5,
            }}
            onPress={() => navigation.navigate('jobcreate')}>
            <Text
              style={[styles.butttonText, {color: !index ? '#fff' : BgColor}]}>
              Create New Job
            </Text>
          </ButtonH>
        </Flex>
      </Box>

      {index && (
        <JobHistory
          navigation={navigation}
          job={filteredDataSource}
          error={error}
          setError={setError}
        />
      )}
    </SafeAreaView>
  );
};

export default Job;

const styles = StyleSheet.create({
  butttonText: {
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 18,
    fontStyle: 'normal',
  },
  JobContainer: {
    paddingTop: 40,
  },
});
