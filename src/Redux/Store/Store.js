import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../Slice/AuthSlice'
import Vendor from '../Slice/VendorSlice'
// import vendorSlice from '../Slice/VendorSlice'



const reducer = {
 auth: authReducer,
    vendor: Vendor

}


export const store = configureStore({
    reducer: reducer,
   
})