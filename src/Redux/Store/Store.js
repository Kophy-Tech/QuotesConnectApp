import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../Slice/AuthSlice'
import materialReducer from '../Slice/materialSlice'
import jobReducer from '../Slice/JobSlice'




const reducer = {
    auth: authReducer,
    material: materialReducer,
    job: jobReducer

}


export const store = configureStore({
    reducer: reducer,
   
})