import http from "./http"
import { API, APIPaging, IUser } from "@/types/common"

export const api = {
    async register(payload: any) {
        return await http.post('/oauth/register/', payload) as API<any>
    },
    async login(payload: any) {
        return await http.post('/oauth/login/', payload) as API<any>
    },
    async info(payload?: any) {
        return await http.get('/oauth/info/', { params: payload }) as API<IUser>
    },
    async findList(params?: any) {
        return await http.get('/system/users/', { params }) as API<APIPaging<IUser>>
    }
}