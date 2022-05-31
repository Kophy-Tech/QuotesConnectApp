import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    createJob: {},
}

export const RfqSlice = createSlice({
    name: 'createjob',
    initialState,
    reducers: {
        dispatchJob: (state, {payload}) => {
          
            state.createJob= payload
        },
     
    },
})

// Action creators are generated for each case reducer function
export const { dispatchJob } = RfqSlice.actions

const { reducer } = RfqSlice;
export default reducer;