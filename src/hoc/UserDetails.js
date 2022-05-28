import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import { getUserInfoAction } from '../Redux/Slice/AuthSlice';

const UserDetailsHoc = Component =>
  function Comp(props) {
    const dispatch = useDispatch();
    const profile = useSelector(state => state?.auth?.userInfo?.data);
    const loading = useSelector(state => state?.auth.isLoading);
    

    React.useEffect(() => {
      dispatch(getUserInfoAction());
    }, [dispatch]);

    return <Component profile={profile}  loading={loading}{...props} />;
  };
export default UserDetailsHoc;
