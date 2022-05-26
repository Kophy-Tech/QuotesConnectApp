import axios from 'axios'

import { otherUrl } from '../Constant/Constants';

const API_URL = `${otherUrl}/`

const getJobService = (token) => {
    // console.log(token, 'token')
    return axios.get(API_URL + "job", { headers: { "Authorization": `${token}` } }).then((response) => {
        return response.data;
    });
};




const postJobService = (data) => {
    const { value, token } = data
    // console.log(value, token, ' vaaaaaa')
    return axios
        .post(API_URL + "job", value, { headers: { "Authorization": `${token}` } })
        .then((response) => {
            console.log(response, 'response')


            return response.data;
        });
};



const deleteJobService = (data) => {
    const { _id, token } = data
    console.log(_id, token, ' vaaaaaa')
    return axios
        .delete(API_URL + `material/${_id}`, value, { headers: { "Authorization": `${token}` } })
        .then((response) => {
            console.log(response, 'response')


            return response.data;
        });
};


const updateJobService = (data) => {
    const { id, value, token } = data
    // console.log(value, token, ' vaaaaaa')
    return axios
        .update(API_URL + `material${id}`, value, { headers: { "Authorization": `${token}` } })
        .then((response) => {
            console.log(response, 'response')


            return response.data;
        });
};


const JobService = {
    getJobService,
    postJobService,
    deleteJobService,
updateJobService

};

export default JobService;