import axios from 'axios'

import AsyncStorage from '@react-native-async-storage/async-storage';
import { baseUrl } from '../Constant/Constants';

const API_URL = `${baseUrl}/`

const register = (userData) => {
    return axios.post(API_URL + "register", userData);
};




const login = (userData) => {
    return axios
        .post(API_URL + "login", userData)
        .then((response) => {
            console.log(response, 'response')
            if (response.data) {
                AsyncStorage.setItem("user", JSON.stringify(response.data));
            }

            return response.data;
        });
};


const otp= (userData) => {
  return axios
      .post(API_URL + "login", userData)
      .then((response) => {
          if (response.data) {
              AsyncStorage.setItem("user", JSON.stringify(response.data));
          }

          return response.data;
      });
};

const logout = () => {
    AsyncStorage.removeItem("user");
};

const AuthService = {
    register,
    login,
    logout,
  
};

export default AuthService;