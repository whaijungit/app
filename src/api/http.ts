import axios, { AxiosError } from 'axios';
import { getToken } from '@/common';
import { notification } from 'antd';

const http = axios.create({
    headers: {
        Authorization: `Bearer ${getToken()}`
    },
    baseURL: '/api',
})

http.interceptors.request.use(
    config => {
        const token = getToken()
        if (token) {
            config.headers.set('Authorization', `Bearer ${token}`)
        }
        return config
    }
    , failed => {
        if (failed instanceof AxiosError) {
            notification.error({ message: failed.response?.data.msg, duration: 3 })
            return Promise.reject(failed.response?.data)
        }

        return Promise.reject(failed)
    }
)

http.interceptors.response.use(
    resp => {
        return resp.data
    }
    , failed => {
        if (failed instanceof AxiosError) {
            notification.error({ message: failed.response?.data.msg, duration: 3 })
            return Promise.reject(failed.response?.data)
        }

        return Promise.reject(failed)
    }
)

export default http;
