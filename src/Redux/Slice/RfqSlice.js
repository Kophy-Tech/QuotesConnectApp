import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import RfqService from '../Services/RfqService';


export const postRfqJob = createAsyncThunk('rfq/postrfqjob', async (data, thunkAPI) => {
    try {

        return await RfqService.postRfQJobService(data);
    } catch (error) {
        console.log(error, 'error');
        const { message } = error;
        // console.log(error.response.data || message)

        // const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString() || error.response.data

        return thunkAPI.rejectWithValue(error.response.data.error[0].msg || message);
    }
});


const initialState = {
    createJob: {},

    jobRfq: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
    refresh: null,
    
}

export const RfqSlice = createSlice({
    name: 'createfq',
    initialState,
    reducers: {
        dispatchJob: (state, {payload}) => {
          
            state.createJob= payload
        },
      
    },

    extraReducers: {
    
        [postRfqJob.pending]: (state, action) => {
            state.isLoading = true;
        },
        [postRfqJob.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.jobRfq = action.payload.data;
            // state.job.push(action.payload.data);
        },
        [postRfqJob.rejected]: (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;

        },

       
    },
})

// Action creators are generated for each case reducer function
export const { dispatchJob} = RfqSlice.actions

const { reducer } = RfqSlice;
export default reducer;