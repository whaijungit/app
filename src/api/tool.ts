import http from './http'
import { ITool } from '@/types'
import { API, APIPaging } from '@/types/common'

const path = '/system/system/tool/'

export const systemApi = {
    async findById(id: number) {
        return await http.get(path + id + '/') as API<ITool | null>
    },
    async findList(params?: Record<string, any>) {
        return await http.get(path, { params }) as API<APIPaging<ITool>>
    },

    async add(payload: any) {
        return await http.post(path, payload) as API<ITool | null>
    }
}



