import axios from "axios";

export function api() {

    const api = axios.create({
        // baseURL: '/api',
        baseURL: 'https://api-temporaria.onrender.com',
    })

    return api
}