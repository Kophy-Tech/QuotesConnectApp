import axios from 'axios'

import { otherUrl } from '../Constant/Constants';

const API_URL = `${otherUrl}/`



const getRfQJobService = (token) => {
    // console.log(token, 'token')
    return axios.get(API_URL + "rfq", { headers: { "Authorization": `${token}` } }).then((response) => {
        return response.data;
    });
};



const postRfQJobService = (data) => {
    const { value, token } = data
    // console.log(value, token, ' vaaaaaa')
    return axios
        .post(API_URL + "rfq", value, { headers: { "Authorization": `${token}` } })
        .then((response) => {
            console.log(response, 'response')


            return response.data;
        });
};


const postRfQMaterialService = (data) => {
    const { rfqArray, token, rfq_id } = data
    const obj ={
        'rfqArray': rfqArray
    }
    return axios
        .post(API_URL + `rfq/${rfq_id}/material`, obj, { headers: { "Authorization": `${token}` } })
        .then((response) => {
            console.log(response, 'response')


            return response.data;
        });
};


const postRfQVendorService = (data) => {
    const { dataVendor, token, rfq_id } = data
    const obj = {
        'vendorArray': dataVendor
    }
    return axios
        .post(API_URL + `rfq/${rfq_id}/vendor`, obj, { headers: { "Authorization": `${token}` } })
        .then((response) => {
            console.log(response, 'response')


            return response.data;
        });
};


const RfqService = {
    postRfQJobService,
    getRfQJobService,
    postRfQMaterialService,
    postRfQVendorService

};

export default RfqService;