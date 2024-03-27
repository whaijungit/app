export interface API<T = any> {
    data: T
    msg: string
    code: number
}

export interface APIPaging<T> {
    results: T[]
    count: number
    next: string | null
    previous: string | null
}


export interface IUser {
    id: number
    auths: Auth
    email: string
    mobile: string
    avatar: string
    company: string
    username: string
    realname: string
    research: string
    profession: string
    is_active: boolean
    user_storage_info: string
    is_superuser: "True" | "False"
}

export interface Auth {
    menus: any[]
    actions: string[]
}

export interface IUserState {
    isLogin: boolean
    user: null | IUser
}

export interface IPermission {
    id: number
    name: string
    sign: string
    method: string
    menu: boolean
    pid: number | null
    component: string
    children?: IPermission[]
}

export interface IPermissionState {
    menus: IPermission[]
    actions: string[]
}

export interface IRootState {
    user: IUserState
    permission: IPermissionState
}