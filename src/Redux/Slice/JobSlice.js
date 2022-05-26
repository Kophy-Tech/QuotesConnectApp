import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import JobService from '../Services/JobService';


export const getJob = createAsyncThunk(
    'job/getjob',
    async (token, thunkAPI) => {
        try {
            const response = await JobService.getJobService(token);
            // console.log(response.data, 'response')
            return response.data;
        } catch (error) {
            console.log(error, 'from getjob');
            const { message } = error;
            // console.log(error.response.data.error[0].msg, 'from getmmaterial');

            // const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
            return thunkAPI.rejectWithValue(error.response.data.error[0].msg || message);
        }
    },
);

export const postJob = createAsyncThunk('job/postjob', async (data, thunkAPI) => {
    try {

        return await JobService.postJobService(data);
    } catch (error) {
        console.log(error, 'error');
        const { message } = error;
        // console.log(error.response.data || message)

        // const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString() || error.response.data

        return thunkAPI.rejectWithValue(error.response.data.error[0].msg || message);
    }
});

export const updateJob = createAsyncThunk('job/updatejob', async (data, thunkAPI) => {
    try {

        return await JobService.updateJobService(data);
    } catch (error) {
        console.log(error, 'error');
        const { message } = error;
        // console.log(error.response.data || message)

        // const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString() || error.response.data

        return thunkAPI.rejectWithValue(error.response.data.error[0].msg || message);
    }
});



export const deleteJob = createAsyncThunk('job/deletejob', async (data, thunkAPI) => {
    try {

        return await JobService.deleteJobService(data);
    } catch (error) {
        // console.log(error, 'error');
        const { message } = error;
        // console.log(error.response.data || message)

        // const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString() || error.response.data

        return thunkAPI.rejectWithValue(error.response.data.error[0].msg || message);
    }
});



const initialState = {
    job: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
};

const materialSlice = createSlice({
    name: 'job',
    initialState,
   
    extraReducers: {
        [getJob.pending]: (state, action) => {
            state.isLoading = true;
        },
        [getJob.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.job = action.payload;
        },
        [getJob.rejected]: (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;

        },
        [postJob.pending]: (state, action) => {
            state.isLoading = true;
        },
        [postJob.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            console.log(action.payload.data, 'ressssssf');
            state.job.push(action.payload.data);
        },
        [postJob.rejected]: (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;

        },
        
        [ updateJob.pending]: (state, action) => {
            state.isLoading = true;
        },
        [ updateJob.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            console.log(action.payload.data, 'ressssssf');
            state.job.push(action.payload.data);
        },
        [ updateJob.rejected]: (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;

        },
        [deleteJob.pending]: (state, action) => {
            state.isLoading = true;
        },
        [deleteJob.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            console.log(action.payload.data, 'ressssssf');
            state.job= state.job.filter((data)=> data._id !== action.payload._id)
        },
        [deleteJob.rejected]: (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;

        },
    },
});
export const { clearError } = materialSlice.actions
const { reducer } = materialSlice;
export default reducer;
