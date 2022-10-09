import {TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

import {HStack, Text, Box, Avatar, Flex} from 'native-base';

import UserDetailsHoc from '../hoc/UserDetails';
import {acronym} from '../Utils/util';
import {WP} from '../Utils/theme';
import {useDispatch} from 'react-redux';
import {logout} from '../Redux/Slice/AuthSlice';
const Header = props => {
  const {profile = {}} = props;
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const Logouts = () => {
    // dispatch(logout());
    dispatch(logout())
      .unwrap()
      .then(() => {
        navigation.navigate('Auth', {
          screen: 'Login',
        });
      })
      .catch(rejectedValueOrSerializedError => {
        console.log(rejectedValueOrSerializedError, 'Auth');
        // console.log(rejectedValueOrSerializedError, 'rejecteddd');
      });
  };

  return (
    <>
      {/* <Box safeAreaTop bg="#6200ee" /> */}
      <HStack
        px="6"
        py="5"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        style={{backgroundColor: 'transparent'}}>
        <TouchableOpacity onPress={() => navigation.navigate('profile')}>
          <Flex direction="row" alignItems="center">
            <Box>
              <TouchableOpacity onPress={() => {}}>
                <Avatar bg="#5080FA">{acronym(profile?.fullname)}</Avatar>
              </TouchableOpacity>
            </Box>
            <Box pl="2">
              <Text style={{fontSize: 18}} bold>
                {' '}
                Hi {profile?.fullname},
              </Text>
              {/* <Text style={{fontSize: 12}}> Good day.</Text> */}
            </Box>
          </Flex>
        </TouchableOpacity>

        <HStack>
          <TouchableOpacity
            onPress={() => Logouts()}
            style={{backgroundColor: '#5080FA', padding: 5, marginLeft: WP(3)}}>
            <Text style={{color: 'white'}}>{'Logout'}</Text>
          </TouchableOpacity>
        </HStack>
      </HStack>
    </>
  );
};

export default UserDetailsHoc(Header);
