export const swapArray = <T = any>(arr: T[], moveIndex: number, targetIndex: number) => {
    let temp = arr[moveIndex]
    arr[moveIndex] = arr[targetIndex]
    arr[targetIndex] = temp
    return [...arr]
}