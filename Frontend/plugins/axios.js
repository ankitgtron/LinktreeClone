import axios from "axios"

export default defineNuxtPlugin((NuxtApp) => {
    // axios.defaults.baseURL = 'http://localhost:8000'
    axios.defaults.baseURL = 'https://8000-rishikeshj2-linktreeclo-6xg0bmv87es.ws-us116.gitpod.io/'
    axios.defaults.withCredentials = false;

    return {
        provide: { 
            axios: axios
        },
    }
})