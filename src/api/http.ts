import axios from 'axios';
import { getToken } from '@/common';

const http = axios.create({
    headers: {
        Authorization: `${getToken()}`
    },
    baseURL: '/api',
})

export default http;
