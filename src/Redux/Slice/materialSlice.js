import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import MaterialService from '../Services/materialService';


export const getMaterial = createAsyncThunk(
    'material/getmaterial',
    async (token, thunkAPI) => {
        try {
            const response = await MaterialService.getMaterialService(token);
            // console.log(response.data, 'response')
            return response.data;
        } catch (error) {
            console.log(error, 'from getmmaterial');
            const { message } = error;
            // const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
            return thunkAPI.rejectWithValue(error.response.data || message);
        }
    },
);

export const postMaterial = createAsyncThunk('material/postmaterial', async (data, thunkAPI) => {
    try {
      
        return await MaterialService.postMaterialService(data);
    } catch (error) {
        console.log(error, 'error');
        const { message } = error;
        // console.log(error.response.data || message)

        // const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString() || error.response.data

        return thunkAPI.rejectWithValue(error.response.data || message);
    }
});



const initialState = {
    material: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
};

const materialSlice = createSlice({
    name: 'material',
    initialState,
    extraReducers: {
        [getMaterial.pending]: (state, action) => {
            state.isLoading = true;
        },
        [getMaterial.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.material = action.payload;
        },
        [getMaterial.rejected]: (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
          
        },
        [postMaterial.pending]: (state, action) => {
            state.isLoading = true;
        },
        [postMaterial.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            console.log(action.payload.data, 'ressssssf');
            state.material.push(action.payload.data);
        },
        [postMaterial.rejected]: (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            
        },
       
    },
});

const { reducer } = materialSlice;
export default reducer;
