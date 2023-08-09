const intialState = 1

export const minAddReducer = (state = intialState, action) => {
    switch (action.type) {
        case 'MAX':
            return state + action.payload
        case 'MIN':
            return state - action.payload
        default:
            return state
    }
}