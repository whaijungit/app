import http from './http'
import { IEnv } from '@/types/env'
import { API, APIPaging } from '@/types/common'

const path = '/system/global_config/'

export const findEnvList = async (params?: Record<string | symbol, any>): Promise<API<APIPaging<IEnv>>> => {
    return await http.get(path, { params })
}

export const updateEnv = async (id: number, payload: Record<string | symbol, any>): Promise<API<IEnv>> => {
    return await http.put(`${path}${id}/`, payload)
}

export const addEnv = async (payload: Record<string | symbol, any>): Promise<API<IEnv>> => {
    return await http.post(`${path}`, payload)
}

export const removeEnv = async (id: number): Promise<API<boolean>> => {
    return await http.delete(`${path}${id}/`)
}

export const findByIdEnv = async (id: number): Promise<API<IEnv>> => {
    return await http.get(`${path}${id}/`)
}