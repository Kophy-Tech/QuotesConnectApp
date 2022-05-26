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

const reset_password_api = email => {
  return instance.post('/client/reset/mail', email).then(response => {
    console.log(response, 'reset password');
  });
};

const reset_password_otp = email => {
  return instance.post('/client/confirmation/token', email).then(response => {
    console.log(response, 'reset password');
  });
};

// // auth/reset_password
const getVendorApi = userData => {
  return instance.get('/vendor/all-vendors').then(response => {
    console.log(response, 'response vendor');

    return response.data;
  });
};

const CreateVendorApi = vendorData => {
  console.log(vendorData, 'vendor data omidiora');
  return instance.post('/vendor', vendorData).then(response => {
    getVendorApi();
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
  reset_password_api,
  CreateVendorApi,
  reset_password_otp,
  getVendorApi,
};

export default AuthService;
