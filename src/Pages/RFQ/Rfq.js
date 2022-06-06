import { StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import React, { useState, useLayoutEffect } from 'react'
import { Text, Box, Flex } from "native-base";
import { COLOR } from '../../Utils/theme'
import AppBar from '../../component/AppBar'
import Header from '../../component/Header';
import InputSearch from '../../component/InputSearch';
import ButtonH from '../../component/ButtonH';
import { BgColor } from '../../Utils/Colors';
import ViewRfq from '../../component/ViewRfq';
import { useSelector, useDispatch } from 'react-redux';
import { getRfqJob } from '../../Redux/Slice/RfqSlice';

const Rfq = ({navigation}) => {
    const [index, setIdex] = React.useState(true)


    const auth = useSelector((auth) => auth.auth.user)
    const dispatch = useDispatch()
    const { refresh } = useSelector((rfq) => rfq.rfq)
    const allRfq = useSelector((rfq) => rfq.rfq.allrfq)
    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);


    const [error, setError] = useState(false);
    const token = auth?.token
   
    useLayoutEffect(() => {
        dispatch(getRfqJob(token))
            .unwrap().then((res) => {
                setFilteredDataSource(res.data);
                setMasterDataSource(res.data);

            }).catch((err) => {

                if (err) {
                    setError(true)
                }



            })
    }, [dispatch, refresh])
    const searchFilterFunction = (text) => {
        // Check if searched text is not blank
        if (text) {
            // Inserted text is not blank
            // Filter the masterDataSource
            // Update FilteredDataSource
            const newData = masterDataSource.filter(function (item) {
                const itemData = item.job?.name
                    ? item.job?.name.toUpperCase()
                    : ''.toUpperCase();
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
      <SafeAreaView style={{ flex: 1, backgroundColor:'#fff' }}>
          <AppBar type="black" backgroundColor={COLOR.whiteColor} />
          <Header />
          <Box px="6">
              <Box>
                  < InputSearch 
                  
                      onChangeText={(text) => searchFilterFunction(text)}
                      onClear={(text) => searchFilterFunction('')}
                      value={search}
                      placeholder="search catergory name"
                  />
              </Box>
              <Flex direction="row" mt="4" justifyContent="space-between">
                  <ButtonH style={{

                      borderColor: BgColor,
                      width: '48%',
                      backgroundColor: index ? BgColor : 'transparent',
                      borderRadius: 5


                  }}
                      onPress={() => setIdex(!index)}
                  >
                      <Text style={[styles.butttonText,
                      { color: index ? "#fff" : BgColor }
                      ]}>View History</Text>
                  </ButtonH>
                  <ButtonH style={{

                      borderColor: BgColor,
                      width: '48%',
                      backgroundColor: !index ? BgColor : 'transparent',
                      borderRadius: 5

                  }}
                      onPress={() => navigation.navigate('createrfq')}
                  >
                      <Text style={[styles.butttonText,
                      { color: !index ? "#fff" : BgColor }

                      ]}>Create New</Text>
                  </ButtonH>
              </Flex>
          </Box>

          <ViewRfq navigation={navigation}
              error={error}
              setError={setError}
              allRfq={filteredDataSource}
          />
      </SafeAreaView>
  )
}

export default Rfq

const styles = StyleSheet.create({

    butttonText: {
        fontSize: 15,
        fontWeight: '400',
        lineHeight: 18,
        fontStyle: 'normal',
       
    }

})