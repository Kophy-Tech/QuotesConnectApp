import axios from 'axios';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {baseUrl} from '../Constant/Constants';
import instance from './ApiServices';

const API_URL = `${baseUrl}/`;

const register = userData => {
  return axios.post(API_URL + 'register', userData);
};

const login = userData => {
  return axios.post(API_URL + 'login', userData).then(response => {
    console.log(response, 'response');
    if (response.data) {
      console.log(JSON.stringify(response.data.token));
      AsyncStorage.setItem('user', response.data.token);
    }

    return response.data;
  });
};

const CreateVendorApi = vendorData => {
  console.log(vendorData, 'vendor data omidiora');
  return instance.post('/vendor', vendorData).then(response => {
    console.log(response, 'response');

    return response.data;
  });
};

const getVendorApi = userData => {
  return instance.get('/vendor').then(response => {
    console.log(response, 'response');
    if (response) {
    }
    return response.data;
  });
};

const otp = userData => {
  return axios.post(API_URL + 'login', userData).then(response => {
    if (response.data) {
      AsyncStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data;
  });
};

const logout = () => {
  AsyncStorage.removeItem('user');
};

const AuthService = {
  register,
  login,
  logout,
  CreateVendorApi,
};

export default AuthService;
