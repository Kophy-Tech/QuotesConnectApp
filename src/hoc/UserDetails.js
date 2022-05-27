import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import { getUserInfoAction } from '../Redux/Slice/AuthSlice';

const UserDetailsHoc = Component =>
  function Comp(props) {
    const dispatch = useDispatch();
    const profile = useSelector(state => state?.auth?.userInfo?.data);
    console.log(profile, 'profile')
    

    React.useEffect(() => {
      dispatch(getUserInfoAction());
    }, [dispatch]);

    return <Component profile={profile} {...props} />;
  };
export default UserDetailsHoc;
