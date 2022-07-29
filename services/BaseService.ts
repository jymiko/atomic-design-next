import axios from 'axios';
// let apiVersion = "2.19";
// const mode = process.env.REACT_APP_NODE_ENV
const mode = 'staging'
// const baseURL = process.env.REACT_APP_BASE_URL
const baseURL = 'https://staging-scoopcore.gramedia.com/'
const localUrl = 'http://localhost:5001'


export const api = (version?: string) => axios.create({

    baseURL: checkEnv() ? baseURL : localUrl,

    // withCredentials: false,

    headers: {
        'api-key': 'eyJpZCI6IjciLCJuYW1lIjoic2Nvb3Bfd2ViX2FwcHMifQ',
        'Content-Type': 'application/json',

        // 'Accept': `application/vnd.gramedia.v3+json,  */*; ${(!!version) ? "version=" + version : ""}`,

        // 'Accept-Language': localStorage.getItem("LANGUAGE") || "id",

    }

})


// Function check mode environment

const checkEnv = (): boolean => {

    if (mode === 'staging' || mode ==='production') {
        return true
    } else {
        return false

    }

}
