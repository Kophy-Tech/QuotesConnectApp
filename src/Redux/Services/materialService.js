import axios from 'axios';

import {otherUrl} from '../Constant/Constants';

const API_URL = `${otherUrl}/`;

const getMaterialService = data => {
  console.log(data, 'data1111');

  const {token} = data;

  return axios
    .get(API_URL + `material/all-materials`, {
      headers: {Authorization: `${token}`},
    })
    .then(response => {
      return response.data;
    });
};

const postMaterialService = data => {
  const {value, token} = data;
  console.log(value, token, ' vaaaaaa');
  return axios
    .post(API_URL + 'material', value, {headers: {Authorization: `${token}`}})
    .then(response => {
      console.log(response, 'response');

      return response.data;
    });
};

const deleteMaterialService = data => {
  const {_id, token} = data;
  // console.log(_id, token,data, ' vaaaaaa')
  // console.log(API_URL + `material/${_id}`);
  return axios
    .delete(API_URL + `material/${_id}`, {headers: {Authorization: `${token}`}})
    .then(response => {
      // console.log(response, 'response')

      return response.data;
    });
};

const updateMaterialService = data => {
  const {_id, updatedData, token} = data;
  // console.log(_id,updatedData, token, ' updatedJobService')
  // console.log(API_URL + `material/${_id}`);

  return axios
    .put(API_URL + `material/${_id}`, updatedData, {
      headers: {Authorization: `${token}`},
    })
    .then(response => {
      // console.log(response, 'response')

      return response.data;
    });
};

const materialService = {
  getMaterialService,
  postMaterialService,
  deleteMaterialService,
  updateMaterialService,
};

export default materialService;
