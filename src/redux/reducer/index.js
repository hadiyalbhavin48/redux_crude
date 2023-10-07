import { reducers } from "./reducer"
import { combineReducers } from "redux"
const allreducers = combineReducers({
    allUser: reducers
})

export default allreducers