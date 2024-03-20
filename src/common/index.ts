export { SYSTEM_MENUS, TASK_MENUS, mapPremissionToMenuItems } from './menu'

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
    localStorage.getItem('token')
}
