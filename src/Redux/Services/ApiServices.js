import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios';

export const BASE_URL =
  'https://demo-server-quotesconnect.herokuapp.com/api/v1.1';
const instance = Axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
});

instance.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('user');
    console.log(token, 'token');
    // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMjFhMzg1Yjc2NGFiMDAxNjFiMWNiYyIsImFjY291bnRUeXBlIjoiZG9jdG9yIiwiaWF0IjoxNTk2MDQ1NDE0fQ.U3Hr1UHUoWYP40SljtKCGsN-lbfELcb_7Z_NuOyUdQ0'
    if (token) {
      config.headers.Authorization =  token;
    }
    config.headers.Accept = '*/*';
    return config;
  },
  err => {
    return Promise.reject(err);
  },
);

instance.interceptors.response.use(
  async response => {
    // if(response?.data){
    //     console.log('axios-response', response.status, response.data)
    // }

    return response;
  },
  err => {
    return Promise.reject(err);
  },
);

export default instance;
