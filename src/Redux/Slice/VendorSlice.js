import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthService from "../Services/AuthService";

export const CreateVendorAction = createAsyncThunk('vendor/CreateVendorAction', async (user, thunkAPI) => {
    try {
      return await AuthService.CreateVendorApi(user);
    } catch (error) {
      console.log(error, 'error');
      const {message} = error;  
      return thunkAPI.rejectWithValue(error.response.data || message);
    }
  });


  
  export const getVendorAction = createAsyncThunk('vendor/getVendorAction', async (user, thunkAPI) => {
    try {
      return await AuthService.CreateVendorApi(user);
    } catch (error) {
      console.log(error, 'error');
      const {message} = error;
      // console.log(error.response.data || message)
  
      // const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString() || error.response.data
  
      return thunkAPI.rejectWithValue(error.response.data || message);
    }
  });

  const initialState = {
    // user: user ? user : null,
    isError: false,
    isLoading: false,
    message: '',
    data:[],
  };


  const vendorSlice = createSlice({
    name: 'vendor',
    initialState,
    extraReducers: {
      [CreateVendorAction.pending]: (state, action) => {
        state.isLoading = true;
      },
      [CreateVendorAction.fulfilled]: (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data = action.payload.data;
      },
      [CreateVendorAction.rejected]: (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = "Something went wrong. try again";
        state.data= [];
      },
    },
  });
  
  const {reducer} = vendorSlice;
  export default reducer;
  