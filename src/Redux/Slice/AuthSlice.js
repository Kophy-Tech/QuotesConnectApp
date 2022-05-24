import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthService from '../Services/AuthService';
// const user = JSON.parse(AsyncStorage.getItem("user"));

export const register = createAsyncThunk(
  'auth/register',
  async (userData, thunkAPI) => {
    try {
      const response = await AuthService.register(userData);
      console.log(response, 'response')
      return response.data;
    } catch (error) {
      console.log(error, 'from register');
      const {message} = error;
      // const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
      return thunkAPI.rejectWithValue(error.response.data || message);
    }
  },
);

export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  try {
    return await AuthService.login(user);
  } catch (error) {
    console.log(error, 'error');
    const {message} = error;
    // console.log(error.response.data || message)

    // const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString() || error.response.data

    return thunkAPI.rejectWithValue(error.response.data || message);
  }
});

export const logout = createAsyncThunk('auth/logout', async () => {
  await AuthService.logout();
});

const initialState = {
  user:  null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending]: (state, action) => {
      state.isLoading = true;
    },
    [register.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload;
    },
    [register.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = "Something went wrong. try again";
      state.user = null;
    },
    [login.pending]: (state, action) => {
      state.isLoading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload;
    },
    [login.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.user = null;
    },
    [logout.fulfilled]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

const {reducer} = authSlice;
export default reducer;
