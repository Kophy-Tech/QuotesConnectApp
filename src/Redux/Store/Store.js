import {configureStore} from '@reduxjs/toolkit';
import authReducer from '../Slice/AuthSlice';
import Vendor from '../Slice/VendorSlice';
// import vendorSlice from '../Slice/VendorSlice'
import materialReducer from '../Slice/materialSlice';
import jobReducer from '../Slice/JobSlice';
import RfqSlice from '../Slice/RfqSlice';

const reducer = {
  auth: authReducer,
  vendor: Vendor,
  material: materialReducer,
  job: jobReducer,
  rfq:RfqSlice
};

export const store = configureStore({
  reducer: reducer,
});
