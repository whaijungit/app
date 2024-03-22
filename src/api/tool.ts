import http from './http'
import { ITool } from '@/types'
import { API, APIPaging } from '@/types/common'

const path = '/system/tool/'

export class ApiSys {
    public static findByToolId = async (id: number): Promise<API<ITool>> => await http.get(`${path}${id}/`)
    public static removeTool = async (id: number): Promise<API<boolean>> => await http.delete(`${path}${id}/`)
    public static addTool = async (payload: ITool): Promise<API<boolean>> => await http.post(`${path}`, payload)
    public static findToolList = async (params?: Record<string, any>): Promise<API<APIPaging<ITool>>> => await http.get(path, { params })
    public static updateTool = async (id: number, payload: ITool): Promise<API<boolean>> => await http.put(`${path}${id}/`, payload)
}


