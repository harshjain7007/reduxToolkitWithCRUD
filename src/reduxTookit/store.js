import { configureStore } from "@reduxjs/toolkit";
import { firstReducer } from "./reducer";
import { secondReducer } from "./reducer";
import { thirdReducer } from "./reducer";

const store = configureStore({
    reducer:{
        first: firstReducer,
        second: secondReducer,
        third: thirdReducer
    }
})

export default store