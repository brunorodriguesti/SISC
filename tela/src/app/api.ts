import axios from "axios";
import { environment } from '../environments/environment';

export function api() {

    const api = axios.create({
        baseURL: environment.API_URL,
    })

    return api
}