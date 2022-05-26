import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Getprofiles} from '../Redux/action/profile';

const UserDetails = Component =>
  function Comp(props) {
    const dispatch = useDispatch();
    const profile = useSelector(state => state);
    React.useEffect(() => {
      dispatch(Getprofiles());
    }, [dispatch]);

    return <Component profile={profile} {...props} />;
  };
export default UserDetails;
