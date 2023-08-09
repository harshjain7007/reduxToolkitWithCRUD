import { createReducer } from "@reduxjs/toolkit";


export const firstReducer = createReducer({
    count: 0
}, {
    increment: (state, action) => {
        state.count += action.payload
    },
    decrement: (state, action) => {
        state.count -= action.payload
    }
})

export const secondReducer = createReducer({ val: 1 }, {
    multiply: (state, action) => {
        state.val *= action.payload
    },
    divide: (state, action) => {
        state.val /= action.payload
    }
})


export const thirdReducer = createReducer({ products: [] }, {
    insertData: (state, action) => {
        state.products = action.payload.map((curElem) => {
            return { ...curElem, inpEle: true }
        })
    },
    delete: (state, action) => {
        state.products = state?.products.filter((curElem, index) => index !== action.payload)
    },
    edit: (state, action) => {
        state.products = state.products.map((curElem, index) => {
            return index === action.payload ? { ...curElem, inpEle: false } : curElem
        })
    },
    blur: (state, action) => {
        state.products = state.products.map((curElem, index) => {
            return index === action.payload ? { ...curElem, inpEle: true } : curElem
        })
    },
    chng: (state, action) => {
        state.products[action.payload.index].title = action.payload.updatedTitle
    },
    create: (state, action) => {
        state.products.push({title: action.payload, inpEle: true})
    },
})



