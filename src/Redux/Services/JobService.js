import axios from 'axios';

import {otherUrl} from '../Constant/Constants';
import instance from './ApiServices';

const API_URL = `${otherUrl}/`;

const getJobService = (token) => {
    // console.log(token, 'token')
    return axios.get(API_URL + `job/all-jobs`, { headers: { "Authorization": `${token}` } }).then((response) => {
        return response.data;
<<<<<<< HEAD
=======
    });
};

const mygetVendorService = token => {
  // console.log(token, 'token')
  return axios
    .get(API_URL + 'vendor/all-vendors', {headers: {Authorization: `${token}`}})
    .then(response => {
      return response.data;
>>>>>>> f6e1c4f403deaf4ea72427ace91f35d5bc105077
    });
};

const postJobService = data => {
  const {value, token} = data;
  // console.log(value, token, ' vaaaaaa')
  return axios
    .post(API_URL + 'job', value, {headers: {Authorization: `${token}`}})
    .then(response => {
      console.log(response, 'response');

      return response.data;
    });
};

const deleteJobService = data => {
  const {_id, token} = data;
  // console.log(_id, token, ' vaaaaaa')
  // console.log(API_URL + `job/${_id}`);
  return axios
    .delete(API_URL + `job/${_id}`, {headers: {Authorization: `${token}`}})
    .then(response => {
      // console.log(response, 'response')

      return response.data;
    });
};

const updateJobService = data => {
  const {_id, updatedData, token} = data;
  // console.log(_id,updatedData, token, ' updatedJobService')
  // console.log(API_URL + `job/${_id}`);

  return axios
    .put(API_URL + `job/${_id}`, updatedData, {
      headers: {Authorization: `${token}`},
    })
    .then(response => {
      // console.log(response, 'response')

      return response.data;
    });
};

const JobService = {
  getJobService,
  postJobService,
  deleteJobService,
  updateJobService,
  mygetVendorService,
};

export default JobService;
