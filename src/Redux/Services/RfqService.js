import axios from 'axios'

import { otherUrl } from '../Constant/Constants';

const API_URL = `${otherUrl}/`



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




const RfqService = {
    postRfQJobService

};

export default RfqService;