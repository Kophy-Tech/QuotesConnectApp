import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../Slice/AuthSlice'
import materialReducer from '../Slice/materialSlice'




const reducer = {
    auth: authReducer,
    material: materialReducer

}


export const store = configureStore({
    reducer: reducer,
   
})