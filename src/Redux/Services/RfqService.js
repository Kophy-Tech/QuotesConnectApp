import axios from 'axios';

import {otherUrl} from '../Constant/Constants';
import instance from './ApiServices';

const API_URL = `${otherUrl}/`;

const getRfQJobService = token => {
  return instance.get('/rfq').then(response => {
    return response.data;
  });
};

const postRfQJobService = data => {
  // console.log(value, token, ' vaaaaaa')
  return axios
    .post(API_URL + 'rfq', value, {headers: {Authorization: `${token}`}})
    .then(response => {
      console.log(response, 'response');

      return response.data;
    });
};

const postRfQMaterialService = data => {
  const {rfqArray, token, rfq_id} = data;
  const obj = {
    rfqArray: rfqArray,
  };
  return axios
    .post(API_URL + `rfq/${rfq_id}/material`, obj, {
      headers: {Authorization: `${token}`},
    })
    .then(response => {
      console.log(response, 'response');

      return response.data;
    });
};

const postRfQVendorService = data => {
  const {dataVendor, token, rfq_id} = data;
  console.log(dataVendor, 'from backend');
  const obj = {
    vendorArray: dataVendor,
  };
  return axios
    .post(API_URL + `rfq/${rfq_id}/vendor`, obj, {
      headers: {Authorization: `${token}`},
    })
    .then(response => {
      console.log(response, 'response');

      return response.data;
    });
};



const selectItemServices = vendorData => {
  return instance
    .post('/rfq/select/62890affce5cd34fa061d308', vendorData)
    .then(response => {
      return response.data;
    });
};

const RfqService = {
  postRfQJobService,
  getRfQJobService,
  postRfQMaterialService,
  postRfQVendorService,
};

export default RfqService;
