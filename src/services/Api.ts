import axios from "axios";

const api =  axios.create({
    baseURL: 'https://api-blueworking.herokuapp.com/'
})

export default api