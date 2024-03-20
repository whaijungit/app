import http from './http'
import { ITool } from '@/types'
import { API, APIPaging } from '@/types/common'

const path = '/system/tool/'

export const findByToolId = async (id: number): Promise<API<ITool>> => await http.get(`${path}${id}/`)
export const removeTool = async (id: number): Promise<API<boolean>> => await http.delete(`${path}${id}/`)
export const addTool = async (payload: ITool): Promise<API<boolean>> => await http.post(`${path}`, payload)
export const findToolList = async (params?: Record<string, any>): Promise<API<APIPaging<ITool>>> => await http.get(path, { params })
export const updateTool = async (id: number, payload: ITool): Promise<API<boolean>> => await http.put(`${path}${id}/`, payload)
