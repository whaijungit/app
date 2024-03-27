export const searchParam = (searchParams: URLSearchParams, key: string, initState = 10) => {
    const hasKey = searchParams.has(key)
    if (hasKey) {
        return Number(searchParams.get(key) || initState.toString())
    }
    return initState
}