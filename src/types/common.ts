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
