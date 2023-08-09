import { combineReducers } from "redux";
import {minAddReducer} from "./reducers"

const rootReducer = combineReducers({
  minAdd: minAddReducer
});

export default rootReducer;