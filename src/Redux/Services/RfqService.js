import axios from 'axios';

import {otherUrl} from '../Constant/Constants';
import instance from './ApiServices';

const API_URL = `${otherUrl}/`;

const postRfQJobService = data => {
  console.log(data, 'd999999909099999');
  // console.log(value, token, ' vaaaaaa')
  return axios
    .post(API_URL + 'rfq', data?.values, {
      headers: {Authorization: `${data?.token}`},
    })
    .then(response => {
      return response;
    });
};

const getRfQJobService = token => {
  // console.log(token, 'token')
  return axios
    .get(API_URL + `rfq?page=${1}&limit=${10}`, {
      headers: {Authorization: `${token}`},
    })
    .then(response => {
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
  console.log(
    vendorData?.data,
    vendorData?.id,
    'chosenOptionchosenOptionchosenOption',
  );
  return instance
    .post(`/rfq/select/${vendorData?.id}`, vendorData?.data)
    .then(response => {
      console.log(response, 'selectItemServicesselectItemServices');
      return response.data;
    });
};

const RfqService = {
  postRfQJobService,
  getRfQJobService,
  postRfQMaterialService,
  postRfQVendorService,
  selectItemServices,
};

export default RfqService;
