import axios from 'axios'

import { otherUrl } from '../Constant/Constants';

const API_URL = `${otherUrl}/`

const getMaterialService = (token) => {
    // console.log(token, 'token')
    return axios.get(API_URL + "material/all-materials",  { headers: { "Authorization": `${token}` } }).then((response)=>{
        return response.data;
    });
};




const postMaterialService = (data) => {
    const { value, token } = data
    console.log(value, token, ' vaaaaaa' )
    return axios
        .post(API_URL + "material", value, { headers: { "Authorization": `${token}` } })
        .then((response) => {
            console.log(response, 'response')
         

            return response.data;
        });
};





const materialService = {
    getMaterialService,
    postMaterialService,
    

};

export default materialService;