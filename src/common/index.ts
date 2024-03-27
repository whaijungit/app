import { notification } from 'antd'
import type { ArgsProps } from 'antd/es/notification'

export { SYSTEM_MENUS, TASK_MENUS, mapPremissionToMenuItems } from './menu'

export { code, dimension, deliver, search, personality, plus, track, logo } from './svg'

export const getRandom = (max: number = 2000, min: number = 1000) => {
    return Math.floor(Math.random() * (max - min) + min)
}

export const awit = (duration: number = getRandom()) => {
    return new Promise<boolean>(resolve => {
        setTimeout(() => {
            resolve(true)
        }, duration);
    })
}

export const getToken = () => {
    return localStorage.getItem('token')
}


export const setToken = (jwt: string) => {
    localStorage.setItem('token', jwt)
}

export const showMsg = (args: ArgsProps, type: 'success' | 'info' | 'warning' | 'error' = 'success', duration: number = 2) => {
    notification[type]({ ...args, duration })
}
/**
 * @param moveIndex 移动元素下标
 * @param targetIndex 目标元素下标
 * @description 改变数组元素位置顺序
*/
export const swapArray = <T = any>(arr: T[], moveIndex: number, targetIndex: number) => {
    let temp = arr[moveIndex]
    arr[moveIndex] = arr[targetIndex]
    arr[targetIndex] = temp
    return [...arr]
}