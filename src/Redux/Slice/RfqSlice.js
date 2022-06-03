import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    createJob: {},
    value:[
        {
            query: '',
            description: '',
            quantity: '',
            unit: '',
            materialId: ''
        }
    ]
}

export const RfqSlice = createSlice({
    name: 'createjob',
    initialState,
    reducers: {
        dispatchJob: (state, {payload}) => {
          
            state.createJob= payload
        },
        handleAddRfq: (state)=>{
            state.value.push(
                {
                    query: '',
                    description: '',
                    quantity: '',
                    unit: '',
                    materialId: ''
                }
            )
        },
        handleRemoveRRfq: (state, {payload}) => {
            state.value.splice(payload, 1)
          
        },
        changeInput: (state, {payload}) => {
            state.value[payload.index][payload.name] = payload.value
        }
     
    },
})

// Action creators are generated for each case reducer function
export const { dispatchJob, handleAddRfq, handleRemoveRRfq, changeInput} = RfqSlice.actions

const { reducer } = RfqSlice;
export default reducer;