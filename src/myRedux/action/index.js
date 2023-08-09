export const min = (num) => {
    return {
        type: "MIN",
        payload: num
    }
}

export const max = (num) => {
    return {
        type: "MAX",
        payload: num
    }
}